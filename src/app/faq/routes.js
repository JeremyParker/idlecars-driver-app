'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider
    .state('faq', {
      url: '/faq',
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
})
