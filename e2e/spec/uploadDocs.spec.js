'use strict';

describe('As a driver, I can upload my docs', function () {
  var path = require('path');
  var account = require('../driver/account.po');
  var carDetail = require('../cars/detail.po');
  var navbar = require('../components/navbar.po');
  var signup = require('../auth/signup.po');
  var uploadDocs = require('../driver/uploadDocs.po');
  var success = require('../booking/success_page.po');
  var docsOverview = require('../booking/docs_overview.po');
  var helpers = require('../spec_helper');

  var oldUrl = 'http://localhost:3000/#/account/onboarding/driver-license';

  var browserWait = function () {
    browser.wait(function() {
      return browser.getCurrentUrl().then(function (currentUrl) {
        var equality = oldUrl !== currentUrl;
        oldUrl = currentUrl;
        return equality;
      })
    })
  }

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/#/cars/1');
    carDetail.bookingLink.click();
  });

  it('with booking a car', function() {
    var fileToUpload = '../../src/assets/images/Mark_Check.png';
    var absolutePath = path.resolve(__dirname, fileToUpload);

    signup.signupProcess();
    expect(uploadDocs.progressBar.isDisplayed()).toBe(true);

    uploadDocs.skipButton.click();
    expect(docsOverview.documents.count()).toBe(4);
    docsOverview.driverLicense.click();
    expect(uploadDocs.uploadTitle.getText()).toContain('Driver');
    uploadDocs.skipButton.click();
    docsOverview.accountButton.click();
    expect(account.userInfo.count()).toBe(5);

    navbar.backButton.click();
    docsOverview.driverLicense.click();

    expect(uploadDocs.uploadTitle.getText()).toContain('Driver');
    uploadDocs.uploadButton.sendKeys(absolutePath);
    browserWait();

    expect(uploadDocs.uploadTitle.getText()).toContain('TLC');
    uploadDocs.uploadButton.sendKeys(absolutePath);
    browserWait();

    expect(uploadDocs.uploadTitle.getText()).toContain('Defensive');
    uploadDocs.uploadButton.sendKeys(absolutePath);
    browserWait();

    expect(uploadDocs.uploadTitle.getText()).toContain('address');
    uploadDocs.uploadButton.sendKeys(absolutePath);
    browserWait();

    expect(success.title.getText()).toContain('Complete');
    success.rentalButton.click();
    expect(navbar.title.getText()).toContain('Rental');
  });
});
