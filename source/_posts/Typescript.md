---
abbrlink: Typescript
abstracts: TypeScript（简称：TS）是 JavaScript 的超集（JS 有的 TS 都有）。 从编程语言的动静来区分，TypeScript 属于静态类型的编程语言，JS 属于动态类型的编程语言。 
author: ZMC
categories:
- - Typescript
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/Gnjux71a8AAFnRZ.webp
date: '2025-05-12T01:14:14.086652+08:00'
description: TypeScript（简称：TS）是 JavaScript 的超集（JS 有的 TS 都有）。 从编程语言的动静来区分，TypeScript 属于静态类型的编程语言，JS 属于动态类型的编程语言。 
tags:
- 前端
title: title
updated: '2025-05-12T01:25:13.970+08:00'
---
#  {{title}}

## 简介 : {{description}}

视频链接：[https://www.bilibili.com/video/BV14Z4y1u7pi?p=1](https://www.bilibili.com/video/BV14Z4y1u7pi?p=1)

## 1\. [TypeScript](https://so.csdn.net/so/search?q=TypeScript&spm=1001.2101.3001.7020) 介绍

### 1.1 TypeScript 是什么

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/0214a81f3fd31be023af03894c551e0c.webp)

### 1.2 TypeScript 为什么要为 JS 添加类型支持？

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/0afd0f407af7810960657e9876e26de4.webp)

### 1.3 TypeScript 相比 JS 的优势

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/19d59d224ffc1d7b0a161ea5f4bdf0d7.webp)

## 2\. TypeScript 初体验

### 2.1 安装编译 TS 的工具包

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/153098e85c7d039d0d9831b3870328a8.webp)

### 2.2 编译并运行 TS 代码

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/de96fa17e020f463ab4931bdde9a90c6.webp)

### 2.3 简化运行 TS 的步骤

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/ecbb8a4e754364bc181d5682f8409d3d.webp)

- 注意：若 `ts-node hello.ts`执行报错，需要先执行命令 `tsc --init`创建一个 tsconfig.json 文件，该文件是 TypeScript 项目的配置文件
- tsconfig.json 包含 TypeScript 编译的相关配置，通过更改编译配置项，我们可以让 TypeScript 编译出 ES6、ES5、node 的代码。

## 3\. TypeScript 常用类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/4559143d02d5f23df4ef03a18a35627f.webp)

### 3.1 类型注解

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/5a340c236f456fb67e74951dc1828973.webp)

### 3.2 常用基础类型概述

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/514bf679ac06a567a5bae1e98549c1f5.webp)

### 3.3 原始类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/edb37212d461c6f5dec0d18c2241ac4e.webp)

### 3.4 数组类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/a8bede2ec33413c99b3409b54cc5a684.webp)

### 3.5 类型别名

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/cc09db3eee19ec7ad1921932e81a48ee.webp)

### 3.6 函数类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/5a4e37db9208d4d628d2c28ce1cf396f.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/967a0718d2c41c614f780af1b17c559a.webp)

- 如果函数没有返回值，那么，函数返回值类型为：void。

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/5ee03bbe4b2e5afb5de5e795b54f1d45.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/ec85c45ae99621f6ef9f086aa82d9511.webp)

### 3.7 对象类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/32141f3053210dfaccca4b3805ca2e6a.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/6755f48f2f7efdca8cedbbfd2c8cdfa8.webp)

### 3.8 接口

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/10c6e8fcc83570a44ce77f35f226a348.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/378a0d7dccc0dcd0ff8528a00963fda7.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/c5bd994c0796d56c494099f3b3b72cb5.webp)

### 3.9 元组

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/8c5323962467fcd5102a3785c51555d4.webp)

### 3.10 类型推论

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/c6c0d11a1f35e96769020020b7a3863c.webp)

### 3.11 类型断言

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/e0642811d73aa3e71cc53583eb0b398a.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/9feb125f02f4d6cfae28c54c51a7519e.webp)

### 3.12 字面量类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/29ca4a8240b6cd43fc2a33fac3cf0c19.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/3e1f2d7ce96891fe2c35db62e96fb261.webp)

### 3.13 枚举

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/db4f7537edd76627557887f9d029baa8.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/50a9089ef3722ccf2800865ee6bcbcbf.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/44be416be45768ae188929ac0aec79c5.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/05bd1b440106b006af907cc1eff11173.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/6d40ea5ed93db54ebbd0c8ceef72bde6.webp)

### 3.14 any 类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/d0a8f7675c547509d090614595d332b0.webp)

### 3.15 typeof

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/906f860dced1f4f185b53c2bc118fe62.webp)

## 4\. TypeScript 高级类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/7315c53bdcb6be60750bf11170aff66d.webp)

### 4.1 class 类

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/b9d42c004fdb70a5c4a8e9e5935eed6a.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/e698e64d6db8541b8e11a449eac464ac.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/38797ae481c1806237025ad8a808ca0f.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/983398bdedf6c53f9346627e5d5318d4.webp)

> - 类继承的两种方式：1 extends（继承父类） 2 implements（实现接口）。

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/3e8c29e44fcc52af68089fe277847b9a.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/eead132c7ec4b07e28a7815e7970420d.webp)

