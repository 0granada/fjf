'use strict';


let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync;

gulp.task('sass', function(){
  let t = gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError));
  if(browserSync){
    t.pipe(browserSync.stream());
  }
  t.pipe(gulp.dest('./static/styles'));
  return t;
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
});

gulp.task('browser-sync', function(){
  let browserSync = require('browser-sync').create();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});


gulp.task('default', ['sass:watch', 'browser-sync']);