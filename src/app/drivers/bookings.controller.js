'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, BookingService, MyDriverService) {

  var initScope = function (me) {
    $scope.username = me.client_display;
  }

  var _getBooking = function () {
    BookingService.get().then(function (bookings) {
      $scope.bookings = angular.copy(bookings);
    })
  }

  MyDriverService.get().then(initScope);
  _getBooking();

  $scope.cancelBooking = function (bookingId) {
    var patchData = { state: '12' };

    BookingService.patch(bookingId, patchData).then(_getBooking);
  }

  $scope.doShowConfirm = function () { $scope.showConfirm = true }
})
