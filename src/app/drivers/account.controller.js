'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope, $state, MyDriverService) {

  // TODO: we should move it to a presenter.
  var accountInfoFields = {
    first_name: {title: 'First Name', link: '.update.name'},
    last_name: {title: 'Last Name', link: '.update.name'},
    email: {title: 'Email', link: '.update.email'},
  };

  var driverDocumentsFields = {
    driver_license_image: {title: 'Driver License', link: '.update.uploadDriverLicense'},
    fhv_license_image: {title: 'FHV License', link: '.update.uploadFhvLicense'},
    defensive_cert_image: {title: 'Defensive Driving', link: '.update.uploadDefensiveCert'},
    address_proof_image: {title: 'Proof of Address', link: '.update.uploadAddressProof'}
  };

  $scope.driverDocuments = [];
  $scope.accountInfo = [];

  MyDriverService.get().then(
    function (me) {
      $scope.allDocsCompleted = me.all_docs_uploaded;

      for (var key in accountInfoFields) {
        $scope.accountInfo.push({title: accountInfoFields[key].title, content: me[key], link: accountInfoFields[key].link});
      }

      for (var key in driverDocumentsFields) {
        var image = null;
        if (me[key] && me[key] != '') {
          image = me[key];
        }
        $scope.driverDocuments.push({title: driverDocumentsFields[key].title, image: image, link: driverDocumentsFields[key].link});
      }
    }
  )

})
