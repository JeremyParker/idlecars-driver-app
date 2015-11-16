'use strict';

angular.module('idlecars')
.directive('bookingDate', function () {
  return {
    templateUrl: 'shared/components/booking_date/template.html',
    controller: function ($scope) {
      // TODO: needs to be more generic, could add a promise resovle
      $scope.options = {
        clear: 'Cancel',
        today: '',
        min: $scope.booking.first_valid_end_time,
        weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        onClose: function () {
          $scope.changeEndDate($scope.date);
        }
      }
    }
  }
})
