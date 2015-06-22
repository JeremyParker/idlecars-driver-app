'use strict';

angular.module('idlecars',
  [
    'ngAnimate',
    'ngCookies',
    // TODO: remove ngResource
    'ngResource',
    'restangular',
    'ui.router',
    'ic.appConfig',
    'uiGmapgoogle-maps',
    'ct.ui.router.extras.previous',
    'ngStorage',
    'ngFileUpload',
  ]
)
.config(function ($urlRouterProvider, $resourceProvider) {
  $urlRouterProvider.otherwise('/');
  $resourceProvider.defaults.stripTrailingSlashes = false;
})

.run(function (HistoryService, AuthService, Restangular, config) {
  HistoryService.listen();
  AuthService.initialize();
  Restangular.setBaseUrl(config.api_base_url);
  Restangular.setRequestSuffix('/');
})
