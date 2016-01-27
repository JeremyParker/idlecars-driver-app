'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, $state, BookingService, MyDriverService, DocRouterService, PaymentService) {

  var initScope = function (me) {
    $scope.username = me.client_display;
    $scope.paymentMethod = me.payment_method;
    $scope.driver = me;
  }

  var _getBooking = function () {
    return BookingService.get().then(function (bookings) {
      BookingService.updateBookings(bookings);
      $scope.booking = angular.copy(bookings[0]) || [];
    })
  }

  var _replaceBooking = function (booking) {
    BookingService.updateBookings(booking);
    return $scope.booking = booking
  }

  MyDriverService.get().then(initScope);
  _getBooking();

  $scope.changeEndDate = function (date) {
    if (date) {
      var patchData = {end_time: [date.getFullYear(), date.getMonth(), date.getDate()]};
      $scope.isBusy = true;

      BookingService.patch($scope.booking.id, patchData)
      .then(_replaceBooking)
      .finally(function () { $scope.isBusy = false })
    }
  }

  $scope.cancelBooking = function () {
    $scope.isBusy = true;

    BookingService.cancel($scope.booking.id)
    .then(_replaceBooking)
    .finally(function () { $scope.isBusy = false })
  }

  $scope.doShowConfirm = function () { $scope.showConfirm = true }

  // we agree that server sends the plate number when insurance aprroved
  // front end take this as a flag to enable arrange pick button and so on.
  $scope.insuranceApproved = function () { return $scope.booking.car.plate }

  $scope.uploadDocuments = function () {
    DocRouterService.requiredDocState().then(function (state) { $state.go(state) });
  }

  $scope.checkOut = function () {
    if (!$scope.paymentMethod) {
      return $state.go('^.paymentMethod', {pendingBooking: $scope.booking})
    };

    $scope.isBusy = true;

    BookingService.checkout($scope.booking.id)
    .then(_replaceBooking)
    .finally(function () { $scope.isBusy = false })
    // TODO: need server send Notification error
  }

  $scope.pickUp = function () {
    $scope.isBusy = true;

    BookingService.pickup($scope.booking.id)
    .then(function (booking) {
      _replaceBooking(booking);
      $state.go('^.success');
    })
    .finally(function () { $scope.isBusy = false })
  }

  $scope.bookingReturn = function () {
    $scope.isBusy = true;

    BookingService.bookingReturn($scope.booking.id)
    .then(function () {
      BookingService.bookings = [];
      $scope.booking = {};
      $state.go('^');
    })
    .finally(function () { $scope.isBusy = false })
  }
})
