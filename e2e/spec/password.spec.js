'use strict';

describe('password', function () {
  var notice = require('../components/app_notifications.po');
  var navbar = require('../components/navbar.po');
  var login = require('../auth/login.po');
  var fields = require('../templates/fields.po');
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
  });

  it('was forgot', function() {
    browser.get('http://localhost:3000/#/login');
    login.forgotButton.click();
    fields.phone.sendKeys('9876342342'); // this is a wrong number
    navbar.nextButton.click();
    expect(notice.message.getText()).toContain('Sorry');
    notice.message.click();

    fields.phone.clear();
    fields.phone.sendKeys('9876543210');
    navbar.nextButton.click();
    expect(notice.message.getText()).toContain('A text message has been sent.');
    notice.message.click();
  });

  describe('can be reset', function () {

    it('successfully', function() {
      browser.get('http://localhost:3000/#/reset_password/test');
      fields.password1.sendKeys('12');
      fields.password2.sendKeys('12');
      navbar.saveButton.click();
      expect(notice.message.getText()).toContain('Your password has been set.');
      notice.message.click();
    });

    it('unsuccessfully', function() {
      browser.get('http://localhost:3000/#/reset_password/unsuccessfully');
      fields.password1.sendKeys('12');
      fields.password2.sendKeys('12');
      navbar.saveButton.click();
      expect(notice.message.getText()).toContain('Unable to verify user.');
      notice.message.click();
    });
  })
});
