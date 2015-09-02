'use strict';

var OwnerBankForm = function() {
  var self = this;

  self.firstName = element(by.css('input[name=first_name]'));
  self.lastName = element(by.css('input[name=last_name]'));
  self.email = element(by.css('input[name=email]'));
  self.dateOfBirth = element(by.css('input[name=date_of_birth'));

  self.streetAddress = element(by.css('input[name=street_address]'));
  self.locality = element(by.css('input[name=locality]'));
  self.region = element(by.css('input[name=region]'));
  self.postalCode = element(by.css('input[name=postal_code'));

  self.routingNumber = element(by.css('input[name=routing_number]'));
  self.accountNumber = element(by.css('input[name=account_number]'));

  self.accountTypePersonal = element(by.css('input[name=account_type_personal'));
  self.accountTypeBusiness = element(by.css('input[name=account_type_business]'));

  self.legalName = element(by.css('input[name=legal_name]'));
  self.taxId = element(by.css('input[name=tax_id'));

  self.tos = element(by.css('input[name=tos'));

  self.submitButton = element(by.cssContainingText('button', 'Submit'));
};

module.exports = new OwnerBankForm();
