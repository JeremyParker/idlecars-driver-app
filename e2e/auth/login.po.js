'use strict';

var Login = function() {
  var self = this;

  self.phone = element(by.css('input[name=phone]'));
  self.password = element(by.css('input[name=password]'));
  self.forgotButton = element(by.css('.forgot-wrapper a'));
  self.loginButton = element(by.cssContainingText('span', 'Log in'));
  self.signupButton = element(by.cssContainingText('span', 'Sign up'));

  self.loginProcess = function (phoneNumber) {
    self.phone.sendKeys(phoneNumber)
    self.password.sendKeys('password');
    self.loginButton.click();
  }

  self.setToken = function (token) {
    browser.executeScript("localStorage.setItem('ngStorage-authToken', '\"" + token +"\"')");
  }
};

module.exports = new Login();
