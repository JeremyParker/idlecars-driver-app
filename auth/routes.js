'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      params: {username: null},
      data: {navbarInfo: {title: 'Log in', enableBack: true}},
      views: {
        'navbar@': {
          templateUrl: 'shared/components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'shared/auth/login.html',
          controller: 'auth.login.controller',
        }
      }
    })

    .state('password', {
      abstract: true,
      views: {
        'navbar@': {
          templateUrl: 'shared/components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          template: '<ui-view class="flex"/>',
        }
      }
    })

    .state('password.forgot', {
      url: '/forgot_password',
      data: {navbarInfo: {title: 'I forgot my password', enableBack: true, enableNext: true}},
      params: {phone_number: null},
      templateUrl: 'shared/users/form.html',
      controller: 'auth.forgotPassword.controller',
    })

    .state('password.reset', {
      url: '/reset_password/:resetToken',
      data: {navbarInfo: {title: 'Reset password', enableBack: false, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'auth.resetPassword.controller',
    })

    .state('password.change', {
      url: '/change_password',
      data: {navbarInfo: {title: 'Change password', enableBack: true}},
      templateUrl: 'shared/users/notice.html',
      controller: 'auth.changePassword.controller',
    })
})
