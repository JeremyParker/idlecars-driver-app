'use strict';

angular.module('idlecars')
.factory('appNotificationInterceptor', function($q, AppNotificationService) {
  var interceptor = {};

  interceptor.responseError = function(rejection) {
    var notifications = _notifications(rejection);
    for (var i = 0; i < notifications.length; i++) {
      AppNotificationService.push(notifications[i]);
    }

    return $q.reject(rejection);
  }

  var _notifications = function(rejection) {
    if (!rejection.data) { return []; }

    return rejection.data._app_notifications || [];
  }

  return interceptor;
});
