'use strict';

angular.module('idlecars')
.controller('driver.onboarding.email.controller', function ($scope, $rootScope, $state, MyDriverService, RequireAuthService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    MyDriverService.patch($scope.user).then(RequireAuthService.resolve)
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }
});
