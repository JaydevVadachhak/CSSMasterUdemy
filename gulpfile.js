const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  // dest() -> Write your .css dest folder here
  return src(`**/scss/**/*.scss`).pipe(sass.sync().on('error', sass.logError)).pipe(dest(`css`));
}

function watchTask() {
  watch([`**/scss/**/*.scss`], buildStyles);
}

exports.buildStyles = buildStyles;
exports.default = series(buildStyles, watchTask);
