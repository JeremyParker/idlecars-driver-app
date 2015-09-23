'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider
    .state('driverAccount.paymentMethod', {
      url: '/payment_method',
      views: {
        'content@': {
          templateUrl: 'app/payment/method.html',
          controller: 'paymentMethod.controller',
        }
      }
    })
})
