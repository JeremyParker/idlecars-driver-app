'use strict';

angular.module('idlecars')
.controller('auth.changePassword.controller', function ($scope, $state, Restangular, UserService, AppNotificationService) {
  $scope.label = 'We will send you instructions on how to change your password.';
  $scope.button = 'Send me instructions';

  $scope.buttonClick = function () {
    UserService.get().then(function (me) {
      var postParams = { phone_number: me.phone_number };
      var passwordReset = Restangular.all('password').all('reset_setups');
      passwordReset.post(postParams)
      .then(function() {
        // TODO(JP) - hook up SMS service and $state.go to the SMS screen that @craigstar made.
        return $state.go('driverAccount');
      })
      .then(function() {
        AppNotificationService.push({success: 'A text message has been sent. If you disabled SMS texting, check your email.'});
      });
    })
  }
})
