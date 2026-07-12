
---

# AISTEC 技能集

AI 驱动的科学教育活动智能创作框架

## 概述

本仓库包含三个 OpenClaw AgentSkills，为 AISTEC（AI 驱动的科学教育活动智能创作框架）提供核心能力。

该框架整合了：
- **零误引引用验证** —— 通过多 API 交叉审计（I3 审计：Semantic Scholar + arXiv + CrossRef）确保引用可追溯
- **13 种教学法框架** —— 通过决策树自动匹配（5E、PBL、Design Thinking、POE、7E 等）
- **内部形成性评估反馈** —— SMEALOS 四维度评估作为系统内部自动修正机制，不直接向用户暴露评估量规
- **SSI 终止条件** —— 当主题涉及科学争议、伦理决策或社会政策时自动停止生成

## 技能

### 1. `research-lineage`（研究脉络梳理）
研究脉络智能梳理引擎。集成 CiteSpace/VOSviewer 文献计量分析、PRISMA 系统筛选与零误引引用验证。

**核心特性：**
- 六轮联合检索（网页搜索 + arXiv + Google Scholar + Semantic Scholar + CrossRef + 知网自动化）
- PI 引用图构建（种子论文 → 2 跳引文图 → 精英池，通过 LLM 双层评分筛选）
- CoE 六步验证法（A→B→C→D→E→F）：构建引用图 → API 筛查 → 书目交叉核对 → I3 多 API 审计 → LLM 摘要蕴涵验证 → 时间线一致性 + 上游库污染检测
- 五类幻觉检测（TF/PAC/IH/PH/SH），含内联证据标签 `{source}`

### 2. `science-edu-activity`（科学教育活动设计）
科学教育活动方案生成器。基于 CIC「情境-探究-建构」三维权模型和 ACPRE「四维度五步」认知心理学设计模型。

**核心特性：**
- 13 种教学法框架通过决策树自动选择
- UDL（通用学习设计）三原则强制嵌入
- 内部形成性评估反馈 —— 自动修正方案，不暴露评估表格
- SMEALOS 四维度内部反馈循环（科学素养 / 科学兴趣 / 探究能力 / 学习体验）
- SSI 终止条件 —— 对争议性伦理/政策主题自动终止生成
- CoE 引用验证融入科学知识背景校验
- STEM/STEAM 整合映射、NGSS 三维对齐

### 3. `science-edu-template-trainer`（科学教育模板训练）
模板提取与迁移学习引擎。通过九阶段多维质量分析将历史活动方案转化为标准化模板。

**核心特性：**
- 九阶段流水线：输入验证 → 结构分析 → 语言分析 → 基准评分 → 统计聚合 → 知识盲区审计 → 模板生成 → 场景适配 → 验证
- 公平性审计（文化响应性、性别平等、无障碍设计、社会经济包容性）
- 成本效益分析（人均成本、时间效率、教育 ROI）
- 多场景优化（博物馆 / 学校 / 户外 / 工作坊）

## 安装

这些技能是 OpenClaw AgentSkills。将每个技能目录放置到 OpenClaw 的技能路径下（例如 `~/.openclaw/workspace/skills/`）。

## 依赖

- 已安装 kimi-search 插件的 OpenClaw
- 可访问：Semantic Scholar API、arXiv API、CrossRef API、知网（通过浏览器自动化）
- `science-edu-template-trainer` 需要：pandoc（用于 Word/PDF 转换）

## 许可证

MIT
