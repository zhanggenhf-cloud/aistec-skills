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
6. **Assessment** — Evaluation methods used, SMEALOS four-dimension coverage
7. **Language Style** — Formality, perspective, tone
8. **Practicality** — Material accessibility, time realism, safety
9. **Theoretical Framework** — CIC model positioning (Context/Inquiry/Construction coverage), ACPRE four-dimension alignment
10. **Cognitive Psychology** — Cognitive load management, embodied cognition integration, working memory considerations

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
- 识别框架类型：5E / 4-Stage / PBL / Design Thinking / SSI / IBL / DIE / IADE / Guided Play / 其他
- 识别活动类型：知识传递型 / 技能培养型 / 兴趣激发型 / 综合发展型
- 统计各框架和活动类型在集合中的分布比例
- 识别"框架使用趋势"：是否偏向某一框架？是否有框架缺失？
- 评估框架使用质量：框架阶段是否完整？逻辑是否连贯？
- 检查CIC模型定位：是否明确说明了情境/探究/建构三维度？
- 检查ACPRE维度覆盖：是否统筹了认知功能奠基/科学概念建构/心理情感融入/科学融合应用？

**输出**：
```markdown
### 教学法框架分布

| 框架 | 数量 | 占比 | 平均质量评分 | 质量范围 |
|------|------|------|------------|---------|
| 5E | 15 | 30% | 4.2/5 | 3.0-5.0 |
| 4-Stage | 20 | 40% | 3.8/5 | 2.5-4.5 |
| PBL | 8 | 16% | 4.0/5 | 3.0-5.0 |
| SSI | 2 | 4% | 3.5/5 | 3.5-3.5 |
| DIE | 1 | 2% | 4.0/5 | 4.0-4.0 |
| IADE | 1 | 2% | 3.5/5 | 3.5-3.5 |
| Guided Play | 2 | 4% | 3.8/5 | 3.5-4.0 |
| 其他/未识别 | 5 | 10% | 2.5/5 | 1.0-4.0 |

### 活动类型分布

| 活动类型 | 数量 | 占比 | 平均质量 | 代表性框架 |
|---------|------|------|---------|-----------|
| 知识传递型 | 12 | 24% | 3.2/5 | 4-Stage |
| 技能培养型 | 18 | 36% | 3.8/5 | 5E, IBL |
| 兴趣激发型 | 8 | 16% | 4.0/5 | Guided Play, 4-Stage |
| 综合发展型 | 12 | 24% | 4.2/5 | PBL, Design Thinking |

### CIC模型与ACPRE维度分析

| 维度 | 明确说明占比 | 平均覆盖深度 | 常见问题 |
|------|------------|------------|---------|
| 情境(Context) | 45% | 1.5/3 | 缺乏物理/社会/文化情境的完整描述 |
| 探究(Inquiry) | 60% | 2.0/3 | 探究环节不完整，缺少证据收集/交流反思 |
| 建构(Construction) | 50% | 1.8/3 | 预期学习成果不明确，缺少态度/身份认同维度 |
| 认知功能奠基 | 15% | 0.8/3 | 忽视底层认知能力训练 |
| 科学概念建构 | 75% | 2.2/3 | 常见但深度不足 |
| 心理情感融入 | 20% | 0.9/3 | 忽视非智力因素培养 |
| 科学融合应用 | 30% | 1.2/3 | 缺乏真实问题解决情境 |

**分析**：
- 4-Stage 占比过高，可能反映博物馆场景为主
- SSI 和 Design Thinking 严重不足，建议增加争议议题和工程设计类活动
- DIE 和 IADE 框架使用极少，建议增加展品教育和馆校合作类活动
- Guided Play 仅用于低龄儿童活动，覆盖面有限
- 综合发展型活动质量最高，但占比不足
- ACPRE 四维度中"认知功能奠基"和"心理情感融入"严重不足
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

#### 4.1 Weighted Quality Rubric

设计多维度加权评分标准，整合 SMEALOS 评估框架：

| 维度 | 权重 | 评分标准 (1-5分) | 评分方法 | SMEALOS 对齐 |
|------|------|-----------------|---------|------------|
| **科学准确性** | 15% | 1=有错误, 3=基本准确但可优化, 5=精确且前沿 | 专家审核 + 文献验证 | 科学素养(SLS) |
| **教育有效性** | 15% | 1=目标不明确, 3=目标达成但平淡, 5=高阶思维+深度学习 | 布鲁姆分类覆盖 + 目标-活动对齐 | 科学素养(SLS) |
| **框架完整性** | 10% | 1=框架混乱/缺失, 3=框架存在但阶段不完整, 5=框架完整且逻辑清晰 | 框架识别 + 阶段完整性检查 | — |
| **可操作性** | 10% | 1=无法执行, 3=可执行但材料难获取, 5=材料易获取+步骤清晰 | 材料清单检查 + 步骤清晰度评估 | 学习体验(LES) |
| **UDL 覆盖** | 10% | 1=无差异化, 3=部分差异化, 5=三原则全覆盖 | UDL 分析结果 | 学习体验(LES) |
| **形成性评估** | 10% | 1=无评估, 3=有总结性评估, 5=嵌入形成性+UDL替代评估 | 评估检查点分析 | 探究能力(IAS) |
| **科学兴趣激发** | 10% | 1=枯燥乏味, 3=有一定趣味性, 5=高度激发好奇心和持续参与意愿 | 情境设计 + 互动性评估 | 科学兴趣(SIS) |
| **探究能力培养** | 10% | 1=无探究环节, 3=有探究但不完整, 5=完整探究过程+高阶思维训练 | 探究流程完整性 + 认知挑战度 | 探究能力(IAS) |
| **学习体验设计** | 10% | 1=体验差, 3=体验一般, 5=沉浸式、愉悦、有成就感 | 情感体验 + 社交互动 + 认知挑战 | 学习体验(LES) |
| **安全性** | 10% | 1=无安全提示, 3=有安全提示但不够, 5=完整安全协议+应急预案 | 安全章节检查 | 学习体验(LES) |

**总分计算**：
```
总分 = Σ(维度得分 × 权重) / 5 × 100
```

**分级**：
- 90-100：卓越 (A)
- 80-89：优秀 (B)
- 70-79：良好 (C)
- 60-69：合格 (D)
- <60：需改进 (F)

**SMEALOS 四维度子评分**：
- 科学素养评分 = 科学准确性 × 0.6 + 教育有效性 × 0.4
- 科学兴趣评分 = 科学兴趣激发
- 探究能力评分 = 探究能力培养 + 形成性评估 × 0.5
- 学习体验评分 = 可操作性 × 0.3 + UDL覆盖 × 0.3 + 学习体验设计 × 0.4

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
  - UDL 覆盖 vs 教育有效性评分（UDL 是否显著提升质量？）
  - 形成性评估数量 vs 学习效果（更多检查点 = 更好效果？）
- **聚类分析**：将计划按特征聚类（如"高UDL低科学"vs"高科学低UDL"）
- **回归分析**：识别影响质量评分的关键因素（如"框架完整性"对总分的贡献度）

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
- SSI框架：2023年首次出现，2024年占10%
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
- Frameworks supported: 5E, 4-Stage, PBL, Design Thinking, SSI, IBL, POE, 7E

## Structure Requirements

### Required Sections
1. Basic Information (age, duration, group size, discipline, activity type)
2. Theoretical Framework (CIC model positioning: Context/Inquiry/Construction)
3. ACPRE Four-Dimension Objectives (cognitive function foundation / scientific concept construction / psychological-emotional integration / scientific fusion application)
4. Learning Objectives (3-5, SMART, Bloom's aligned + ACPRE dimensions)
5. Pedagogical Framework Selection (explicitly state framework + justification + CIC-ACPRE integration)
6. Activity Flow (framework-specific stages with facilitation guides + ACPRE five-step mapping)
7. Formative Assessment Checkpoints (≥1 per learning objective, embedded in flow, aligned with SMEALOS)
8. SMEALOS Assessment Alignment (scientific literacy / interest / inquiry ability / learning experience)
9. UDL Differentiation Plan (representation, expression, engagement)
10. Materials List (with sourcing info and cost estimates)
11. Safety Notes (risk assessment + emergency procedures)

### Recommended Sections
1. Activity Summary (with CIC positioning, safety highlights, and activity type)
2. Background Knowledge (verified with literature references)
3. STEM/STEAM Integration Map (if applicable)
4. NGSS 3D Alignment (if applicable)
5. Museum-School Partnership Guide (pre-visit / visit / post-visit, if applicable)
6. Family Learning Guide (Guided Play strategies, parent conversation prompts, if applicable)
7. Mixed Learning Mode Design (online + offline integration, if applicable)
8. Assessment Rubrics (including UDL alternatives + SMEALOS dimensions)
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
| B (80-89) | 12 | 27% | A馆, C中心 |
| C (70-79) | 20 | 44% | B校, A馆 |
| D (60-69) | 8 | 18% | A馆 |
| F (<60) | 2 | 4% | A馆 |

### Dimension Breakdown
| Dimension | Mean | Std | Top Institution | Bottom Institution |
|-----------|------|-----|----------------|-------------------|
| 科学准确性 | 82.5 | 8.3 | C中心 (92) | A馆 (68) |
| 教育有效性 | 76.3 | 12.1 | C中心 (88) | A馆 (62) |
| 框架完整性 | 71.4 | 15.2 | B校 (82) | A馆 (55) |
| 可操作性 | 85.2 | 6.7 | A馆 (90) | B校 (75) |
| UDL覆盖 | 58.3 | 18.5 | C中心 (85) | A馆 (35) |
| 形成性评估 | 45.6 | 22.1 | C中心 (78) | A馆 (20) |
| 科学兴趣激发 | 62.1 | 16.8 | B校 (80) | A馆 (45) |
| 探究能力培养 | 55.4 | 19.3 | C中心 (82) | A馆 (32) |
| 学习体验设计 | 70.8 | 14.2 | C中心 (85) | B校 (55) |

### SMEALOS Four-Dimension Comprehensive Scoring

| Dimension | Average Score | Highest Institution | Lowest Institution | Key Findings |
|------|---------|-----------|-----------|---------|
| 科学素养 (SLS) | 78.2 | C中心 (90) | A馆 (65) | Basic accuracy达标, but conceptual depth insufficient |
| 科学兴趣 (SIS) | 62.1 | B校 (80) | A馆 (45) | Overall偏低, context design and interactivity insufficient |
| 探究能力 (IAS) | 55.4 | C中心 (82) | A馆 (32) | Seriously偏低, inquiry process incomplete |
| 学习体验 (LES) | 70.8 | C中心 (85) | B校 (55) | Medium level, UDL and emotional experience have room for improvement |

### CIC and ACPRE Analysis

| Indicator | Average | Key Findings |
|------|------|---------|
| 情境维度覆盖 | 1.5/3 | Physical context description good, social/cultural context insufficient |
| 探究维度覆盖 | 2.0/3 | Inquiry环节有 but evidence collection/communication reflection weak |
| 建构维度覆盖 | 1.8/3 | Conceptual understanding goal clear, attitude/identity formation missing |
| ACPRE四维度完整度 | 35% | Most plans only focus on "scientific concept construction", neglect other three dimensions |
| 认知功能奠基 | 0.8/3 | Seriously insufficient, only 15% plans involve |
| 心理情感融入 | 0.9/3 | Seriously insufficient, only 20% plans involve |

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
- **CIC-ACPRE Gap**: 65% of plans lack explicit CIC positioning; 85% lack ACPRE four-dimension coverage
- **SMEALOS Weakness**: Scientific interest (SIS) and inquiry ability (IAS) are the two weakest dimensions across all institutions
- **Activity Type Imbalance**: Knowledge-delivery type dominates (24%), while comprehensive-development type is underrepresented (24%) despite higher quality scores
- **Longitudinal Tracking**: 0% of plans include longitudinal evaluation design, all are cross-sectional
- **Mixed Methods**: Only 10% of plans use both quantitative and qualitative evaluation methods

### Best Practice Examples
[Top 5 plans with detailed scoring breakdown]

### Improvement Opportunities
1. **UDL coverage**: 70% of plans need enhanced differentiation
2. **Formative assessment**: 55% need embedded checkpoints
3. **Framework diversity**: 85% rely on only 2 frameworks (5E + 4-Stage), need to introduce DIE/IADE/Guided Play
4. **Literature verification**: 70% need verified references
5. **STEM integration**: 60% lack meaningful cross-disciplinary connections
6. **CIC-ACPRE integration**: 85% lack explicit theoretical positioning, need to add CIC model and ACPRE four-dimension design
7. **SMEALOS assessment**: 90% lack systematic learning outcome evaluation, need to introduce SMEALOS four-dimension assessment
8. **Activity type balance**: Comprehensive-development type activities are underrepresented despite higher quality
9. **Longitudinal tracking**: 100% of plans are cross-sectional, need to introduce longitudinal evaluation design
10. **Mixed methods**: Only 10% use mixed evaluation, need to combine quantitative and qualitative methods
11. **Museum-school partnership**: Only 5% include three-stage model design
12. **Family learning**: Only 3% include Guided Play design for family scenarios

### Actionable Recommendations
| Priority | Recommendation | Expected Impact | Effort |
|----------|---------------|----------------|--------|
| P0 | 增加形成性评估检查点 | +20% 教育有效性 | 低 |
| P0 | 提升UDL覆盖至≥2.0/3 | +15% 总体质量 | 中 |
| P0 | 引入CIC理论定位与ACPRE四维度设计 | +18% 教育有效性 | 中 |
| P0 | 引入SMEALOS四维度评估体系 | +12% 评估科学性 | 中 |
| P1 | 引入PBL/SSI/DIE等框架 | +10% 框架完整性 | 高 |
| P1 | 增加文献验证流程 | +8% 科学准确性 | 中 |
| P1 | 增加纵向追踪评估设计 | +10% 效果持续性 | 高 |
| P1 | 引入馆校合作三阶段模型 | +8% 场景适配度 | 中 |
| P2 | 深化STEM整合 | +5% 教育有效性 | 中 |
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
