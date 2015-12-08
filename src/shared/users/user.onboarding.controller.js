'use strict';

angular.module('idlecars')

.controller('user.onboarding.controller', function ($scope, $rootScope, $timeout, UserService) {
  $scope.user = {};

  UserService.get().then(function (user) {
    $scope.user = user;
    $scope.validateForm();
  })

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
  }

  $rootScope.navGoNext = function() {
    UserService.patch($scope.user).then($scope.$$childHead.postPatch);
  }
})

.controller('user.onboarding.email.controller', function ($scope, AppUserService, NavbarService) {
  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $scope.postPatch = AppUserService.emailEntered;

  NavbarService.validateInit($scope);
})

.controller('user.onboarding.firstname.controller', function ($scope, AppUserService, NavbarService) {
  $scope.fields = [{
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $scope.postPatch = AppUserService.firstnameEntered;

  NavbarService.validateInit($scope);
})

.controller('user.onboarding.lastname.controller', function ($scope, AppUserService, NavbarService) {
  $scope.fields = [{
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $scope.postPatch = AppUserService.lastnameEntered;

  NavbarService.validateInit($scope);
})
