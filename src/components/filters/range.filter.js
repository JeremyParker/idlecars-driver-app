'use strict';

angular.module('icFilters')
.filter('attrInRange', function() {
  return function(items, attrKey, min, max) {
    if (!items) { return []; }

    return items.filter(function(item) {
      return item[attrKey] >= min && item[attrKey] < max;
    });
  }
});
