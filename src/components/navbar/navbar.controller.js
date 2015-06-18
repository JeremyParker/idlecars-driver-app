'use strict';

angular.module('idlecars')
.controller('navbarMain.controller', function ($scope, $rootScope, NavbarService, config) {
  $rootScope.$on('$stateChangeSuccess', function() {
    $scope.menuOpen = false;
    $scope.navbarInfo = NavbarService.getNavbarInfo();
  });

  $scope.navbarInfo = NavbarService.getNavbarInfo();

  $scope.goBack = function() {
    if (NavbarService.isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }
    NavbarService.popState();
  };
})

.controller('navbarField.controller', function ($scope, FieldService, NavbarService) {
  $scope.Field = FieldService;

  $scope.Navbar = NavbarService;
})

.controller('navbarAccount.controller', function ($scope, NavbarService) {
  $scope.goBack = function () {
    NavbarService.popState();
  }
})
