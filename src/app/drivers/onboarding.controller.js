'use strict';

angular.module('idlecars')
.controller('driver.onboarding.controller', function ($scope) {
  $scope.showSkipLink = true;
  $scope.showProgressBar = true;

  $scope.$on('completion', function (event, completion) {
    $scope.completion = completion;
  })
})

.controller('driver.onboarding.driverlicense.controller', function ($scope) {
  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Drivers License';
})

.controller('driver.onboarding.fhvlicense.controller', function ($scope) {
  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your TLC License';
})

.controller('driver.onboarding.defensivedriving.controller', function ($scope) {
  $scope.fieldName = 'defensive_cert_image';
  $scope.uploadTitle = 'your Defensive Driving certificate';
})

.controller('driver.onboarding.proofaddress.controller', function ($scope) {
  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'a bill with your address on it';
})

.controller('driver.onboarding.email.controller', function ($scope, $rootScope, $timeout, $state, MyDriverService) {
  if (!$scope.user) { $scope.user = {} }

  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    MyDriverService.patch($scope.user).then(function () {
      $state.go('^.referral');
    })
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.fieldForm.$valid })
  }
})

.controller('driver.onboarding.referral.controller', function ($scope, $rootScope, $timeout, MyDriverService, RequireAuthService) {
  if (!$scope.user) { $scope.user = {} }

  $scope.fields = [{
    label: 'Enter your referral code (optional)',
    name: 'invitor_code',
    type: 'text',
    maxlength: '254',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    MyDriverService.patch($scope.user).then(RequireAuthService.resolve)
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.fieldForm.$valid })
  }
})
