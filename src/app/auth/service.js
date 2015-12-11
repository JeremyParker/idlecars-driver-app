'use strict';

angular.module('idlecars')
.factory('AppAuthService', function ($state, DriverService, MyDriverService, BookingService) {
  var service = {};

  service.loggedin = function () {
    BookingService.get().then(BookingService.updateBookings);
  }

  service.loggedout = function () {
    MyDriverService.driver = null;
    BookingService.bookings = [];
  }

  service.accountCreated = function () {
    $state.go('user.onboarding.email');
  }

  service.passwordChanged = function () {
    $state.go('driverAccount');
  }

  service.passwordReset = function () {
    $state.go('driverAccount');
  }

  // TODO: get rid of the this temporary solution
  service.saveUser = function (user) {
    var newDriver = new DriverService(user);
    return newDriver.$save()
  }

  return service;
})
