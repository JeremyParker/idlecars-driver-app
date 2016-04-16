'use strict';

angular.module('idlecars')
.controller('listings.controller', function ($scope, ListingService) {
  ListingService.query().$promise.then(function(listings) {
    $scope.listings = listings;
  });
})
