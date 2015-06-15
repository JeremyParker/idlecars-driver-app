'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('drivers', {
      url: '/drivers'
    })

    .state('drivers.account', {
      url: '/account',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_account.html',
          controller: 'navbar_account.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/account.html',
          controller: 'account.controller',
        }
      }
    })

    .state('drivers.smsconfirm', {
      url: '/smsconfirm',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_account.html',
          controller: 'navbar_account.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/confirm_number.html',
          controller: 'confirm_number.controller',
        }
      }
    })

})
