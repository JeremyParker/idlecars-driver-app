'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      views: {
        'content@': {
          templateUrl: 'app/auth/new.html',
          controller: 'auth.new.controller'
        }
      }
    })

})
