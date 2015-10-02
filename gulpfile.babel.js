import gulp from 'gulp';

gulp.task('default', () => {
    console.log("I'm a default task!");
});

gulp.task('minify', () => {
    console.log("I'm minifying!");
});

gulp.task('images', () => {
    console.log("I'm optimizing images!");
});

gulp.task('styles', () => {
    console.log("I'm processing stylesheets!");
});

gulp.task('html', () => {
    console.log("I'm processing html!");
});
