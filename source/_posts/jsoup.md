---
title: jsoup
date: 2024-03-19 00:12:01
tags: 爬虫
---
### 一、jsoup概述

jsoup 是一款基于 Java 的HTML解析器，它提供了一套非常省力的API，不但能直接解析某个URL地址、HTML文本内容，而且还能通过类似于DOM、CSS或者jQuery的方法来操作数据，所以 jsoup 也可以被当做爬虫工具使用。

### 二、相关概念简介

Document ：文档对象。每份HTML页面都是一个文档对象，Document 是 jsoup 体系中最顶层的结构。
Element：元素对象。一个 Document 中可以着包含着多个 Element 对象，可以使用 Element 对象来遍历节点提取数据或者直接操作HTML。
Elements：元素对象集合，类似于List<Element>。
Node：节点对象。标签名称、属性等都是节点对象，节点对象用来存储数据。
类继承关系：Document 继承自 Element ，Element 继承自 Node。
一般执行流程：先获取 Document 对象，然后获取 Element 对象，最后再通过 Node 对象获取数据。
