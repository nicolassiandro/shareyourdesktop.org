var browserSync = require('browser-sync');
var gulp = require('gulp');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: './'}, reload);
});

gulp.task('default', ['serve']);