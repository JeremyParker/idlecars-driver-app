angular.module('idlecars')
.factory('UserUploadService', function($q) {
  // TODO: get keys from config
  Parse.initialize("ltjv77iZ50v0g4Czpd6nbcxGgNb0McnPdJ5v5kcj", "zncD5UiutU0xRXbG9DCTYSHP6XmBGykSRYzxiq8K");

  var upload = function(options) {
    var parseFile = new Parse.File(options.fileName, {base64: options.fileData});

    return $q(function(resolve, reject) {
      parseFile.save().then(function(remoteFile) {
        resolve(_secureUrl(remoteFile.url()));
      });
    });
  };

  var _secureUrl = function(insecureUrl) {
    if (!insecureUrl) { return; }

    // HACK: we want to serve the images over https to make sure the urls are secret
    // here we assume that parse is using s3 on the backend
    return insecureUrl.replace(/^http:\/\//, 'https://s3.amazonaws.com/');
  }

  return {
    upload: upload,
  };
});
