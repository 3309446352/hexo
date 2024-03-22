---
title: Docker使用详解
date: 2024-03-20 12:07:03
tags:
  - Docker
categories:
  - 运维
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/60ba051fae5a9ba4024b9043.webp
abstracts : 本文主要介绍Docker的基本概念、安装、常用命令、镜像、容器、仓库等。
---
<p><img src="https://raw.githubusercontent.com/3309446352/Images/main/img/Snipaste_2023-03-19_17-56-24.png" ></p>

# 一.Docker简介
## 1.Docker是什么
Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。
Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。
容器是完全使用沙箱机制，相互之间不会有任何接口。
Docker 直接使用宿主机的内核，它可以运行在任何支持 Docker 的宿主机上。
## 2.Docker的优势
- 更高效的利用系统资源
- 更快速的启动时间
- 一致的运行环境
- 持续交付和部署
- 更轻松的迁移
- 更轻松的维护和扩展


# 二.Docker安装
