'use strict';

angular.module('idlecars')
.controller('bookings.showCtrl', function ($scope, $timeout, Upload, UserUploadService) {
  var user = {parse_id: 'Fmcb73mqWY'};

  var _setImageUrl = function(usersUploads) {
    // NOTE: $timeout makes sure that this "runs on the next digest cycle"
    // I don't really know what that means, but this works
    $timeout(function() {
      $scope.uploadUrl = usersUploads.get('driver_license_image').url();
    });
  };

  UserUploadService.get({
    user: user,
  }).then(_setImageUrl);

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) { return; }

    UserUploadService.upload({
      user: user,
      file: file,
    }).then(_setImageUrl);
  };
});
