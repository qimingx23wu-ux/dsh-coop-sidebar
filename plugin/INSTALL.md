# 安装指南（面向 DSH Web Profile）

> 本插件面向 **DeepSeek Harness（DSH）** 的 `web` profile。
> 以下步骤在目标机器的 `$DSH_HOME/profiles/web/`（默认 `~/.dsh/profiles/web/`）下执行。

## 前置条件

- 已安装 DSH 并跑通 `dsh web`；
- 本机有 `pnpm`（或可用 `corepack pnpm`）。

## 安装步骤

```bash
PROFILE=~/.dsh/profiles/web
PLUGIN_SRC=<本仓库路径>/plugin

# 1) 复制插件包
mkdir -p "$PROFILE/plugins"
cp -R "$PLUGIN_SRC" "$PROFILE/plugins/coop-sidebar"

# 2) 注册 pnpm workspace（若尚无 plugins/* 条目）
#    pnpm-workspace.yaml 的 packages 下追加一行：  - plugins/*
echo "  - plugins/*" >> "$PROFILE/pnpm-workspace.yaml"

# 3) 根 package.json 的 dependencies 增加：
#    "coop-sidebar": "workspace:*"

# 4) 安装并链接
cd "$PROFILE" && pnpm install

# 5) 在 cordis.patch.yml 追加宿主行：
#    - insert:
#        - id: coop-sidebar
#          name: coop-sidebar

# 6) 重启 DSH
dsh web --host 127.0.0.1 --port 3080
```

## 使用

- 打开页面后，右侧边缘出现「术语雷达」竖条 → 点击展开三页签：
  **术语雷达**（68+ 词库 + 模型解读 + 追问）/ **过程透明**（工具活动/权限沙箱/边界）/ **协作之道**（人机角色）。
- 在输入框打字时面板自动收起；每 5 秒自动同步。

## 词库热更新（无需重启）

编辑 `plugins/coop-sidebar/lib/glossary-extra.json`，按以下格式追加词条，保存后 5 秒内生效：

```json
{ "term": "词条名", "aliases": ["别名", "alias"], "category": "分类",
  "summary": "一句话", "plain": "大白话", "example": "例子",
  "principle": "原理", "boundary": "边界", "followUps": ["追问1", "追问2"] }
```

## 卸载

```bash
PROFILE=~/.dsh/profiles/web
# 1) 删除 cordis.patch.yml 中的 coop-sidebar insert 行
# 2) 删除根 package.json 的 coop-sidebar 依赖与 pnpm-workspace.yaml 的 plugins/* 条目
cd "$PROFILE" && pnpm install
rm -rf "$PROFILE/plugins/coop-sidebar"
# 3) 重启 dsh web
```

## 常见问题

| 现象 | 处理 |
|---|---|
| 刷新后侧边栏不出现 | 确认宿主行已插入且已重启；`curl -s http://127.0.0.1:3080/ | grep coop-sidebar` 应有输出 |
| 改客户端后还是旧版 | HMR 在 web profile 默认禁用 → 强制刷新（⌘+Shift+R） |
| 追问不回答 | 模型解读失败会显示红色警示条（含原因）→ 按原因排查模型配置 |
| 插件报错 | 查看 DSH 进程终端输出中的 `[coop-sidebar]` 日志 |

> 详细运维与发布规范见仓库 `docs/07-运维与发布手册.md`。
