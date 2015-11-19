'use strict';

describe('Listing page', function () {
  var helpers = require('../spec_helper');
  var faq = require('../components/faq.po');
  var listing = require('../listings/list.po');
  var login = require('../auth/login.po');
  var navbar = require('../components/navbar.po');
  var account = require('../driver/account.po');
  var uploadDocs = require('../driver/uploadDocs.po');

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/index.html');
  });

  it('lists 4 cars and menu buttons should work', function () {
    expect(listing.carEls.count()).toBe(4);

    navbar.menuButton.click();
    navbar.homeButton.click();
    expect(listing.carEls.count()).toBe(4);

    navbar.menuButton.click();
    navbar.questionsButton.click();
    expect(faq.title.getText()).toContain('questions');
  });

  it('My account should work', function () {
    navbar.menuButton.click();
    navbar.loginButton.click();
    login.loginProcess('1234567892');
    navbar.menuButton.click();
    navbar.accountButton.click();
    expect(account.userInfo.count()).toBe(5);

    account.firstName.click();
    uploadDocs.firstName.sendKeys('my');
    navbar.saveButton.click();
    expect(account.firstName.getText()).toContain('Tommy');

    account.driverLicense.click();
    expect(navbar.title.getText()).toContain('Driver');
  })
});
