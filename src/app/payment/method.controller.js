'use strict';

angular.module('idlecars')
.controller('paymentMethod.controller', function ($scope, $rootScope, $state, $stateParams, PaymentService, BookingService, MyDriverService) {

  $rootScope.braintree.pendingBooking = $stateParams.pendingBooking;
  $rootScope.braintree.isBusy = true;

  $scope.actionButton = 'Add this card';
  if ($rootScope.braintree.pendingBooking) {
    $scope.actionButton = 'Pay deposit ' + $rootScope.braintree.pendingBooking.car.deposit;
  };

  var onSuccess = function () {
    if ($rootScope.braintree.pendingBooking) {
      // TODO: move this BookingService.checkout to booking page
      return BookingService.checkout($rootScope.braintree.pendingBooking.id)
      .then(BookingService.updateBookings)
    }
  }

  var onFinal = function () {
    if ($rootScope.braintree.pendingBooking) { $state.go('^.bookings') }
    else { $state.go('^') }

    $rootScope.braintree.isBusy = false;
  }

  PaymentService.getToken().then(function (data) {
    $rootScope.braintree.isBusy = false;

    // TODO: we need our custom form
    braintree.setup(data.client_token, "dropin", {
      container: "dropin-container",
      form: 'payment-form',
      onUnsupported: function () {
        // TODO: Error case
      },
      onPaymentMethodReceived: function (obj) {
        if ($rootScope.braintree.nonce != obj.nonce) {
          $rootScope.braintree.nonce = obj.nonce;
          $rootScope.braintree.isBusy = true;

          MyDriverService.addPaymentMethod({nonce: obj.nonce})
          .then(onSuccess).finally(onFinal);
        };
      }
    });
  })
});
