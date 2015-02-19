var gulp = require('gulp');
var babel = require('gulp-babel');


gulp.task('compileSource', function(){
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/'));
});

//this task will be modified to take the stream
//and pass it to mocha
gulp.task('compileTests', function(){
    return gulp.src('tests/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('tests-compiled/'));
})

gulp.task('default',['compileSource', 'compileTests'], function(){
    //default task.
    
    //1. run through babel
    //2. run karma tests
    //3. browserify (standalone)
});