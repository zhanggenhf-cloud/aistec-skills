---
name: science-edu-template-trainer
description: Train and extract general-purpose activity plan templates by analyzing existing science education activity plans. Use when the user wants to create a standardized template from a collection of existing activity plans, update the output format constraints for science-edu-activity.skill, or customize templates for specific institutions (museums, schools, science centers). Analyzes structure, pedagogical patterns, and best practices to generate comprehensive template specifications.
---

# Science Education Activity Template Trainer

This skill analyzes collections of science education activity plans to extract patterns, best practices, and structural norms, then generates standardized templates that can be used as output format constraints for `science-edu-activity.skill`.

## When to Use This Skill

Use this skill when:
- Creating a standardized template from an existing collection of activity plans
- Updating or improving the output format for science education activities
- Customizing templates for specific contexts (museums vs. schools vs. outdoor programs)
- Establishing organizational standards for activity documentation
- Migrating legacy activity plans to a modern, consistent format
- Benchmarking your activities against best practices

## Prerequisites

**Required Input:**
- A collection of existing activity plans (minimum 5-10 recommended)
- Plans can be in Markdown, Word, PDF, or plain text format
- Each plan should represent a complete, implementable activity

**Optional Context:**
- Target institution type (museum, school, nature center, etc.)
- Specific requirements or constraints
- Preferred pedagogical approach
- Curriculum standards to align with (NGSS, CCSS, IB, PISA, 中国课程标准等)

## Core Workflow

### Phase 1: Input Ingestion & Validation

1. **Collect Activity Plans**
   - Accept files via upload, folder path, or paste
   - Support formats: .md, .docx, .pdf, .txt
   - Minimum viable: 5 plans; Optimal: 20-50 plans

2. **Validate Input Quality**
   Check each plan for:
   - [ ] Basic completeness (has title, objectives, procedure)
   - [ ] Implementability (specific enough to execute)
   - [ ] Age-appropriateness indication
   
   Flag low-quality inputs for user review

3. **Categorize Inputs**
   Auto-classify by:
   - Discipline (physics, chemistry, biology, etc.)
   - Activity type (experiment, field trip, demonstration, etc.)
   - Duration (short/medium/long)
   - Setting (indoor/outdoor, lab/classroom/museum)

### Phase 2: Individual Analysis

For each activity plan, load [references/analysis-framework.md](references/analysis-framework.md) and perform comprehensive analysis:

**Analysis Dimensions:**
1. **Metadata Extraction** — Title, age range, duration, group size, discipline, activity type (knowledge-delivery / skill-development / interest-stimulation / comprehensive-development)
2. **Structure Analysis** — Which sections are present and their quality
3. **Pedagogical Flow** — Presence and distribution of Hook→Exploration→Discussion→Application
4. **Content Depth** — Level of scientific explanation (L1-L4)
5. **Interaction Design** — Types of learner engagement
6. **Assessment** — Evaluation methods used, formative/summative coverage
7. **Language Style** — Formality, perspective, tone
8. **Practicality** — Material accessibility, time realism, safety
9. **Theoretical Framework** — Explicit statement of learning theory basis (Constructivism, Situated Cognition, Inquiry-Based Learning, etc.) and pedagogical framework alignment
10. **Cognitive Psychology** — Cognitive load management, working memory considerations, engagement strategies

**Output:** JSON analysis for each plan + quality scores

### Phase 3: Content Analysis & Linguistic Assessment

For each activity plan, perform deep content analysis beyond structural analysis:

#### 3.1 Readability & Cognitive Load Analysis

**Readability Metrics:**
- **Flesch Reading Ease** (for English plans) / **中文可读性指标** (for Chinese plans)
  - 计算：平均句长、平均词长、复杂度词汇占比
  - 分级：
    - 90-100：5-6年级水平
    - 70-90：7-8年级水平
    - 50-70：9-10年级水平
    - 30-50：11-12年级/大学水平
    - 0-30：研究生/专业水平
- **目标年龄段匹配度**：计划的可读性水平 vs 目标年龄段的预期阅读水平
  - 差距 > 2个年级 → 标记"阅读难度不匹配"，建议调整

**Cognitive Load Assessment:**
- **内在负荷 (Intrinsic Load)**：概念本身的复杂度
  - 评估：每个知识点是否需要前置知识？概念层级深度？
  - 高内在负荷 → 需要更长的引入和更细致的分解
