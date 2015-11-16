'use strict';

angular.module('idlecars')
.directive('checkMark', function () {
  return {
    scope: {
      status: '=',
      checked: '@',
    },
    transclude: true,
    templateUrl: 'shared/components/check_mark/check_mark.html',
  }
})
