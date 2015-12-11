'use strict';

var Success = function() {
  var self = this;

  self.title = element(by.css('h1'));
};

module.exports = new Success();
