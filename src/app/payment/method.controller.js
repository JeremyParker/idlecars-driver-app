'use strict';

angular.module('idlecars')
.controller('paymentMethod.controller', function ($scope, $state, PaymentService, BookingService) {

  PaymentService.getToken().then(function (data) {
    braintree.setup(data.client_token, "dropin", {
      container: "dropin-container",
      form: 'payment-form',
      onPaymentMethodReceived: function (obj) {
        if (!PaymentService.pending) {
          // TODO: send nonce to server first
          return $state.go('^')
        };

        $scope.isBusy = true;
        var nonce = {nonce: obj.nonce};
        BookingService.checkout(PaymentService.pending.id, nonce)
        .then(function () {
          PaymentService.pending = null;
          $scope.isBusy = false;
          $state.go('^.bookings');
        })
        .catch(function () {
          //TODO: raise an error
        })
      }
    });
  })
});
