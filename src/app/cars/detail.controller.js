'use strict';

angular.module('idlecars')
.controller('cars.detail.controller', function ($scope, $state, $stateParams, CarService, AuthService, NewBookingService) {

  if (!$stateParams.car) {
    CarService.get({carId: $stateParams.carId}).$promise.then(
      function(car) {
        $scope.car = car;
        heap.track('carDetail', {carId: car.id});
      },
      function(response) {
        $state.go('cars');
      }
    );
  }

  $scope.didTapRent = function() {
    if (AuthService.isLoggedIn()) {
      NewBookingService.createBooking($stateParams.carId);
    } else {
      $state.go('.booking.phoneNumber');
    }
  }

  $scope.car = $stateParams.car;
});
