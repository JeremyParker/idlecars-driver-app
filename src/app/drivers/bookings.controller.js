'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, $state, BookingService, MyDriverService, DocRouterService, PaymentService) {

  var initScope = function (me) {
    $scope.username = me.client_display;
    $scope.paymentMethod = me.payment_method;
  }

  var _getBooking = function () {
    BookingService.get().then(function (bookings) {
      $scope.booking = angular.copy(bookings[0]) || [];
    })
  }

  MyDriverService.get().then(initScope);
  _getBooking();

  $scope.changeEndDate = function (date) {
    $scope.isBusy = true;
    var patchData = {end_time: [date.getFullYear(), date.getMonth(), date.getDate()]};
    BookingService.patch($scope.booking.id, patchData).then(function (data) {
      $scope.booking.end_time_display = data.end_time_display;
      $scope.isBusy = false;
    })
  }

  $scope.cancelBooking = function () {
    BookingService.cancel($scope.booking.id).then(_getBooking);
  }

  $scope.doShowConfirm = function () { $scope.showConfirm = true }

  $scope.uploadDocuments = function () {
    DocRouterService.goRequiredDoc();
  }

  $scope.checkOut = function () {
    PaymentService.pending = $scope.booking;

    if (!$scope.paymentMethod) { return $state.go('^.paymentMethod') };
    BookingService.checkout($scope.booking.id).then(_getBooking)
    // TODO: need server send Notification error
  }

  $scope.pickUp = function () {
    BookingService.pickup($scope.booking.id).then(function () {
      $state.go('^.success');
    })
  }
})
