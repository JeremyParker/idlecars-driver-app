'use strict';

angular.module('idlecars')
.directive('icUpload', function () {
  return {
    templateUrl: 'components/uploads/upload.html',
    controller: 'upload.controller',
    scope: {
      fieldName: "@",
      afterUploadSref: "@"
    },
  };
});
