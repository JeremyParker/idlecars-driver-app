angular.module('idlecars')
.factory('HistoryService', function ($rootScope, $state) {
  var history = {};
  var states = [];
  var goBackTriggered = false;

  var _prevStateIndex = function() {
    for (var i = states.length - 2; i >= 0; i--) {
      if (!states[i].notInHistory) {
        return i;
      };
    };
    return -1;
  }

  var _notInHistory = function () {
    return $state.current.data && $state.current.data.notInHistory;
  }

  history.listen = function () {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      var stateName = toState.name;

      if (goBackTriggered) { goBackTriggered = false }
      else { states.push({state: stateName, params: toParams, noInHistory: false}) };

      if (_notInHistory() && states.length) {
        states[states.length-1].notInHistory = true;
      }

    })
  }

  history.goPreviousState = function () {
    var stateIndex = _prevStateIndex();
    var destination =  states[stateIndex] || {state: 'cars'};
    goBackTriggered = true;

    states.splice(stateIndex + 1)
    $state.go(destination.state, destination.params);
  }

  history.putInHistory = function () {
    if (states.length && states[states.length-1].notInHistory) {
      states[states.length-1].notInHistory = false;
    };
  }

  return history;
})
