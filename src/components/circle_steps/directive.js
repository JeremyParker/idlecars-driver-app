'use strict';

angular.module('idlecars')
.directive('circleSteps', function () {
  return {
    scope: {
      of: '@',
      step: '@'
    },
    transclude: true,
    templateUrl: 'components/circle_steps/circle.html',
    controller: function ($scope) {
      // this generates array [0,1,2,3,4,...] of length $scope.of
      $scope.stepsArray = Array.apply(null, {length: $scope.of}).map(Number.call, Number)
    }
  }
})
