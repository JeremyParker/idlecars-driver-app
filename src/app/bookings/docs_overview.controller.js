'use strict';

angular.module('idlecars')
.controller('docsOverview.controller', function ($scope) {
  $scope.driverDocuments = [
    {title: 'Driver License', isUploaded: true},
    {title: 'FHV License', isUploaded: true},
    {title: 'Defensive Driving', isUploaded: false},
    {title: 'Proof of Address', isUploaded: false},
  ];

})
