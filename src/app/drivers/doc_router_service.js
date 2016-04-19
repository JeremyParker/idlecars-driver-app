'use strict';

angular.module('idlecars')

.factory('DocRouterService', function ($state, MyDriverService) {
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
    email: 'user.onboarding.email',
    driver_license_image: 'driverAccount.onboarding.uploadDriverLicense',
    fhv_license_image: 'driverAccount.onboarding.uploadFhvLicense',
    defensive_cert_image: 'driverAccount.onboarding.uploadDefensiveCert',
    // address_proof_image: 'driverAccount.onboarding.uploadAddressProof', <-- optional
  }

  service.requiredDocState = function() {
    return MyDriverService.get().then(function(me) {
      return _nextMissingDoc(me);
    });
  }

  return service;
})

.run(function (AuthService, DocRouterService, AppNotificationService) {
  if (AuthService.isLoggedIn()) {
    DocRouterService.requiredDocState().then(function (state) {
      if (state) {
        AppNotificationService.push({warning: 'Remember to upload your missing documents. Go to "My Account" from the menu.'})
      }
    })
  }
});
