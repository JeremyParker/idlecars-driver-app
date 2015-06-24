'use strict';

angular.module('idlecars')
.factory('DriverService', function($resource, config) {
  return $resource(config.api_base_url + 'drivers/:id/');
});
