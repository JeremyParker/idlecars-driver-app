'use strict';

angular.module('idlecars')
.directive('circleSteps', function () {
  return {
    scope: {
      steps: '@',
      step: '@'
    },
    templateUrl: 'components/circle_steps/circle.html',
    controller: function ($scope) {
      $scope.stepsArray = Array.apply(null, {length: $scope.steps}).map(Number.call, Number)
    }
  }
})
