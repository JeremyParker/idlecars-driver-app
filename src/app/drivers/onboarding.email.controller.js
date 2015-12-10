'use strict';

angular.module('idlecars')
.controller('driver.onboarding.email.controller', function ($scope, $rootScope, $timeout, $state, MyDriverService) {
  if (!$scope.user) { $scope.user = {} }

  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    MyDriverService.patch($scope.user).then(function () {
      $state.go('^.referral');
    })
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.fieldForm.$valid })
  }
})

.controller('driver.onboarding.referral.controller', function ($scope, $rootScope, $timeout, MyDriverService, RequireAuthService) {
  if (!$scope.user) { $scope.user = {} }

  $scope.fields = [{
    label: 'Enter your referral code (optional)',
    name: 'invitor_code',
    type: 'text',
    maxlength: '254',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    MyDriverService.patch($scope.user).then(RequireAuthService.resolve)
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.fieldForm.$valid })
  }
});
