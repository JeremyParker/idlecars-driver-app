'use strict';

angular.module('idlecars')
.factory('AuthService', function(TokenService, $http) {
  var service = {};

  service.login = function(params) {
    var newToken = new TokenService(params);
    return newToken.$save().then(function(data) {
      service.token = data.token;
      $http.defaults.headers.common['Authorization']= 'Token ' + data.token;
    });
  };

  service.requireLogin = function() {
    // TODO:
    // check to see if we have a token
    // if not, redirect to login page
  };

  return service;
});
