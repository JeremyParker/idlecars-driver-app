'use strict';

angular.module('idlecars')
.factory('AppUserService', function ($state, RequireAuthService) {
  var service = {};

  service.emailEntered = function () {
    RequireAuthService.resolve('driverAccount.onboarding.success');
  }

  service.firstnameEntered = function () {}

  service.lastnameEntered = function () {}

  service.userUpdated = function () {
    $state.go('driverAccount');
  }

  return service;
})
