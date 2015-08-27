'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('bankLink', {
      url: '/bank-link',
      data: {navbarInfo: {title: 'Link Bank Account', enableBack: false}},
      views: {
        // TODO extend some base object, or have an `app` base state that holds the navbar
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/owners/bank_link.html',
          controller: 'owners.bankLink.controller'
        }
      }
    })
    .state('ownerLogin', {
      url: '/owner-login',
      views: {
        'content@': {
          templateUrl: 'app/auth/login.html',
          controller: 'auth.owner-login.controller',
        }
      }
    })
    .state('ownerPassword', {
      abstract: true,
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          template: '<ui-view class="flex"/>',
        }
      }
    })
    .state('ownerPassword.reset', {
    url: '/owner_reset_password/:resetToken',
    data: {navbarInfo: {title: 'Create a password', enableBack: false, enableSave: true}},
    templateUrl: 'app/users/form.html',
    controller: 'auth.ownerSetPassword.controller',
  })
})
