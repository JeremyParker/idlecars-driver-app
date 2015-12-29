'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;

gulp.task('environment', function() {
  gulp.environment = {};

  var prod = {
    deploy_bucket: 'app.idlecars.com',
    template_vars: {
      heap_app_id: '3053705704',
      sumome_id: '878add38dfee29016ad79e33687732416836a1cce887c139013d8fc0866f62bf',
    },
  };

  var staging = {
    deploy_bucket: 'app.staging.idlecars.com',
    template_vars: {
      heap_app_id: '1900221263',
      sumome_id: '16460f5212fbb85dd453f6c9e79d7070f290692629c8a41d2559236a64765ef3',
    },
  };

  var dev = {
    template_vars: {
      heap_app_id: '655181858',
      sumome_id: 'b56c93537f93c3465bd8c29cc248402371fc080810d677aa1694259033b4f3c5',
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
