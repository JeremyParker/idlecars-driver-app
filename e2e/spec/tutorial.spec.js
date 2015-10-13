'use strict';

describe('Listing page', function () {
  var helpers = require('../spec_helper');
  var listing = require('../cars/list.po');
  var tutorial = require('../components/tutorial.po');

  beforeEach(function () {
    helpers.startTest();
    browser.executeScript('return localStorage.removeItem("ngStorage-tutorialClosed");');
    browser.get('http://localhost:3000/index.html');
  });

  it('can display tutorial carousel', function () {
    tutorial.lastDotButton.click();
    browser.wait(function () { return tutorial.closeButton.isDisplayed() })
    tutorial.closeButton.click();

    expect(listing.carEls.count()).toBe(4);
  })
});
