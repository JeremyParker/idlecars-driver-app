'use strict';

var DocsOverview = function() {
  var self = this;

  self.documents = element.all(by.repeater('item in driverDocuments'));
  self.driverLicense = element.all(by.repeater('item in driverDocuments')).get(0);
  self.hackLicense = element.all(by.repeater('item in driverDocuments')).get(1);
  self.defensiveDriving = element.all(by.repeater('item in driverDocuments')).get(2);
  self.proofAddress = element.all(by.repeater('item in driverDocuments')).get(3);

  self.rentalButton = element(by.css('a.button'));

};

module.exports = new DocsOverview();
