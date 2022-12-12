'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('cssnano'),
    cssminify = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    imagewebp = require('gulp-webp'),
    browserSync = require('browser-sync').create();


/* *** PATHS LINKS
*****************************************/ 
const paths = {
    sass: {
        root: './src/assets/sass',
        src: './src/assets/sass/*.scss',
        dest: './src/dist/css',
    },
    js: {
        src: './src/assets/js/*.js',
        dest: './src/assets/js',
    },
    html: {
        src: './src/html/*.html',
        dest: './src/dist/html',
    },
    img: {
        src: './src/assets/images/*.{png,jpg,svg}',
        dest: './src/dist/images',
    },
}



/* *** STYLE FILES
*****************************************/ 
function styleFiles(){
    return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssminify())
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(browserSync.stream())
}

/* *** SCRIPTS FILES
*****************************************/ 
function scriptFiles(){
    return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream())
}

/* *** IMAGES FILES
*****************************************/ 
function imagesFiles(){
    return gulp.src(paths.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img.dest))
    .pipe(browserSync.stream())
}

/* *** HTML FILES
*****************************************/ 
function htmlFiles(){
    return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream())
}

/* *** WEBP FILES
*****************************************/ 
function webpFiles(){
    return gulp.src(paths.img.dest)
    .pipe(imagewebp())
    .pipe(gulp.dest(paths.img.dest))
    .pipe(browserSync.stream())
}

/* *** WATCH FILES
*****************************************/ 
function watch(){
    browserSync.init({
        server: {
            baseDir: './src'
        }
    })

    gulp.watch(paths.sass.root, styleFiles);
    gulp.watch(paths.img.src, imagesFiles);
    gulp.watch(paths.html.src, htmlFiles);
    // gulp.watch(paths.js.src, scriptFiles);
    gulp.watch(paths.img.dest, webpFiles);
}
  
  

/* *** DEFAULT GULP
*****************************************/ 
exports.default = gulp.series(
    styleFiles,
    // scriptFiles,
    htmlFiles,
    imagesFiles,
    webpFiles,
    watch,
)

exports.watch = watch;