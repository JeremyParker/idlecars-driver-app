'use strict';

angular.module('idlecars')
.factory('UserService', function (Restangular) {
  var service = {};

  service.get = function () {
    return Restangular.one('users', 'me').get();
  }

  service.post = function (params) {
    return Restangular.all('users').post(params);
  }

  return service;
})
