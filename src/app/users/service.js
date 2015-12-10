'use strict';

angular.module('idlecars')
.factory('AppUserService', function ($state) {
  var service = {};

  service.emailEntered = function () {
    $state.go('driverAccount.onboarding.referral');
  }

  service.firstnameEntered = function () {
    $state.go('^.lastname');
  }

  service.lastnameEntered = function () {
    $state.go('ownerAccount.onboarding.company');
  }

  service.userUpdated = function () {
    $state.go('ownerAccount');
  }

  return service;
})
