'use strict';

angular.module('idlecars')
.controller('auth.new.controller', function ($scope, AuthService, HistoryService) {
  $scope.login = function() {
    AuthService.login($scope.user).then(function() {
      HistoryService.goPreviousState();
    });
  };
});
