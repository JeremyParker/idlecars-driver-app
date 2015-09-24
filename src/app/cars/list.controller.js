'use strict';

angular.module('idlecars')
.controller('cars.list.controller', function ($scope, $timeout, CarService, CarFilterService) {
  $timeout(function() {
    $scope.orFilters = CarFilterService.orFilters || {};
    $scope.andFilters = CarFilterService.andFilters || {};
  });

  CarService.query().$promise.then(function(cars) {
    CarFilterService.allCars = cars;
    $scope.cars = CarFilterService.filterCars();
  });

  $scope.addOrFilter = function(feature, setting, $event) {
    if ($event) { $event.stopPropagation(); }
    CarFilterService.orFilter(feature, setting);
  }

  $scope.addAndFilter = function(feature, setting, $event) {
    if ($event) { $event.stopPropagation(); }
    CarFilterService.andFilter(feature, setting);
  }

  $scope.filter = function () {
    $scope.cars = CarFilterService.filterCars();
  }
})
