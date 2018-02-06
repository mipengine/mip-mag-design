# Font icons

We are using [gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont) and [gulp-iconfont-css](https://www.npmjs.com/package/gulp-iconfont-css) to generate icon font files and css.

Normally you can just put svg into [svg](./svg) folder under `src/icons` (details below) and run `gulp iconfont` or build the entire project normally, gulp will generate css files for us.

You can use `.icon-ICONNAME` in your HTML to use iconfont icons, and `ICONNAME` should be replaced by the svg file's basename (the one which don't contains `.svg` extension name).

## Add icons

1. Consider a name which describe your icon. Use lowercase letters and dash only.
   e.g: `apple`, `chicken-sandwich`
2. Name it `chicken-sandwich.svg`, and put it into `src/icons/svg`. DO NOT git add and/or commit it.
3. Run `gulp iconfont` or `npm run build` in the project root folder.
   That svg file which you put in the second step will renamed automatically to `UEANN-${name}.svg`.
4. `git add && git commit` it. Now you are all set!

## Using icons

### For users

You can just use `<i class="icon icon-${name}">` in HTML.

### For Stylus Developers

For some case you may also want to assign icon in other classes, you can use `font-icon` mixin.

```stylus
.apple-pie
	font-icon 'apple-pie'
```

will generate:

```css
.apple-pie::before {
    content: '\UEANN';
}
```

