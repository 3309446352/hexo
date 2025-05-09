---
abbrlink: ''
abstracts: abstracts
author: ZMC
categories:
- - 爬虫
cover: null
date: '2025-04-21T01:09:55.436686+08:00'
description: 在 Python 开发中，经常需要处理 XML 和 HTML 数据，如网页数据抓取、配置文件解析等。lxml 是一个功能强大且高效的库，它基于
  libxml2 和 libxslt 库，提供了简洁易用的 API 来处理 XML 和 HTML 文档
tags:
- lxml
- 爬虫
title: xpath语法详解
updated: '2025-04-21T01:09:56.735+08:00'
---
#  {{title}}

## 简介 : {{description}}


**引言**:

[lxml](https://so.csdn.net/so/search?q=lxml&spm=1001.2101.3001.7020)是基于xpath语法的,也就是说如果你掌握了xpath语法,那么对于你学习其他工具解析文档都是很容易的事。比如前面我们介绍的Scrapy框架就是采用xpath语法进行文档解析。废话不多说，直入主题。

**一.lxml安装步骤**

**1.安装python(这里就不具体阐述了,见我之前文章)**

**2.使用****easy\_**install工具****下载lxml模块(**尤其在linux中**)

**注:python 3.x之后就集成了pip,easy**\_**install 等工具可以用来直接下载python所需的模块。然后在这里我使用的是py 3.4.3,当使用pip下载lxml会出现各种依赖问题,所以为了避免这些问题我们直接使用easy**\_**install工具下载。**

**二.xpath语法详解**(耐心看完,不一定全部记住,便于以后随时查找)

**xpath是一门在xml文档中查找信息的语言,可用于查找元素和属性。**

**1.选取节点**  ** **xpath使用路径表达式在xml文档中选取节点,节点是通过沿着路径或者step来选取的。**  ** **下面列出了最常用的路径表达式**


| **表达式** | **描述**                           | **实例**                  | **解释**                          |
| ---------- | ---------------------------------- | ------------------------- | --------------------------------- |
| **/**      | **从根节点出发开始定位**           | **xpath(“/a”)**         | **选择根节点下的所有a**           |
| **//**     | **从任意节点出发开始定位**         | **xpath(“//a”)**        | **选择所有的a节点**               |
| **.**      | **从当前节点出发开始定位**         | **xpath(“./a”)**        | **选择当前节点下的所有a节点**     |
| **..**     | **从当前节点的父节点出发开始定位** | **xpath(“../a”)**       | **选择父节点下的所有a节点**       |
| **@**      | **选择节点的属性**                 | **xpath(“./a/@href”)**  | **选择当前节点下a标签的href属性** |
| **text()** | **选择节点的text文本**             | **xpath(“./a/text()”)** | **选择a节点的text文本**           |

**注**:当xpath的路径以/开头时，表示让Xpath解析引擎从文档的根节点开始解析。当xpath路径以//开头时，则表示让xpath引擎从文档的任意符合的元素节点开始进行解析。而当/出现在xpath路径中时，则表示寻找父节点的直接子节点，当//出现在xpath路径中时，表示寻找父节点下任意符合条件的子节点，不管嵌套了多少层级**  ** **2.谓语**

**谓语被嵌在方括号内，用来查找某个特定的节点或包含某个指定的值的节点**


| **表达式**             | **描述**                            | **实例**                                        | **解释**                                        |
| ---------------------- | ----------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| [**n**]                | **选择某节点的第n(n>=1)个子节点**   | **xpath(“//h//a**[**1**]**”)**                | **选择h节点下第1个a节点**                       |
| [**last()**]           | **选择某节点的最后一个子节点**      | **xpath(“//h//a**[**last()**]**”)**           | **选择h节点下最后一个a节点**                    |
| [**@attribute**]       | **选择节点带有attribute属性的节点** | **xpath(“//img**[**@src**]**”)**              | **选择带有src属性的img节点**                    |
| [**@attribute=value**] | **选择带有attribute属性值的节点**   | **xpath(“//a**[**@href=”aaa.jpg”**]**”)**   | **选择href属性值为aaa.jpg的a节点**              |
| \*                     | **任意匹配****元素或者属性**        | **xpath(“//a/***“),xpath(“//a[**@***]**”)** | **选择a节点下的所有子节点,选择带有属性的a节点** |

**3.模糊搜索与匹配(应对复杂情况,特别有用)**


| **函数**        | **用法**                                                                               | **解释**                                          |
| --------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **starts-with** | **xpath(“//div**[**starts-with(@id,’user’)**]**”)**                                | **选择id值以user开头的div节点**                   |
| **contains**    | **xpath(“//div**[**contains(@id,’user’)**]**”)**                                   | **选择id值包含user的div节点**                     |
| **and**         | **xpath(“//div**[**starts-with(@class,”login”) and contains(@id,’user’)**]**”)** | **选择class值以login开头和id值包括user的div节点** |
| **text()**      | **xpath(“//div**[**starts-with(text(),”mytest”)**]**”)**                           | **选取节点文本包含myest的div节点**                |

**4.xpath轴**  ** **当**查找当前节点的父子,兄弟等节点**时,需要用到xpath轴


| **轴名称**           | **表达式**                                | **描述**                                         |
| -------------------- | ----------------------------------------- | ------------------------------------------------ |
| **ancestor**         | **xpath(“./ancestor::**\***”)**         | **选取当前节点的所有父辈节点**                   |
| **ancestor-or.self** | **xpath(“./ancestor-or-self::**\***”)** | **选取当前节点的父辈节点和节点自身**             |
| **child**            | **xpath(“./child::**\***”)**            | **选择当前节点的所有子节点**                     |
| **descendant**       | **xpath(“./descendant::**\***”)**       | **选择当前节点的所有后代节点(子节点、孙节点等)** |
| **follow**           | **xpath(“./following::**\***”)**        | **选取当前节点结束标签后的所有节点**             |
| **follow-sibling**   | **xpath(“./follow-sibling::**\***”)**   | **选取当前节点之后的兄弟节点**                   |
| **preceding**        | **xpath(“./preceding::**\***”)**        | **选取当前开始标签前的所有节点**                 |

**三.lxml实战**

**提取出人人网用户页面的昵称信息(需要先实现模拟登录功能,见我前面的文章)**

```
 #需要导入该模块, 如果没有则需要使用pip 下载
 from lxml import etree
 import requests
 renrenurl=""
 resp=equests.get(renrenurl)
 html=etree.HTML(resp.content)
 #将列表中的元素逐个用引号连接成字符串
 name="".join(html.xpath("//title/text()"))
 index=name.find("-")
 if index!=-1:
     username=name[index+1:]
 print("username-->%s"%username)
    
    123456789101112123456789101112AI写代码
```

**四. 感悟**  ** **实战中的例子比较简单,代码不重要,重要的是思路和方法。我们不可能将所有**  ** **用法都列举,我们也不可能将所有的代码和用法都记住。只要有思路和方法,以后再遇到此类问题就会觉得轻松了。**
