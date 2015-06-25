'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, HistoryService) {
  var factory = {};

  var navbarInfo = {
    'bookingDetail': {title: 'Driver Documents', enableBack: false, enableNext: true},
    'login': {title: 'Log in', enableBack: true, enableNext: false},
    'driverAccount.uploadDriverLicense': {title: 'Driver Documents', enableBack: false, enableNext: false},
    'driverAccount.uploadFhvLicense': {title: 'Driver Documents', enableBack: false, enableNext: false},
    'driverAccount.uploadAddressProof': {title: 'Driver Documents', enableBack: false, enableNext: false},
    'driverAccount.uploadDefensiveCert': {title: 'Driver Documents', enableBack: false, enableNext: false}
  };

  factory.popState = function() {
    HistoryService.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  factory.getNavbarInfo = function () {
    return navbarInfo[$state.current.name] || {title: '', enableBack: true, enableNext: true};
  }

  return factory;
});
