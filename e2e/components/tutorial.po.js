'use strict';

var Tutorial = function() {
  var self = this;

  self.lastDotButton = element(by.cssContainingText('.slick-dots button', '4'));
  self.closeButton = element(by.css('.tutorial-content .white-button'));
};

module.exports = new Tutorial();
