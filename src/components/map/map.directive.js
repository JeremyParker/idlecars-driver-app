'use strict';

angular.module('idlecars')
.directive('map', function () {
  return {
    templateUrl: 'components/map/map.html',
    controller: 'map.controller',
    scope: {
      address: "@"
    }
  };
});
