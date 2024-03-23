---
Tags: -Hexo -aurora
abbrlink: ''
author:
  avatar: https://raw.githubusercontent.com/3309446352/Images/main/img/pr.png
  description: Think like an artist, code like an artisan.
  link: https://tridiamond.tech
  name: TriDiamond
  socials:
    github: https://github.com/tridiamond
categories: []
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/illust_63502560_20210626_204746.jpg
date: '2020-08-15T18:49:36+08:00'
tags: []
title: Hexo-aurora 文章属性配置详解
updated: '2024-03-23T22:22:41.663+08:00'
---
```yaml
---
title: Article Title #标题
date: 2020-08-15 18:49:36 #时间
tags: #标签
  - 博客搭建
categories:
cover: https://cover.png #文章头像
author:
  name: TriDiamond # 作者名字
  link: https://tridiamond.tech #链接
  avatar: https://raw.githubusercontent.com/3309446352/Images/main/img/Snipaste_2024-02-04_23-53-27.png #作者头像
  description: 'Think like an artist, code like an artisan.' #简介
  socials:
    github: https://github.com/tridiamond #联系方式
---
```

为博客预先配置作者列表，然后使用文章中预配置的属性。`author key``author`

首先，您需要在主题配置文件中预先配置作者列表，该列表位于 .`_config.aurora.yml`

```yaml
authors:
  author-1:
    name: TriDiamond
    link: https://tridiamond.tech
    avatar: https://avatar.png
    description: 'Think like an artist, code like an artisan.'
    socials:
      github: https://github.com/tridiamond
  author-2:
    name: Jerry
    avatar: https://Jerry.png
    link: https://github.com/TriDiamond
    description: 'I am Jerry, how are you?'
    socials:
      github: https://github.com/Jerry
```

- 然后你可以在主题配置中使用作者来设置文章 **Front-Meta** 中的作者。`keys`

```yaml
---
title: Article Title
date: 2020-08-15 18:49:36
tags:
  - Tag
categories:
  - Cate
cover: https://cover.png
author: author-1
---
```

> 详情请见官方文档： [Plugins | Hexo Aurora Docs (tridiamond.tech)](https://aurora.tridiamond.tech/en/configs/plugins.html)
