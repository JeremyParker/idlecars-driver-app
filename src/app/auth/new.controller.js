'use strict';

angular.module('idlecars')
.controller('auth.new.controller', function ($scope, AuthService) {
  $scope.login = function() {
    AuthService.login($scope.user);
  };
});
