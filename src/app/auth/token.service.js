'use strict';

angular.module('idlecars')
.factory('TokenService', function($resource, config) {
  return $resource(config.api_base_url + 'token-auth/');
});
