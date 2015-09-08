'use strict';

angular.module('idlecars')
.controller('marketingUser.password.controller', function ($scope, $rootScope, $state, DriverService, AuthService, NavbarService) {
  var minPassword = 2;

  var fieldLabel = 'Create your password';
  if ($scope.repeatUser.isRepeatUser) { fieldLabel = 'Enter your password' }

  $scope.fields =  [{
    label: fieldLabel,
    placeholder: 'password',
    name: 'password',
    type: 'password',
    minlength: minPassword,
    autoFocus: true,
  },
  {
    label: 'Confirm password',
    placeholder: 'password',
    name: 're_password',
    type: 'password',
    minlength: minPassword,
  }];

  $rootScope.navGoNext = function() {
    if ($scope.repeatUser.isRepeatUser) { return _login() }
    return _saveUser();
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid && _passwordsMatch();
  }

  NavbarService.validateInit($scope);

  var _passwordsMatch = function() {
    return $scope.user.password === $scope.user.re_password;
  }

  var _login = function() {
    AuthService.login(_loginParams())
    .then(_goSuccess)
    .catch(function (error) {
      $scope.user.password = '';
      $scope.user.re_password = ''
    });
  }

  var _saveUser = function() {
    var newDriver = new DriverService($scope.user);

    newDriver.$save().then(function() {
      return AuthService.login(_loginParams());
    }).then(_goSuccess);
  }

  var _goSuccess = function () { $state.go('marketingSuccess') }

  var _loginParams = function() {
    return {
      username: $scope.user.phone_number,
      password: $scope.user.password,
    }
  }
});
