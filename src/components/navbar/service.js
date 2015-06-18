'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, HistoryService) {
  var factory = {};

  var navbarInfo = {
    'cars.bookingsShow': {title: 'Driver Documents', enableBack: false, enableNext: true}
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
