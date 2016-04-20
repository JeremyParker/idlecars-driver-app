'use strict';

angular.module('idlecars')
.controller('driver.update.controller', function ($scope) {
  $scope.showSkipLink = false;
  $scope.showProgressBar = false;
  $scope.afterUploadSref = 'driverAccount';
})

.controller('driver.update.ssn.controller', function ($scope) {
  $scope.fieldName = 'defensive_cert_image';
  $scope.uploadTitle = 'your Social Security Card';
})

.controller('driver.update.driverlicense.controller', function ($scope) {
  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Drivers License';
})

.controller('driver.update.fhvlicense.controller', function ($scope) {
  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your Hack License';
})

.controller('driver.update.proofaddress.controller', function ($scope) {
  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'your Motor Vehicle Record (optional)';
})

.controller('driver.update.ssn.controller', function ($scope, $rootScope, $state, $stateParams, $timeout, NavbarService, MyDriverService) {
  $scope.user = $stateParams.user || {};

  if (!$stateParams.user) {
    MyDriverService.get().then(function (driver) {
      $scope.user = angular.copy(driver);
      $scope.validateForm();
    })
  };

  $scope.fields = [{
    label: 'Please enter the your social security number',
    placeholder: 'ssn',
    name: 'ssn',
    type: 'text',
    maxlength: '9',
    pattern: '^\\d{9}$',
    autoFocus: true,
  }];

  $rootScope.navSave = function() {
    MyDriverService.patch($scope.user).then(function () {
      $state.go('driverAccount')
    })
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.fieldForm.$valid; })
  }

  NavbarService.validateInit($scope);
})