- **外在负荷 (Extraneous Load)**：教学设计的额外负担
  - 评估：步骤是否清晰？材料是否容易获取？说明是否冗余？
  - 高外在负荷 → 需要简化步骤、优化材料清单
- **关联负荷 (Germane Load)**：促进深度学习的有效负荷
  - 评估：是否有类比、可视化、连接生活？
  - 低关联负荷 → 需要增加促进深度理解的策略

**分析方法：**
- 提取活动文本（说明、引导语、问题）
- 计算句子长度、词汇复杂度、概念密度
- 与目标年龄段的标准文本对比（参考标准教育文本语料库）
- 标注可读性不匹配和认知负荷过高/过低的位置

#### 3.2 Pedagogical Framework Distribution

分析每个计划使用的教学框架和活动类型：
- 识别框架类型：5E / 4-Stage / PBL / Design Thinking / IBL / POE / 7E / Guided Play / 其他
  - 注意：SSI（社会性科学议题）涉及伦理争议，不适合作为活动框架，若检测到应标记为不适宜
- 识别活动类型：知识传递型 / 技能培养型 / 兴趣激发型 / 综合发展型
- 统计各框架和活动类型在集合中的分布比例
- 识别"框架使用趋势"：是否偏向某一框架？是否有框架缺失？
- 评估框架使用质量：框架阶段是否完整？逻辑是否连贯？
- 检查理论定位：是否明确说明了学习目标与所选教学框架的对应关系？

**输出**：
```markdown
### 教学法框架分布

| 框架 | 数量 | 占比 | 平均质量评分 | 质量范围 |
|------|------|------|------------|---------|
| 5E | 15 | 30% | 4.2/5 | 3.0-5.0 |
| 4-Stage | 20 | 40% | 3.8/5 | 2.5-4.5 |
| PBL | 8 | 16% | 4.0/5 | 3.0-5.0 |
| Design Thinking | 5 | 10% | 4.2/5 | 3.5-5.0 |
| POE/PEE | 3 | 6% | 3.8/5 | 3.0-4.5 |
| Guided Play | 2 | 4% | 3.8/5 | 3.5-4.0 |
| 其他/未识别 | 5 | 10% | 2.5/5 | 1.0-4.0 |

### 活动类型分布

| 活动类型 | 数量 | 占比 | 平均质量 | 代表性框架 |
|---------|------|------|---------|-----------|
| 知识传递型 | 12 | 24% | 3.2/5 | 4-Stage |
| 技能培养型 | 18 | 36% | 3.8/5 | 5E, IBL |
| 兴趣激发型 | 8 | 16% | 4.0/5 | Guided Play, 4-Stage |
| 综合发展型 | 12 | 24% | 4.2/5 | PBL, Design Thinking |

### 理论框架与学习目标分析

| 维度 | 明确说明占比 | 平均覆盖深度 | 常见问题 |
|------|------------|------------|---------|
| 理论依据陈述 | 45% | 1.5/3 | 缺乏明确的学习理论支撑说明 |
| 学习目标 SMART 化 | 60% | 2.0/3 | 目标描述不够具体，缺少可测量标准 |
| 布鲁姆分类对齐 | 50% | 1.8/3 | 认知层次单一，高阶思维目标不足 |
| 情境设计 | 55% | 1.9/3 | 真实情境连接不足 |
| 探究过程完整性 | 60% | 2.0/3 | 探究环节不完整，缺少证据收集/交流反思 |
| 差异化设计 | 30% | 1.2/3 | 缺乏UDL差异化策略 |
| 评估对齐 | 40% | 1.5/3 | 形成性评估与学习目标不匹配 |

**分析**（示例）：
- 4-Stage 占比过高，可能反映博物馆场景为主
- PBL 和 Design Thinking 占比适中，但仍有提升空间
- Guided Play 仅用于低龄儿童活动，覆盖面有限
- 综合发展型活动质量最高，但占比不足
- 理论依据陈述和差异化设计是普遍薄弱环节
- 5篇"其他/未识别"框架质量最低，可能需要框架使用培训
```

#### 3.3 UDL Coverage Analysis

检查每个计划是否遵循 UDL 三原则：
- **多元表征**：每个核心概念是否有 ≥2 种呈现方式？
- **多元表达**：每个学习目标是否有 ≥2 种表达选项？
- **多元参与**：参与者是否有选择路径/难度/角色的机会？

**统计**：
- UDL 三原则全覆盖的计划占比
- 仅覆盖1-2个原则的计划占比
- 未覆盖任何原则的计划占比
- 每个原则的平均覆盖深度（0-3分）

