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
    if (date) {
      var patchData = {end_time: [date.getFullYear(), date.getMonth(), date.getDate()]};
      $scope.isBusy = true;

      BookingService.patch($scope.booking.id, patchData)
      .then(function (data) { $scope.booking.end_time_display = data.end_time_display })
      .finally(function () { $scope.isBusy = false })
    }
  }

  $scope.cancelBooking = function () {
    $scope.isBusy = true;

    BookingService.cancel($scope.booking.id)
    .then(_getBooking)
    .finally(function () { $scope.isBusy = false })
  }

  $scope.doShowConfirm = function () { $scope.showConfirm = true }

  $scope.uploadDocuments = function () {
    DocRouterService.requiredDocState().then(function (state) { $state.go(state) });
  }

  $scope.checkOut = function () {
    PaymentService.pending = $scope.booking;

    if (!$scope.paymentMethod) { return $state.go('^.paymentMethod') };

    $scope.isBusy = true;

    BookingService.checkout($scope.booking.id)
    .then(_getBooking)
    .finally(function () { $scope.isBusy = false })
    // TODO: need server send Notification error
  }

  $scope.pickUp = function () {
    $scope.isBusy = true;

    BookingService.pickup($scope.booking.id)
    .then(function () { $state.go('^.success') })
    .finally(function () { $scope.isBusy = false })
  }
})
