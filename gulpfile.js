var gulp = require("gulp");
var replace = require("gulp-replace");
var buildCfg = require("./src/build-cfg.json"); 
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
        //console.log(cssMatcher[k])
        var newLink = `<link rel="stylesheet" type="text/css" href="${itm[k]}" />`;
        gulp.src(["src/index.html"])
        .pipe(replace(cssMatcher[k], newLink))
        .pipe(gulp.dest('dist/'));        
    });
    buildCfg.Scripts.map(function(itm){
        var k = Object.keys(itm)[0]
        //console.log(scriptMatcher[k])
        var newLink = `<script type="text/javascript" src="${itm[k]}"></script>`;
        gulp.src(["src/index.html"])
        .pipe(replace(scriptMatcher[k], newLink))
        .pipe(gulp.dest('dist/'));        
    })
    /*
    for(let i=0; i<3; i++){
        gulp.src("src/index.html")
        .pipe(replace('bar', 'foo'))
        .pipe(gulp.dest('dist/'));
    }
    */

    done(); 
})

gulp.task("default",gulp.series("build"))
