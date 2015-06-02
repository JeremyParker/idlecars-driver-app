'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('bookingsShow', {
      url: '/bookings/:bookingId',
      templateUrl: 'app/bookings/show.html',
      controller: 'bookings.showCtrl',
    })

});
