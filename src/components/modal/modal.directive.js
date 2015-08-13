'use strict';

angular.module('idlecars')
.directive('modal', function () {
  return {
    templateUrl: 'components/modal/modal.html',
    scope: {
      actionSref: '@actionSref'
    },
    transclude: true,
  };
});
