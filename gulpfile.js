const gulp = require("gulp");
const htmlreplace = require("gulp-html-replace");
const fs = require("fs");
const alienPath = 'src/assets/alien/build/static/js/';
const prefix = 'assets/alien/build/static/js/';
var names = fs.readdirSync(alienPath).map((filename)=>{
    return prefix + filename;
}).filter((filename) => {
    return (/.js$/).test(filename);
}).sort((a,b) => {});

names.unshift('<!-- build:component-lib -->');
names.push('<!-- endbuild -->');

console.log(names);

gulp.task("update-components", function() {
 return gulp
    .src("src/index.html")
    .pipe(
      htmlreplace({
        "component-lib": {
          src: names
        }
      })
    )
    .pipe(
      gulp.dest(function(file) {
        return file.base;
      })
    );
});
