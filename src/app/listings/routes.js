'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('listings', {
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content': {
          templateUrl: 'app/listings/list.html',
          controller: 'listings.controller',
        },
      },
    })

    .state('listings.detail', {
      url: 'listings/:carId',
      params: {car: null},
      views: {
        'content@': {
          templateUrl: 'app/listings/detail.html',
          controller: 'listings.detail.controller',
        },
      },
    })

    .state('listings.detail.newBooking', {
      data: {notInHistory: true, requireAuth: true},
      controller: 'listings.newBooking.controller',
      template: "<ic-loading />"
    })

    .state('listings.detail.renewal', {
      data: {notInHistory: true},
      url: '/renewals/:renewalId',
      views: {
        'content@': {
          templateUrl: 'app/listings/renewal.html',
          controller: 'renewal.showCtrl',
        },
      }
    })

});
