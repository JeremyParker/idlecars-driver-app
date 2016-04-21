'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope, $state, MyDriverService, UserService, AuthService, LANDING_STATE) {

  // TODO: we should move it to a presenter.
  $scope.accountInfo = [
    {title: 'First Name', link: 'user.update.firstname', content: 'first_name'},
    {title: 'Last Name', link: 'user.update.lastname', content: 'last_name'},
    {title: 'Email', link: 'user.update.email', content: 'email'},
    {title: 'SSN', link: '.update.ssn', content: 'ssn'},
    {title: 'Phone number', link: 'user.update.phonenumber', content: 'phone_number'},
    {title: 'Password', link: 'password.change', content: ''},
  ];

  $scope.driverDocuments = [
    {title: 'Driver License', link: '.update.uploadDriverLicense', image:'driver_license_image'},
    {title: 'Hack License', link: '.update.uploadFhvLicense', image: 'fhv_license_image'},
    {title: 'MVR', link: '.update.uploadAddressProof', image: 'address_proof_image'}
  ];

  UserService.get().then(function (user) {
    $scope.user = angular.copy(user);
  })

  MyDriverService.get().then(function (driver) {
    $scope.driver = angular.copy(driver);
  })

  $scope.logout = function () {
    AuthService.logout();
    MyDriverService.clearCache();
    UserService.clearCache();
    $scope.isLoggedIn = AuthService.isLoggedIn();
    $state.go(LANDING_STATE);
  };

  $scope.toggleSMS = function () {
    $scope.isBusy = true;
    var patchData = {sms_enabled: !$scope.driver.sms_enabled};
    MyDriverService.patch(patchData)
    .then(function (driver) { $scope.driver = driver })
    .finally(function () { $scope.isBusy = false })
  }
})
