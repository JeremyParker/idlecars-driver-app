'use strict';

angular.module('idlecars')
.controller('upload.controller', function($scope, $timeout, $state, UserUploadService, MyDriverService, DocRouterService) {
  // TODO: this component is not a component at all.. it needs to be generified
  $scope.fileUrl = '/assets/images/' + $scope.fieldName + '.png';
  $scope.isBusy = false;

  MyDriverService.get().then(function(me) {
    if (!me[$scope.fieldName]) { return; }
    $scope.fileUrl = me[$scope.fieldName];
  });

  var _uploadDidComplete = function(fileUrl) {
    $timeout(function() {
      _associateToDriver(fileUrl).then(function () {
        $scope.isBusy = false;
        return DocRouterService.requiredDocState();
      }).then(function(nextState) {
        $state.go(nextState || 'bookingSuccess');
      });
    });
  };

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) { return; }

    $scope.isBusy = true;

    UserUploadService.upload({
      file: file,
    }).then(_uploadDidComplete);
  };

  var _associateToDriver = function(fileUrl) {
    var patchData = {};
    patchData[$scope.fieldName] = fileUrl;
    return MyDriverService.patch(patchData);
  };
});
