'use strict';

angular.module('idlecars')
.controller('paymentMethod.controller', function ($scope, $state, PaymentService, BookingService, MyDriverService) {

  $scope.actionButton = 'Add this card';
  if (PaymentService.pending) {
    $scope.actionButton = 'Pay deposit ' + PaymentService.pending.car.deposit;
  };

  var addPaymentMethod = function (nonce) {
    return MyDriverService.addPaymentMethod({nonce: nonce});
  }

  var resolve = function () {
    if (!PaymentService.pending) { return $state.go('^') }

    $scope.isBusy = true;
    BookingService.checkout(PaymentService.pending.id).then(function () {
      PaymentService.pending = null;
      $scope.isBusy = false;
      $state.go('^.bookings');
    })
    // TODO: require a server side notification
  }

  PaymentService.getToken().then(function (data) {
    // TODO: we need our custom form
    braintree.setup(data.client_token, "dropin", {
      container: "dropin-container",
      form: 'payment-form',
      onUnsupported: function () {
        // TODO: Error case
      },
      onPaymentMethodReceived: function (obj) {
        addPaymentMethod(obj.nonce).then(resolve)
      }
    });
  })
});
