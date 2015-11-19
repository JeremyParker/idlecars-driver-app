'use strict';

describe('sign up page', function () {
  var navbar = require('../components/navbar.po');
  var signup = require('../auth/signup.po');
  var carDetail = require('../listings/detail.po');
  var listing = require('../listings/list.po');
  var helpers = require('../spec_helper');

  describe('from menu button', function() {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/index.html');
      navbar.menuButton.click();
      navbar.signupButton.click();
    });

    it('should create an account', function() {
      signup.signupProcess();
      expect(listing.carEls.count()).toBe(4);
    });

  })

  describe('from a car', function () {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/#/listings/1');
      carDetail.bookingLink.click();
    });


    it('should create an account', function() {
      signup.signupProcess();
      expect(navbar.title.getText()).toEqual('Driver Documents');
    });
  });
});
