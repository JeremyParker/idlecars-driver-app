'use strict';

angular.module('idlecars')
.controller('upload.controller', function($scope, $timeout, $q, $state, UserUploadService, MyDriverService, BookingService, DocRouterService) {
  // TODO: this component is not a component at all.. it needs to be generified
  $scope.fileUrl = '/assets/images/' + $scope.fieldName + '.png';
  $scope.isBusy = false;

  MyDriverService.get().then(function(me) {
    var completion = MyDriverService.getCompletion(me);
    $scope.$emit('completion', completion);

    if (!me[$scope.fieldName]) { return; }
    $scope.fileUrl = me[$scope.fieldName];
  });

  var _uploadDidComplete = function(fileUrl) {
    $timeout(function() {
      _associateToDriver(fileUrl).then(function () {
        $scope.isBusy = false;
        return $scope.afterUploadSref || DocRouterService.requiredDocState();
      }).then(function(nextState) {
        if (nextState) { return $state.go(nextState) }
        // TODO: we could have better solution than then in then
        if (BookingService.bookings.length) { return $state.go('driverAccount.bookings') };
        $state.go('driverAccount');
      });
    });
  };

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) { return; }

    $timeout(function () {
      $scope.isBusy = true;
    })

    _resizeImage(file).then(function (fileData) {

      UserUploadService.upload({
        fileName: file.name,
        fileData: fileData,
      }).then(_uploadDidComplete);
    })
  }

  var _dataUrlToData = function (dataURL) {
    return dataURL.split(',')[1];
  }

  var _getQuality = function (sizeInByte) {
    var size = sizeInByte/1000;

    if (size < 500) { return 0.99; }
    else if (size < 1000) { return 0.99+(0.73-0.99)/500*(size-500); }
    else if (size < 7000) { return 0.72+(0.65-0.72)/6000*(size-1000); }
    else if (size < 10000) { return 0.65+(0.60-0.65)/3000*(size-7000); }
    else { return 0.60; }
  }

  var _resizeImage = function (file) {
    var deferred = $q.defer();
    var reader = new FileReader();
    reader.onloadend = function() {

      var tempImg = new Image();
      tempImg.src = reader.result;
      tempImg.onload = function() {

        var MAX_WIDTH = 1500;
        var MAX_HEIGHT = 1500;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
          if (tempW > MAX_WIDTH) {
             tempH *= MAX_WIDTH / tempW;
             tempW = MAX_WIDTH;
          }
        }
        else {
          if (tempH > MAX_HEIGHT) {
             tempW *= MAX_HEIGHT / tempH;
             tempH = MAX_HEIGHT;
          }
        }

        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg", _getQuality(file.size));

        var fileData = _dataUrlToData(dataURL);
        deferred.resolve(fileData);
      }
    }
    reader.readAsDataURL(file);
    return deferred.promise;
  }

  var _associateToDriver = function(fileUrl) {
    var patchData = {};
    patchData[$scope.fieldName] = fileUrl;
    return MyDriverService.patch(patchData);
  };
});
