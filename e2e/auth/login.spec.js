'use strict';

describe('log in page', function () {
  var index = require('../cars/index.po');
  var navbar = require('../navbar/navbar.po');
  var page = require('./login.po');
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/index.html');

    navbar.menu.click();
    navbar.loginButton.click();
  });

  it('can log in', function() {
    page.loginProcess();
    expect(index.carEls.count()).toBe(4);
  });

  it('can go to sign up page', function() {
    page.signupButton.click();
    expect(navbar.title.getText()).toEqual('Sign up');
  })
});
