'use strict';

angular.module('idlecars')
.controller('auth.resetPassword.controller', function ($scope, $rootScope, $state, $stateParams, Restangular, AuthService, AppNotificationService, AppAuthService) {
  var minPassword = 2;

  $scope.fields =  [{
    label: 'New password',
    placeholder: 'New password',
    name: 'password',
    type: 'password',
    minlength: minPassword,
    autoFocus: true,
  },
  {
    label: 'Confirm password',
    placeholder: 'Confirm password',
    name: 're_password',
    type: 'password',
    minlength: minPassword,
  }];

  $scope.user = {}

  $rootScope.navSave = function() {
    _resetPassword();
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid && _passwordsMatch();
  }

  var _passwordsMatch = function() {
    return $scope.user.password === $scope.user.re_password;
  }

  var _resetPassword = function() {
    Restangular.one('password', 'resets').patch(_resetParams())
    .then(function(data) {
      AuthService.saveToken(data.token);
      for (var i = 0; i < data._app_notifications.length; i++) {
        AppNotificationService.push(data._app_notifications[i]);
      }
      AppAuthService.passwordReset();
    }).catch(function(data) {
      $state.go('login');
    })
  }
  var _resetParams = function() {
    return {
      token: $stateParams.resetToken,
      password: $scope.user.password,
    }
  }
});
