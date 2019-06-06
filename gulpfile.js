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
    пример: gulp css:w --page home
 */

gulp.task('css:w', function() {
    browserSync.init({
        server: {
            baseDir: './docs',
            middleware: [
                function(req, res, next) {
                    if (/photography/.test(req.url)) {
                        const url = req.url.replace('photography/', '');
                        res.writeHead(302, {
                            'Location': url,
                        });
                        res.end();
                    }
                    next();
                }
            ],
        }
    });
    gulp.watch('docs/src/css/**/*.scss', { ignoreInitial: false }, gulp.series('css'));

    gulp.watch('docs/dist/css/**/*.css').on('change', browserSync.reload);
    gulp.watch('docs/**/*.html').on('change', browserSync.reload);
});

/*
    запуск единоразовой сборки
    gulp css --page [имя страницы в src/css/pages/...]
    пример: gulp css --page home --prod
    пример: gulp css:w --page home

    Добавляй --prod при сборке перед выгрузкой на сайт
 */
gulp.task('css', function() {
    const page = env.page;
    const isProd = env.prod;
    // берет scss файл с которого начинает сборку
    return gulp.src(`./docs/src/css/pages/${page}/main.scss`)
    // собирает scss в css
        .pipe(sass.sync().on('error', sass.logError))

        // [если prod ] -> поправляет относительные пути к файлам (шрифты/картинки итп)
        .pipe(gulpif(isProd, cssUrlReplace({
            replace: ['/assets', '/photography/assets'],
        })))

        // [если prod ] -> ставит префиксы (улучшает кроссбраузерность)
        .pipe(gulpif(isProd, autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })))

        // [если prod ] -> минифицирует полученный css
        .pipe(gulpif(isProd, cssmin()))

        // Переименовывает файл
        .pipe(rename(`${page}.bundle.css`))

        // Кладет собранный файл в дист
        .pipe(gulp.dest(`./docs/dist/css`))
});
