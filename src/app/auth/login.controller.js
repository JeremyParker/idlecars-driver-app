'use strict';

angular.module('idlecars')
.controller('auth.login.controller', function ($scope, FieldService, Restangular, AppNotificationService) {

  if (FieldService.user_account) {
    $scope.user = {username: FieldService.user_account.phone_number, password: ''};
  }

  $scope.login = function() {

    var phoneNumber = Restangular.one('phone_numbers', $scope.user.username);
    phoneNumber.get().then(function (response) {
      FieldService.login($scope.user);
    }, function (error) {
      AppNotificationService.push('Sorry, your account does not exist')
    })
    $scope.user.password = '';
  };
});
