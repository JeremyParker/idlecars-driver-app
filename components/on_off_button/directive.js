'use strict';

angular.module('idlecars')
.directive('onOffButton', function () {
  return {
    templateUrl: 'shared/components/on_off_button/template.html',
    scope: {
      status: '=',
      action: '&',
    },
  };
});
