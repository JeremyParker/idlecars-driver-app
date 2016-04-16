'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;

gulp.task('environment', function() {
  gulp.environment = {};

  var prod = {
    deploy_bucket: 'app.alltaxi.com',
    template_vars: {
      heap_app_id: '3053705704',
      sumome_id: 'f2576e7f90d583ed4c3672be45ee563f449874ab22f67aca0f6c1a8fb1fae21f',
    },
  };

  var staging = {
    deploy_bucket: 'app.staging.alltaxi.com',
    template_vars: {
      heap_app_id: '1900221263',
      sumome_id: '4261b68d16d1e620c08aa600a45b0f9cf7f6bc6b667facff026c32fb490e3255',
    },
  };

  var dev = {
    template_vars: {
      heap_app_id: '655181858',
      sumome_id: 'ee4bd8e411ad7619613cfa9a2ed40fe3bd77552ac9651730f0f672ba944cc393',
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
