angular.module('idlecars')
.factory('historyState', function ($rootScope, $state) {
  var history = {};
  var states = [];
  var goBackTriggered = false;

  var _prevOrDefault = function() {
    return states[states.length - 2] || {state: 'cars'};
  };

  history.Listen = function () {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (goBackTriggered) {
        states.pop();
        goBackTriggered = false;
      }
      else {
        var state = {state: toState.name, params: toParams}
        states.push(state);
      };
      console.log(states)
    })
  }

  history.goPreviousState = function () {
    var destination =  _prevOrDefault();
    goBackTriggered = true;
    $state.go(destination.state, destination.params);
  }

  return history;
})
