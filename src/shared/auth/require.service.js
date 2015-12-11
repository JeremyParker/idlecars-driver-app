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
.factory('RequireAuthService', function ($q, $state, $stateParams, AuthService, LANDING_STATE) {
  var service = {};
  var destinationState = {};

  service.loginThenGo = function(toState, toParams) {
    destinationState.toState = toState;
    destinationState.toParams = toParams;

    service.resolve();
  }

  service.resolve = function (state) {
    if (AuthService.isLoggedIn()) {
      _goToDestination(state);
    } else {
      $state.go('newUser.phoneNumber');
    }
  }

  var _goToDestination = function (state) {
    if (destinationState.toState) {
      $state.go(destinationState.toState, destinationState.toParams);
    } else {
      // NOTE: this shouldn't happen, but in case
      $state.go(state || LANDING_STATE);
    }
  }

  return service;
})
;
