'use strict';

angular.module('idlecars')
.factory('AppNotificationService', function ($timeout) {
  var service = { messages: [] };

  service.push = function(message) {
    service.messages.push(message);
    $timeout(function() { service.messages.shift(); }, 3000);
  }

  return service;
})
