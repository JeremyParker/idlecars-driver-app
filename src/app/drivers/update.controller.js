'use strict';

angular.module('idlecars')
.controller('driver.update.controller', function ($scope) {
  $scope.showSkipLink = false;
  $scope.showProgressBar = false;
  $scope.afterUploadSref = 'driverAccount';
})

.controller('driver.update.driverlicense.controller', function ($scope) {
  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Drivers License';
})

.controller('driver.update.fhvlicense.controller', function ($scope) {
  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your TLC License';
})

.controller('driver.update.defensivedriving.controller', function ($scope) {
  $scope.fieldName = 'defensive_cert_image';
  $scope.uploadTitle = 'your Defensive Driving certificate';
})

.controller('driver.update.proofaddress.controller', function ($scope) {
  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'a bill with your address on it';
})
