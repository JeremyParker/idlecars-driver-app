angular.module('idlecars')
  .factory('isRepeatVisitor', function ($cookieStore, $rootScope) {
    return {
      checkNow: function() {
        var repeatVisitor = $cookieStore.get('repeatVisitor');
        if (!repeatVisitor) {
          $rootScope.modal_show = true;
          $cookieStore.put('repeatVisitor','false');
          $rootScope.toDisable = true;
        }
        else {
          $rootScope.toDisable = false;
          $rootScope.modal_show = false;
        }
      }
    }
  })