**输出**：
```markdown
### UDL 覆盖分析

| 原则 | 全覆盖 | 部分覆盖 | 未覆盖 | 平均深度 |
|------|-------|---------|-------|---------|
| 多元表征 | 30% | 50% | 20% | 1.8/3 |
| 多元表达 | 20% | 40% | 40% | 1.2/3 |
| 多元参与 | 25% | 45% | 30% | 1.5/3 |

**关键发现**：
- 多元表达严重不足，多数计划只有"口头回答"一种评估方式
- 建议：为每个学习目标增加至少2种表达选项（说/写/做/演/创）
```

#### 3.4 Formative Assessment Integration

检查每个计划是否包含形成性评估检查点：
- 检查点数量 vs 学习目标数量（理想：1:1）
- 检查点嵌入位置（是否分散在流程中，不是只在末尾）
- 检查方式多样性（观察/提问/作品/讨论/自评）
- 是否有"成功指标"和"未达标应对策略"

**统计**：
- 有形成性评估的计划占比
- 平均检查点/学习目标比例
- 检查方式多样性指数

### Phase 4: Quality Scoring & Benchmarking

为每个计划进行量化评分，并建立标杆对照体系。

#### 4.1 四维质量评估指标体系（内嵌评估标准）

设计基于"活动设计—活动实施—受众参与—教育成效"四维结构的加权评分标准，作为系统的质量评估内核。权重分配采用"结果导向、过程保障、基础支撑"三层逻辑：

| 一级指标 | 权重 | 二级指标（权重） | 三级指标（权重） | 评估侧重 |
|---------|------|----------------|----------------|---------|
| **活动设计** | **0.25** | 展品适配性（0.08）<br>内容质量（0.10）<br>设计规范性（0.07） | 展品关联度（0.030）、内涵挖掘度（0.030）、互动探究性（0.020）<br>知识丰富性（0.020）、逻辑清晰度（0.020）、现实关联度（0.020）、主题吸引力（0.020）、内容充实度（0.020）<br>目标明确性（0.014）、流程完整性（0.014）、环节合理性（0.014）、认知适配性（0.014）、方案实操性（0.014） | 策划与准备阶段质量评估 |
| **活动实施** | **0.20** | 讲解呈现（0.10）<br>现场组织（0.10） | 表达清晰度（0.055）、表达感染力（0.045）<br>辅助手段运用（0.025）、秩序维护效果（0.025）、安全保障性（0.025）、方案落实度（0.025） | 现场执行阶段质量评估 |
| **受众参与** | **0.20** | 参与广度（0.08）<br>参与深度（0.12） | 观众留存表现（0.040）、现场氛围效果（0.040）<br>互动响应率（0.060）、回应有效度（0.060） | 观众行为投入程度评估 |
| **教育成效** | **0.35** | 兴趣激发（0.10）<br>学习成果（0.15）<br>科学态度（0.10） | 深入探究意愿（0.050）、正向推荐意愿（0.050）<br>知识掌握度（0.080）、技能启发性（0.070）<br>科学事业认同感（0.050）、科学精神传递度（0.050） | 实际效果与长远影响评估 |

**权重设计依据**：
- **教育成效（0.35）**：教育活动的最终价值体现，是评估的核心指向，权重最高体现鲜明结果导向
- **活动设计（0.25）**：教育成效的前提基础和决定性因素，"好的设计是成功的一半"
- **活动实施（0.20）**：连接设计与成效的关键桥梁，过程质量保障
- **受众参与（0.20）**：教育有效性的直接表征，深度参与是有效学习的必要条件

**总分计算**：
```
S = Σ(wᵢ × sᵢ)
```
其中 sᵢ 为第 i 个三级指标的百分制评分（0—100，分值越高表示质量越优），wᵢ 为该指标权重（取值区间(0,1]，所有29个三级指标权重之和等于1.000，具体数值可结合场馆定位与评估目的在±10%范围内浮动调整，但应保持"教育成效权重最高"的基本原则不变）。

**分级**：
- A（≥90）：卓越
- B（75—89）：优秀
- C（60—74）：良好
- D（＜60）：需改进

