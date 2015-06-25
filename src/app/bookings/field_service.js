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
    Restangular
  ) {

  var self = this;

  var phoneFields = [{
    label: 'Enter your phone number to create an account',
    placeholder: '(222) 555-1234',
    name: 'phone_number',
    type: 'text',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  var createPasswordFields = [{
    label: 'Add a password',
    placeholder: '',
    name: 'password',
    type: 'password',
    minlength: '6',
    autoFocus: true,
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

  self.login = function (user) {
    AuthService.login(user).then(_createBooking);
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
          $state.go('login');
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
