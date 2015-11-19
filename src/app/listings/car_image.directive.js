'use strict';

angular.module('idlecars')
.directive('carImage', function () {
  return {
    templateUrl: 'app/listings/car_image.html',
    scope: {
      car: "=",
    }
  }
});
