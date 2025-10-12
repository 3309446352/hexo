---
abbrlink: ''
abstracts: GitHubActions是一个集成和持续交付的平台，它可以帮助你通过自动化的构建（包括编译、发布、自动化测试）来验证你的代码，从而尽快地发现集成错误。
author: ZMC
categories: []
cover: https://i.ytimg.com/vi/jtKrINOzQ3A/maxresdefault.jpg
date: '2025-10-12T13:34:15.189260+08:00'
description: GitHubActions是一个集成和持续交付的平台，它可以帮助你通过自动化的构建（包括编译、发布、自动化测试）来验证你的代码，从而尽快地发现集成错误。
tags:
- GitHubActions
- Github自动化
title: GitHubActions详解
updated: '2025-10-12T13:40:08.904+08:00'
---
# GitHubActions详解

### 一.GitHubAction简介

#### 🧅什么是Github Action ?

**GitHubActions是一个**[持续集成](https://so.csdn.net/so/search?q=%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90&spm=1001.2101.3001.7020)和持续交付的平台，它可以帮助你通过自动化的构建（包括编译、发布、自动化测试）来验证你的代码，从而尽快地发现集成错误。github于2019年11月后对该功能全面开放，现在所有的github用户可以直接使用该功能。GitHub 提供 Linux、Windows 和 [macOS](https://so.csdn.net/so/search?q=macOS&spm=1001.2101.3001.7020) 虚拟机来运行您的工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。在使用Github Action之前首先需要了解以下前置知识:

* **持续集成/持续交付的概念。**
* **Git相关知识。**
* **Linux或Windows或macOS脚本相关知识。**
* **Yaml基础语法。**

#### ⍻什么是Yaml ?

**编写GithubAction的流程时，需要创建一个workflow工作流，workflow必须存储在你的项目库根路径下的**`.github/workflows`目录中，每一个 workflow对应一个具体的.yml 文件（或者 .yaml）。**  ** **yaml是YAML（YAML Ain't Markup Language）语言的文件，以数据为中心，比properties、xml等更适合做配置文件，主要有以下几个特点:**

* **大小写敏感。**
* **使用缩进表示层级关系。**
* **缩进只能使用空格，不能用 TAB 字符。**
* **缩进的空格数量不重要，只要层级相同的元素左对齐即可。**
* **‘#’ 表示注释。**

#### 🍝Github Action基本概念

* `workflow`: 一个 workflow 就是一个完整的工作流过程，每个workflow 包含一组 jobs任务。
* `job`: jobs任务包含一个或多个job ，每个 job包含一系列的 steps 步骤。
* `step`: 每个 step 步骤可以执行指令或者使用一个 action 动作。
* `action`: 每个 action 动作就是一个通用的基本单元。

#### 🍓Github Action 的使用限制

**在使用免费版本的Github Action是有如下限制的:**

* **作业执行时间** - 工作流中的每个作业最多可以运行 6 小时的执行时间。如果作业达到此限制，该作业将终止且无法完成。
* **工作流运行时间** - 每个工作流运行限制为 35 天。如果工作流运行达到此限制，则工作流运行将被取消。此时间段包括执行持续时间以及等待和批准所花费的时间。
* **API 请求** - 您可以在一小时内跨存储库中的所有操作执行多达 1000 个 API 请求。如果超出此限制，其他 API 调用将失败，这可能会导致作业失败。
* **并发作业** - 可以在帐户中运行的并发作业数取决于 GitHub 计划，如下表所示。如果超出，则任何其他作业都将排队。


| **GitHub 计划** | **并发作业总数** | **最大并发 macOS 作业数** |
| --------------- | ---------------- | ------------------------- |
| **自由**        | **20**           | **5**                     |
| **专业版**      | **40**           | **5**                     |
| **团队**        | **60**           | **5**                     |
| **企业**        | **180**          | **50**                    |

**完整的事件列表，请查看**[官方文档](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration)。

## 二.GitHubAction的使用

### 😀workflow

**在项目库根路径下的**`.github/workflows`目录下添加 .yml 或者 .yaml文件，名字可以随便取。在这里我取名为 github-action-email.yml:

```
 name: hello-github-actions
 # 触发 workflow 的事件
 on:
   push:
     # 分支随意
     branches:
       - master
 # 一个workflow由执行的一项或多项job
 jobs:
   # 一个job任务，任务名为build
   build:
     #运行在最新版ubuntu系统中
     runs-on: ubuntu-latest
     #步骤合集
     steps:
       #新建一个名为checkout_actions的步骤
       - name: checkout_actions
         #使用checkout@v2这个action获取源码
         uses: actions/checkout@v2 
       #使用建一个名为setup-node的步骤
       - name: setup-node
         #使用setup-node@v1这个action
         uses: actions/setup-node@v1
         #指定某个action 可能需要输入的参数
         with:
           node-version: '14'
       - name: npm install and build
         #执行执行某个shell命令或脚本
         run: |
           npm install
           npm run build
       - name: commit push
         #执行执行某个shell命令或脚本
         run: |
           git config --global user.email xxx@163.com
           git config --global user.name xxxx
           git add .
           git commit -m "update" -a
           git push
         
      # 环境变量配置方式有两种：
      # jobs->job->env：默认情况下使用的配置方式；
      # jobs->job->steps.env：可以通过`with:`选项指定环境变量的方式；
 
 ### 😂name
 
 Workflow的名字，随便可以设置，就是工作流的名字。如果省略该字段，默认为当前 workflow 的文件名。
 
 ```yaml
 name: hello-github-actions 
```

### 💤on

**触发的事件，可以是一个事件数组。**  ** **在代码仓库Push时触发:

```
 #push时触发 on: push 
```

**可以用数组指定多个条件触发:**

```
 #push和merge时触发 on: [push, merge] 
```

**还可以对条件进行限制触发:**

```
 #当master分支push时触发，可以限定分支或标签。
 on:
   push:
     branches:
       - master 
```

**完整的事件列表，请查看**[官方文档](https://help.github.com/en/articles/events-that-trigger-workflows)。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。

### 😉jobs

##### 🤫jobs

**jobs表示要执行的一项或多项任务。jobs可以包含一个或多个job，一个job就是一个任务，这个任务可以包含多个步骤(steps):**

```
 jobs:
   jobName:
     ...
```

**需要注意的是每一个Job都是并发执行的并不是按照申明的先后顺序执行的， 如果多个job 之间存在依赖关系的话,则你需要使用 needs :**

```
 jobs:
   jobNameA:
     
   jobNameB:
     needs: jobNameA
     
   jobNameC:
     needs: [jobNameA, jobNameB]
```

**这里的needs声明了jobB 必须等待 jobA 成功完成, jobC必须等待 jobA 和 jobB依次成功完成。因此,这个 workflow 的运行顺序依次为：jobA、jobB、jobC。**

##### 🤪steps

**steps字段指定每个 Job 的运行步骤,每个job由多个step构成,它会从上至下依次执行。steps可以包含一个或多个步骤,每个 step 步骤可以有:**

* **name：步骤名称，**
* **env：该步骤所需的环境变量，**
* **id : 每个步骤的唯一标识符,**
* **uses : 使用哪个action，**
* **with: 指定某个action 可能需要输入的参数，**
* **run: 执行哪些指令，**

**继续往下看...**

### 😎GitHubAction执行结果

**对于GitHubAction的执行流程我们可以通过repo 上依次点击Actions就可以看到Action的状态和执行结果等信息:**
