'use strict';

angular.module('idlecars',
  [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ic.appConfig',
    'uiGmapgoogle-maps',
    'ct.ui.router.extras.previous',
    'ngFileUpload',
  ]
)
.config(function ($urlRouterProvider, $resourceProvider) {
  $urlRouterProvider.otherwise('/');
  $resourceProvider.defaults.stripTrailingSlashes = false;
});
