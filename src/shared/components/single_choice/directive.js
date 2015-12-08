'use strict';

angular.module('idlecars')
.directive('singleChoice', function ($interval) {
  return {
    templateUrl: 'shared/components/single_choice/template.html',
    controller: function ($scope) {
      if ($scope.maxHeight) {
        // the basic height of each line is 48px and border is 2px
        $scope.maxHeight = 48 * $scope.maxHeight + 2;
      };

      // this flag means we don't auto scroll after user's click
      var scrollInit = true;

      var getIndex = function () {
        var choices = $scope.choices;
        var model = $scope.ngModel;

        for (var i = 0; i < choices.length; i++) {
          if (choices[i].key == model || choices[i].value == model) {
            return i;
          }
        };
        return 0;
      }

      var loadModel = function (newModel, oldModel) {
        if ($scope.choices) {
          $scope.selectedIndex = getIndex();
          $scope.ngModel = $scope.choices[$scope.selectedIndex].key;

          if (scrollInit) {
            $scope.scrollTo($scope.selectedIndex)
          }
        };
      }

      $scope.$watch('ngModel', loadModel);

      $scope.click = function (index) {
        scrollInit = false;

        $scope.selectedIndex = index;
        $scope.ngModel = $scope.choices[index].key;
      }
    },
    link: function (scope, element, attrs) {
      scope.scrollTo = function (index) {
        var scrollHeight = element[0].children[0].scrollHeight;
        var clientHeight = element[0].children[0].clientHeight;
        var maxScrollPosition = scrollHeight - clientHeight;

        var desiredPosition = index * 48;

        if (desiredPosition > maxScrollPosition) {
          desiredPosition = maxScrollPosition;
        };

        // try to scroll to the desired position until its done
        var scrollToPosition = $interval(function () {
          element[0].children[0].scrollTop = desiredPosition;

          if (element[0].children[0].scrollTop >= desiredPosition) {
            $interval.cancel(scrollToPosition);
          };
        }, 1)
      }
    },
    scope: {
      choices: '=',
      ngModel: '=',
      maxHeight: '@',
    }
  };
});
