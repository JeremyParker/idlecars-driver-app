'use strict';

angular.module('idlecars')
.directive('formatTel', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var needToFormat = attrs.formatTel == 'true';

      element[0].oninput = function (event) {
        if (!needToFormat) { return; };

        var value = element[0].value.replace(/[^0-9]/g, '')

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
            value = '(' + value.substr(0, 3) + ') ' + value.substr(3, 3);
            break;
          default:
            value = '(' + value.substr(0, 3) + ') ' + value.substr(3, 3) + '-' + value.substr(6);
        }
        element[0].value = value;
      }
    }
  };
});
