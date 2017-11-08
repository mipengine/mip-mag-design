# Mag Design

本项目是mag-design设计规范的组件库，本文档主要介绍组件的使用方法和组件的开发指南。

## 依赖与安装

确保安装了Node.js(版本>=4)。

## 使用方式

### 编译获取最新包
`clone`仓库
```bash
# 克隆仓库
git clone xxx
# 进入仓库目录
cd mag-design/
# 安装依赖
npm i
# 构建
npm run build
```

获取`/dist/mag-ui.min.css`包进行部署。

### 样式表部署

```html
<head>
    <title></title>
    <!-- 引入全局style -->
    <link rel="stylesheet" type="text/css" href="magui.css">
</head>
```

### 组件使用

- class方式使用

使用对应的`class`即可使用相关样式。对于依赖html结构的样式簇，无法单独使用，必须在样式簇结构下使用。
```html
    <div class="button"></div>
```

- 组件引用
```html
<mip-img
    layout="responsive" 
    width="350" 
    height="263"
    src="https://www.mipengine.org/static/img/sample_01.jpg">
</mip-img>
```

## 开发指南

### 环境准备

确保安装了Node.js(>=4)，然后克隆仓库并安装依赖。

```bash
# 克隆仓库
git clone xxx
# 进入仓库目录
cd mag-design/
# 安装依赖
npm i
```


### 编译打包
对`src`下的所有`styl`文件编译、压缩、打包到`dist`目录；将`src`和`example`下的`html`文件拷贝到`dist`下。

```bash
npm run build
# 或者
./node_modules/gulp/bin/gulp.js build
```

### 预览

使用本地server预览组件。
首先需要在对应组件下编写demo文件`index.html`。
- 组件的demo路径：`src/xxx/index.html`
- 页面级别(所有组件)的demo路径：`src/example/index.html`

```bash
# 预览单个组件demo
npm run preview button

# 预览页面级别(所有组件)demo
npm run preview
```

## License
[MIT](https://github.com/mipengine/mag-design/blob/master/LICENSE)

Copyright (c) 2017-present, Baidu Inc.
