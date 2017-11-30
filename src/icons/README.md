# Font icons

We are using [gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont) and [gulp-iconfont-css](https://www.npmjs.com/package/gulp-iconfont-css) to generate icon font files and css.

Normally you can just put svg into [svg](./svg) folder under `src/icons` and run `gulp iconfont` or build the entire project normally, gulp will generate css files for us.

You can use `.mag-icon-ICONNAME` in your HTML to use iconfont icons, and `ICONNAME` should be replaced by the svg file's basename (the one which don't contains `.svg` extension name).
