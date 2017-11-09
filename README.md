# Mag Design

[![Build Status](https://travis-ci.org/mipengine/mag-design.svg?branch=master)](https://travis-ci.org/mipengine/mag-design) [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

本项目是mag-design设计规范的组件库，本文档主要介绍组件的使用方法和组件的开发指南。

## 依赖与安装

确保安装了Node.js(版本>=4)。

## 使用方式

### npm安装
`./node_modules/mip-mag-design/dist/mag-design.min.css`获取最新编译包。

```bash
npm install mip-mag-design --save-dev
```

### 手动编译获取最新包
clone仓库
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

获取`dist/mag-design.min.css`包进行部署。

### 样式表部署

```html
<head>
    <title></title>
    <!-- 引入全局style -->
    <link rel="stylesheet" type="text/css" href="mag-design.min.css">
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

### 创建组件
工具自动生成`styl`、`index.html`、`READEME.md`文件
```bash
    npm run creat xxx
```

### 样式开发

- 样式开发遵从`stylus`语法，语法学习请移步：[stylus语法](http://stylus-lang.com/)
- 组件样式须在`src/base/main.styl`中引入：

```
@require 'reset'
@require '../button/button'
@require '../link/link'
```

### demo开发

书写`html`即可，引入`mag-design.min.css`路径为：

- 组件demo引入方式：
```html
    <link rel="stylesheet" type="text/css" href="../mag-design.min.css">
```

- example下demo引入方式：
```html
    <link rel="stylesheet" type="text/css" href="../dist/mag-design.min.css">
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

### 提交
注意：`dist`需提交，用作npm包的引用文件。

```bash
# add需要提交的文件
git add xxx

# 提交一个commit
git commit -m 'xxxx'

# 打包一个版本,通常打包小版本patch；此操作会自动发布npm包
npm version [patch | minor | major]

# 提交源代码到仓库
git push
```

## License
<a href='https://github.com/mipengine/mag-design/blob/master/LICENSE'>
    <img src='https://img.shields.io/github/license/mashape/apistatus.svg'  title='license' alt='license'>
</a>

Copyright (c) 2017-present, Baidu Inc.
