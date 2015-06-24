'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('bookingDetail', {
      url: '/bookings/:bookingId',
      params: {goRequiredDoc: true},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/bookings/docs_overview.html',
          controller: 'docsOverview.controller',
        },
      },
    })

    .state('bookingSuccess', {
      url: '/booking_success',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/bookings/success.html',
        },
      },
    })

});
