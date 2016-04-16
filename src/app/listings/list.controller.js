'use strict';

angular.module('idlecars')
.controller('listings.controller', function ($scope, $timeout, ListingService, ListingFilterService) {
  $timeout(function() {
    $scope.orFilters = ListingFilterService.orFilters || {};
    $scope.andFilters = ListingFilterService.andFilters || {};
  });

  ListingService.query().$promise.then(function(listings) {
    ListingFilterService.allCars = listings;
    $scope.listings = ListingFilterService.filterCars();
  });

  $scope.addOrFilter = function(feature, setting, $event) {
    if ($event) { $event.stopPropagation(); }
    ListingFilterService.orFilter(feature, setting);
  }

  $scope.addAndFilter = function(feature, setting, $event) {
    if ($event) { $event.stopPropagation(); }
    ListingFilterService.andFilter(feature, setting);
  }

  $scope.filter = function () {
    $scope.listings = ListingFilterService.filterCars();
  }
})
