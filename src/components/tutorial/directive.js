'use strict';

angular.module('idlecars')
.directive('tutorial', function () {
  return {
    scope: {},
    templateUrl: 'components/tutorial/template.html',
    controller: function ($scope, $localStorage, $sessionStorage) {
      $scope.tutorialOn = !$localStorage.tutorialClosed;

      $scope.closeTutorial = function () {
        $scope.tutorialOn = false;
        $localStorage.tutorialClosed = true;
      }
    }
  }
})
