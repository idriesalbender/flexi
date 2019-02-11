const { dest, src } = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

const BuildFlexi = () =>
  src('./src/flexi.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(rename('flexi.min.css'))
    .pipe(dest('./dist'));

exports.build = BuildFlexi;
