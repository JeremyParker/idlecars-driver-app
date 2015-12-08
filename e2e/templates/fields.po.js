'use strict';

var displayed = function(elem) {
  return elem.isDisplayed();
}

var Fields = function() {
  var self = this;

  self.phone = element(by.css('input[name=phone_number]'));
  self.loginButton = element(by.cssContainingText('a', 'Log in'));
  self.password1 = element(by.css('input[name=password'));
  self.password2 = element(by.css('input[name=re_password'));
  self.email = element(by.css('input[name=email]'));
  self.firstname = element(by.css('input[name=first_name]'));
  self.lastname = element(by.css('input[name=last_name]'));

  self.company = element(by.css('input[name=company_name]'));
  self.zipcode = element(by.css('input[name=zipcode]'));

  self.plate = element(by.css('input[name=plate]'));
  self.rent = element(by.css('input[name=solo_cost]'));
  self.deposit = element(by.css('input[name=solo_deposit]'));

  self.bankLinkButton = element.all(by.buttonText('Enter bank details')).filter(displayed).first();
  self.myCarsButton = element.all(by.buttonText('My cars')).filter(displayed).first();

  self.confirmCarButton = element.all(by.buttonText('That\'s my car')).filter(displayed).first();
  self.declineCarButton = element.all(by.buttonText('That\'s not my car')).filter(displayed).first();
};

module.exports = new Fields();
