'use strict';

var UploadDocs = function() {
  var self = this;

  self.firstName = element(by.css('input[name=first_name]'));
  self.lastName = element(by.css('input[name=last_name]'));
  self.uploadButton = element(by.css('input[type=file]'));
  self.uploadTitle = element(by.css('.upload-title'));
  self.progressBar = element(by.css('progress-bar'));
  self.skipButton = element(by.cssContainingText('a', 'skip for now'));
};

module.exports = new UploadDocs();
