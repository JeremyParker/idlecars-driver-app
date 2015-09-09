'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('marketingUser', {
      abstract: true,
      url: '/marketing_user',
      data: {navbarInfo: {title: 'Sign up', enableNext: true}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          controller: function($scope) {
            $scope.user = {};
            $scope.repeatUser = {};
          },
          template: '<ui-view class="flex"/>',
        }
      },
    })

    .state('marketingUser.phoneNumber', {
      url: '/phone_number',
      templateUrl: 'app/marketing/form.html',
      controller: 'marketingUser.phoneNumber.controller',
    })

    .state('marketingUser.password', {
      url: '/password',
      templateUrl: 'app/marketing/form.html',
      controller: 'marketingUser.password.controller',
    })

    .state('marketingSuccess', {
      url: '/marketing_success',
      data: {navbarInfo: {title: 'Success'}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/marketing/success.html',
        }
      },
    })

})
