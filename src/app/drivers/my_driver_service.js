'use strict';

angular.module('idlecars')
.factory('MyDriverService', function(Restangular) {
  // TODO: is there a built in way for caching?

  var service = {};

  var requiredItems = [
    'driver_license_image',
    'fhv_license_image',
    // 'address_proof_image' <-- optional
  ]

  service.get = function() {
    if (!service.driver) {
      service.driver = Restangular.one('drivers', 'me').get();
    }
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
    service.driver = Restangular.one('drivers', 'me').patch(patchData);
    return service.driver;
  }

  service.addPaymentMethod = function (nonce) {
    service.driver = Restangular.one('drivers','me').all('payment_method').post(nonce);
    return service.driver;
  }

  service.clearCache = function () {
    service.driver = null;
  }

  return service;
})

.run(function (AuthService, MyDriverService, AppNotificationService) {
  if (AuthService.isLoggedIn()) {
    MyDriverService.get().then(function (driver) {
      var credit = parseFloat(driver.app_credit.replace(/\$|,/g, ''))
      if (credit > 0) {
        var message = 'You have ' + driver.app_credit + ' app credit to spend on rent.';
        AppNotificationService.push({success: message});
      }
    })
  }
});
