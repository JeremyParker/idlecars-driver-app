'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars', {
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbar_main.controller',
        },
        'content': {
          templateUrl: 'app/cars/index.html',
          controller: 'cars.indexCtrl',
        },
      },
      onEnter: function (historyState) {
        historyState.Listen();
      }

    })

    .state('cars.detail', {
      url: 'cars/:carId',
      views: {
        'content@': {
          templateUrl: 'app/cars/show.html',
          params: {car: null},
          controller: 'cars.showCtrl',
        },
      },
    })

    .state('cars.detail.renewal', {
      url: '/renewals/:renewalId',
      views: {
        'content@': {
          templateUrl: 'app/cars/renewal.html',
          controller: 'renewal.showCtrl',
          onExit: function($previousState) {
            // prevent showing modal again when you hit back
            $previousState.forget();
          },
        },
      },
    })

    .state('cars.detail.booking', {
      url: '/booking',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_field.html',
          controller: 'navbar_field.controller',
        },
        'content@': {
          template: '<ui-view />',
          params: {car: null},
          controller: 'cars.booking.controller'
        },
      },
    })

    .state('cars.detail.booking.email', {
      templateUrl: 'app/cars/booking_form.html',
      controller: 'booking.email.controller',
    })

    .state('cars.detail.booking.name', {
      templateUrl: 'app/cars/booking_form.html',
      controller: 'booking.name.controller',
    })

    .state('cars.detail.booking.phone_number', {
      templateUrl: 'app/cars/booking_form.html',
      controller: 'booking.phone_number.controller',
    })


});
