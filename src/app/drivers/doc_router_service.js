'use strict';

angular.module('idlecars')

.factory('DocRouterService', function($state, MyDriverService) {
  var service = {};

  var _nextMissingDoc = function(me) {
    for (var key in docOrder) {
      if (!me[key]) {
        return docOrder[key];
      }
    }
    return null;
  }

  var docOrder = {
    email: 'cars.detail.booking.email',
    driver_license_image: 'driverAccount.uploadDriverLicense',
    fhv_license_image: 'driverAccount.uploadFhvLicense',
    address_proof_image: 'driverAccount.uploadAddressProof',
    defensive_cert_image: 'driverAccount.uploadDefensiveCert',
  }

  service.requiredDocState = function() {
    return MyDriverService.get().then(function(me) {
      return _nextMissingDoc(me);
    });
  }

  service.goRequiredDoc = function() {
    service.requiredDocState().then(function(nextState) {
      if (nextState) {
        $state.go(nextState);
      }
    });
  }

  return service;
})

.run(function($state, AuthService, DocRouterService) {
  if (AuthService.isLoggedIn()) {
    DocRouterService.goRequiredDoc();
  }
});
