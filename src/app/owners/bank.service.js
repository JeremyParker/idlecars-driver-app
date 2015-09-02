'use strict';

angular.module('idlecars')
.factory('OwnerBankService', function (Restangular) {
  var service = {};

  service.ownerBankInfo = {};

  service.get = function () {
    return Restangular.one('owners', 'me').get();
  }

  service.post = function (params) {
    return Restangular.one('owners', 'me').all('bank_link').post(params);
  }

  return service;
})
