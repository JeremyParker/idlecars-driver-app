'use strict';

angular.module('idlecars')
.factory('CarService', function($resource, config) {
  return $resource(config.api_base_url + 'cars/:carId/');
})
