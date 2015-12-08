'use strict';

angular.module('idlecars')
.controller('user.update.controller', function ($scope, $rootScope, $stateParams, $timeout, UserService, AppUserService) {
  $scope.user = $stateParams.user || {};

  if (!$stateParams.user) {
    UserService.get().then(function (user) {
      $scope.user = angular.copy(user);
      $scope.validateForm();
    })
  };

  $rootScope.navSave = function() {
    UserService.patch($scope.$$childHead.user).then(AppUserService.userUpdated)
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid; })
  }
})

.controller('user.update.firstname.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  NavbarService.validateInit($scope);
})

.controller('user.update.lastname.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  NavbarService.validateInit($scope);
})

.controller('user.update.email.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Update your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  NavbarService.validateInit($scope);
})

.controller('user.update.phoneNumber.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Your phone number',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'tel',
    formatInput: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  NavbarService.validateInit($scope);
})
