'use strict';

angular.module('idlecars')
.factory('MyDriverService', function(Restangular) {
  // TODO: is there a built in way for caching?

  var service = {};

  var requiredItems = [
    'driver_license_image',
    'fhv_license_image',
    'defensive_cert_image',
    'address_proof_image'
  ]

  service.get = function() {
    if (service.driver) { return service.driver; }

    service.driver = Restangular.one('drivers', 'me').get();
    return service.driver;
  }

  // TODO: math should be done in server
  service.getCompletion = function(me) {
    var completion = 0;
    for (var i in requiredItems) {
      if (me[requiredItems[i]] != '') {
        completion += 100/requiredItems.length
      };
    }
    return completion;
  }

  service.patch = function(patchData) {
    var promise = service.get().then(function(me) {
      return me.patch(patchData);
    });

    promise.then(function() {
      service.driver = promise;
    });

    return promise;
  }

  service.addPaymentMethod = function (nonce) {
    // TODO: need to confirm endpoint when backend's setup
    Restangular.one('drivers', 'payment_method').post(nonce)
  }

  return service;
});
