'use strict';

angular.module('idlecars')
.controller('owners.bankLink.controller', function ($scope, $state, OwnerBankService, AppNotificationService) {

  var empty = OwnerBankService.ownerBankInfo.individual === undefined;

  if(empty) {
    OwnerBankService.get().then(function (owner) {
      $scope.params = { individual: owner.auth_users[0] };
    })
  }
  else {
    $scope.params = OwnerBankService.ownerBankInfo;
    OwnerBankService.ownerBankInfo = {};
  }

  $scope.saveForm = function () { OwnerBankService.ownerBankInfo = $scope.params }

  $scope.linkBankAccount = function() {
    if ($scope.bankLinkForm.$invalid) { return $scope.showError = true };

    // TODO: a real solution for TOS
    $scope.isBusy = true;

    var postParams = angular.copy($scope.params);
    postParams.individual.date_of_birth = _dateFormat($scope.params.individual.date_of_birth)

    OwnerBankService.post(postParams).then(function () {
      $scope.isBusy = false;
      $state.go('bankSuccess');
    }).catch(function () {
      $scope.isBusy = false;
      if (!AppNotificationService.messages) {
        AppNotificationService.push('Sorry, there was an error. Please try again.');
      }
    })
  }

  var _dateFormat = function (date) {
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    return date.getFullYear().toString() + month + day;
  }
});
