'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope, $state, MyDriverService, AuthService, LANDING_STATE) {

  // TODO: we should move it to a presenter.
  $scope.accountInfo = [
    {title: 'First Name', link: '.update.firstname', content: 'first_name'},
    {title: 'Last Name', link: '.update.lastname', content: 'last_name'},
    {title: 'Email', link: '.update.email', content: 'email'},
    {title: 'Phone number', link: '.update.phonenumber', content: 'phone_number'},
    {title: 'Password', link: 'password.change', content: ''},
  ];

  $scope.driverDocuments = [
    {title: 'Driver License', link: '.update.uploadDriverLicense', image:'driver_license_image'},
    {title: 'FHV License', link: '.update.uploadFhvLicense', image: 'fhv_license_image'},
    {title: 'Defensive Driving', link: '.update.uploadDefensiveCert', image: 'defensive_cert_image'},
    {title: 'Proof of Address', link: '.update.uploadAddressProof', image: 'address_proof_image'}
  ];

  MyDriverService.get().then(
    function (me) {
      $scope.me = me;
    }
  )

  $scope.logout = function () {
    AuthService.logout();
    $scope.isLoggedIn = AuthService.isLoggedIn();
    $state.go(LANDING_STATE);
  };

  $scope.toggleSMS = function () {
    $scope.isBusy = true;
    var patchData = {sms_enabled: !$scope.me.sms_enabled};
    MyDriverService.patch(patchData)
    .then(function (me) { $scope.me = me })
    .finally(function () { $scope.isBusy = false })
  }
})
