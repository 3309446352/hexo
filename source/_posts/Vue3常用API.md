---
abbrlink: ''
abstracts: 本文详述Vue3中的关键API，包括setup、生命周期、reactive、ref、toRef、toRefs、shallowReactive、shallowRef、toRaw、markRaw、provide和inject、watch及watchEffect等。                 
author:
  avatar: https://raw.githubusercontent.com/3309446352/Images/main/img/preview.jpg
  description: 古来圣贤皆寂寞，惟有饮者留其名。
  link: https://hexo-git-test-3309446352s-projects.vercel.app/
  name: 好名字都是狗起的
  socials:
    github: https://github.com/3309446352
categories:
- - 前端
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/Fate.jpg
date: '2025-04-16T14:27:56.569189+08:00'
description: 本文详述Vue3中的关键API，包括setup、生命周期、reactive、ref、toRef、toRefs、shallowReactive、shallowRef、toRaw、markRaw、provide和inject、watch及watchEffect等。讲解了它们的使用方法、区别和应用场景，帮助开发者更好地理解和应用Vue3。                   
excerpt:  简介 : 一、正文 Vue2 每次都把整个 Vue 导入，例如 Vue2 的 main.js 文件中的代码 import Vue from 'vue' import App from './App.vue'   Vue.config.productionTip = false   new Vue(   render: h =&gt; h(App) ).$mount('#app')  但很...
tags:
- Vue
title: Vue3常用API
updated: '2025-04-16T21:18:18.923+08:00'
---
#  {{ title }}

## 简介 : {{ description}}


## 一. 框架搭建

####         1. 关于文档 [API 参考 | Vue.js (vuejs.org)](https://cn.vuejs.org/api/ "API 参考 | Vue.js (vuejs.org)")

