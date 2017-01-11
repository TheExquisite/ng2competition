var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');

var tsProject = ts.createProject('./tsconfig.json');

gulp.task('clean.client', function(cb) {
    del.sync('dist/client');
    cb();
});

gulp.task('clean.server', function(cb) {
    del.sync(['dist/server', 'server.*']);
    cb();
});

gulp.task('clean.all', function(cb) {
    del.sync('dist');
    cb();
});

gulp.task('copy.nodemodules', function(){
    gulp.src('node_modules/**/*')
        .pipe(gulp.dest('dist/node_modules'));
})

gulp.task('copy.html', function(){
    gulp.src(['src/**/*.html', 'src/**/*.css'])
        .pipe(gulp.dest('dist'));
});

gulp.task('ts.compile', function(){
    var tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('build.all', ['clean.all', 'copy.nodemodules', 'copy.html', 'ts.compile']);

gulp.task('watch', ['ts.compile', 'copy.html'], function(){
    gulp.watch('src/**/*.ts', ['ts.compile']);
    gulp.watch(['src/**/*.html', 'src/**/*.css'], ['copy.html']);
});
