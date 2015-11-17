'use strict';

angular.module('idlecars')
.factory('AppAuthService', function ($state, MyDriverService, BookingService) {
  var service = {};

  service.loggedin = function () {
    BookingService.get().then(BookingService.updateBookings);
  }

  service.loggedout = function () {
    MyDriverService.driver = null;
    BookingService.bookings = [];
  }

  service.accountCreated = function () {
    $state.go('driverAccount.onboarding.email');
  }

  service.passwordChanged = function () {
    $state.go('driverAccount');
  }

  service.passwordReset = function () {
    $state.go('driverAccount');
  }

  return service;
})
