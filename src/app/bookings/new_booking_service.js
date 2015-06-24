'use strict'

angular.module('idlecars')
.factory('NewBookingService', function ($state, HistoryService, BookingService, DocRouterService) {
  var service = {};

  service.createBooking = function(carId) {
    var newBooking = new BookingService({car: carId});
    return newBooking.$save().then(function(data) {
      $state.go('bookingDetail', {bookingId: data.id});
    }).catch(function () {
      DocRouterService.requiredDocState().then(function(nextState) {
        HistoryService.forget();
        if (nextState) {
          $state.go(nextState);
        } else {
          $state.go('cars.detail', {carId: carId});
        }
      });
    });
  }

  return service;
});
