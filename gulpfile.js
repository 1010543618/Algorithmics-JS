const gulp = require('gulp');
const rollup = require('gulp-better-rollup');
const through = require('through2');
const ts = require('gulp-typescript');

gulp.task('build', async function () {
    gulp.src(['./src/**/*.js'])
        .pipe(rollup({
            external: ['lodash']
        }, 'cjs'))
        .pipe(gulp.dest('build'));

    gulp.src(['./src/**/*.ts'])
        .pipe(ts({}))
        .pipe(gulp.dest('build'));
});

gulp.watch('./src/**/*.js', ['build']);

gulp.task('default', ['build']);