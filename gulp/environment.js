'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;

gulp.task('environment', function() {
  gulp.environment = {};

  var prod = {
    deploy_bucket: 'app.alltaxi.com',
    template_vars: {
      heap_app_id: '3053705704',
      google_api_key: 'AIzaSyC6h1mi3XtUIfy-_uKe6jDrAILlDVTfAdc',
    },
  };

  var staging = {
    deploy_bucket: 'app.staging.alltaxi.com',
    template_vars: {
      heap_app_id: '1900221263',
      google_api_key: 'AIzaSyC6h1mi3XtUIfy-_uKe6jDrAILlDVTfAdc',
    },
  };

  var dev = {
    template_vars: {
      heap_app_id: '655181858',
      google_api_key: 'AIzaSyC6h1mi3XtUIfy-_uKe6jDrAILlDVTfAdc',
    },
  }

  var envArg = argv.env || 'development';

  if (envArg === 'production')
    gulp.environment = prod;
  else if (envArg === 'staging')
    gulp.environment = staging;
  else
    gulp.environment = dev;
});
