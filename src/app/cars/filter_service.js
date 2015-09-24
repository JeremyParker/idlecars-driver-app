'use strict';

angular.module('idlecars')
.factory('CarFilterService', function() {
  var service = {
    allCars: [],
    orFilters: {},
    andFilters: {},
  };

  service.orFilter = function(feature, setting) {
    if (!service.orFilters[feature]) { service.orFilters[feature] = {}; }

    service.orFilters[feature][setting] = !service.orFilters[feature][setting];
  }

  service.andFilter = function(feature, setting) {
    if (!service.andFilters[feature]) { service.andFilters[feature] = {}; }

    service.andFilters[feature][setting] = !service.andFilters[feature][setting];
  }

  service.filterCars = function() {
    var filteredCars = service.allCars.filter(_doesMatchOrFilter);
    return filteredCars.filter(_doesMatchAndFilter)
  }

  var _doesMatchOrFilter = function(car) {
    for (var feature in service.orFilters) {
      if (!_doesMatchOrFeature(car, feature)) { return false; }
    }
    return true;
  }

  var _doesMatchAndFilter = function(car) {
    for (var feature in service.andFilters) {
      for (var setting in service.andFilters[feature]) {
        if (!service.andFilters[feature][setting]) { continue; }
        if (!_doesMatchAndFeature(car, feature, setting)) { return false; }
      }
    }
    return true;
  }

  var _doesMatchOrFeature = function(car, feature) {
    if (_isAllBlank(feature)) { return true; }

    for (var i=0; i<car.searchable[feature].length; i++) {
      if (service.orFilters[feature][car.searchable[feature][i]]) { return true; }
    }
    return false;
  }

  var _doesMatchAndFeature = function(car, feature, setting) {
    if (_isAllBlank(feature)) { return true; }

    for (var i=0; i<car.searchable[feature].length; i++) {
      if (car.searchable[feature][i] === setting) { return true; }
    }
    return false;
  }

  var _isAllBlank = function(feature) {
    for (var setting in service.orFilters[feature]) {
      if (service.orFilters[feature][setting]) { return false; }
    }
    for (var setting in service.andFilters[feature]) {
      if (service.andFilters[feature][setting]) { return false; }
    }
    return true;
  }

  return service;
})