####         2.  [VUE3](https://so.csdn.net/so/search?q=VUE3&spm=1001.2101.3001.7020) API 整体盘点

        Vue3 api 主要包含以下六个部分:

                全局API --- 全局会用到的API

                组合式API --- vue3所拥有的组合式API

                选项式API --- [vue2](https://so.csdn.net/so/search?q=vue2&spm=1001.2101.3001.7020)所拥有的选项式API

                内置内容 --- 指令、组件、特殊元素和特殊属性

                单文件组件 --- 语法定义

                进阶API --- 渲染函数、服务端渲染、TS工具类型和自定义渲染

##  二. 全局 API        

####         1. 应用实例

####                 ![](https://i-blog.csdnimg.cn/blog_migrate/cef094321d929cc1e63f10ca9cc0e646.webp?x-image-process=image/format,png)

####          2. 通用 API

                ![](https://i-blog.csdnimg.cn/blog_migrate/fb404aee9ff210ac9e41cd51f4c07ce8.webp?x-image-process=image/format,png)

## 三. 组合式 API 

####          1. setup

               ![](https://i-blog.csdnimg.cn/blog_migrate/21711dbd5dfb50cbba200e1b7174061b.webp?x-image-process=image/format,png)

####          2. 响应式: 核心

              ![](https://i-blog.csdnimg.cn/blog_migrate/732f9d887d41b4d4cd56d8127b40ce3b.webp?x-image-process=image/format,png)

####          3. 响应式: 工具函数

                ![](https://i-blog.csdnimg.cn/blog_migrate/05b172c92b46c0a6feec1a872f3b6aae.webp?x-image-process=image/format,png)

####         4. 响应式: 进阶 

                ![](https://i-blog.csdnimg.cn/blog_migrate/97cffac1f753a85d4b90221ae4d1915c.webp?x-image-process=image/format,png)

####          5. 生命周期钩子

                ![](https://i-blog.csdnimg.cn/blog_migrate/5a5e265fd2edde602c8d247f0def15aa.webp?x-image-process=image/format,png)

####         6. 依赖注入

                 ![](https://i-blog.csdnimg.cn/blog_migrate/1bfa6be178e6ed03e18447fa518a9c40.webp?x-image-process=image/format,png)

##  四. 选项式 API

        选项式 API 即 options API .在[vue3项目](https://so.csdn.net/so/search?q=vue3%E9%A1%B9%E7%9B%AE&spm=1001.2101.3001.7020)中,也是有一些 选项式 API.

####         1. 状态选项

                ![](https://i-blog.csdnimg.cn/blog_migrate/e81a0a9f6e92d24900c1dcf311e142d6.webp?x-image-process=image/format,png)

####          2. 渲染选项

                ![](https://i-blog.csdnimg.cn/blog_migrate/da2b8c6226300c0b1dd214df3188e03f.webp?x-image-process=image/format,png)

####          3. 生命周期选项

                ![](https://i-blog.csdnimg.cn/blog_migrate/b8adc9be33c684e851b14b0deb62eef9.webp?x-image-process=image/format,png)

####         4.  组合选项

                ![](https://i-blog.csdnimg.cn/blog_migrate/5ba004690da41fae689891e59081f5fe.webp?x-image-process=image/format,png)

####         5. 其他杂项

                ![](https://i-blog.csdnimg.cn/blog_migrate/f1ab32371d8eec87b02d244de0b7e0b1.webp?x-image-process=image/format,png)

####          6. 组件实例

##                 ![](https://i-blog.csdnimg.cn/blog_migrate/587fff170e498771c3d806cd520e232b.webp?x-image-process=image/format,png) 五. 内置内容

        vue3 的内置内容包括 指令、组件、特殊元素element和特殊属性attributes.如果要谈在什么场景下会用内置内容,那在一般的vue项目开发中,基本都会用到内置内容.比较常用的是 v-if和v-else 等.

####         1. 指令

                ![](https://i-blog.csdnimg.cn/blog_migrate/61f6bc4aa12105f9464468de1add585d.webp?x-image-process=image/format,png)

####          2. 组件

                ![](https://i-blog.csdnimg.cn/blog_migrate/180d317e265dbcfcfccaca3e7a4f5655.webp?x-image-process=image/format,png)

####         3. 特殊元素

                 ![](https://i-blog.csdnimg.cn/blog_migrate/f111b65c752fb747daa844e6eee56db1.webp?x-image-process=image/format,png)

####          4. 特殊属性 Attributes

                ![](https://i-blog.csdnimg.cn/blog_migrate/5f9af20c9f84e94ba4dbe5c451a55e2a.webp?x-image-process=image/format,png)

## 六. 单文件组件

         万物节皆可组件

####         1. SFC 语法定义

                ![](https://i-blog.csdnimg.cn/blog_migrate/49f1bfae3a81effe477c69c3ec97b219.webp?x-image-process=image/format,png)

####          2. 单文件组件 script setup 

                ![](https://i-blog.csdnimg.cn/blog_migrate/959045ee93fb3c5561c8ea6ccbf118df.webp?x-image-process=image/format,png)

####         3. css功能

                 ![](https://i-blog.csdnimg.cn/blog_migrate/c4c48f6038ce3fc9a8940c9b8c682e6a.webp?x-image-process=image/format,png)

## 七. 进阶API 

         例: 我们可以在一个 headless 组件里,用render 和 h() 函数,来渲染自定义的页面.

####         1. 渲染函数

                ![](https://i-blog.csdnimg.cn/blog_migrate/739f27f5f8ea2fd917dc379c0815a53a.webp?x-image-process=image/format,png)

####         2. 服务端渲染

                 ![](https://i-blog.csdnimg.cn/blog_migrate/c89268c0a13e58da7f17a90e1f5809ea.webp?x-image-process=image/format,png)

####          3. TypeScript工具类型

                ![](https://i-blog.csdnimg.cn/blog_migrate/f71202be81dc3f586faac4274c594654.webp?x-image-process=image/format,png)

####          4. 自定义渲染

                ![](https://i-blog.csdnimg.cn/blog_migrate/7687824d53d16e0f3d3366ac1e9b85cc.webp?x-image-process=image/format,png)
