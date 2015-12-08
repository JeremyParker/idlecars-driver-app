'use strict';

angular.module('idlecars')
.factory('AppNotificationService', function ($interval) {
  var service = { messages: [] };

  service.push = function(message) {
    var new_timer = $interval(function () { service.messages.pop() }, 15000, [1]);
    service.messages.unshift({timer: new_timer, content: message});
  }

  service.remove = function(index) {
    $interval.cancel(service.messages[index].timer);
    service.messages.splice(index, 1);
  }

  return service;
})
