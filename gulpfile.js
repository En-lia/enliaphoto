'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cssUrlReplace = require('gulp-css-url-adjuster');
const env = require('yargs').argv;


/*
    запуск как в css, только gulp будет
    перезапускать сборку, если файлы изменились
    пример: gulp css:w --build global
 */

gulp.task('css:w', function() {
    browserSync.init({
        server: {
            baseDir: "./docs"
        }
    });
    gulp.watch('docs/src/css/**/*.scss', {ignoreInitial: false}, gulp.series('css'));
    gulp.watch("docs/src/css/**/*.scss").on('change', browserSync.reload);
    gulp.watch("docs/**/*.html").on('change', browserSync.reload);
});

/*
    запуск единоразовой сборки
    gulp css --build [имя пакета в src/css/...]
    пример: gulp css --build global
 */
gulp.task('css', function() {
    const build = env.build;
    const isProd = env.prod;
    return gulp.src(`./docs/src/css/${build}/main.scss`)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulpif(isProd, cssmin()))
        .pipe(gulpif(isProd, cssUrlReplace({
            replace:  ['/assets','/photography/assets'],
        })))
        .pipe(gulpif(isProd, autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })))
        .pipe(rename(`${build}.bundle.css`))
        .pipe(gulp.dest(`./docs/dist/css`));
});
