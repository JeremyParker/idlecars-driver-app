'use strict';

angular.module('idlecars')
.controller('appNotifications.controller', function ($scope, AppNotificationService) {
  $scope.messages = AppNotificationService.messages;

  $scope.close = function (index) { AppNotificationService.remove(index) }
});
