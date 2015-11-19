'use strict';

angular.module('idlecars')
.config(function ($stateProvider, config) {
  if (!config.show_style_guide) { return; }

  $stateProvider

    .state('styleguide', {
      url: '/styleguide',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/styleguide/styleguide.html',
        }
      }
    })

})
