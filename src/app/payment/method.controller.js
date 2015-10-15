'use strict';

angular.module('idlecars')
.controller('paymentMethod.controller', function ($scope, $state, PaymentService, BookingService, MyDriverService, AppNotificationService) {

  var _goBackState = function () {
    if (PaymentService.pending) { $state.go('^.bookings') }
    else { $state.go('^') }
  }
  var addPaymentMethod = function (nonce) {
    return MyDriverService.addPaymentMethod({nonce: nonce});
  }

  var paymentSuccess = function () {
    MyDriverService.driver = new_driver;

    if (PaymentService.pending) { return BookingService.checkout(PaymentService.pending.id) }
  }

  var paymentFinal = function () {
    _goBackState();

    PaymentService.pending = null;
    $scope.isBusy = false;
  }

  var tokenSuccess = function (data) {
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
        new_driver = addPaymentMethod(obj.nonce);
        new_driver.then(paymentSuccess).finally(paymentFinal);
      }
    });
  }

  var tokenFailure = function () {
    $scope.isBusy = false;
    AppNotificationService.push('Sorry, we can not get your identity.');

    _goBackState();
  }

  var new_driver;
  $scope.isBusy = true;
  $scope.actionButton = 'Add this card';
  if (PaymentService.pending) {
    $scope.actionButton = 'Pay deposit ' + PaymentService.pending.car.deposit;
  };

  PaymentService.getToken().then(tokenSuccess).catch(tokenFailure)
});
