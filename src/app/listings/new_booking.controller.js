'use strict';

angular.module('idlecars')
.controller('listings.newBooking.controller', function($state, $stateParams, $timeout, BookingService, DocRouterService, LANDING_STATE) {

  $timeout(function() {
    BookingService.post({car: $stateParams.carId})
    .then(function(booking){
      BookingService.updateBookings(booking);
      _afterSaveAttempting('driverAccount.bookings');
    })
    .catch(function(){$state.go(LANDING_STATE)})
   });

  var _afterSaveAttempting = function(destination) {
    DocRouterService.requiredDocState()
    .then(function(nextState) {
      if (nextState) {
        $state.go(nextState);
      } else {
        $state.go(destination);
      }
    });
  }
});
