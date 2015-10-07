'use strict';

angular.module('idlecars')
.controller('appNotifications.controller', function ($scope, AppNotificationService) {
  $scope.messages = AppNotificationService.messages;

  $scope.close = function (message) { AppNotificationService.remove(message) }
});
