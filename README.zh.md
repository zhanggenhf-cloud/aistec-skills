

---

# AISTEC 技能集

AI 驱动的科学教育活动智能创作框架

## 概述

本仓库包含三个 OpenClaw AgentSkills，为 AISTEC（AI 驱动的科学教育活动智能创作框架）提供核心能力。

该框架整合了：
- **多 API 交叉核对引用验证** —— 通过 Semantic Scholar + arXiv + CrossRef + Google Scholar + 知网 等多源交叉确保引用可追溯
- **13 种经过验证的教学法框架** —— 通过决策树自动匹配（5E、7E、4-Stage、PBL、Design Thinking、IBL、POE、REACT、LIA、UbD、GRRF、IDM、Guided Play）
- **UDL × SDT 整合设计** —— 多元表征×胜任感、多元表达×自主性、多元参与×归属感
- **SSI 终止条件** —— 当主题涉及科学争议、伦理决策或社会政策时自动停止生成

## 技能

### 1. `research-lineage`（研究脉络梳理）
研究脉络智能梳理引擎。采用参照 CiteSpace/VOSviewer 方法的文献计量分析（聚类质量、中介中心性、突发检测），结合 PRISMA 风格筛选记录与 CoE 引用验证。

**核心特性：**
- 六轮联合检索（网页搜索 + arXiv/Google Scholar API + 知网浏览器自动化），另设补充验证轮
- 引用图构建（种子论文 → 2 跳引文图 → 精英池，通过 LLM 评分筛选为 Core + Adjacent 两层）
- CoE 六步验证流程（A→B→C→D→E→F，内部整理）：构建引用图 → API 筛查 → 书目交叉核对 → 多 API 交叉核对 → LLM 摘要蕴涵验证 → 时间线一致性 + 上游库污染检测
- 五类幻觉检测（TF/PAC/IH/PH/SH）

### 2. `science-edu-activity`（科学教育活动设计）
科学教育活动方案生成器。基于建构主义学习理论和探究式学习理念，支持 UDL × SDT 整合设计、ICAP 认知参与评估、元认知嵌入与明暗线对齐检查。

**核心特性：**
- **双格式输出** —— 每个活动方案同时输出 (1) 人类可读的 Markdown 文本教案 和 (2) 机器可解析的页面级可执行方案，可直接用于数字化平台部署或 OpenMAIC 导入
- 可执行方案包含 4 种页面类型：`slide`（幻灯片/SL）、`interactive`（交互页/IA）、`quiz`（诊断页/QZ）、`pbl`（项目页/PB）—— 每页含学习契约、交互设计、评估证据、支架设计、教学法标签、旁白脚本及时长规划
- 13 种教学法框架通过决策树自动选择（5E、7E、4-Stage、PBL、Design Thinking、IBL、POE、REACT、LIA、UbD、GRRF、IDM、Guided Play）
- **知识图谱集成** —— 活动设计前自动查询 AISTEC 知识图谱，进行前置知识诊断与概念精确匹配
- **UDL × SDT 整合设计** —— 通用学习设计与自我决定理论融合，让"多元参与"有心理需求支撑
- **ICAP 认知参与评估** —— 为每个活动阶段分配 P/A/C/I 档位，设计升档策略，确保认知参与层次递进
- **元认知嵌入设计** —— 在活动流程中标注出声思考、反思卡、自我提问等关键节点
- **明暗线对齐检查** —— 确保每个"有趣"的活动环节都指向明确的教学目标
- 内部形成性评估反馈 —— 自动修正方案，不暴露评估表格
- 多维度内部反馈循环（科学准确性、教育有效性、探究过程、学习体验、认知参与、动机设计）
- SSI 终止条件 —— 对争议性伦理/政策主题自动终止生成
- CoE 引用验证融入科学知识背景校验
- STEM/STEAM 整合映射、NGSS 三维对齐

### 3. `science-edu-template-trainer`（科学教育模板训练）
模板提取与迁移学习引擎。通过九阶段多维质量分析将历史活动方案转化为标准化模板。

**核心特性：**
- 九阶段流水线：输入接收与验证 → 个体分析 → 内容分析与语言评估 → 质量评分与基准 → 模式聚合 → 盲区分析与公平审计 → 模板生成 → 与 science-edu-activity 集成 → 验证与交付
- 理论框架分析（理论基础、学习目标、评估对齐）
- 公平性审计（文化响应性、性别平等、无障碍设计、社会经济包容性）
- 成本效益分析（人均成本、时间效率、教育 ROI）
- 场景感知定制（博物馆、学校、户外项目、工作坊）

## 已验证框架清单

技能中引用的所有教学法框架均经过真实学术来源验证：

- **5E** — Bybee et al. (2006)
- **7E** — Eisenkraft (2003)
- **4-Stage** — 博物馆/展览探究模型
- **PBL** — Krajcik & Blumenfeld (2006)
- **Design Thinking** — d.school / IDEO 方法论
- **IBL** — Pedaste et al. (2015)
- **POE/PEE** — White & Gunstone (1992)
- **REACT** — Crawford (2001)
- **LIA** — PrimaryConnections (2024)
- **UbD** — Wiggins & McTighe (2005)
- **GRRF** — Fisher & Frey (2013)
- **IDM** — Grant et al. (2017)
- **Guided Play** — Hirsh-Pasek et al. (2016)

## 安装

这些技能是 OpenClaw AgentSkills。将每个技能目录放置到 OpenClaw 的技能路径下（例如 `~/.openclaw/workspace/skills/`）。

## 依赖

- 已安装 kimi-search 插件的 OpenClaw
- 可访问：Semantic Scholar API、arXiv API、CrossRef API、知网（通过浏览器自动化）
- `science-edu-template-trainer` 需要：pandoc（用于 Word/PDF 转换）

## 平台依赖说明

两个技能包含 Kimi Claw（月之暗面）平台专属的工具调用。所有教学框架和设计逻辑均为平台无关的，移植时仅需适配工具调用语法。

### `research-lineage` — 重度依赖（SKILL.md 中 29 处）

整个 CoE 验证流程通过四个 Kimi 专属工具路由：

| 工具 | 功能 | 建议替代方案 |
|------|------|------------|
| `kimi_search` | 网页搜索 | 任意搜索工具（`web_search`、Tavily、Exa 等） |
| `kimi_datasource_call` + `kimi_datasource_get_desc` | 学术数据库查询（arXiv、Google Scholar） | 直接调用 API（arXiv API、Semantic Scholar API）或平台等效工具 |
| `kimi_fetch` / `web_fetch` | 直访网页内容 | 任意抓取工具（`requests`、`playwright`、`firecrawl` 等） |

**移植方法：** 仅需改写 SKILL.md 中的工具路由表（检索策略章节），将 `kimi_*` 调用替换为目标平台的等效工具。CoE 六步验证逻辑、五类幻觉检测和引用图构建完全平台无关。

### `science-edu-activity` — 轻度依赖（10 处）

工具调用示例出现在两处：

1. **SKILL.md** — 文献检索的 API 调用示例（7 处）
2. **`references/accuracy-assurance.md` 和 `references/knowledge-deconstruction.md`** — 验证流程中的工具名（3 处）

**移植方法：** 属于示例级别引用，直接替换工具名即可：`kimi_search` → 你的搜索工具，`kimi_datasource_call` → 你的学术 API 封装，`kimi_fetch` → 你的抓取工具。五阶段知识解构、13 框架决策树、UDL × SDT 设计等全部教学逻辑零改动。

### 无依赖

`science-edu-template-trainer` — 完全平台无关。

## 许可证

MIT
