'use strict';

angular.module('idlecars')
.directive('icConfirm', function () {
  return {
    scope: {
      result: '=',
      showModal: '=',
    },
    templateUrl: 'components/ic_confirm/cancel_booking_confirm.html',
  }
})
