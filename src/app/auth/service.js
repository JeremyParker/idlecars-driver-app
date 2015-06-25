'use strict';

angular.module('idlecars')
.factory('AuthService', function($http, $q, $localStorage, TokenService, AppNotificationService) {
  var service = {};

  var _setAuthHeader = function() {
    if (service.token) {
      // TODO: don't use the token on external requests!
      $http.defaults.headers.common['Authorization']= 'Token ' + service.token;
    }
  }

  var _cleanParams = function(params) {
    var clean = angular.copy(params);
    if (clean.username) {
      // NOTE: usernames are always phonenumbers
      // sending usernames with non digits isn't supported
      clean.username = clean.username.replace(/[^\d]/g, '');
    }
    return clean;
  }

  service.login = function(params) {
    var newToken = new TokenService(_cleanParams(params));
    return newToken.$save()
    .then(function(data) {
      service.token = data.token;
      $localStorage.authToken = data.token;
      _setAuthHeader();
    })
    .catch(function(error) {
      AppNotificationService.push("The password is incorrect");
      return $q.reject(error);
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
