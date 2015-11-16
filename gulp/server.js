'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === paths.src || (util.isArray(baseDir) && baseDir.indexOf(paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      middleware: middleware,
      routes: routes
    },
    open: false,
    browser: browser,
    port: 3000,
  });
}

gulp.task('serve', ['config', 'watch'], function () {
  browserSyncInit([
    paths.tmp + '/serve',
    paths.src
  ], [
    paths.tmp + '/serve/{app,shared}/**/*.css',
    paths.src + '/{app,shared}/**/*.js',
    paths.src + 'src/assets/images/**/*',
    paths.tmp + '/serve/*.html',
    paths.tmp + '/serve/{app,shared}/**/*.html',
    paths.src + '/{app,shared}/**/*.html'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([paths.tmp + '/serve', paths.src], null, []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(paths.dist, null, []);
});