**双阶段应用机制**：
- **生成阶段（预评估）**：系统对"活动设计"一级指标下的13个三级指标逐条自动评分，重点校验展品关联度、互动探究性、逻辑清晰度、认知适配性与方案实操性等可由方案文本直接判定的指标；任一三级指标按评分细则低于3分（5分制），或"活动设计"维度总分低于75分（B级下限）时，系统自动触发修正循环并重新生成对应内容。该阶段评分仅用于系统内部的自动修正，不向用户直接输出。
- **实施阶段（追踪评估）**：活动实施后，由场馆评估组依据该指标体系开展完整的四维评估。其中受众参与维度依托五项可量化统计指标实现数据驱动的客观评定：操作时长比例（HTR＝观众动手操作时长/活动总时长×100%）、观众驻足率（SR＝驻足观看观众人数/通过该区域总观众人数×100%）、观众平均驻足停留时间（ADT＝驻足观众停留时间总和/驻足观众总人数）、观众专注比例（FR＝处于投入状态的观众人数/总观察人数×100%）、多轮平均互动响应率（ARR＝各轮互动响应人数之和/各轮在场总人数之和×100%）；教育成效维度通过问卷与访谈采集；评估结果回流至案例库，驱动模板持续迭代。

#### 4.2 Benchmarking Against Standards

将计划集合与外部标准进行对照：

**对照标准（可选）**：
- **NGSS (美国下一代科学标准)**：三维学习框架（CCC+SEP+DCI）
- **中国义务教育科学课程标准**：物质科学/生命科学/地球与宇宙/技术工程
- **PISA 科学素养框架**：科学情境、科学知识、科学能力
- **IB MYP 科学框架**：概念理解、技能发展、个人参与

**对照方法**：
1. 提取每个计划覆盖的学科概念/跨学科概念/科学实践
2. 与标准中的概念列表进行匹配
3. 计算覆盖率：覆盖的概念数 / 标准总概念数
4. 识别"覆盖盲区"：标准中未被覆盖的重要概念

**输出**：
```markdown
### 课程标准覆盖分析

**对照标准**：NGSS (3-5年级)

| 维度 | 覆盖概念数 | 标准总概念数 | 覆盖率 | 盲区示例 |
|------|----------|------------|-------|---------|
| DCI (核心概念) | 12 | 20 | 60% | 能量转化、物质属性 |
| CCC (跨学科概念) | 5 | 7 | 71% | 系统与系统模型 |
| SEP (科学实践) | 6 | 8 | 75% | 基于证据的论证 |

**覆盖盲区**：
- 能量转化：只有2个计划涉及，且均为浅层讨论
- 系统与系统模型：完全未覆盖，建议增加生态系统/电路系统类活动
```

#### 4.3 Cross-Institutional Comparison

如果输入来自多个机构，进行横向对比：
- 各机构的平均质量评分
- 各机构的框架偏好
- 各机构的 UDL 覆盖水平
- 各机构的课程标准覆盖差异
- 识别"最佳实践机构"和"需要支持的机构"

**输出**：
```markdown
### 机构间对比

| 机构 | 计划数 | 平均质量 | 框架偏好 | UDL覆盖 | 标准覆盖 |
|------|-------|---------|---------|--------|---------|
| A馆 | 20 | 82 (B) | 4-Stage为主 | 1.5/3 | 65% |
| B校 | 15 | 75 (C) | 5E为主 | 2.2/3 | 70% |
| C中心 | 10 | 88 (B) | PBL+DT | 2.8/3 | 80% |

**最佳实践**：C中心在UDL和标准覆盖上表现最佳，可作为标杆
**改进建议**：A馆需提升UDL覆盖（尤其多元表达），B校需提升科学准确性
```

### Phase 5: Pattern Aggregation with Statistical Rigor

在 Phase 2 的基础上，增加统计分析和机器学习风格的模式识别。

#### 5.1 Statistical Analysis Enhancement

在原有统计基础上增加：
- **方差分析**：各维度评分的标准差（识别质量一致性）
- **相关性分析**：
  - 框架类型 vs 质量评分（哪种框架得分更高？）
  - 活动设计 vs 教育成效评分（活动设计质量是否显著影响教育成效？）
  - 受众参与 vs 教育成效（更多参与是否带来更好效果？）
- **聚类分析**：将计划按特征聚类（如"高参与低成效"vs"低参与高成效"）
- **回归分析**：识别影响质量评分的关键因素（如"活动设计"对教育成效的贡献度）

#### 5.2 Trend Analysis (Longitudinal)

