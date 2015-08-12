'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, BookingService, MyDriverService) {
  var bookingId;
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

  $scope.cancelBooking = function () {
    $scope.showPopup = false;
    var patchData = { state: '12' };

    BookingService.patch(bookingId, patchData).then(_getBooking);
  }

  $scope.dismiss = function () { $scope.showPopup = false; }
  $scope.popup = function (id) { $scope.showPopup = true; bookingId = id }

})
