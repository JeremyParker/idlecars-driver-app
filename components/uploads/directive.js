'use strict';

angular.module('idlecars')
.directive('icUpload', function () {
  return {
    templateUrl: 'shared/components/uploads/upload.html',
    controller: 'upload.controller',
    scope: {
      fieldName: "@",
      afterUploadSref: "@"
    },
  };
});
