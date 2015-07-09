'use strict';

angular.module('idlecars')
.run(function ($rootScope, RequireAuthService, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    if (!(toState.data && toState.data.requireAuth)) { return; }
    if (AuthService.isLoggedIn()) { return; }

    event.preventDefault();
    RequireAuthService.loginThenGo(toState, toParams);
  })
})
.factory('RequireAuthService', function ($q, $state, $stateParams, AuthService) {
  var service = {};
  var destination = {};

  service.loginThenGo = function(toState, toParams) {
    destination.toState = toState;
    destination.toParams = toParams;

    service.resolve();
  }

  service.resolve = function() {
    if (AuthService.isLoggedIn()) {
      _goToDestination();
    } else {
      $state.go('login');
    }
  }

  var _goToDestination = function() {
    if (destination.toState) {
      $state.go(destination.toState, destination.toParams);
    } else {
      // NOTE: this shouldn't happen, but in case
      $state.go('cars');
    }
  }

  return service;
})
;
