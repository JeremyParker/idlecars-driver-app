'use strict';

describe('listing page', function () {
  var helpers = require('../spec_helper');
  var navbar = require('../components/navbar.po');

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/index.html');
  });

  it('has a menu button', function() {
    navbar.menuButton.click();
    expect(navbar.homeButton.isDisplayed()).toBe(true);
    // expect(navbar.signupButton.isDisplayed()).toBe(true);
    expect(navbar.loginButton.isDisplayed()).toBe(true);
    expect(navbar.questionsButton.isDisplayed()).toBe(true);
  });
});
