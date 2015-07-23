'use strict';

angular.module('idlecars')
.controller('navbarMain.controller', function ($scope, $rootScope, $state, AuthService, NavbarService, config) {
  $rootScope.$on('$stateChangeSuccess', function() {
    $scope.menuOpen = false;
    $scope.navbarInfo = NavbarService.getNavbarInfo();
  });

  $scope.isLoggedIn = AuthService.isLoggedIn();

  $scope.navbarInfo = NavbarService.getNavbarInfo();

  $scope.goBack = function() {
    if (NavbarService.isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }
    NavbarService.popState();
  };

  $scope.logout = function () {
    $scope.menuOpen = false;
    AuthService.logout();
    $scope.isLoggedIn = AuthService.isLoggedIn();
    $state.go('cars');
  };

  $scope.save = function () {
    $rootScope.navSave();
  };

  $rootScope.navKeyPressed = function ($event) {
    if ($event.which !== 13) { return; }
    if ($rootScope.navNextEnabled && $rootScope.navGoNext) {
      $rootScope.navGoNext();
    }
  }
})
