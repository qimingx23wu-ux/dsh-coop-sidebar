# 人机协同侧边栏 · Co-op Sidebar

> 为 DeepSeek Harness 打造的**小白友好侧边栏**：自动解释专业名词、透明展示 Agent 过程、引导人机协作。
> 让不懂编程的人也能看懂 Agent 在做什么、术语在说什么。

![version](https://img.shields.io/badge/version-v0.3.0-4f7cff) ![license](https://img.shields.io/badge/license-MIT-green) ![platform](https://img.shields.io/badge/platform-DeepSeek%20Harness-8b5cf6)

## ✨ 功能

| 页签 | 能力 |
|---|---|
| 🎯 **术语雷达** | 自动扫描当前会话的专业名词（内置 36 词 + 扩展词库 + 模型解读），点击即得：一句话总结 / 大白话 / 例子 / 原理 / 边界，并可继续追问 |
| 🔍 **过程透明** | 当前会话状态、最近工具活动（运行中/已完成/失败）、权限与沙箱、边界清单——全部来自真实运行时 |
| 🤝 **协作之道** | 人在回路中的五大角色与需提升的五种能力 |
| 🧭 **交互** | 右侧可收缩竖条、输入框聚焦自动收起、每 5 秒自动同步 |

## 📦 安装（一分钟）

见 [`plugin/INSTALL.md`](plugin/INSTALL.md)——复制插件包 → workspace 注册 → `pnpm install` → 追加宿主行 → 重启 `dsh web`。

## 🚀 词库热更新（无需重启）

学习新概念 = 编辑 `plugin/lib/glossary-extra.json` 追加一条词 → **5 秒内自动出现在侧边栏**：

```json
{ "term": "词条名", "aliases": ["别名", "alias"], "category": "分类",
  "summary": "一句话", "plain": "大白话", "example": "例子",
  "principle": "原理", "boundary": "边界", "followUps": ["追问1", "追问2"] }
```

## 📚 文档导航

```
README.md                     ← 你在这里
├── plugin/                   ← 可安装的插件源码（宿主 + 客户端 + 词库）
│   └── INSTALL.md            安装 / 卸载 / 常见问题
├── docs/                     项目过程文档（PMP 视角，适合学习 IT 项目管理）
│   ├── 00-项目章程.md         启动：目标 / 范围 / 干系人 / 成功标准
│   ├── 01-需求规格说明书.md   需求 + 验收标准 + 变更记录
│   ├── 02-架构与设计.md       双半身架构 / 数据流 / 关键决策（ADR）
│   ├── 03-开发过程记录.md     迭代时间线 / 缺陷记录
│   ├── 04-测试与验收.md       测试策略 / 冒烟脚本 / 验收步骤
│   ├── 05-风险登记册.md       R1–R6 风险台账
│   ├── 06-经验教训.md         三条核心教训
│   ├── 07-运维与发布手册.md   发布流程 / 回滚 / 变更请求模板
│   └── 08-产品路线图.md       MoSCoW 路线图
├── versions/                每个版本发布说明归档
└── CHANGELOG.md             版本日志
```

## 🛣️ 路线图

- ✅ v0.2.3 追问失败显式提示原因 · 词库 68 词 · 热更新
- ✅ v0.3.0 解释一键复制 / 导出
- 🔜 v0.4.0 术语点击高亮对话原文 · 词库用户可配置
- 🔜 v1.0.0 多语言 · 团队共享词库 · 使用埋点

## 🤝 贡献

欢迎提 Bug、提需求、加词条、写代码！请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 📄 许可

[MIT License](LICENSE)。本插件为独立的社区项目，与 DeepSeek Harness 官方无关，按"现状"提供。
