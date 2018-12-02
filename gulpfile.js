const gulp = require('gulp');
const rollup = require('gulp-better-rollup');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build', async function () {
    gulp.src(['./src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(rollup({
            external: ['lodash']
        }, 'cjs'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));

    gulp.src(['./src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: 'CommonJS'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
    gulp.watch(['./src/**/*.js', './src/**/*.ts'], ['build']);
});

gulp.task('default', ['watch']);