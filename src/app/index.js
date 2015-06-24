'use strict';

angular.module('idlecars',
  [
    'ngAnimate',
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

.config(function($urlRouterProvider, $resourceProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $httpProvider.interceptors.push('appNotificationInterceptor');
})

.run(function(HistoryService, AuthService, Restangular, config) {
  HistoryService.listen();
  AuthService.initialize();

  Restangular.setBaseUrl(config.api_base_url);
  Restangular.setRequestSuffix('/');
})
