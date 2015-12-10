'use strict';

angular.module('idlecars')
.factory('AppUserService', function ($state) {
  var service = {};

  service.userUpdated = function () {
    $state.go('driverAccount');
  }

  return service;
})
