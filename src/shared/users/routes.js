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
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: function ($scope) { $scope.user = {} },
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
      templateUrl: 'shared/users/form.html',
      controller: 'newUser.password.controller',
    })

    .state('user', {
      abstract: true,
      url: '/users',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
      },
    })

    .state('user.onboarding', {
      abstract: true,
      url: '/onboarding',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'user.onboarding.controller',
        }
      },
    })

    .state('user.onboarding.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.onboarding.email.controller',
    })

    .state('user.onboarding.firstname', {
      url: '/firstname',
      data: {navbarInfo: {title: 'First name', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.onboarding.firstname.controller',
    })

    .state('user.onboarding.lastname', {
      url: '/lastname',
      data: {navbarInfo: {title: 'Last name', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.onboarding.lastname.controller',
    })

    .state('user.update', {
      abstract: true,
      url: '/update',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'user.update.controller',
        }
      },
    })

    .state('user.update.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.update.email.controller',
    })

    .state('user.update.phonenumber', {
      url: '/phonenumber',
      data: {navbarInfo: {title: 'Phone number', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.update.phoneNumber.controller',
    })

    .state('user.update.firstname', {
      url: '/firstname',
      data: {navbarInfo: {title: 'First name', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.update.firstname.controller',
    })

    .state('user.update.lastname', {
      url: '/lastname',
      data: {navbarInfo: {title: 'Last name', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.update.lastname.controller',
    })
})
