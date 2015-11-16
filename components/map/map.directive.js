'use strict';

angular.module('idlecars')
.directive('map', function () {
  return {
    templateUrl: 'shared/components/map/map.html',
    controller: 'map.controller',
    scope: {
      address: "@"
    }
  };
});
