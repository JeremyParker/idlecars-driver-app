'use strict';

var CarsDetail = function() {
  this.header = element(by.css('.headline-features h2'));
  this.bookingLink = element(by.css('.floater .request'));
  this.helpButton = element(by.css('.floater .help'));
};

module.exports = new CarsDetail();
