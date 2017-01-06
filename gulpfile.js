var gulp = require('gulp');
var spawn = require('child_process').spawn,
    node;
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('server', ['compile'], function () {
    if (node) {
        console.log('Node process killed !');
        node.kill();
    }
    node = spawn('node', ['build/app.js'], {
        stdio: 'inherit'
    })
    node.on('close', code => {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    })
})

gulp.task('compile', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('build'));
})

gulp.task('default', ['server'], function () {
    gulp.watch('src/**/*.ts', ['server']);
})

process.on('exit', function () {
    if (node) {
        node.kill();
    }
})