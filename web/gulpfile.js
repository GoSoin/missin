var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  webserver = require('gulp-webserver')

/** 监测html改动 **/
gulp.task('watch', function() {
  gulp.watch('./*.html', ['html'])
})

/** html reload任务 **/
gulp.task('html', function() {
  gulp.src('./*.html')
      .pipe(livereload())
})

/** connect启动web服务 **/
gulp.task('server', function() {
  gulp.src('./')
      .pipe(webserver({
        ip: 'localhost',
        port: 4000,
        livereload: true,
        open: './views'
      }))
})

/** 运行任务 **/
gulp.task('default', ['server', 'watch'])