---
categories: 问题记录
tags:
  - hexo
description: 随便写点什么
permalink: ''
title: hexo专属测试
date: '2025-10-09 08:00:00'
cover: /images/db9e969544fc528abc752fa8dfd84c3b.jpg
updated: '2025-10-09 00:28:00'
---

## Notion 和 Hexo 集成对比表


| **功能** | **Notion** | **Hexo** | **集成方案**             |
| ------ | ---------- | -------- | -------------------- |
| 内容编辑   | 所见即所得编辑器   | Markdown | 在Notion中编辑，导出到Hexo   |
| 版本控制   | 自动保存历史版本   | 需配合Git使用 | 使用Notion API导出+Git管理 |
| 图片处理   | 拖拽上传，自动存储  | 需手动管理图片  | 自动将Notion图片下载到Hexo目录 |
| 多人协作   | 实时协作功能     | 需通过Git协作 | 在Notion协作，定时同步到Hexo  |
| 部署难度   | 无需部署       | 需要配置部署环境 | 自动化脚本部署              |


# 如何使用Notion编写文章


请访问教程获取帮助


[如何在Notion中开始写作 | NotionNext文档](https://docs.tangly1024.com/article/start-to-write)


[Notion快捷键 | NotionNext文档](https://docs.tangly1024.com/article/notion-short-key)


# 模板使用说明


NotionNext项目必须绑定一个Notion数据库才能使用。请访问教程获取帮助


[Vercel云部署 | NotionNext文档](https://docs.tangly1024.com/article/vercel-deploy-notion-next#3df829414795492bb41ec351eb6da84e)


## 模板字段说


Notion数据库中，每条数据都将有以下属性🤔：


| 属性         | 必填 | 说明                          | 备注                                              |
| ---------- | -- | --------------------------- | ----------------------------------------------- |
| `title`    | 是  | 文章标题                        |                                                 |
| `status`   | 是  | 发布状态                        | （仅当状态为`Published` 时会被 展示）                       |
| `type`     | 是  | 页面类型 (博文`Post` / 单页(`Page`) | 单页不会在博文列表显示 。                                   |
| `summary`  | 否  | 内容摘要                        | 搜索和简略显示会用到，在文章列表会显示出                            |
| `date`     | 否  | 发布日期                        | 在V3.3.9之前的版本此项为必填。                              |
| `category` | 否  | 文章分类                        | 可以自定义                                           |
| `tags`     | 否  | 文章标签                        | 可多个，建议不要太多                                      |
| `slug`     | 否  | 文章短路径                       | (每篇文章唯一，请勿 重复）                                  |
| `icon`     | 否  | 菜单栏图标(仅当`Page`/`Menu`类型有效)  | 可以参考：[图标库地址](https://fontawesome.com/v6/search) |
| `password` | 否  | 文章加锁                        | 需要输入密码才允许访问                                     |


数据库的每一列有不同的功能；


`type`： 这条数据的类型 ，有 `notice`(公告)、`post`(文章)、`page`(单页)、`menu`(菜单)、`submenu`(子菜单)这几种类型。


`slug` ，根据数据类型，有不同的作用：

1. 在菜单(Menu\SubMenu)中表示跳转到哪个页面， 在文章中表示这篇文章在博客中的访问地址、也可以是外链。通常以左斜杆开头： `/test-menu`对应访问 → [https://站点域名`/testmenu`。也可以设置成完整的外链，例如`https://tangly1024.com`](https://xn--eqrt2gkx3ahij/%60/testmenu%60%E3%80%82%E4%B9%9F%E5%8F%AF%E4%BB%A5%E8%AE%BE%E7%BD%AE%E6%88%90%E5%AE%8C%E6%95%B4%E7%9A%84%E5%A4%96%E9%93%BE%EF%BC%8C%E4%BE%8B%E5%A6%82%60https://tangly1024.com%60) 。
2. 在单页中（Page）, 表示这个页面在站点根目录的文件名。不要以左斜杆开头: 例如 `test-page` → 对应 [https://站点域名/`test-page`。](https://xn--eqrt2gkx3ahij/%60test-page%60%E3%80%82)
3. 在博文中(Post)，也表示文件路径，但是博文会自动添加一个前缀。例如: `test-post` 则可以通过 [https://域名/article/`test-post`](https://xn--eqrt2g/article/%60test-post%60) 访问到这个博客，这里的article是默认配置的前缀。
4. 
