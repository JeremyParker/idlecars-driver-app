'use strict';

angular.module('idlecars')
.controller('newUser.phoneNumber.controller', function ($scope, $rootScope, $location, $state, $timeout, Restangular, NavbarService, AppNotificationService) {
  $scope.fields = [{
    label: 'Enter your phone number',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
    showLogin: true,
    formatInput: 'tel',
  }];

  if ($location.url().indexOf('utm_content=50') > -1) {
    heap.track('referral', {credit: '50'});
  }
  if ($location.url().indexOf('utm_content=75') > -1) {
    heap.track('referral', {credit: '75'});
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.fieldForm.$valid });
  }

  $rootScope.navGoNext = function() {
    var phoneNumber = Restangular.one('phone_numbers', $scope.user.phone_number);
    phoneNumber.get()
    .then(function() {
      $state.go('login', {username: $scope.user.phone_number}).then(function() {
        AppNotificationService.push({success: "Great, you already have an account. Enter your password."});
      });
    })
    .catch(function() {
      // Phone not found found, continue creating account
      $state.go('^.password');
    });
  }

  NavbarService.validateInit($scope);
});
