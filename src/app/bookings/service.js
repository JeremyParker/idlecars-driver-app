'use strict'

angular.module('idlecars')
.factory('BookingService', function ($resource, config) {
  return $resource(config.api_base_url + 'bookings/');
});
