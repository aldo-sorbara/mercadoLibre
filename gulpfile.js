var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var concatJs = require('gulp-concat');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('css', function () 
{
  return gulp.src('css/*.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('css'))
    .pipe(notify("Ha finalizado la task css!"));
});
 
gulp.task('js', function() 
{
 return gulp.src('js/*.js')
   .pipe(concatJs('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(notify("Ha finalizado la task js!"));
});

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(function(file){
    	return file.base;
    }));
});


