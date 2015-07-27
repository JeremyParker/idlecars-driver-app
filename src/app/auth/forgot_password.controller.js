'use strict';

angular.module('idlecars')
.controller('auth.forgotPassword.controller', function ($scope, $rootScope, $state, $stateParams, Restangular, AppNotificationService) {

  $scope.user = {};
  $scope.fields = [{
    label: 'Please enter your phone number and we will send you an email about how to reset your password.',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'text',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  if ($stateParams.phone_number) {
    $scope.user = { phone_number: $stateParams.phone_number };
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  $rootScope.navGoNext = function() {
    var postParams = { phone_number: $scope.user.phone_number };
    var passwordReset = Restangular.all('password/reset_setups');
    passwordReset.post(postParams)
    .then(function() {
      // TODO(JP) - hook up SMS service and $state.go to the SMS screen that @craigstar made.
      $state.go('login', {username: $scope.user.phone_number})
    })
    .then(function() {
      AppNotificationService.push('A password recovery email has been sent. Please check your email.');
    });
  };
});
