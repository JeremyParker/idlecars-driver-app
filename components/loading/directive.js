'use strict';

angular.module('idlecars')
.directive('icLoading', function () {
  return {
    templateUrl: 'shared/components/loading/loading.html',
    transclude: true,
  };
});
