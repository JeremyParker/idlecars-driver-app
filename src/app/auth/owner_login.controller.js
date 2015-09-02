'use strict';

angular.module('idlecars')
.controller('auth.owner-login.controller', function ($scope, $stateParams, Restangular, AppNotificationService, $state, AuthService) {

  // TODO: find a place to store stuff like this
  $scope.min_password = 2;

  if ($stateParams.username) {
    $scope.user = { username: $stateParams.username };
  }

  $scope.login = function() {
    AuthService.login($scope.user)
    .then(function() {
      $state.go('bankLink');
    })
    .catch(function(error) {
      $scope.user.password = '';
    });
  }
});