如果计划有时间戳信息，分析设计范式的演变：
- **时间序列分析**：各维度评分随时间的变化趋势
- **最佳实践涌现检测**：哪些设计元素在近年出现频率上升？
- **过时模式识别**：哪些设计元素在近年出现频率下降？
- **创新度评估**：最新计划与历史平均的差异（创新 vs 保守）

**输出**：
```markdown
### 设计范式演变趋势 (2020-2024)

**上升元素**：
- 形成性评估：2020年10% → 2024年45% (+35%)
- UDL差异化：2020年5% → 2024年30% (+25%)
- STEM整合：2020年15% → 2024年40% (+25%)

**下降元素**：
- 纯讲授式：2020年30% → 2024年10% (-20%)
- 无安全提示：2020年20% → 2024年5% (-15%)

**新兴元素**：
- AI/数字化工具：2024年占15%（AR模拟、虚拟实验）
```

### Phase 6: Gap Analysis & Equity Audit

#### 6.1 Curriculum Coverage Gap Analysis

识别计划集合中的"知识盲区"：
- 按学科领域统计覆盖率（物理/化学/生物/天文/地理/工程）
- 按年级段统计覆盖率（小学/初中/高中/成人）
- 按活动类型统计覆盖率（实验/观察/模型/游戏/讨论/表演）
- 识别"零覆盖"或"低覆盖"的领域

**输出**：
```markdown
### 知识盲区分析

| 领域 | 计划数 | 覆盖率 | 建议 |
|------|-------|-------|------|
| 物理-光学 | 8 | 高 | 维持 |
| 化学-有机 | 1 | 极低 | 急需补充 |
| 生物-生态 | 3 | 低 | 建议增加 |
| 工程-结构 | 2 | 低 | 建议增加 |
| 地球科学-气候 | 0 | 零 | 急需补充 |
| 初中(7-9年级) | 5 | 低 | 建议增加 |
```

#### 6.2 Equity & Diversity Audit

检查计划集合的公平性和多样性：
- **文化响应性**：活动是否涉及多元文化背景？是否以西方/单一文化为中心？
- **性别平等**：是否有性别刻板印象（如"男生做工程/女生做生物"）？
- **无障碍设计**：是否考虑了视觉/听觉/运动/认知障碍者的需求？
- **社会经济包容性**：材料成本是否过高？是否依赖昂贵设备？
- **语言多样性**：是否有多语言支持？

**审计方法**：
- 提取活动中的角色分配、示例选择、文化引用
- 检查材料成本（人均 > 50元 = 高成本警告）
- 检查是否有替代方案（无替代方案 = 可及性风险）

**输出**：
```markdown
### 公平性与多样性审计

| 维度 | 问题数 | 占比 | 严重程度 | 示例 |
|------|-------|------|---------|------|
| 文化单一性 | 25 | 50% | 中 | 例子均为西方生活场景 |
| 性别刻板 | 5 | 10% | 低 | "男生负责搭建，女生负责记录" |
| 高成本活动 | 8 | 16% | 中 | 人均 > 50元，无低成本替代 |
| 无障碍缺失 | 35 | 70% | 高 | 无视觉/听觉替代方案 |
| 语言单一 | 48 | 96% | 高 | 只有中文版本 |

**改进建议**：
- 增加非西方文化背景的例子（如中国天文观测、非洲农业生态）
- 消除性别角色暗示，使用中性语言
- 为每个高成本活动提供"低成本替代方案"
- 为每个活动添加"无障碍设计"章节
```

#### 6.3 Cost-Effectiveness Analysis

计算活动的教育投入产出比：
- **人均材料成本**：总材料成本 / 参与人数
- **时间效率**：学习目标数 / 活动时长（每分钟学习目标数）
- **教育ROI**：质量评分 / 人均成本（低成本高质量 = 高ROI）
- **识别"高价值"活动**：低成本 + 高质量 + 高覆盖
- **识别"低价值"活动**：高成本 + 低质量 + 低覆盖

**输出**：
```markdown
### 成本效益分析

| 活动 | 人均成本 | 质量评分 | 学习目标数 | 时长 | 教育ROI | 价值标签 |
|------|---------|---------|-----------|------|---------|---------|
| 光的折射 | ¥5 | 4.5/5 | 3 | 45min | 高 | ⭐ 高价值 |
| DNA提取 | ¥80 | 3.5/5 | 2 | 60min | 中 | 需优化成本 |
| 机器人编程 | ¥150 | 4.0/5 | 4 | 90min | 中 | 高投入高回报 |
| 火山模型 | ¥30 | 2.5/5 | 1 | 30min | 低 | ⚠️ 低价值 |

**高价值标杆**：光的折射（低成本+高质量+高学习目标密度）
**低价值预警**：火山模型（高成本+低质量+低目标密度），建议重新设计或淘汰
```

