---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Monad Week1 Build Log'
pubDate: 2022-08-01
description: 'This is the buildlog for Monad16 in first week.'
author: 'kzz'
tags: ["Monad26", "learning in public"]
category: "Monad26"
---
## Monad Week1 Build Log

> Demo: Monad-Testnet-Demo-QAForum

> Github：[https://github.com/KevinZeratul/Monad-Testnet-Demo-QAForum](https://)
> 
> 周期：Week1｜Monad 训练营首期开发阶段

一、本周开发落地工作

1. 初始化项目仓库，基于 Hardhat搭建整套合约开发工程，适配 Monad Testnet 链参数。编写核心 QAForum.sol，设计帖子、评论、点赞三层链上数据存储结构；实现发帖、回复、采纳查询基础接口，增加基础权限校验与重复操作防护；依托 Anvil 完成本地单元测试，整体业务逻辑闭环可用。
2. 编写适配 Monad 测试网的合约部署脚本，调试 RPC 链接、链 ID、Gas 相关配置，本地完成预部署验证，确认合约可正常向 Monad 网络发起交互调用。
3. 合约正式部署至 Monad 测试网，完成源码浏览器验证
4. 搭建简易前端交互页面，实现钱包连接、链上问答功能可视化操作
5. 监听合约事件，完成前端数据实时刷新
