'use strict';

var Booking = function() {
  var self = this;

  self.icons = element.all(by.repeater('i in stepsArray'));
  self.status = element(by.css('.booking-header .bold'));
  self.carName = element(by.css('section h2'));
  self.noBookingContent = element(by.css('.no-booking p'));
  self.findCarButton = element(by.css('.no-booking a'));
  self.upLoadButton = element(by.cssContainingText('button', 'Upload'));
  self.cancelButton = element(by.css('.cancel-button'));
  self.carDetailAnchor = element(by.cssContainingText('a', 'details'));
  self.changeDateButton = element(by.cssContainingText('button', 'Change'));
  self.checkOutButton = element(by.cssContainingText('button', 'Check'));
  self.pickupButton = element(by.cssContainingText('button', 'Pick'));
  self.payButton = element(by.cssContainingText('button', 'Pay'));
  self.okButton = element(by.cssContainingText('button', 'OK'));
  self.phoneButton = element(by.cssContainingText('a', 'IDLE-CARS'));

  self.checkbox_1 = element(by.css('check-mark[status=isChecked0] input[type=checkbox]'));
  self.checkbox_2 = element(by.css('check-mark[status=isChecked1] input[type=checkbox]'));
  self.checkbox_3 = element(by.css('check-mark[status=isChecked2] input[type=checkbox]'));
  self.checkbox_4 = element(by.css('check-mark[status=isChecked3] input[type=checkbox]'));
  self.checkbox_5 = element(by.css('check-mark[status=isChecked4] input[type=checkbox]'));
  self.checkbox_6 = element(by.css('check-mark[status=isChecked5] input[type=checkbox]'));

  self.successTitle = element(by.cssContainingText('h3', 'Success'));
  self.inProgressTitle = element(by.cssContainingText('.bold', 'RENTAL'));
};

module.exports = new Booking();
