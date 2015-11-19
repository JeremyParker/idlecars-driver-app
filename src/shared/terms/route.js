'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('terms', {
      url: '/terms_of_service',
      data: {navbarInfo: {title: 'Terms of Service', enableBack: true}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'shared/terms/terms_of_service.html',
        }
      },
    })

})
