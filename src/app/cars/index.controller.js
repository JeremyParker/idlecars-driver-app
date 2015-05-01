'use strict';

angular.module('idlecars')
.controller('cars.indexCtrl', function ($scope, $http, CarService, isRepeatVisitor, $rootScope) {
  CarService.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });

  // check the browser cookies, show welcome text at first visit
  isRepeatVisitor.checkNow();
})

.controller('modal.controller', function ($scope, $rootScope) {

  // colse button clicked
  $scope.closeModal = function() {
    $scope.modal_show = false;
    $rootScope.toDisable = false;
  }
})


