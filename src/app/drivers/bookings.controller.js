'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, BookingService, MyDriverService, DocRouterService) {

  var initScope = function (me) {
    $scope.username = me.client_display;
  }

  var _getBooking = function () {
    BookingService.get().then(function (bookings) {
      $scope.booking = angular.copy(bookings[0]) || [];
    })
  }

  MyDriverService.get().then(initScope);
  _getBooking();

  $scope.cancelBooking = function (bookingId) {
    var patchData = { state: '12' };

    BookingService.patch(bookingId, patchData).then(_getBooking);
  }

  $scope.uploadDocuments = function () {
    DocRouterService.goRequiredDoc();
  }
})
