'use strict';

angular.module('idlecars')
.factory('ListingService', function($resource, config) {
  return $resource(config.api_base_url + 'listings/:carId/');
})
