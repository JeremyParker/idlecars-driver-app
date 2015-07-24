'use strict';

angular.module('idlecars')
.controller('driver.update.controller', function ($scope, $timeout, $rootScope, $state, MyDriverService, NavbarService) {
  $scope.showSkipLink = false;
  $scope.afterUploadSref = 'driverAccount';

  MyDriverService.get().then(function (me) {
    $scope.user = angular.copy(me);
  })

  $scope.$on('completion', function (event, completion) {
    $scope.completion = completion;
  })

  $rootScope.navSave = function() {
    MyDriverService.patch($scope.$$childHead.user).then(function () {
      $state.go('driverAccount');
    })
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid; })
  }

  NavbarService.validateInit($scope, true);
})

.controller('driver.update.driverlicense.controller', function ($scope) {
  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Driver License';
})

.controller('driver.update.fhvlicense.controller', function ($scope) {
  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your Hack License';
})

.controller('driver.update.defensivedriving.controller', function ($scope) {
  $scope.fieldName = 'defensive_cert_image';
  $scope.uploadTitle = 'your Defensive Driving certificate';
})

.controller('driver.update.proofaddress.controller', function ($scope) {
  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'a bill with your address on it';
})
