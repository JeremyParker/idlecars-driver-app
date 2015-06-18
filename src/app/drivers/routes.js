'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('drivers', {
      url: '/drivers',
    })

    .state('drivers.account', {
      url: '/account',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_account.html',
          controller: 'navbarAccount.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/account.html',
          controller: 'account.controller',
        }
      }
    })

})
