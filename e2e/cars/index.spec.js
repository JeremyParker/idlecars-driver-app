'use strict';

describe('Listing cars', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./index.po');
  });

  it('lists 2 cars', function () {
    expect(page.carEls.count()).toBe(2);
  });

});
