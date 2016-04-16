'use strict';

angular.module('idlecars')
.factory('AppUserService', function ($state) {
  var service = {};

  service.emailEntered = function () {
    $state.go('driverAccount.onboarding.success');
  }

  service.firstnameEntered = function () {}

  service.lastnameEntered = function () {}

  service.userUpdated = function () {
    $state.go('driverAccount');
  }

  return service;
})
