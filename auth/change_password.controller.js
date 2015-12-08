'use strict';

angular.module('idlecars')
.controller('auth.changePassword.controller', function ($scope, Restangular, UserService, AppNotificationService, AppAuthService) {
  var buttonClick = function () {
    UserService.get().then(function (me) {
      var postParams = { phone_number: me.phone_number };
      var passwordReset = Restangular.all('password').all('reset_setups');
      passwordReset.post(postParams)
      .then(function() {
        AppNotificationService.push({success: 'A text message has been sent. If you disabled SMS texting, check your email.'});
      })
      .then(AppAuthService.passwordChanged);
    })
  }

  $scope.label = 'We will send you instructions on how to change your password.';

  $scope.buttons = [{
    value: 'Send me instructions',
    click: buttonClick,
  }]
})
