const gulp = require('gulp');
const sass = require('gulp-sass');

// Standardkörning
gulp.task('default', ['copyhtml', 'sass'])
// Gulp Watch
gulp.task('watch', function(){
  gulp.watch('src/*.hmtl', ['copyhtml']);
  gulp.watch('src/sass/*.scss', ['sass']);
})

gulp.task('copyhtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
})
// Uppdaterar css filer
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('build/css'))
})