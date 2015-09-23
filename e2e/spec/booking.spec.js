'use strict';

describe('Driver in booking page', function () {
  var helpers = require('../spec_helper');
  var navbar = require('../components/navbar.po');
  var login = require('../auth/login.po');
  var listing = require('../cars/list.po');
  var carDetail = require('../cars/detail.po');
  var booking = require('../driver/booking.po');
  var uploadDocs = require('../driver/uploadDocs.po');
  var confirm = require(('../components/confirm.po'));

  beforeEach(function () {
    helpers.startTest();
  });

  it('can see upload docs state', function() {
    browser.get('http://localhost:3000/#/login');
    login.loginProcess('1234567892');
    navbar.menuButton.click();
    navbar.rentalButton.click();

    expect(booking.circles.count()).toBe(4);
    booking.upLoadButton.click();

    expect(uploadDocs.uploadTitle.getText()).toContain('Driver');
  });

  it('can cancel a booking', function() {
    login.setToken('without_docs_approved');
    browser.get('http://localhost:3000/#/account/bookings');
    booking.cancelButton.click();

    expect(confirm.title.getText()).toContain('Confirm');
    confirm.dismissButton.click();

    expect(confirm.title.isDisplayed()).toBeFalsy();
    booking.cancelButton.click();
    confirm.confirmButton.click();

    expect(booking.noBookingContent.getText()).toContain('No bookings')
  });

  it('can reserve a car', function() {
    login.setToken('without_booking');
    browser.get('http://localhost:3000/#/account/bookings');

    expect(booking.noBookingContent.getText()).toContain('No bookings');
    booking.findCarButton.click();

    listing.delorean.click();
    carDetail.bookingLink.click();

    expect(navbar.menuButton.isDisplayed()).toBeTruthy();
    browser.get('http://localhost:3000/#/account/bookings');

    expect(booking.status.getText()).toContain('Reserve');
  });

  it('can finish booking', function() {
    login.setToken('insurance_approved');
    browser.get('http://localhost:3000/#/account/bookings');

    expect(booking.status.getText()).toContain('Pick up');
    booking.pickupButton.click();
    booking.payButton.click();

    expect(booking.successTitle.isDisplayed()).toBeTruthy();
    booking.okButton.click();

    expect(booking.inProgressTitle.isDisplayed()).toBeTruthy();
    booking.carDetailAnchor.click();

    expect(carDetail.header.getText()).toContain('Benz');
  });
});
