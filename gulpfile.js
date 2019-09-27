const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.scss',
    'src/scss/*.scss'
  ])
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
    }))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/slick-carousel/slick/slick.js',
  ])
  .pipe(gulp.dest('src/js'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src'
  });

  gulp.watch([
    'node_modules/slick-carousel/slick/slick.scss',
    'src/scss/*.scss'
  ], ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['js', 'serve'])
