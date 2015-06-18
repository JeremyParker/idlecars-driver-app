'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope) {

  $scope.accountInfo = [
    {title: 'First Name', content: 'Chengxing'},
    {title: 'Last Name', content: 'Zhang'},
    {title: 'Email', content: 'craigstar@gmail.com'},
    {title: 'Phone', content: '917-376-8864'},
  ];

  $scope.driverDocuments = [
    {title: 'Driver License', image: '/assets/images/DriverLicense.png'},
    {title: 'FHV License', image: '/assets/images/FHVLicense.png'},
    {title: 'Defensive Driving'},
    {title: 'Proof of Address'},
  ];
})
