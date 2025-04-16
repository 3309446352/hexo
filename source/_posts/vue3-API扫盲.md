---
abbrlink: ''
abstracts: vue3文档中API模块的所有内容
author:
  avatar: https://raw.githubusercontent.com/3309446352/Images/main/img/preview.jpg
  description: 古来圣贤皆寂寞，惟有饮者留其名。
  link: https://hexo-git-test-3309446352s-projects.vercel.app/
  name: 好名字都是狗起的
  socials:
    github: https://github.com/3309446352
categories:
- - 前端
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/seqin.jpg
date: '2025-04-16T15:03:27.905083+08:00'
description: vue3文档中API模块的所有内容
tags:
- Vue
title: vue3所有API盲点
updated: '2025-04-17T01:28:02.248+08:00'
---
#  {{ title }}

## 简介 : {{ description}}

 ](https://juejin.cn/post/7164159759619194893)

# 📍 前言

**最近在一次理解**`vue`项目的代码时，发现周一对好多`API`都不太熟悉。这间接导致的问题是，代码理解速度要比平常要慢很多。于是乎，赶忙把`vue API`的学习提上了日程。

**在下面的文章中，将地板式地扫盲**`vue3`文档中`API`模块的所有内容，融入周一的理解进行深入介绍。下面就来一起看看吧\~🍬

# 一、🖇 框架搭建

## 1、关于文档

**首先附上官方文档的具体材料：**[cn.vuejs.org/api/](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2F "https://cn.vuejs.org/api/")

## 2、VUE3 API 整体盘点

**在**`vue3`的全新`API`中，有部分在`vue2`的基础上沿用了。还有另外一部分，是`vue3`所新增加的。我们先来看`vue3 API`文档主要包含哪些内容？

`vue3 API`主要包含以下六个部分：

* **全局 API —— 全局会用到的 API**
* **组合式 API —— vue3 所拥有的组合式 API**
* **选项式 API —— vue2 所拥有的选项式 API**
* **内置内容 —— 指令、组件、特殊元素和特殊属性**
* **单文件组件 —— 语法定义、**
* **进阶 API —— 渲染函数、服务端渲染、TS 工具类型和自定义渲染**

![vue3 API盘点](https://raw.githubusercontent.com/3309446352/Images/main/Content/1a558d668bdb4098b5906856113fa41atplv-k3u1fbpfcp-jj-mark3024000q75.webp)

**下面将依据上面提到的六大点内容，来进行相应的剖析和讲解。**

# 二、🎨 全局 API

**vue3 的全局 API 包含两个部分：应用实例和通用 API。那它们各自都有哪些内容呢？**

## 1、应用实例

![02_应用实例](https://raw.githubusercontent.com/3309446352/Images/main/Content/48d3faec9e3e4347bab736c6a56ad4c1tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 2、通用 API

![02_通用](https://raw.githubusercontent.com/3309446352/Images/main/Content/22e0ba81bdb0419ab7db3683e96c677etplv-k3u1fbpfcp-jj-mark3024000q75.webp)

# 三、🚲 组合式 API

**谈到**`vue3` ，相信大家最为熟悉的就是 `composition API` 了，也就是 `组合式 API` 。那么，`vue3` 的 `组合式 API` 都给我们带来了什么呢？

## 1、setup

![01_setup](https://raw.githubusercontent.com/3309446352/Images/main/Content/c40e772cbf184b75bf6e6a869f317c03tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 2、响应式：核心

![02_响应式核心](https://raw.githubusercontent.com/3309446352/Images/main/Content/14078b9e9ca14b5caf2ed92692bc40a2tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 3、响应式：工具函数

![03_响应式工具函数](https://raw.githubusercontent.com/3309446352/Images/main/Content/b1b1da9b608e449ca8f21038fd761e59tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 4、响应式：进阶

![04_响应式进阶](https://raw.githubusercontent.com/3309446352/Images/main/Content/e5f1183e88624bc69a930897b47ee2aetplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 5、生命周期钩子

![05_生命周期钩子](https://raw.githubusercontent.com/3309446352/Images/main/Content/6d78d13c852c4a6eab6a44a6601015c9tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 6、依赖注入

![06_依赖注入](https://raw.githubusercontent.com/3309446352/Images/main/Content/4b40f6eedb6f4046af0645c5564c09e0tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

# 四、🌠 选项式 API

`选项式API` 即 `options API` 。可能有的小伙伴会觉得它在 `vue2` 项目下会更为常见一些。但在 `vue3` 项目中，也是有一些 `选项式API` 值得我们去挖掘的。那都有哪些内容呢，我们来一探究竟。

## 1、状态选项

![01_状态选项](https://raw.githubusercontent.com/3309446352/Images/main/Content/f7209eb996134846a80afdccdc1cf88atplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 2、渲染选项

![02_渲染选项](https://raw.githubusercontent.com/3309446352/Images/main/Content/c1af1316b37249dbba7add34476ba36btplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 3、生命周期选项

![03_生命周期选项](https://raw.githubusercontent.com/3309446352/Images/main/Content/a4cdbd423f5441a88535af4c9c48d45atplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 4、组合选项

![04_组合选项](https://raw.githubusercontent.com/3309446352/Images/main/Content/6b0ff576506d49dbb9a37ef0e99aba2etplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 5、其他杂项

![05_其他杂项](https://raw.githubusercontent.com/3309446352/Images/main/Content/5b2246ebc65344cb93f1f1d4ef024a10tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 6、组件实例

![06_组件实例](https://raw.githubusercontent.com/3309446352/Images/main/Content/037d0d3a71ea4129a64dd6c8aea93abdtplv-k3u1fbpfcp-jj-mark3024000q75.webp)

# 五、🏕 内置内容

`vue3` 的内置内容包括**指令**、**组件**、**特殊元素 element**和**特殊属性 attributes**。如果要谈在什么场景下会用到内置内容，那周一可能觉得，在一般的 `vue` 项目开发中，基本都会用到**内置内容**。较为常见的是用 v-if 和 v-else-if 来判断什么时候显示某个组件，什么时候不显示某个组件。

**还有像 **`v-model` 、`v-on` 和 `v-for` 等指令，都是在 `vue` 项目中非常高频率使用的指令。那 `vue3` 的内置内容都还有哪些东西呢？请看下方介绍。

## 1、指令

![01_指令](https://raw.githubusercontent.com/3309446352/Images/main/Content/434b8e6051904290a8d878becfa183cftplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 2、组件

![02_组件](https://raw.githubusercontent.com/3309446352/Images/main/Content/d3d10419800648108118383899dd6a58tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 3、特殊元素

![03_特殊元素](https://raw.githubusercontent.com/3309446352/Images/main/Content/e30e4b2adbbd43508cb50d2c5b194394tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 4、特殊属性 Attributes

![04_特殊属性Attributes](https://raw.githubusercontent.com/3309446352/Images/main/Content/d3064e1d58d8421cb4d15026bdcea024tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

# 六、📸 单文件组件

**对于 **`vue` 来说，相信大家都会非常熟悉它的组件化思想，似乎有一种理念是：万物皆可组件。那对于一个组件来说，我们都需要了解它的什么内容呢？比如，我们写的 `<template>` 是什么，用 `<script setup>` 和 `<script lang="ts">` 都分别是什么含义，`<style>` 用了 `scoped` 是什么意思，`:slotted` 插槽选择器又在什么情况下使用呢？我们一起来一探究竟。

## 1、SFC 语法定义

![01_SFC语法定义](https://raw.githubusercontent.com/3309446352/Images/main/Content/8ba637efb1d0432b9bfaf9156f2a5d67tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 2、单文件组件 script setup

![02_单文件组setup](https://raw.githubusercontent.com/3309446352/Images/main/Content/24cd675bd15f462bbf1bdea7a2fa38dftplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 3、css 功能

![03_CSS功能](https://raw.githubusercontent.com/3309446352/Images/main/Content/cb956ae4b93a433ca01be19cbc47480btplv-k3u1fbpfcp-jj-mark3024000q75.webp)

# 七、📈 进阶 API

**上面我们了解了 **`vue3` 的基础 API，准确来说，上面的 `API` 可以解决实际工作中 `80%` 的问题。那下面，我们就再来看一些较为进阶的 `api` 操作。下面所涉及到的这些 `API` ，更多的是可以在**某些定制化的场景**下，做一些高阶的操作。比如：我们可以在一个 `headless` 组件里，用 `render` 和 `h()` 函数，来渲染自定义的页面。那 `进阶 API` 都还有哪些东西呢，来看下面的内容。

## 1、渲染函数

![01_渲染函数](https://raw.githubusercontent.com/3309446352/Images/main/Content/ede9874e71314de5abaa8694e928b237tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 2、服务端渲染

![02_服务端渲染](https://raw.githubusercontent.com/3309446352/Images/main/Content/0ca5312a130b41239b47e73c4da823bbtplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 3、TypeScript 工具类型

![03_TypeScript工具类型](https://raw.githubusercontent.com/3309446352/Images/main/Content/814883d4d24e44c99d1d12cac9932f81tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 4、自定义渲染

![04_自定义渲染](https://raw.githubusercontent.com/3309446352/Images/main/Content/68153183f580470aafbb0697f640ac6ctplv-k3u1fbpfcp-jj-mark3024000q75.webp)

# 八、🛒 结束语

**到这里，我们也就讲完了 **`vue3 API` 所有的知识点。个人认为，原理知识的学习，是为了更好的将其运用到项目中。所以在学完以上内容后，不妨可以进一步将其运用到项目里，总结出工作中的最佳实践。

**文章根据周一的理解做了一些输出，有观点不当之处欢迎交流\~**

# 🐣 彩蛋 One More Thing

**周一同学 Zelina 的个人说明书：**[pzfqk98jn1.feishu.cn/wiki/wikcnT…](https://link.juejin.cn/?target=https%3A%2F%2Fpzfqk98jn1.feishu.cn%2Fwiki%2FwikcnTijikVNdkWdBEKzQpiA6ie "https://pzfqk98jn1.feishu.cn/wiki/wikcnTijikVNdkWdBEKzQpiA6ie")

**思维导图**`github`地址：[github.com/mondaylab/v…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmondaylab%2Fvue3-api "https://github.com/mondaylab/vue3-api")

`vue3` 入门指南文章推荐：[焕然一新的 Vue 3 中文文档要来了 🎉](https://juejin.cn/post/7077701166397653028 "https://juejin.cn/post/7077701166397653028")

**以上就是本文的全部内容，我们下期见！🍻🍻🍻**

# 引入

[花了一天的时间，地板式扫盲了 vue3 所有 API 盲点 📍 前言 最近在一次理解 vue 项目的代码时，发现周一对好多 API 都不太 - 掘金](https://juejin.cn/post/7164159759619194893)
