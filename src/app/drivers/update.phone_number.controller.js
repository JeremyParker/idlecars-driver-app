'use strict';

angular.module('idlecars')
.controller('driver.update.phoneNumber.controller', function ($scope) {
  $scope.fields = [{
    label: 'Your phone number',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'text',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];
})
