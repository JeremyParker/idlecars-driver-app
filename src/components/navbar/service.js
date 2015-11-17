'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, $stateParams, $timeout, HistoryService) {
  var factory = {};

  var navbarStateParams = {};

  factory.popState = function() {
    HistoryService.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  factory.getNavbarInfo = function () {
    var navbarStateData = null;
    if ($state.current.data){
      navbarStateData = $state.current.data.navbarInfo;
    };
    return navbarStateParams[$stateParams.navbarType] || navbarStateData || {title: '', enableBack: true, enableMenu: true};
  }

  // TODO: Don't use scope in service
  factory.validateInit = function (scope, loadChild) {
    scope.$on('$viewContentLoaded', function() {
      var scopeOrChild = scope;
      if (loadChild) { scopeOrChild = scope.$$childHead };

      $timeout(function () {
        if (scopeOrChild.fieldForm) { scope.validateForm(); }
      })
    })
  }

  return factory;
});
