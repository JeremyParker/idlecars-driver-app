'use strict';

angular.module('idlecars')
.controller('docsOverview.controller', function ($scope, $stateParams, MyDriverService, DocRouterService) {
  if ($stateParams.goRequiredDoc) {
    DocRouterService.goRequiredDoc();
  };

  MyDriverService.get().then(function(me) {
    // TODO: combine this data with the data stored in the DocRouterService
    var docs = [
      {
        title: 'Driver License',
        sref: 'driverAccount.uploadDriverLicense',
        isUploaded: me.driver_license_image,
      },
      {
        title: 'FHV License',
        sref: 'driverAccount.uploadFhvLicense',
        isUploaded: me.fhv_license_image,
      },
      {
        title: 'Proof of Address',
        sref: 'driverAccount.uploadAddressProof',
        isUploaded: me.address_proof_image,
      },
      {
        title: 'Defensive Driving',
        sref: 'driverAccount.uploadDefensiveCert',
        isUploaded: me.defensive_cert_image,
      },
    ]

    $scope.driverDocuments = docs;
  })
})
