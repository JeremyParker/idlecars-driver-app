'use strict';

describe('Getting to a car detail page', function () {
  var carDetail = require('../listings/detail.po');
  var helpers = require('../spec_helper');
  var listing = require('../listings/list.po');
  var login = require('../auth/login.po');
  var booking = require('../driver/booking.po');

  describe('from the car listing', function () {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/index.html');
      listing.delorean.click();
    });

    it('includes a header', function() {
      expect(carDetail.header.getText()).toBe('1985 DMC Delorean');
      expect(carDetail.bookingLink.getText()).toBe('Reserve this car');
    });
  });

  describe('from deep linking', function () {
    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/#/listings/1');
    });

    it('includes a header', function() {
      expect(carDetail.header.getText()).toBe('1985 DMC Delorean');
      expect(carDetail.bookingLink.getText()).toBe('Reserve this car');
      expect(carDetail.helpButton.getText()).toBe('Help');
    });
  });

  describe('from booking page', function () {
    beforeEach(function () {
      helpers.startTest();
      login.setToken('insurance_approved');
    })

    it('booking link text is My Booking Details', function () {
      browser.get('http://localhost:3000/#/account/bookings');
      booking.carDetailAnchor.click();
      expect(carDetail.bookingLink.getText()).toBe('My rental details');
    })
  })
})


