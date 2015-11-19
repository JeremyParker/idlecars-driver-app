'use strict';

var FilterModal = function() {
  this.luxToggle = element(by.css('[ng-click^="didFilter(\'lux_level\'"]'));
};

module.exports = new FilterModal();
