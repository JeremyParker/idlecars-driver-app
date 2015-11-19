'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('bankLink', {
      url: '/bank-link',
      data: {navbarInfo: {title: 'Link Bank Account'}},
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
          templateUrl: 'app/auth/owner_login.html',
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
      data: {navbarInfo: {title: 'Create a password', enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'auth.ownerSetPassword.controller',
    })

    .state('bankSuccess', {
      url: '/bank_success',
      data: {navbarInfo: {title: ''}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/owners/success.html',
        },
      },
    })

})
