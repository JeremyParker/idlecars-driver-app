'use strict';

var Confirm = function() {
  var self = this;

  self.title = element(by.css('.popup-container h3'));
  self.dismissButton = element(by.cssContainingText('button', 'No'));
  self.confirmButton = element(by.cssContainingText('button', 'Yes'));
};

module.exports = new Confirm();
