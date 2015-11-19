'use strict';

angular.module('idlecars')
.controller('listings.detail.controller', function ($scope, $state, $stateParams, CarService, BookingService, LANDING_STATE) {
  if (!$stateParams.car) {
    CarService.get({carId: $stateParams.carId}).$promise.then(
      function(car) {
        $scope.car = car;
        heap.track('carDetail', {carId: car.id});
      },
      function(response) {
        $state.go(LANDING_STATE);
      }
    );
  }

  $scope.car = $stateParams.car;

  $scope.booking = function () {
    return BookingService.bookings.length;
  }
});
