var gulp = require("gulp");
var replace = require("gulp-replace");
var uglify = require('gulp-uglify');
var buildCfg = require("./src/build-cfg.json"); 
var rename = require("gulp-rename"); 
var cleancss = require("gulp-clean-css");
var fs = require("fs"); 
var concat = require("gulp-concat");
var opts = { /* plugin options */ };

var vs = require("./package.json"); 

gulp.task("docs", function(done){
    
    fs.readdir("./src/docs", function (err, files) {
        if(err){console.log(err); return; }
       var examples = files.filter(x=>(x.indexOf("index.html") == -1) && x.indexOf('examples.html') == -1 && !(x.indexOf(".html") == -1)).map(x=>`./src/docs/${x}`);
       examples.sort();
       gulp.src(examples).pipe(concat('index.html'))
       .pipe(gulp.dest('./docs'));
       gulp.src("./src/docs/*.js").pipe(concat('./assets/js/examples.js'))
       .pipe(gulp.dest('./docs'));
    }); 
    gulp.src("./node_modules/bootstrap/dist/css/bootstrap.min.css").pipe(gulp.dest("./docs/assets/css/"));
    gulp.src("./node_modules/bootstrap4/dist/css/bootstrap.min.css").pipe(gulp.dest("./docs/assets/css/bootstrap4.min.css"));
    gulp.src("./src/docs/assets/**/*").pipe(gulp.dest("./docs/assets"));
    gulp.src("./src/formy.js").pipe(gulp.dest("./docs/"));
    gulp.src("./src/formy.css").pipe(gulp.dest("./docs/"));
    done(); 
}); 

gulp.task("build", function(done){
    var cssMatcher = { 
        bootstrap: /(<link)(.)+(id=[",']bootstrap)[",'](.)+(>)/ig
    };
    var scriptMatcher = { 
        bootstrap: /(<script)(.)+(id=[",']bootstrap)[",'](.)+(>)/ig,
        jquery: /(<script)(.)+(id=[",']jquery)[",'](.)+(>)/ig
    }; 

     var blob_0 = gulp.src(["src/index.html"]);
     var blob_1= gulp.src(["src/docs/*.html"]);
     buildCfg.Css.map(function(itm){
        var k = Object.keys(itm)[0]
        var newLink = `<link rel="stylesheet" type="text/css" href="${itm[k]}" />`;
        blob_0 = blob_0.pipe(replace(cssMatcher[k], newLink));
        blob_1 = blob_1.pipe(replace(cssMatcher[k], newLink));
     });
     buildCfg.Scripts.map(function(itm){
        var k = Object.keys(itm)[0]
        var newLink = `<script type="text/javascript" src="${itm[k]}"></script>`;
        blob_0 = blob_0.pipe(replace(scriptMatcher[k], newLink));
        blob_1 = blob_1.pipe(replace(scriptMatcher[k], newLink))
        .pipe(replace(/\.{2}\/formy\.js/ig, "../dist/formy.js")).pipe(replace(/\.{2}\/formy\.css/ig, "../dist/formy-min.css"));
     });
     blob_0.pipe(gulp.dest('dist/'))
     blob_1.pipe(gulp.dest('dist/docs/'))

    done(); 
}); 

gulp.task("minify",function(done){
    gulp.src(['./src/formy.js'])
    .pipe(replace(/\@version/ig, vs.version))
    .pipe(replace(/console.(log\((.+)\))/ig, "void(0)" ))
    .pipe(uglify())
    .pipe(rename({suffix:"-min"}))
    .pipe(gulp.dest('dist/')); 

    //also copy unminified source
    gulp.src(['./src/formy.js'])
    .pipe(replace(/\@version/ig, vs.version)) // add current version from package.json
    .pipe(replace(/console.(log\((.+)\))/ig, "void(0)" ))
    .pipe(gulp.dest('dist/'));

    gulp.src('./src/formy.css')
    .pipe(replace(/\@version/ig, vs.version))
    .pipe(cleancss({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(rename({suffix:"-min"}))
    .pipe(gulp.dest('dist/'));
    done(); 
}); 

gulp.task("default",gulp.series("build", "docs", "minify"))
