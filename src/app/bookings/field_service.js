'use strict'

angular.module('idlecars')
.service('FieldService', function
  ( $stateParams,
    $state,
    $http,
    DriverService,
    MyDriverService,
    AuthService,
    DocRouterService,
    NewBookingService,
    Restangular,
    AppNotificationService
  ) {

  var self = this;

  var min_password = 2;

  var phoneFields = [{
    label: 'Your phone number',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'text',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  var createPasswordFields = [{
    label: 'Create a password',
    placeholder: 'Add a password',
    name: 'password',
    type: 'password',
    minlength: min_password,
    autoFocus: true,
  },
  {
    label: 'Confirm password',
    placeholder: 'Confirm password',
    name: 're_password',
    type: 'password',
    minlength: min_password,
  }];

  var emailFields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  var _createBooking = function () {
    NewBookingService.createBooking($stateParams.carId);
  }

  var _passwordConfirm = function () {
    return self.user_account.password === self.user_account.re_password
  }

  self.getLoginParams = function () {
    var loginParams = {
      username: self.user_account.phone_number,
      password: self.user_account.password,
    }
    return loginParams;
  }

  self.getMinPassword = function () {
    return min_password;
  };

  self.formParts = {
    'cars.detail.booking.phoneNumber': {
      fields: phoneFields,
      goNext: function () {
        var phoneNumber = Restangular.one('phone_numbers', self.user_account.phone_number);
        phoneNumber.get().then(function (response) {
          $state.go('login');
        }, function (error) {
          $state.go('^.createPassword');
        })
      },
    },
    'cars.detail.booking.createPassword': {
      fields: createPasswordFields,
      goNext: function () {
        if (_passwordConfirm()) {
          self.createDriver();
        }
        else {
          AppNotificationService.push('Sorry, password did not match')
        };
      },
    },
    'cars.detail.booking.email': {
      fields: emailFields,
      goNext: function () {
        self.saveEmail();
      },
    },
  }

  self.isValid = false;

  self.createDriver = function () {
    var user_account = self.user_account;

    var newDriver = new DriverService(user_account);
    newDriver.$save().then(function() {
      return AuthService.login(self.getLoginParams());
    }).then(_createBooking);
  }

  self.saveEmail =  function () {
    var patchData = {};
    patchData['email'] = self.user_account.email;
    return MyDriverService.patch(patchData).then(function () {
      return DocRouterService.requiredDocState();
    }).then(function(nextState) {
      $state.go(nextState || 'bookingSuccess');
    });
  }

  // TODO: move self to the navbar controller
  self.keyPressed = function ($event) {
    if ($event.which === 13 && self.isValid) {
      self.goNextState();
    };
  }

  self.goNextState = function () {
    var currentPart = self.formParts[$state.current.name];

    currentPart.goNext();
  }

})
