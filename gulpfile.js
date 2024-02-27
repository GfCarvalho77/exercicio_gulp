const gulp = require('gulp');/*integração*/
const sass = require('gulp-sass')(require('sass')); /*pacote sass propriamente dito*/
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');/*pacote uglify dito*/
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavascript(){
    return gulp.src('./source/scripts/*.js')/*onde busca*/
    .pipe(uglify())/*executar uglify*/
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts/'))/*onde salva*/
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')    
    .pipe(sourcemaps.init())/*executar o sourcemaps*/
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))//arquivo de mapeamento
    .pipe(gulp.dest('./build/styles'))
}


exports.default = function(){
    gulp.watch('./source/scripts/*.js',{ignoreInitial:false}, gulp.series(comprimeJavascript));
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(comprimeImagens));   
}
