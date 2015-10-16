'use strict';

angular.module('idlecars')
.controller('paymentMethod.controller', function ($scope, $state, PaymentService, BookingService, MyDriverService) {

  var newDriver;
  $scope.isBusy = true;

  $scope.actionButton = 'Add this card';
  if (PaymentService.pending) {
    $scope.actionButton = 'Pay deposit ' + PaymentService.pending.car.deposit;
  };

  var addPaymentMethod = function (nonce) {
    return MyDriverService.addPaymentMethod({nonce: nonce});
  }

  var onSuccess = function () {
    MyDriverService.driver = newDriver;
    if (PaymentService.pending) { return BookingService.checkout(PaymentService.pending.id) }
  }

  var onFinal = function () {
    if (PaymentService.pending) { $state.go('^.bookings') }
    else { $state.go('^') }

    PaymentService.pending = null;
    $scope.isBusy = false;
  }

  PaymentService.getToken().then(function (data) {
    $scope.isBusy = false;

    // TODO: we need our custom form
    braintree.setup(data.client_token, "dropin", {
      container: "dropin-container",
      form: 'payment-form',
      onUnsupported: function () {
        // TODO: Error case
      },
      onPaymentMethodReceived: function (obj) {
        $scope.isBusy = true;
        newDriver = addPaymentMethod(obj.nonce);
        newDriver.then(onSuccess).finally(onFinal);
      }
    });
  })
});