### Phase 7: Template Generation (Enhanced)

Load [references/template-generation.md](references/template-generation.md) and generate comprehensive template:

**Template Components:**
1. **Template Metadata** — Version, generation source, applicability
2. **Structure Specification** — Required/Recommended/Optional sections
3. **Field Specifications** — Default values, constraints, format rules
4. **Content Guidelines** — Quality standards for each section
5. **Format Standards** — Markdown rules, style guide
6. **Quality Checklist** — Validation criteria

**Customization Options:**
- Base template (generic)
- Museum-optimized (exhibit-focused)
- School-optimized (curriculum-aligned)
- Outdoor-optimized (field-trip-focused)
- Workshop-optimized (short, hands-on)
### Phase 8: Integration with science-edu-activity

Load [references/integration-guide.md](references/integration-guide.md) and prepare template for deployment:

**Integration Options:**

1. **Direct Update** — Replace output-schema.md content (major updates)
2. **Profile Addition** — Create new template-[profile].md file (specialized variants)
3. **Configuration-Based** — Set up profile selection in config

**Version Management:**
- Tag template with semantic version
- Document changes from previous version
- Maintain backward compatibility notes

### Phase 9: Validation & Delivery

1. **Template Validation**
   - Test template by generating a sample activity using `science-edu-activity` skill
   - Verify all required sections are producible
   - Check formatting consistency

2. **User Review**
   - Present template summary with key metrics
   - Highlight key decisions (section inclusions, defaults, new frameworks added)
   - Offer customization before finalization

3. **Delivery**
   - Save template file(s)
   - Update `science-edu-activity` references (if requested)
   - Provide integration instructions

## Usage Patterns

### Pattern 1: Initialize New Template
**Scenario:** Organization has 30 existing activities in various formats, wants to standardize
```
User: "分析我们馆的30个活动方案，生成一个标准模板"
> Run complete analysis workflow (Phase 1-7)
> Generate museum-optimized template
> Update science-edu-activity/references/output-schema.md
```

### Pattern 2: Create Specialized Variant
**Scenario:** Museum has good general template, wants outdoor-specific version
```
User: "基于现有模板，为野外考察活动生成专门模板"
> Analyze 10-15 outdoor activity plans
> Generate outdoor-profile template
> Save as template-outdoor.md
```

### Pattern 3: Template Update from New Examples
**Scenario:** Organization has been using template, wants to incorporate newer activities
```
User: "最近设计了10个新活动，想更新现有模板"
> Analyze 10 new plans
> Compare patterns with existing template
> Identify evolution (new best practices, new frameworks)
> Generate template v1.1
> Show diff from v1.0
```

### Pattern 4: Best Practice Extraction
**Scenario:** Want to benchmark and improve existing activities
```
User: "分析我们的活动方案，找出优势和改进点"
> Analyze all plans with multi-dimensional scoring
> Generate comparison report with rankings
> Identify top-performing plans and why
> List actionable recommendations with priority
```

## Output Specifications

### Main Output: Template File

