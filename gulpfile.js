'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const env = require('yargs').argv;
const gulpif = require('gulp-if');

gulp.task('css', function () {
	const build = env.build;
	const willMinify = env.min;
	return gulp.src(`./docs/src/css/${build}/main.scss`)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulpif(willMinify, cssmin()))
		.pipe(rename(`${build}.bundle.css`))
		.pipe(gulp.dest(`./docs/dist/css`));
});
