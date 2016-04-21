'use strict';

angular.module('idlecars')
.controller('docsOverview.controller', function ($scope, $stateParams, MyDriverService, DocRouterService) {

  MyDriverService.get().then(function(me) {
    // TODO: combine this data with the data stored in the DocRouterService
    var docs = [
      {
        title: 'Driver License',
        sref: 'driverAccount.onboarding.uploadDriverLicense',
        isUploaded: me.driver_license_image,
      },
      {
        title: 'Hack License',
        sref: 'driverAccount.onboarding.uploadFhvLicense',
        isUploaded: me.fhv_license_image,
      },
      {
        title: 'MVR',
        sref: 'driverAccount.onboarding.uploadAddressProof',
        isUploaded: me.address_proof_image,
      },
    ]

    $scope.driverDocuments = docs;
  })
})
