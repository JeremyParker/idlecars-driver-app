'use strict';

angular.module('idlecars')
.directive('tutorialSteps', function () {
  return {
    scope: {
      of: '@',
      step: '@'
    },
    transclude: true,
    templateUrl: 'shared/components/tutorial_steps/template.html',
    controller: function ($scope) {
      // this generates array [0,1,2,3,4,...] of length $scope.of
      $scope.stepsArray = Array.apply(null, {length: $scope.of}).map(Number.call, Number)
      $scope.state = [];
      for (var i=1; i<=$scope.stepsArray.length; i++) {
        if(i < $scope.step) { $scope.state.push('inactive') }
        else if(i == $scope.step) { $scope.state.push('active') }
        else { $scope.state.push('idle') }
      }
    }
  }
})
