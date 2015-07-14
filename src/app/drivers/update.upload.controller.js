'use strict';

angular.module('idlecars')
.controller('update.upload.controller', function ($scope) {

})

.controller('update.driverlicense.controller', function ($scope) {

  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Driver License';
  $scope.skipShow = false;
})

.controller('update.fhvlicense.controller', function ($scope) {

  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your Hack License';
  $scope.skipShow = false;
})

.controller('update.defensivedriving.controller', function ($scope) {

  $scope.fieldName = 'defensive_cert_image';
  $scope.uploadTitle = 'your Defensive Driving certificate';
  $scope.skipShow = false;
})

.controller('update.proofaddress.controller', function ($scope) {

  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'a bill with your address on it';
  $scope.skipShow = false;
})
