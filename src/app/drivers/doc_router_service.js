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
    email: 'driverAccount.onboarding.email',
    driver_license_image: 'driverAccount.onboarding.uploadDriverLicense',
    fhv_license_image: 'driverAccount.onboarding.uploadFhvLicense',
    defensive_cert_image: 'driverAccount.onboarding.uploadDefensiveCert',
    address_proof_image: 'driverAccount.onboarding.uploadAddressProof',
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

.run(function($location, AuthService, DocRouterService) {
  var isResetUrl = $location.url().substring(1,15) === 'reset_password';

  if (AuthService.isLoggedIn() && !isResetUrl) {
    DocRouterService.goRequiredDoc();
  }
});
