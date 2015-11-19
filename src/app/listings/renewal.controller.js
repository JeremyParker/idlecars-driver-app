'use strict';

angular.module('idlecars')
.controller('renewal.showCtrl', function ($scope, $stateParams, RewnewalService) {
  $scope.message = "One moment while we update your listing..."

  RewnewalService
    .renew({renewalId: $stateParams.renewalId, state: 2})
    .$promise.then(function() {
      $scope.message = "Your listing is active."
    });
});
