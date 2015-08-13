'use strict';

angular.module('idlecars')
.directive('checkMark', function () {
  return {
    scope: {
      checked: '=',
    },
    transclude: true,
    templateUrl: 'components/check_mark/check_mark.html',
  }
})
