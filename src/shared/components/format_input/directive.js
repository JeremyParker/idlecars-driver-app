'use strict';

angular.module('idlecars')
.directive('formatInput', function ($timeout) {
  var formatTel = function (value) {
    // special-cases for users who add the right formatting themselves
    if (1 == value.length && '(' == value) { return }
    if (5 == value.length && ')' == value.slice(-1)) { return }
    if (10 == value.length && '-' == value.slice(-1)) { return }
    if (6 == value.length && (' ' == value.slice(-1) || '-' == value.slice(-1))) { return }

    value = value.replace(/[^0-9]/g, '');

    switch (value.length) {
      case 0:
        break;
      case 1:
      case 2:
      case 3:
        value = '(' + value;
        break;
      case 4:
      case 5:
      case 6:
        value = '(' + value.substr(0, 3) + ') ' + value.substr(3);
        break;
      default:
        value = '(' + value.substr(0, 3) + ') ' + value.substr(3, 3) + '-' + value.substr(6);
    }
    return value;
  }

  var formatNum = function (value) {
    value = value.replace(/[^0-9]/g, '');

    var counter = 0;
    var new_value = '';

    for (var i = value.length - 1; i >= 0; i--) {
      if (counter%3 == 0 && counter) {
        new_value = ',' + new_value;
      };

      new_value = value[i] + new_value;

      counter ++;
    };
    return new_value;
  }

  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

      element[0].oninput = function () {
        if (!attrs.formatInput) {
          return
        }
        else if (attrs.formatInput == 'tel') {
          var new_value = formatTel(element[0].value);
        }
        else if (attrs.formatInput == 'num') {
          var new_value = formatNum(element[0].value);
        }

        if (new_value != undefined) {
          $timeout(function () { element[0].value = new_value })
        }
      }
    }
  };
});
