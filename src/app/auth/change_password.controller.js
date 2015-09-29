'use strict';

angular.module('idlecars')
.controller('auth.changePassword.controller', function ($scope, $state, Restangular, MyDriverService, AppNotificationService) {
  $scope.label = 'We will send you an email with instructions on how to change your password.';
  $scope.button = 'Send me an email';

  $scope.buttonClick = function () {
    MyDriverService.get().then(function (me) {
      var postParams = { phone_number: me.phone_number };
      var passwordReset = Restangular.all('password').all('reset_setups');
      passwordReset.post(postParams)
      .then(function() {
        // TODO(JP) - hook up SMS service and $state.go to the SMS screen that @craigstar made.
        return $state.go('driverAccount');
      })
      .then(function() {
        AppNotificationService.push({success: 'An email has been sent to your address. Please check your email.'});
      });
    })
  }
})
