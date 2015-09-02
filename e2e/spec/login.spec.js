'use strict';

describe('log in page', function () {
  var listing = require('../cars/list.po');
  var navbar = require('../components/navbar.po');
  var login = require('../auth/login.po');
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/index.html');

    navbar.menuButton.click();
    navbar.loginButton.click();
  });

  it('can log in', function() {
    login.loginProcess();
    expect(listing.carEls.count()).toBe(4);
  });

  // it('can go to sign up page', function() {
  //   login.signupButton.click();
  //   expect(navbar.title.getText()).toEqual('Sign up');
  // })
});
