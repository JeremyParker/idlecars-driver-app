'use strict';

angular.module('idlecars')
.controller('driver.onboarding.controller', function ($scope, MyDriverService) {
  $scope.showSkipLink = true;
  $scope.showProgressBar = true;
  MyDriverService.get().then(function (driver) {
    $scope.driver = driver;
  })
  $scope.$on('completion', function (event, completion) {
    $scope.completion = completion;
  })
})

.controller('driver.onboarding.driverlicense.controller', function ($scope) {
  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Drivers License';
  $scope.afterUploadSref = '^.uploadFhvLicense';
})

.controller('driver.onboarding.fhvlicense.controller', function ($scope) {
  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your Hack License';
  $scope.afterUploadSref = '^.uploadAddressProof';
})

.controller('driver.onboarding.proofaddress.controller', function ($scope, $state, DocRouterService, BookingService, MyDriverService) {
  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'your Motor Vehicle Record';

  $scope.skipOptionalDoc = function () {
    DocRouterService.requiredDocState().then(function (state) {
      if (state) {
        $state.go('bookingDetail');
      }
      else if (BookingService.bookings.length) {
        $state.go('driverAccount.bookings')
      }
      else {
        $state.go('driverAccount.onboarding.success');
      }
    })
  }

  $scope.noMVR = function () {
    MyDriverService.patch({'no_mvr': true}).then(function (driver) {
      $scope.skipOptionalDoc();
    })
  }
})

.controller('driver.onboarding.referral.controller', function ($scope, $rootScope, $state, MyDriverService, RequireAuthService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'Enter your referral code (optional)',
    name: 'invitor_code',
    type: 'text',
    maxlength: '254',
    autoFocus: true,
    required: false,
  }];

  $rootScope.navGoNext = function() {
    MyDriverService.patch($scope.user).then(function () {
      RequireAuthService.resolve('driverAccount.onboarding.success')
    })
  }

  $rootScope.navNextEnabled = true;
})

.controller('driver.onboarding.ssn.controller', function ($scope, $rootScope, $timeout, NavbarService, MyDriverService, RequireAuthService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'Please enter the your social security number',
    placeholder: 'ssn',
    name: 'ssn',
    type: 'text',
    maxlength: '9',
    pattern: '^\\d{9}$',
    autoFocus: true,
  }];

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.fieldForm.$valid; })
  }

  $rootScope.navGoNext = function() {
    MyDriverService.patch($scope.user).then(function () {
      RequireAuthService.resolve('driverAccount.onboarding.success')
    })
  }

  NavbarService.validateInit($scope);
})

