'use strict'

angular.module('idlecars')
.service('FieldService', function ($stateParams, $state, $http, DriverService, MyDriverService, AuthService, NewBookingService, Restangular) {

  var self = this;

  var phoneFields = [{
    label: 'Your phone number',
    placeholder: '(222)-555-1234',
    name: 'phone_number',
    type: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  var createPasswordFields = [{
    label: 'Create Your password',
    placeholder: '',
    name: 'password',
    type: 'password',
    minlength: '6',
    autoFocus: true,
  }];

  var enterPasswordFields = [{
    label: 'Enter Your password',
    placeholder: '',
    name: 'password',
    type: 'password',
    minlength: '6',
    autoFocus: true,
  }];

  var emailFields = [{
    label: 'Your email address',
    placeholder: 'someone@example.com',
    name: 'email',
    type: 'email',
    // TODO - we must either validate as strictly as backend, or handle rejected email values.
    pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
    maxlength: '254',
    autoFocus: true,
  }];

  var _createBooking = function() {
    NewBookingService.createBooking($stateParams.carId);
  }

  self.getLoginParams = function () {
    var loginParams = {
      username: self.user_account.phone_number,
      password: self.user_account.password,
    }
    return loginParams;
  }

  self.formParts = {
    'cars.detail.booking.phoneNumber': {
      fields: phoneFields,
      goNext: function () {
        var phoneNumber = Restangular.one('phone_numbers', self.user_account.phone_number);
        phoneNumber.get().then(function (response) {
          $state.go('^.enterPassword');
        }, function (error) {
          $state.go('^.createPassword');
        })
      },
    },
    'cars.detail.booking.createPassword': {
      fields: createPasswordFields,
      goNext: function () {
        self.createDriver();
      },
    },
    'cars.detail.booking.email': {
      fields: emailFields,
      goNext: function () {
        self.saveEmail();
      },
    },
    'cars.detail.booking.enterPassword': {
      fields: enterPasswordFields,
      goNext: function () {
        AuthService.login(self.getLoginParams()).then(_createBooking);
      },
    }
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
    return MyDriverService.patch(patchData).then(function() {
      $state.go('driverAccount.uploadDriverLicense');
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
