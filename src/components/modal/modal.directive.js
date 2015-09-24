'use strict';

angular.module('idlecars')
.directive('modal', function () {
  return {
    templateUrl: 'components/modal/modal.html',
    controller: 'modal.controller',
    scope: {
      actionSref: '@actionSref',
      actionClick: '&',
    },
    transclude: true,
  };
});
