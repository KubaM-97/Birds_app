const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const babel = require('gulp-babel');
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");

gulp.task("imagemin", async function(){
    gulp.src("./photos/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("uglify", async function(){
    gulp.src("script.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("sass", async function(){
    gulp.src("./main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

 gulp.task("default", ["imagemin", "uglify", "sass"]);