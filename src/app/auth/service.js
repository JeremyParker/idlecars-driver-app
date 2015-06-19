'use strict';

angular.module('idlecars')
.factory('AuthService', function(TokenService, $http, $localStorage) {
  var service = {};

  var _setAuthHeader = function() {
    if (service.token) {
      $http.defaults.headers.common['Authorization']= 'Token ' + service.token;
    }
  }

  service.login = function(params) {
    var newToken = new TokenService(params);
    return newToken.$save().then(function(data) {
      service.token = data.token;
      $localStorage.authToken = data.token;
      _setAuthHeader();
    });
  }

  service.isLoggedIn = function() {
    return !!service.token;
  }

  service.initialize = function() {
    service.token = $localStorage.authToken;
    _setAuthHeader();
  }

  return service;
});
