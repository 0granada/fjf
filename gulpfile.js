'use strict';


let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync;

gulp.task('js', function(){
  return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./static/js'));
});

gulp.task('sass', function(){
  let t = gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError));
  if(browserSync){
    t.pipe(browserSync.stream());
  }
  t.pipe(gulp.dest('./static/styles'));
  return t;
});

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('browser-sync', function(){
  let browserSync = require('browser-sync').create();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});


gulp.task('default', ['watch', 'browser-sync']);