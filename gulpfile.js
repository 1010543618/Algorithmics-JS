const gulp = require('gulp');
const rollup = require('rollup');
const through = require('through2');

gulp.task('build', async function () {
    // 将你的默认的任务代码放在这
    gulp.src(['./Algorithmics-Dasgupta-Papadimitriou-Vazirani/ch5/*.js'])
        .pipe(gulpfiles())
        .pipe(gulp.dest('build'));
});

gulp.watch('./Algorithmics-Dasgupta-Papadimitriou-Vazirani/ch5/*.js', ['build']);

gulp.task('default', ['build']);


function gulpfiles() {
    var _this = this;
    // 创建一个让每个文件通过的 stream 通道
    var stream = through.obj(function (file, enc, cb) {
        console.log(file)
        async function build() {
            const bundle = await rollup.rollup({
                input: file.path
            });

            await bundle.write({
                file: file.base + 'build\\' + file.relative,
                format: 'cjs'
            });
            return;
        }

        build().then(d => {
            cb();
        });

    });

    // 返回文件 stream
    return stream;
}