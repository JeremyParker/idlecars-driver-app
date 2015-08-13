'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('driverAccount', {
      url: '/account',
      data: {requireAuth: true},
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

    .state('driverAccount.bookings', {
      url: '/bookings',
      data: {navbarInfo: {title: 'My Rental', enableBack: true, enableMenu: true}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/bookings.html',
          controller: 'bookings.controller',
        }
      }
    })

    .state('driverAccount.bookings.pickup', {
      data: {notInHistory: true},
      views: {
        'content@': {
          templateUrl: 'components/rental_view/pickup.html',
          controller: 'bookings.controller',
        }
      }
    })

    .state('driverAccount.bookings.success', {
      data: {notInHistory: true},
      views: {
        'content@': {
          templateUrl: 'components/rental_view/rental_success.html',
          controller: 'bookings.controller',
        }
      }
    })

    .state('driverAccount.onboarding', {
      abstract: true,
      url: '/onboarding',
      data: {navbarInfo: {title: 'Driver Documents'}},
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'driver.onboarding.controller',
        }
      }
    })

    .state('driverAccount.onboarding.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email', enableBack: true, enableNext: true}},
      views: {
        'content@': {
          controller: 'driver.onboarding.email.controller',
          templateUrl: 'app/users/form.html',
        }
      },
    })

    .state('driverAccount.onboarding.uploadDriverLicense', {
      url: '/driver-license',
      templateUrl: 'app/drivers/upload.html',
      controller: 'driver.onboarding.driverlicense.controller',
    })

    .state('driverAccount.onboarding.uploadFhvLicense', {
      url: '/fhv-license',
      templateUrl: 'app/drivers/upload.html',
      controller: 'driver.onboarding.fhvlicense.controller',
    })

    .state('driverAccount.onboarding.uploadDefensiveCert', {
      url: '/defensive-driving-certificate',
      templateUrl: 'app/drivers/upload.html',
      controller: 'driver.onboarding.defensivedriving.controller',
    })

    .state('driverAccount.onboarding.uploadAddressProof', {
      url: '/proof-of-address',
      templateUrl: 'app/drivers/upload.html',
      controller: 'driver.onboarding.proofaddress.controller',
    })

    .state('driverAccount.update', {
      abstract: true,
      url: '/update',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'driver.update.controller',
        }
      }
    })

    .state('driverAccount.update.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email', enableBack: true, enableSave: true}},
      templateUrl: 'app/users/form.html',
      controller: 'driver.update.email.controller',
    })

    .state('driverAccount.update.firstname', {
      url: '/firstname',
      data: {navbarInfo: {title: 'First name', enableBack: true, enableSave: true}},
      templateUrl: 'app/users/form.html',
      controller: 'driver.update.firstname.controller',
    })

    .state('driverAccount.update.lastname', {
      url: '/lastname',
      data: {navbarInfo: {title: 'Last name', enableBack: true, enableSave: true}},
      templateUrl: 'app/users/form.html',
      controller: 'driver.update.lastname.controller',
    })

    .state('driverAccount.update.phonenumber', {
      url: '/phonenumber',
      data: {navbarInfo: {title: 'Phone number', enableBack: true, enableSave: true}},
      templateUrl: 'app/users/form.html',
      controller: 'driver.update.phoneNumber.controller',
    })

    .state('driverAccount.update.uploadDriverLicense', {
      url: '/driver-license',
      data: {navbarInfo: {title: 'Driver License', enableBack: true}},
      templateUrl: 'app/drivers/upload.html',
      controller: 'driver.update.driverlicense.controller',
    })

    .state('driverAccount.update.uploadFhvLicense', {
      url: '/fhv-license',
      data: {navbarInfo: {title: 'Hack License', enableBack: true}},
      templateUrl: 'app/drivers/upload.html',
      controller: 'driver.update.fhvlicense.controller',
    })

    .state('driverAccount.update.uploadDefensiveCert', {
      url: '/defensive-driving-certificate',
      data: {navbarInfo: {title: 'Defensive Driving', enableBack: true}},
      templateUrl: 'app/drivers/upload.html',
      controller: 'driver.update.defensivedriving.controller',
    })

    .state('driverAccount.update.uploadAddressProof', {
      url: '/proof-of-address',
      data: {navbarInfo: {title: 'Proof of Address', enableBack: true}},
      templateUrl: 'app/drivers/upload.html',
      controller: 'driver.update.proofaddress.controller',
    })
})
