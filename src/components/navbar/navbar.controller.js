'use strict';

angular.module('idlecars')
.controller('navbarMain.controller', function ($scope, $rootScope, NavbarService, config) {
  $rootScope.$on('$stateChangeSuccess', function() {
    $scope.menuOpen = false;
    initialize();
  });

  var initialize = function () {
    var navbarInfo = NavbarService.getNavbarInfo();

    $scope.title = navbarInfo.title;
    $scope.enableBack = navbarInfo.enableBack;
    $scope.enableNext = navbarInfo.enableNext;
  };

  initialize();

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