```markdown
# Science Education Activity Plan Template
## Template Metadata
- Version: 1.0.0
- Generated from: 45 activity plans
- Profile: Museum-General
- Date: 2024-XX-XX
- Frameworks supported: 5E, 4-Stage, PBL, Design Thinking, IBL, POE/PEE, 7E, REACT, UbD, GRRF, IDM, Guided Play

## Structure Requirements

### Required Sections
1. Basic Information (age, duration, group size, discipline, activity type)
2. Theoretical Framework (explicit learning theory basis and pedagogical framework alignment)
3. Learning Objectives (3-5, SMART, Bloom's taxonomy aligned)
4. Learning Objectives (3-5, SMART, Bloom's taxonomy aligned)
5. Pedagogical Framework Selection (explicitly state framework + justification)
6. Activity Flow (framework-specific stages with facilitation guides)
7. Formative Assessment Checkpoints (≥1 per learning objective, embedded in flow)
8. Assessment Alignment (learning objectives to formative checkpoints)
9. UDL Differentiation Plan (representation, expression, engagement)
10. Materials List (with sourcing info and cost estimates)
11. Safety Notes (risk assessment + emergency procedures)

### Recommended Sections
1. Activity Summary (with theoretical positioning, safety highlights, and activity type)
2. Background Knowledge (verified with literature references)
3. STEM/STEAM Integration Map (if applicable)
4. NGSS 3D Alignment (if applicable)
5. Museum-School Partnership Guide (pre-visit / visit / post-visit, if applicable)
6. Family Learning Guide (Guided Play strategies, parent conversation prompts, if applicable)
7. Mixed Learning Mode Design (online + offline integration, if applicable)
8. Assessment Rubrics (including UDL alternatives)
9. Longitudinal Tracking Evaluation Design (if applicable)
10. Contingency Plans (weather, participant issues, equipment failure)
11. Extension Resources (further reading, follow-up activities)
12. Literature References (verified, with verification status)

### Optional Sections
1. Venue Requirements
2. Staffing/人员配置
3. Pre-visit/Post-visit Materials
4. Accessibility Guide (detailed)
5. Parent/Caregiver Notes

## Format Specifications
- Framework-specific flow sections must include detailed facilitation guides
- Each checkpoint must include: check method, success criteria, remediation strategies
- UDL plan must cover all three principles with ≥2 options per principle
- STEM integration must include integration problem statement
- All scientific claims must include accuracy annotations (🔬📐🎭)
- Literature references must include verification status (✅/⚠️/❌)
```

### Secondary Output: Analysis Report (Enhanced)

