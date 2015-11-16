'use strict';

angular.module('idlecars')
.factory('MyAuthService', function (AuthService, BookingService, MyDriverService) {

  var service = {};

  var driverLogin = function () {
    BookingService.get().then(BookingService.updateBookings);
  }

  var driverLogout = function () {
    MyDriverService.driver = null;
    BookingService.bookings = [];
  }

  service.login = function(params) {
    return AuthService.login(params, driverLogin)
  }

  service.logout = function () {
    AuthService.logout(driverLogout)
  }

  return service;
})
