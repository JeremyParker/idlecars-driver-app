'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('newUser', {
      abstract: true,
      url: '/users/new',
      data: {navbarInfo: {title: 'Sign up', enableBack: true, enableNext: true}},
      views: {
        'navbar@': {
          templateUrl: 'shared/components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          controller: function($scope) {
            $scope.user = {};
          },
          template: '<ui-view class="flex"/>',
        }
      },
    })

    .state('newUser.phoneNumber', {
      url: '/phone_number',
      templateUrl: 'shared/users/form.html',
      controller: 'newUser.phoneNumber.controller',
    })

    .state('newUser.password', {
      url: '/password',
      templateUrl: 'shared//users/form.html',
      controller: 'newUser.password.controller',
    })

})
