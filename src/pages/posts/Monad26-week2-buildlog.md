---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Monad Week2 Build Log'
pubDate: 2022-08-03
description: 'This is the week2 buildlog for Monad16.'
author: 'kzz'
tags: ["Monad26", "learning in public"]
category: "Monad26"
---

## Monad Week2 Build Log

> ### 周期：Week2｜Monad 训练营

> ### A. 项目结构

```
README.md                         # 项目总览与快速开始
docs/                             # 文档（getting-started、MCP 合约、ADR 等）
examples/
agent-swap/                     # 本地 fork + agent/wallet 分离的示例
simple-flow/                    # 简单的 discover→action→simulate 示例
packages/
core/                           # @themoss/core：Capability/Registry/参数契约、Receipt 验证
simulator/                      # @themoss/simulator：trace 模拟、Change 提取
erc/                            # @themoss/erc：ERC 家族协议的 ABI、Capability、Receipt 语义
system/                         # @themoss/system：Monad runtime 常量与工具
mcp-server/                     # @themoss/mcp-server：MCP transport（discover/load/action/simulate）
protocol-*                      # 各协议适配器（kuru、pancakeswap、apriori 等）
abi-tools/                      # ABI 获取/校验工具
docs/, .claude/, .changeset/      # 辅助文档、Agent 程序与版本记录
package.json, pnpm-workspace.yaml # 构建与 workspace 配置
```

感兴趣的pr：[docs add a beginner-friendly Chinese guide for Moss by Suzuki-yki · Pull Request #136 · nishuzumi/moss](https://github.com/nishuzumi/moss/pull/136)
moss的新手指引在流程逻辑上很清晰，但是对于新人来说，仍然有较高的理解门槛，比如说代码运行完成后，会产生如下疑问，discover的是什么东西，load和action的输入和输出在官方名词词典中有，但无法理解其含义....。因此概念和上下逻辑的补充和解释是必要的。这个pr旨在解决这个问题，但由于其理解或许于moss的方向有一定差异，这个pr没有被合并，希望可以跟进此pr

> ## 后记

Monad训练营活动的课程的设置和学习界面都很用心，助教和分享会中有很有经验的dev大佬和运营老师带领学员学习，这对于想快速了解学习web3的新人是不错的。

但授课内容较为跳跃，可参考的学习文档方面需要很强的理解力和资料搜索能力，大量概念的涌入对于web3生态的主线和核心理解是一个挑战，包括Moss这种优质的开源项目，跑通并不难，可实际需要上手改动需要较强的概念理解力、深厚的编程功底和代码质量，哪怕只是贡献文档也有较严格的规范和要求。这直接拉高了准入门槛，学习曲线较为陡峭，正反馈也较慢，更适合个人能力强的入行者。

由于工作出差频繁，当回头补学习任务时，黑客松组队已经完成。反思还是底子薄，有些好的学习习惯没有形成，亦或是没有投入足够的时间，草草收尾。目前处于一个人生选择的阶段，在众多选择中有些迷失，接下来要多考虑自己想要什么。

