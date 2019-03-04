var gulp = require("gulp");
var replace = require("gulp-replace");
var uglify = require('gulp-uglify');
var buildCfg = require("./src/build-cfg.json"); 
var rename = require("gulp-rename"); 
var cleancss = require("gulp-clean-css");
gulp.task("build", function(done){
    var cssMatcher = { 
        bootstrap: /(<link)(.)+(id=[",']bootstrap)[",'](.)+(>)/ig,
    };
    var scriptMatcher = { 
        bootstrap: /(<script)(.)+(id=[",']bootstrap)[",'](.)+(>)/ig,
        jquery: /(<script)(.)+(id=[",']jquery)[",'](.)+(>)/ig,
    }; 
    buildCfg.Css.map(function(itm){
        var k = Object.keys(itm)[0]
        var newLink = `<link rel="stylesheet" type="text/css" href="${itm[k]}" />`;
        gulp.src(["src/index.html"])
        .pipe(replace(cssMatcher[k], newLink))
        .pipe(gulp.dest('dist/'));        
    });
    buildCfg.Scripts.map(function(itm){
        var k = Object.keys(itm)[0]
        var newLink = `<script type="text/javascript" src="${itm[k]}"></script>`;
        gulp.src(["src/index.html"])
        .pipe(replace(scriptMatcher[k], newLink))
        .pipe(gulp.dest('dist/'));        
    })


    done(); 
}); 

gulp.task("minify",function(done){
    gulp.src(['./src/formy.js'])
    .pipe(replace(/console.(log\((.+)\))/ig, "void(0)" ))
    .pipe(uglify())
    .pipe(rename({suffix:"-min"}))
    .pipe(gulp.dest('dist/assets/js')); 

    gulp.src('./src/formy.css')
    .pipe(cleancss({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(rename({suffix:"-min"}))
    .pipe(gulp.dest('dist/assets/css'));
    done(); 
})

gulp.task("default",gulp.series("build", "minify"))
