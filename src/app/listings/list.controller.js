'use strict';

angular.module('idlecars')
.controller('listings.controller', function ($scope, $timeout, CarService, CarFilterService) {
  $timeout(function() {
    $scope.orFilters = CarFilterService.orFilters || {};
    $scope.andFilters = CarFilterService.andFilters || {};
  });

  CarService.query().$promise.then(function(listings) {
    CarFilterService.allCars = listings;
    $scope.listings = CarFilterService.filterCars();
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
    $scope.listings = CarFilterService.filterCars();
  }
})
