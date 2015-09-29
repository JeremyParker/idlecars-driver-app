'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider
    .state('faq', {
      abstract: true,
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/faq/faq.html',
        },
      },
    })

    .state('faq.driver', {
      url: '/driver_faq',
      templateUrl: 'app/faq/driver_faq.html',
    })

    .state('faq.owner', {
      url: '/owner_faq',
      templateUrl: 'app/faq/owner_faq.html',
    })

})
