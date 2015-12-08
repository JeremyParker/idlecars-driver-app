'use strict';

angular.module('idlecars')
.controller('auth.forgotPassword.controller', function ($scope, $rootScope, $state, $stateParams, Restangular, AppNotificationService, NavbarService) {

  $scope.user = {};
  $scope.fields = [{
    label: 'Please enter your phone number and we will send you instructions for resetting your password.',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'text',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
    formatInput: 'tel',
  }];

  if ($stateParams.phone_number) {
    $scope.user = { phone_number: $stateParams.phone_number };
  }
  NavbarService.validateInit($scope);

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  $rootScope.navGoNext = function() {
    var postParams = { phone_number: $scope.user.phone_number };
    var passwordReset = Restangular.all('password').all('reset_setups');
    passwordReset.post(postParams)
    .then(function() {
      // TODO(JP) - hook up SMS service and $state.go to the SMS screen that @craigstar made.
      return $state.go('login', {username: $scope.user.phone_number});
    })
    .then(function() {
      AppNotificationService.push({success: 'A text message has been sent. If you disabled SMS texting, check your email.'});
    });
  };
});
