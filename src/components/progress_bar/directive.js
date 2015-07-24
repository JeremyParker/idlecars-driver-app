'use strict';

angular.module('idlecars')
.directive('progressBar', function () {
  return {
    templateUrl: 'components/progress_bar/template.html',
    controller: function ($scope) {
      if($scope.progress){ $scope.completion = $scope.progress + '%' };
    },
    scope: {
      progress: '@',
    }
  };
});
