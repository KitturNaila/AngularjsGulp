var gulp=require("gulp");
var copy = require('gulp-contrib-copy');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var clean = require('gulp-clean');
 
gulp.task('clean', function () {
  return gulp.src('build/', {read: false})
    .pipe(clean());
});

 gulp.task('copy', function() {
 gulp.src("*.html")
  .pipe(copy())
     .pipe(gulp.dest('build/'));
});

 gulp.task('copy1', function() {
 gulp.src("bower_components/bootstrap/dist/css/bootstrap.min.css")
  .pipe(copy())
     .pipe(gulp.dest('build/libs'));
});

 gulp.task('concatb', function() {
  gulp.src(["bower_components/jquery/dist/jquery.min.js",
          "bower_components/bootstrap/dist/js/bootstrap.min.js",
          "bower_components/angular/angular.min.js",
          "bower_components/angular-ui-router/release/angular-ui-router.min.js/",
          "src/app.js"])

    .pipe(concat('lib.js'))
    .pipe(gulp.dest('build/'));
});

 gulp.task('connect', function() {
   connect.server();
});

 // minify new images
gulp.task('imagemin', function() {
  var imgSrc = 'src/images/**/*',
      imgDst = 'build/images';



  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

 
 gulp.task('default', ['copy','copy1','concatb','connect','imagemin'],function() {
  // watch for HTML changes
  gulp.watch('*.html', function() {
    gulp.run('copy');
  });

  gulp.watch('src/app.js', function() {
    gulp.run('concatb');
  });
});
