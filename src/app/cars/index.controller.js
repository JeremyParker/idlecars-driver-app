'use strict';

angular.module('idlecars')
.controller('cars.indexCtrl', function ($scope, CarService) {
  CarService.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });
})
