'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('driverAccount', {
      url: '/account',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/account.html',
          controller: 'account.controller',
        }
      }
    })

    .state('drivers.login', {
      url: '/login',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_account.html',
          controller: 'navbarAccount.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/login.html',

    .state('driverAccount.uploadDriverLicense', {
      url: '/driver-license',
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'driver_license_image';
            $scope.uploadTitle = 'Driver License';
          },
        }
      }
    })

    .state('driverAccount.uploadFhvLicense', {
      url: '/fhv-license',
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'fhv_license_image';
            $scope.uploadTitle = 'Hack License';
          },
        }
      }
    })

    .state('driverAccount.uploadAddressProof', {
      url: '/proof-of-address',
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'address_proof_image';
            $scope.uploadTitle = 'Proof of Address';
          },
        }
      }
    })

    .state('driverAccount.uploadDefensiveCert', {
      url: '/defensive-driving-certificate',
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'defensive_cert_image';
            $scope.uploadTitle = 'Defensive Driving';
          },
        }
      }
    })

})
