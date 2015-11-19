'use strict';

var CarsList = function() {
  this.carEls = element(by.css('body')).all(by.repeater('car in listings'));
  this.delorean = element(by.cssContainingText('h3', '1985 DMC Delorean'));
  this.filterButton = element(by.linkUiSref('.search'));
};

module.exports = new CarsList();
