'use strict';

angular.module('idlecars')
.factory('appNotificationInterceptor', function($q, AppNotificationService) {
  var interceptor = {};

  var _pushNotifications = function (result) {
    var notifications = _notifications(result);
    for (var i = 0; i < notifications.length; i++) {
      AppNotificationService.push(notifications[i]);
    }
  }

  interceptor.responseError = function(rejection) {
    _pushNotifications(rejection);
    return $q.reject(rejection);
  }

  interceptor.response = function (response) {
    _pushNotifications(response);
    return response;
  }

  var _notifications = function(result) {
    if (!result.data) { return []; }

    return result.data._app_notifications || [];
  }

  return interceptor;
});
