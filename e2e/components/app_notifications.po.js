'use strict';

var AppNotifications = function() {
  this.message = element.all(by.repeater('message in messages track by $index')).first();
};

module.exports = new AppNotifications();
