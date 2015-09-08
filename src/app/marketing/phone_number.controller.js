'use strict';

angular.module('idlecars')
.controller('marketingUser.phoneNumber.controller', function ($scope, $rootScope, $state, Restangular, NavbarService, AppNotificationService) {
  $scope.fields = [{
    label: 'Your phone number',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
    showLogin: true,
    formatTel: true,
  }];

  $rootScope.navGoNext = function() {
    var phoneNumber = Restangular.one('phone_numbers', $scope.user.phone_number);
    phoneNumber.get()
    .then(function() {
      $scope.repeatUser.isRepeatUser = true;
      $state.go('^.password').then(function() {
        AppNotificationService.push("Great, you already have an account. Enter your password.");
      });
    })
    .catch(function() {
      $scope.repeatUser.isRepeatUser = false;
      $state.go('^.password');
    });
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  NavbarService.validateInit($scope);
});
