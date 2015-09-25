'use strict';

angular.module('idlecars')
.factory('AuthService', function ($http, $q, $localStorage, TokenService, MyDriverService, AppNotificationService) {
  var service = {};

  var _setAuthHeader = function() {
    if (service.token) {
      // TODO: don't use the token on external requests!
      $http.defaults.headers.common['Authorization']= 'Token ' + service.token;
    }
  }

  var _validateToken = function () {
    if (service.token) { MyDriverService.get().catch(service.logout) }
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

  service.saveToken = function(token) {
    service.token = token;
    $localStorage.authToken = token;
    _setAuthHeader();
  }

  service.login = function(params) {
    var newToken = new TokenService(_cleanParams(params));
    return newToken.$save()
    .then(function(data) {
      service.saveToken(data.token);
    })
    .catch(function(error) {
      AppNotificationService.push("Sorry, that didn't work. Please double-check your phone number and password.");
      return $q.reject(error);
    });
  }

  service.logout = function () {
    delete $localStorage.authToken;
    service.token = $localStorage.authToken;
    MyDriverService.driver = null;
    delete $http.defaults.headers.common['Authorization'];
  }

  service.isLoggedIn = function() {
    return !!service.token;
  }

  service.initialize = function() {
    service.token = $localStorage.authToken;
    _setAuthHeader();
    _validateToken();
  }

  return service;
});
