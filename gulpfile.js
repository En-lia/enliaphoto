'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const env = require('yargs').argv;
const gulpif = require('gulp-if');

gulp.task('css', function () {
	const projectName = env.page;
	const willMinify = env.min;
	return gulp.src(`./${projectName}/html/src/css/main.sass`)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulpif(willMinify, cssmin()))
		.pipe(rename(`${projectName}.bundle.css`))
		.pipe(gulp.dest(`./${projectName}/html/assets/css`));
});
