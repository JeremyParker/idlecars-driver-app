'use strict';

var Signup = function() {
  var navbar = require('../components/navbar.po');
  var self = this;

  self.phone = element(by.css('input[name=phone_number]'));
  self.login = element(by.cssContainingText('a', 'Log in'));
  self.password1 = element(by.css('input[name=password'));
  self.password2 = element(by.css('input[name=re_password'));
  self.email = element(by.css('input[name=email]'));
  self.referral = element(by.css('input[name=invitor_code'));

  self.signupProcess = function () {
    self.phone.sendKeys('1234567890');
    navbar.nextButton.click();
    self.password1.sendKeys('12');
    self.password2.sendKeys('12');
    navbar.nextButton.click();
    self.email.sendKeys('test@gmail.com');
    navbar.nextButton.click();
    // TODO: we need to add referral test
    // self.referral.sendKeys('REFERRAL');
    navbar.nextButton.click();
  }
};

module.exports = new Signup();
