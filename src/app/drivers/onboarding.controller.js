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