```markdown
# Activity Plan Analysis Report

## Dataset Summary
- Total plans analyzed: 45
- Date range: 2020-2024
- Institutions: 3 museums, 2 schools
- Frameworks used: 5E(40%), 4-Stage(30%), PBL(15%), Design Thinking(10%), SSI(5%)

## Multi-Dimensional Scoring Results

### Overall Quality Distribution
| Grade | Count | % | Institutions |
|-------|-------|---|-------------|
| A (90-100) | 3 | 7% | C中心 |
| B (75-89) | 12 | 27% | A馆, C中心 |
| C (60-74) | 20 | 44% | B校, A馆 |
| D (<60) | 10 | 22% | A馆 |

### Dimension Breakdown
| Dimension | Mean | Std | Top Institution | Bottom Institution |
|-----------|------|-----|----------------|-------------------|
| 活动设计 | 82.5 | 8.3 | C中心 (92) | A馆 (68) |
| 活动实施 | 76.3 | 12.1 | C中心 (88) | A馆 (62) |
| 受众参与 | 71.4 | 15.2 | B校 (82) | A馆 (55) |
| 教育成效 | 85.2 | 6.7 | A馆 (90) | B校 (75) |

### 维度综合评分

| 维度 | 平均分 | 最高机构 | 最低机构 | 关键发现 |
|------|--------|---------|---------|---------|
| 活动设计 | 78.2 | C中心 (90) | A馆 (65) | 策划与准备阶段质量达标，但展品关联度和认知适配性有提升空间 |
| 活动实施 | 76.3 | C中心 (88) | A馆 (62) | 讲解呈现与现场组织良好，但安全保障性和方案落实度需加强 |
| 受众参与 | 71.4 | B校 (82) | A馆 (55) | 参与广度和深度不足，互动响应率和观众留存表现偏低 |
| 教育成效 | 85.2 | A馆 (90) | B校 (75) | 兴趣激发和学习成果较好，但科学事业认同感传递较弱 |

### 理论框架分析

| 指标 | 平均分 | 关键发现 |
|------|--------|---------|
| 理论依据明确度 | 1.5/3 | 物理情境描述较好，社会/文化情境不足 |
| 探究过程完整性 | 2.0/3 | 有探究环节，但证据收集和交流反思薄弱 |
| 学习目标对齐度 | 1.8/3 | 概念理解目标较清晰，态度/身份认同维度缺失 |
| 理论框架完整度 | 35% | 多数计划仅聚焦科学概念，忽视认知能力和情感因素 |
| 差异化设计 | 0.8/3 | 严重不足，仅15%计划涉及 |
| 评估科学性 | 0.9/3 | 严重不足，仅20%计划有系统的评估设计 |

### Activity Type Distribution

| Activity Type | Count | % | Average Quality | Representative Frameworks |
|---------|------|------|---------|-----------|
| 知识传递型 | 12 | 24% | 3.2/5 | 4-Stage |
| 技能培养型 | 18 | 36% | 3.8/5 | 5E, IBL |
| 兴趣激发型 | 8 | 16% | 4.0/5 | Guided Play, 4-Stage |
| 综合发展型 | 12 | 24% | 4.2/5 | PBL, Design Thinking |

### Key Findings
- **Framework Correlation**: PBL plans score higher on educational effectiveness (r=0.68)
- **UDL Impact**: Plans with UDL coverage >2.0/3 score 15 points higher on average
- **Assessment Gap**: 55% of plans lack formative assessment checkpoints
- **Safety**: 100% include safety notes (baseline met)
- **Literature**: Only 30% include verified literature references
- **理论框架薄弱**: 65% 的计划缺乏明确的理论依据陈述; 理论框架与活动设计对齐度不足
- **评估设计薄弱**: 受众参与和教育成效是所有机构中最弱的两个维度
- **Activity Type Imbalance**: Knowledge-delivery type dominates (24%), while comprehensive-development type is underrepresented (24%) despite higher quality scores
- **Longitudinal Tracking**: 0% of plans include longitudinal evaluation design, all are cross-sectional
- **Mixed Methods**: Only 10% of plans use both quantitative and qualitative evaluation methods

### Best Practice Examples
[Top 5 plans with detailed scoring breakdown]

### Improvement Opportunities
1. **UDL coverage**: 70% of plans need enhanced differentiation
2. **Formative assessment**: 55% need embedded checkpoints
3. **Framework diversity**: 85% rely on only 2 frameworks (5E + 4-Stage), need to introduce POE/PEE/Guided Play for more diverse pedagogical approaches
4. **Literature verification**: 70% need verified references
5. **STEM integration**: 60% lack meaningful cross-disciplinary connections
6. **理论定位强化**: 85% 缺乏明确的理论定位，建议明确学习理论基础和教学目标的多维度对齐
7. **评估体系完善**: 90% 缺乏系统的学习成果评估，建议建立包含科学素养、兴趣、探究能力和体验的多维度评估
8. **Activity type balance**: Comprehensive-development type activities are underrepresented despite higher quality
9. **Longitudinal tracking**: 100% of plans are cross-sectional, need to introduce longitudinal evaluation design
10. **Mixed methods**: Only 10% use mixed evaluation, need to combine quantitative and qualitative methods
11. **Museum-school partnership**: Only 5% include three-stage model design
12. **Family learning**: Only 3% include Guided Play design for family scenarios

### Actionable Recommendations
| Priority | Recommendation | Expected Impact | Effort |
|----------|---------------|----------------|--------|
| P0 | 增加形成性评估检查点 | +20% 教育成效 | 低 |
| P0 | 提升UDL覆盖至≥2.0/3 | +15% 总体质量 | 中 |
| P0 | 强化理论定位与多维度学习目标设计 | +18% 教育成效 | 中 |
| P0 | 建立系统化的学习成果评估体系 | +12% 教育成效 | 中 |
| P1 | 引入POE/PEE/Guided Play等多样化框架 | +10% 活动设计 | 高 |
| P1 | 增加文献验证流程 | +8% 活动设计 | 中 |
| P1 | 增加纵向追踪评估设计 | +10% 效果持续性 | 高 |
| P1 | 引入馆校合作三阶段模型 | +8% 场景适配度 | 中 |
| P2 | 深化STEM整合 | +5% 教育成效 | 中 |
| P2 | 引入家庭学习Guided Play设计 | +5% 低龄儿童覆盖 | 低 |
```

## Quality Assurance

### Input Validation
- Reject plans without basic structure (title, objectives, flow)
- Flag unusually short (<500字) or long (>5000字) plans
- Check for required safety information (mandatory for physical/chemical activities)
- Verify target age is specified

### Analysis Validation
- Cross-check section detection with manual sampling (10% random sample)
- Verify statistical calculations (standard deviation, correlation)
- Test pattern recognition accuracy against manual coding
- Calibrate scoring rubric with expert ratings (if available)

### Template Validation
- Generate sample activity using template with `science-edu-activity` skill
- Verify all required sections are producible
- Check formatting consistency across output
- Test UDL checkpoint generation
- Verify framework-specific flow works correctly

## Integration with science-edu-activity

This skill is designed to work as a companion to `science-edu-activity.skill`:

1. **trainer** analyzes existing plans → generates/enhances template
2. **activity generator** uses template → creates new plans following best practices
3. **feedback loop** → new plans feed back into trainer for continuous improvement

See [references/integration-guide.md](references/integration-guide.md) for detailed integration patterns.
