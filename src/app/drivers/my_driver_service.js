'use strict';

angular.module('idlecars')
.factory('MyDriverService', function(Restangular) {
  // TODO: is there a built in way for caching?

  var service = {};

  service.get = function() {
    if (service.driver) { return service.driver; }

    service.driver = Restangular.one('drivers', 'me').get();
    return service.driver;
  }

  service.patch = function(patchData) {
    return service.get().then(function(me) {
      service.driver = me.patch(patchData);
      return service.driver;
    });
  }

  return service;
});
