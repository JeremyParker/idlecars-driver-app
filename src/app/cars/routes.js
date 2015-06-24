'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars', {
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content': {
          templateUrl: 'app/cars/index.html',
          controller: 'cars.indexCtrl',
        },
      },
    })

    .state('cars.detail', {
      url: 'cars/:carId',
      views: {
        'content@': {
          templateUrl: 'app/cars/detail.html',
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
        },
      },
      onExit: function (HistoryService) {
        HistoryService.forget();
      }
    })

    .state('cars.detail.booking', {
      url: '/booking',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_field.html',
          controller: 'navbarField.controller',
        },
        'content@': {
          template: '<ui-view />',
          params: {car: null},
          controller: 'cars.booking.controller'
        },
      },
    })

    .state('cars.detail.booking.phoneNumber', {
      templateUrl: 'app/cars/booking_form.html',
      controller: 'booking.form.controller',
    })

    .state('cars.detail.booking.createPassword', {
      templateUrl: 'app/cars/booking_form.html',
      controller: 'booking.form.controller',
    })

    .state('cars.detail.booking.enterPassword', {
      templateUrl: 'app/cars/booking_form.html',
      controller: 'booking.form.controller',
    })

    .state('cars.detail.booking.email', {
      templateUrl: 'app/cars/booking_form.html',
      controller: 'booking.form.controller',
    })
});
