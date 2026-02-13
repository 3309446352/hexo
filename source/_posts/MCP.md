---
categories: ''
tags:
  - blog
description: ‘Mysql函数是指对每一行数据进行处理并返回一个结果的函数’
permalink: ''
title: MCP
date: '2025-10-11 15:38:00'
cover: /images/e4cb814e6bede41be2e76f2cb88c1d1a.jpg
updated: '2026-02-13 19:50:00'
---

qqqqqqqqqqq


# **MCP (Model Context Protocol) 技术理解 - 第一篇**


2026-02-08T18:07:00.000+08:00


1,088


阅读5分钟


专栏：


AI与agent


# 引言


我一直为网上没有很好且通俗易懂的MCP技术文档而烦恼，所以我通过记录自己查阅官方文档来写一份通俗易懂的MCP技术文档，从架构到实战，既有技术深度，又能让小白一听就懂。这对我是一种挑战，如果笔误可以在评论区指出，谢谢！


# MCP是什么


Model Context Protocol (MCP) 是 Anthropic 于 2024 年 11 月发布的**开放标准协议**,旨在为 LLM 应用提供统一的方式来连接外部数据源和工具。它被称为"AI 的 type-c接口"。


但是我觉得如果就将它比喻成type-c接口，我觉得太草率。


我们先标出重点，**MCP它是一种协议，一种标准！** MCP是一种协议，MCP是一种协议，MCP是一种协议，重要的事情说三遍。


那么它到底是干了什么？这里直接通俗易懂来说吧，**假如说LLM是大脑，那么LLM可以通过MCP协议长出手脚**，可以做到访问资源，调用工具，预制模板的事情等。


为什么这么说？在古早时期，也就是Chat-GPT横空出世的时候，他也就是一个简单的chatbot，靠着以往的知识库回答问题，而不能实时去访问web上的资源和你自己的知识库，也不能去帮你发邮件，订航班等等。有了MCP，我们就有了一种标准去做这些事。我们只要去实现了标准MCP的接口，数据发送和接收都是解析相同格式的数据，那么按照理论来说，我们就能让AI应用帮我们做任何事情(当前不讨论物理世界的劳动)。


![image](/images/f02141d65b5b099c508f0bdc42cc6547.awebp)


# MCP到底解决什么问题？


我们上面讨论了MCP能帮我们实现的事情，那么MCP它本质上到底解决了什么问题？难道我们以前没有MCP就无法查看web上面的资源或者知识库吗？让我们下面一起讨论一下。


传统上，我们也是可以实现MCP的功能，但是这样有个问题，每个企业所创造出来的软件或者说应用程序，它都不是一个统一的接口来进行tool calling的，都是**自成一派**。这样就会导致集成非常繁杂。


上代码来解释一下这种现象？


**传统方式的痛点:**


```python
# 每个集成都需要自定义代码
if service == "github":
    github_client = GitHubClient(token)
    data = github_client.get_issues()
elif service == "slack":
    slack_client = SlackClient(token)
    data = slack_client.get_messages()
elif service == "database":
    db_client = DatabaseClient(connection_string)
    data = db_client.query("SELECT * FROM users")
# ... 每个服务都不同
```


**使用MCP统一了之后：**


```python
# 统一接口,标准化协议
mcp_client = McpClient()

# 所有服务使用相同的协议
resources = mcp_client.list_resources()  # 获取可用资源
tools = mcp_client.list_tools()          # 获取可用工具
result = mcp_client.call_tool("search", args)  # 调用工具
```


**这里我们强调一下MCP的三大核心能力吧**，分别是**访问资源，调用工具，预制模板**，下面的表格解释了它各自的特点与作用


| 能力            | 说明    | 控制方         | 示例                |
| ------------- | ----- | ----------- | ----------------- |
| **Resources** | 只读数据源 | Application | 文件内容、数据库记录、API 响应 |
| **Tools**     | 可执行函数 | Model       | 搜索航班、发送消息、创建日历事件  |
| **Prompts**   | 预制模板  | User        | 计划旅行、总结会议、起草邮件    |


理解三大能力是非常重要的，关乎MCP的开发能力。


# MCP的架构


现在我们一起来看看MCP的架构是怎么样的。


MCP 采用客户端-服务器架构，其中 MCP 主机（例如Claude Code或Claude Desktop等 AI 应用）与一个或多个 MCP 服务器建立连接。MCP 主机通过为每个 MCP 服务器创建一个 MCP 客户端来实现这一点。每个 MCP 客户端与其对应的 MCP 服务器保持专用连接。使用 STDIO 传输的本地 MCP 服务器通常服务于单个 MCP 客户端，而使用 Streamable HTTP 传输的远程 MCP 服务器通常服务于多个 MCP 客户端。MCP架构的关键参与者包括：

- **MCP 主机**：用于协调和管理一个或多个 MCP 客户端的 AI 应用程序
- **MCP 客户端**：一个维护与 MCP 服务器连接并从 MCP 服务器获取上下文以供 MCP 主机使用的组件。
- **MCP 服务器**：一个为 MCP 客户端提供上下文信息的程序

这里引用官方文档的例子：


**例如**：Visual Studio Code 充当 MCP 主机。当 Visual Studio Code 与 MCP 服务器（例如Sentry MCP 服务器）建立连接时，Visual Studio Code 运行时会实例化一个 MCP 客户端对象来维护与 Sentry MCP 服务器的连接。随后，当 Visual Studio Code 连接到另一个 MCP 服务器（例如本地文件系统服务器）时，Visual Studio Code 运行时会实例化另一个 MCP 客户端对象来维护此连接。


![image](/images/b98a0ba34dc148bee8a0705e9af1c0be.awebp)


请注意，**MCP 服务器**指的是提供上下文数据的程序，无论其运行位置如何。MCP 服务器可以本地运行，也可以远程运行。例如，当 Claude Desktop 启动文件系统服务器时，由于它使用 STDIO 传输，因此服务器运行在同一台机器上。这通常被称为“本地”MCP 服务器。官方的 Sentry MCP 服务器运行在 Sentry 平台上，并使用 Streamable HTTP 传输。这通常被称为“远程”MCP 服务器。


# 小结


第一篇我们就先解析MCP的概念，解决的问题，还有架构。接下来我们继续解析通信协议和数据格式等，有兴趣的可以关注此栏目

