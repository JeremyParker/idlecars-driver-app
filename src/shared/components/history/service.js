angular.module('idlecars')
.factory('HistoryService', function ($rootScope, $state, LANDING_STATE) {
  var history = {};
  var states = [];
  var goBackTriggered = false;

  var _prevOrDefault = function() {
    if (_notInHistory()) {
      return states[states.length - 1] || {state: LANDING_STATE};
    }
    return states[states.length - 2] || {state: LANDING_STATE};
  }

  var _duplicatedStates = function (stateName) {
    return states[states.length - 1] && stateName === states[states.length - 1].state;
  }

  var _notInHistory = function () {
    return $state.current.data && $state.current.data.notInHistory;
  }

  history.listen = function () {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      var stateName = toState.name;

      if (goBackTriggered) {
        states.pop();
        goBackTriggered = false;
      }
      else if (_notInHistory()) { return; }
      else if (_duplicatedStates(stateName)) { return; }
      else {
        states.push({state: stateName, params: toParams});
      };
    })
  }

  history.goPreviousState = function () {
    var destination =  _prevOrDefault();
    goBackTriggered = true;
    $state.go(destination.state, destination.params);
  }

  return history;
})
