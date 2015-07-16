'use strict';

angular.module('idlecars')
.controller('cars.list.controller', function ($scope, $timeout, CarService, attrInRangeFilter) {
  var _allCars = [];

  CarService.query().$promise.then(function(cars) {
    _allCars = cars;
    _filterCars();
  });

  var costBuckets = {
    0: {name: 'any price', min: 0, max: 9999},
    1: {name: 'less than $50', min: 0, max: 50},
    2: {name: '$50 to $75', min: 50, max: 75},
    3: {name: '$75 to $100', min: 75, max: 100},
    4: {name: '$100 or more', min: 100, max: 9999},
  }

  $scope.$on("slideEnded", function() {
    $timeout(_filterCars);
  });

  var _filterCars = function() {
    var bucket = costBuckets[$scope.costBucket];

    $scope.costFilterLabel = bucket.name;
    $scope.cars = attrInRangeFilter(_allCars, 'cost', bucket.min, bucket.max);
  }
})
