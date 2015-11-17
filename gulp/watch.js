'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['markups', 'inject'], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{app,shared,components}/**/*.scss',
    paths.src + '/{app,shared,components}/**/*.sass',
    paths.src + '/{app,shared,components}/**/*.js',
    'bower.json'
  ], ['inject']);
  gulp.watch(paths.src + '/{app,shared,components}/**/*.jade', ['markups']);
});