> - 类成员可见性：可以使用 TS 来控制 class 的方法或属性对于 class 外的代码是否可见。

- public
  ![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/9c953b491b17ff90ff7a714d8791e9e0.webp)
- protected
  ![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/3189d9574d6a7e4109ba4192493a64bb.webp)
- private
  ![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/0320430fdb7e912b6e334c91e87370a9.webp)
- readonly
  ![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/4319a5d9a880da33afea6ccaffcc1db7.webp)

### 4.2 类型兼容性

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/adea59d9ab6de3eb53af09d41a036c3f.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/8886c2dd57578275d1d2658c2210495a.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/7bda788a4c1bc220fd2fe627696b34a3.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/e4058d6f30b1f7217f81d31d78b4b508.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/026692eb3bc0a03e38357279fa885835.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/62840a769b720ebdb9e548ea09733b8c.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/41fff0ac468357d20bfaf3b19106b287.webp)

### 4.3 交叉类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/7fa4218e8f4148931720662abccab657.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/d110c81c5bbad9c3cf37bce4633559e4.webp)

### 4.4 泛型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/d93d683fbe0d9a7c14aaf173d9739678.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/813bbad8fa7e9e65ac25d4d1fe117faa.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/85380def3436db1d8ca842a5b496f909.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/f7f72ac7148ea2cfcca8260e4c1fbec4.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/95c332abb8d6a4e445dc9cc1bb272d4d.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/f9a01bdc40b78107f5eec50ac033104a.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/3419122421cadc355faf742250f68f61.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/5d7a2b3cd1dcc8bd95cf2a9d7c28e02a.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/284ce8e4a22936ad55a83b2bef99f394.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/fa5a0f6613f94f85a2404304bd2f50e2.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/3c5a9a475747a81344377c718f87a9db.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/0476eab4c0b673ccc6fb4b01ec04e9c4.webp)![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/b7b6ed68a0ccb9c88f28b966da31ab44.webp)

- `Partial<Type>`
  ![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/ac84825f2bffb0832a8bfd22264bc25f.webp)
- `Readonly<Type>`![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/2a034c1182fbc345b6151c90d08846ca.webp)
- `Pick<Type, Keys>`
  ![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/c6e77100aa1df1d08e701fb9e928ffc2.webp)
- `Record<Keys, Type>`

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/ab5e13943173a75fa6671abc5c0fef23.webp)

### 4.5 索引签名类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/b9a161b65ac2597f750e83dbcb370c11.webp)

### 4.6 映射类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/2184d15990bea79dbc53a0671cb1019b.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/f8faa3ffb450d9f420061e779804215b.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/caf3b81e3b968029dca0b2f53e375dcb.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/29a55719da87823d867385b3517a69fe.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/6990c2b519183affe95d97fc7f1ce006.webp)

## 5\. TypeScript 类型声明文件

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/6135ec8ca5c04a3ebeceee5f9ecb9d52.webp)

### 5.1 TS 中的两种文件类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/0e7bc2627f2e0f92117b79fbed8d13e7.webp)

### 5.2 类型声明文件的使用说明

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/9bfdbdc5378de1026e98733b6927da15.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/d00d916c2c85fc48c18d84379a7b927d.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/c8ed863a2a47330e08f9c5214ec1376f.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/0bee9af76bfefbd32304a04fa7530695.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/ba51feec1709b6ede2cb5ba5fa20cf1a.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/1466e7a177528ce671e9c339d6897286.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/0093db1d020d6bff4a3f1b7f2ada93b9.webp)

## 6\. 在 React 中使用 TypeScript

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/f0138ce46dc724e4d311c173537d248d.webp)

### 6.1 使用 CRA 创建支持 TS 的项目

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/27999ae88d644f0c6072af3194664da0.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/ebe302a4147878ecf90fe6ac8f954af3.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/ef2ba421825e9157c330b9ceff685ab7.webp)

### 6.2 TS 配置文件 tsconfig.json

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/b7a2bc93af6190e9e0940bef0489e7dc.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/c6049aabb858e034f807dd4d95af3919.webp)

### 6.3 React 中的常用类型

![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/b8bcc74b5e0a40ba89d0e0d08a5bc663.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/2c28961aedce40fe7c75673e0b1966db.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/bcf40b9ad071a0445bc25fc43c123c72.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/c0ac0489e4a29f812279113f64ebbb76.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/7a33c0bac1c1f017d64989cab05a16dd.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/c1f6a8940b9fd70b4804270560b45072.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/61332bc165e29af1ce5bd0a50f12fb1c.webp)
![在这里插入图片描述](https://raw.githubusercontent.com/3309446352/Images/main/Content/TypeScript/32303737702899bc56f8dcfe816c88f7.webp)

### 6.4  来源链接

[

```
Typescript入门教程（B站黑马程序员）
```

\_typescript教程-CSDN博客]([黑马程序员前端TypeScript教程，TypeScript零基础入门到实战全套教程\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV14Z4y1u7pi?vd_source=569ddc71343bfd735506b3e871af1fae)
