'use strict';

angular.module('idlecars')
.controller('cars.list.controller', function ($scope, CarService) {
  CarService.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });

  $scope.togglePriceFilter = function(min, max) {
    if (_shouldTurnFilterOff(min, max)) {
      $scope.min = 0; $scope.max = 9999;
    } else {
      $scope.min = min; $scope.max = max;
    }
  }

  var _shouldTurnFilterOff = function(min, max) {
    return $scope.min == min && $scope.max == max;
  }
})
