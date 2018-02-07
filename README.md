# Mag design in MIP

[![Build Status](https://travis-ci.org/mipengine/mip-mag-design.svg?branch=master)](https://travis-ci.org/mipengine/mag-design) [![npm](https://img.shields.io/npm/v/mip-mag-design.svg)](https://www.npmjs.com/package/mip-mag-design)

本项目是 Mag Design 设计规范的组件库，本文档主要介绍组件的使用方法和组件的开发指南。

## 依赖与安装

确保安装了Node.js(版本>=4)。

## 使用方式

### 使用 CDN

说明 | 链接 | 备注
--- | --- | ---
大版本号 | `https://c.mipcdn.com/static/mag-design/v大版本号/mag-design.min.css` ，如：<br><https://c.mipcdn.com/static/mag-design/v2/mag-design.min.css> | 浏览器过期时间为10分钟
小版本号 | `https://c.mipcdn.com/static/mag-design/小版本号/mag-design.min.css` ，如：<br><https://c.mipcdn.com/static/mag-design/2.0.0/mag-design.min.css> | 浏览器过期时间为10年

### npm 安装

```bash
npm install mip-mag-design --save
```

并在代码中使用合适的方式引用：

#### webpack

```javascript
require('mip-mag-design');
```

#### html

```html
<link rel="stylesheet" type="text/css" src="/node_modules/mip-mag-design/dist/mag-design.min.css">
```

#### css

```css
@import "/node_modules/mip-mag-design/dist/mag-design.min.css"
```

#### stylus

```stylus
@require "/node_modules/mip-mag-design/src/base/main"
```

### 从源码编译

```bash
# 克隆仓库
git clone https://github.com/mipengine/mip-mag-design.git
# 进入仓库目录
cd mag-design/
# 安装依赖
npm i
# 构建
npm run build
```

获取 `dist/mag-design.min.css` 包进行部署。

### 组件使用

参考 [example/index.html](example/index.html)

## 开发指南

### 环境准备

确保安装了Node.js(>=4)，然后克隆仓库并安装依赖。

```bash
# 克隆仓库
git clone https://github.com/mipengine/mip-mag-design.git
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

```bash
# add需要提交的文件
git add xxx

# 提交一个commit
git commit -m 'xxxx'

# 打包一个版本,通常打包小版本patch
npm version [patch | minor | major]

# 提交源代码到仓库
git push

# 发布npm包
npm publish
```

### 提交信息规范

git commit 信息和 pull request 标题必须遵循 MIP 项目的 [提交信息规范](https://github.com/mipengine/spec/blob/master/docs/commit-message-spec.md) ，否则不予合入。

## License
<a href='https://github.com/mipengine/mip-mag-design/blob/master/LICENSE'>
    <img src='https://img.shields.io/github/license/mipengine/mip-mag-design.svg'  title='license' alt='license'>
</a>

Copyright (c) 2017-present, Baidu Inc.
