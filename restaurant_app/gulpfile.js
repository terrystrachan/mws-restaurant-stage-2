const gulp = require('gulp');
const gm = require('gulp-gm');
const rename = require("gulp-rename");
const webp = require('gulp-webp');
 
gulp.task('productionImages', productionImages);

function productionImages() {
    createImages(300, 's');
    createImages(600, 'm');
    createImages(900, 'l');
}

function createImages(size, suffix) {
    return gulp.src('./img/*.jpg')
        .pipe(gm(function (gmfile) {
            return gmfile.resize(size, size);
        }, {
                imageMagick: true
            }))
        .pipe(rename(function (path) { path.basename += '-' + suffix; }))
        .pipe(webp())
        .pipe(gulp.dest('./img'));
}
