'use strict';

angular.module('idlecars')
.directive('tutorial', function () {
  return {
    scope: {},
    templateUrl: 'shared/components/tutorial/template.html',
    controller: function ($scope, $rootScope, $localStorage) {
      $scope.tutorialOn = !$localStorage.tutorialClosed;
      $scope.isMobile = $rootScope.isMobileDevice;

      $scope.closeTutorial = function () {
        $scope.tutorialOn = false;
        $localStorage.tutorialClosed = true;
      }
    }
  }
})
