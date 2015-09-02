'use strict';

describe('As an owner I can', function () {
  var helpers = require('../spec_helper');
  var navbar = require('../components/navbar.po');
  var signup = require('../auth/signup.po');
  var bankForm = require('../owner/bank_form.po');

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/#/owner_reset_password/test');
  });

  it('reset my password and submit my bank info', function() {
    signup.password1.sendKeys('12');
    signup.password2.sendKeys('12');
    navbar.saveButton.click();
    expect(navbar.title.getText()).toEqual('Link Bank Account');

    bankForm.firstName.sendKeys('test');
    bankForm.lastName.sendKeys('e2e');
    bankForm.email.sendKeys('test@idlecars.com');
    bankForm.dateOfBirth.sendKeys('12121990');

    bankForm.streetAddress.sendKeys('white house');
    bankForm.locality.sendKeys('1600 Pennsylvania Ave NW');
    bankForm.region.sendKeys('Washington');
    bankForm.postalCode.sendKeys('20500');

    bankForm.routingNumber.sendKeys('071101307');
    bankForm.accountNumber.sendKeys('1123581321');

    bankForm.tos.click();
    bankForm.submitButton.click();

    expect(navbar.title.getText()).toEqual('');
  });
})

