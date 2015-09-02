'use strict';

angular.module('idlecars')
.controller('owners.bankLink.controller', function ($scope, $state, Restangular, OwnerBankService, AppNotificationService) {

  $scope.params = OwnerBankService.ownerBankInfo;
  OwnerBankService.ownerBankInfo = {};

  $scope.saveForm = function () { OwnerBankService.ownerBankInfo = $scope.params }

  $scope.linkBankAccount = function() {
    // TODO: a real solution for TOS
    $scope.isBusy = true;

    var postParams = angular.copy($scope.params);
    postParams.individual.date_of_birth = _dateFormat($scope.params.individual.date_of_birth)

    Restangular.one('owners', 'me').all('bank_link').post(postParams).then(function () {
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
