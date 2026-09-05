---
name: science-edu-activity
description: Generate science education activity plans from scientific concepts or exhibit descriptions. Use when the user wants to create educational activity plans, lesson plans, or hands-on science activities for museums, schools, or science centers. Supports concepts from physics, chemistry, biology, astronomy, geography, and interdisciplinary topics. Includes knowledge deconstruction, structured output formatting, error correction, and accuracy assurance mechanisms inspired by OpenMAIC. **Enhanced with Chain-of-Evidence (CoE) zero-hallucination citation architecture**: integrates academic literature retrieval (arXiv, scholar, CNKI) with multi-API cross-verification (I3 audit), abstract entailment checking, upstream library contamination detection, and inline evidence tagging to ensure zero hallucination citations in background knowledge and references.
---

# Science Education Activity Generator

This skill generates comprehensive, pedagogically sound science education activity plans by deconstructing scientific concepts or exhibit descriptions into teachable, hands-on activities.

## When to Use This Skill

Use this skill when:
- Creating activity plans for science museums, nature centers, or maker spaces
- Designing lesson plans for school science classes
- Converting exhibit descriptions into interactive educational experiences
- Developing STEM/STEAM activities for various age groups
- Adapting complex scientific concepts for public understanding

## Core Workflow

Follow these phases in order:

### Phase 0: Theoretical Framework Selection

Before formally designing the activity, perform macro-level positioning based on established learning theories including Constructivism, Situated Cognition, Inquiry-Based Learning, and Cognitive Psychology.

**Activity Type Positioning**:

| Activity Type | Core Goal | Typical Forms | Suitable Scenarios |
|--------------|-----------|---------------|------------------|
| **Knowledge-Delivery** | Science knowledge dissemination | Guided tours, science lectures, themed exhibitions | Basic science knowledge popularization |
| **Skill-Development** | Scientific method training | Science experiments, inquiry workshops, tech making | Hands-on operation and inquiry ability cultivation |
| **Interest-Stimulation** | Stimulating curiosity | Science shows, interactive games | Attracting public, especially children |
| **Comprehensive-Development** | Holistic scientific literacy improvement | STEM projects, museum-school partnership courses, family science days, maker activities | Systematic educational goals |

**Output Requirement**: In the "Activity Summary," explicitly state:
> This activity is positioned as a **[Activity Type]**, stimulating **[Inquiry Method]** through **[Context Description]**, promoting learners' development in **[Learning Goal]**.

### Phase 1: Input Analysis & Classification

First, determine the input type:

| Input Type | Examples | Processing Path |
|-----------|----------|-----------------|
| **Scientific Concept** | "Newton's Laws", "Photosynthesis", "Electric Circuits" | Concept → Principles → Applications |
| **Exhibit Description** | Planetarium show, Interactive display, Specimen | Object → Principle → Interaction Design |
| **Activity Requirements** | "30-min activity for 10-year-olds about water" | Goal-Driven Reverse Design |
| **Mixed Input** | "DNA + 45 minutes + 20 students" | Multi-Path Fusion |

**Clarification Triggers** — Ask the user if:
- Target age range is not specified
- Activity duration is unclear
- Group size is unknown
- Resource/venue constraints are not mentioned
- The concept is extremely broad (e.g., just "Physics")

### Phase 2: Knowledge Deconstruction

Load [references/knowledge-deconstruction.md](references/knowledge-deconstruction.md) and apply the 5-stage deconstruction process:

1. **Core Concept Extraction** — Identify topic, principles, prerequisites, learning objectives
2. **Knowledge Breakdown** — Deconstruct into hierarchical knowledge nodes with real-world examples and common misconceptions
3. **Instructional Sequencing** — Design pedagogical flow using one of the following frameworks (auto-select based on topic + constraints). **If the topic involves ethical controversy, scientific policy, or socio-scientific issues, terminate immediately and do not proceed.**
   - **5E Model** (Engage→Explore→Explain→Elaborate→Evaluate) — 适合探究式科学概念
   - **4-Stage Flow** (Hook→Explore→Discuss→Apply) — 适合博物馆/科技馆互动活动
   - **PBL (Project-Based Learning)** — 适合真实世界问题解决、跨学科主题
   - **Design Thinking** — 适合工程设计、创客活动
   - **IBL (Inquiry-Based Learning)** — 适合开放探究、科学过程技能训练
   - **Guided Play** — 适合低龄儿童（2-7岁），基于引导式游戏研究（Hirsh-Pasek et al. 等）
4. **Activity Matching** — Match each knowledge node to appropriate activity types (experiments, models, games, etc.)
5. **Differentiation** — Create basic/advanced/challenge variants using **UDL (Universal Design for Learning)** principles:
   - 多元表征：同一概念用视觉/听觉/动手/文字多种方式呈现
   - 多方式表达：参与者可以用说/写/画/做/演等多种方式展示学习成果
   - 多方式参与：提供不同难度、不同兴趣切入点的参与路径
6. **STEM/STEAM Integration Check** — If topic allows, identify cross-disciplinary connections and add integration points
7. **ICAP Cognitive Engagement Assessment** — Evaluate each knowledge node and activity stage against the ICAP framework (see [references/icap-framework.md](references/icap-framework.md)):
   - Assign a target ICAP level (P/A/C/I) to each activity stage
   - Design "upshifting" strategies to elevate engagement (e.g., from Passive listening to Active summarizing to Constructive explaining to Interactive debating)
   - Ensure the overall activity progression shows an upward ICAP trend, not a plateau
8. **Metacognition Embedding Plan** — Identify key metacognitive moments in the activity flow (see [references/metacognition-design.md](references/metacognition-design.md)):
   - Pre-activity: "What do I already know? What do I expect?"
   - During-activity: "Am I understanding this? What's confusing me?"
   - Post-activity: "What did I learn? How did I learn it? What will I do differently?"
   - Replace low-cognitive activities (e.g., copying notes) with metacognitive equivalents
9. **Motivation Design (SDT)** — Apply Self-Determination Theory to ensure intrinsic motivation (see [references/sdt-motivation.md](references/sdt-motivation.md)):
   - **Autonomy**: Provide meaningful choices (paths, methods, roles, sequence)
   - **Competence**: Design "just-right" challenges with clear success criteria and immediate feedback
   - **Relatedness**: Ensure every participant has an irreplaceable role and is seen by peers
   - Remember: motivation is a byproduct of competence, not the cause of learning
10. **Assessment Alignment** — Map learning objectives to formative assessment checkpoints

### Phase 3: Activity Plan Generation

Load [references/output-schema.md](references/output-schema.md) and generate the complete activity plan, enhanced with the **ADDIE Systematic Development Process** (Analysis→Design→Development→Implementation→Evaluation) and **Museum-School Partnership Three-Stage Learning Model**:

**ADDIE 开发流程嵌入**：

| 步骤 | 名称 | 任务 | 输出 |
|------|------|------|------|
| **分析** | Analysis | 展品/概念教育价值分析，明确科学概念、探究空间、目标受众、课标对应 | 需求分析报告 |
| **设计** | Design | 进行系统设计，统筹学习目标与教学流程 | 活动设计方案 |
| **开发** | Development | 开发活动方案、学生手册、教师指南、评估工具、数字资源 | 教育资源包 |
| **实施** | Implementation | 试点实施，收集数据和反馈，检验可行性和有效性 | 实施报告 |
| **评估** | Evaluation | 过程性评估+总结性评估+延时性评估，持续改进 | 评估报告与修订版 |

**馆校合作三阶段学习模型**（当活动涉及馆校合作时）：

| 阶段 | 名称 | 地点 | 核心任务 | 支持资源 |
|------|------|------|---------|---------|
| **课前预备** | Pre-visit | 学校 | 激活先前知识，提出探究问题，为馆中探究做认知准备 | 教师培训、教学资源、活动方案 |
| **馆中探究** | Visit | 科技馆 | 实地探究体验，在展品互动、实验操作、教育引导下深度体验 | 教育活动组织、学习引导 |
| **课后延伸** | Post-visit | 学校 | 总结反思，整合体验与课堂知识，开展延伸探究 | 线上学习资源、后续活动支持 |

**混合式学习模式**（当涉及数字化资源时）：
- **线上预备+线下体验+线上深化**：参观前通过线上平台预习，参观中实地体验，参观后通过线上深化探索
- 混合式学习模式可结合线上预习与线下体验，提升学习效果与知识保持率

**家庭学习场景设计**（Guided Play 引导式游戏）：
- **故事情境化**：将科学探究融入故事情境，激发儿童参与动机
- **任务驱动化**：设计有挑战性但可完成的任务，引导家庭成员协作探究
- **对话支持化**：提供引导性问题卡，支持家长开展有效的引导性对话（多用"为什么""怎么样""如果是...会怎样"等开放性问题）
- **成果可视化**：设计可展示的学习成果，增强家庭成就感

Generated plan includes:

- Metadata (name, age, duration, group size, discipline, activity type)
- Executive summary with theoretical positioning and safety highlights
- **Theoretical Framework** — Explicitly state which framework is used and why
- SMART learning objectives (Bloom's taxonomy aligned)
- Background knowledge (science principles + applications + verified literature references)
- **Pedagogical Framework Selection** — Explicitly state which framework is used and why (5E / 4-Stage / PBL / Design Thinking / IBL / Guided Play)
- **UDL Differentiation Plan** — How the activity supports diverse learners (multiples of representation, expression, engagement)
- Framework-specific activity flow with facilitator guides
  - *5E Model*: Engage→Explore→Explain→Elaborate→Evaluate (each with detailed facilitation)
  - *4-Stage*: Hook→Explore→Discuss→Apply (museum-style interactive)
  - *PBL*: Problem→Investigate→Design→Present→Reflect (project-based)
  - *Design Thinking*: Empathize→Define→Ideate→Prototype→Test (engineering)
  - *IBL*: Question→Hypothesis→Investigate→Analyze→Conclude (open inquiry)
  - *Guided Play*: Free exploration → Guided questioning → Structured reflection → Family sharing (for ages 2-7, based on Hirsh-Pasek et al.)
- **Internal Formative Assessment Feedback** — Embedded assessment logic used internally to auto-correct the plan before output (not directly shown to user; see Internal Feedback Loop section)
- **STEM/STEAM Integration Map** (if applicable) — Cross-disciplinary connections
- Complete materials list with sourcing info and cost estimates
- Venue requirements and setup instructions
- **Metacognition embedding points** (marked explicitly in the activity flow)
- **ICAP level annotations** for each activity stage (P/A/C/I)
- **Visible line vs. Hidden line alignment check** (ensure every "fun" activity serves a learning goal)
- **Museum-School Partnership Guide** (if applicable) — Pre-visit, visit, post-visit materials
- **Family Learning Guide** (if applicable) — Guided play strategies, parent conversation prompts
- Assessment rubrics (including UDL-aligned assessment alternatives)
- Contingency plans
- Extension resources
- Literature references (verified, with citations)

### Phase 4: Quality Assurance

Apply multi-layer error correction from [references/error-correction.md](references/error-correction.md):

**Self-Correction Checklist:**
- [ ] All required sections present (see output schema)
- [ ] **活动类型已明确**（知识传递型/技能培养型/兴趣激发型/综合发展型）
- [ ] Scientific concepts are accurate (cross-reference Tier 1 sources)
- [ ] **关键科学概念已通过 CoE 文献验证（六步验证法：A→B→C→D→E→F）**
- [ ] **引用文献已完成五类幻觉检测（TF/PAC/IH/PH/SH）**
- [ ] **引用文献已完成 I3 多 API 交叉审计（SS + arXiv + CrossRef 至少两种）**
- [ ] **引用文献已完成 LLM 摘要蕴涵验证（声明与摘要一致）**
- [ ] **引用文献已记录来源元数据（provenance metadata：API名称、查询时间、缓存路径）**
- [ ] **引用文献已标注验证状态（✅已验证 / ⚠️待确认 / ❌已删除）**
- [ ] **所有引用声明已携带内联证据标签 `{source}`，无标签即视为未验证**
- [ ] **已执行上游库污染检测（检查重复引用、框架内置引用列表）**
- [ ] **参考资料章节包含真实、可溯源的文献引用，且已附 CoE Audit Trail**
- [ ] **验证记录中包含幻觉引用拦截统计（零误引输出）**
- [ ] **Pedagogical framework selection is justified** (why this framework for this topic?)
- [ ] **UDL differentiation covers all three principles** (representation, expression, engagement)
- [ ] **Internal formative assessment feedback has triggered auto-correction** where gaps were found
- [ ] Safety considerations identified and addressed
- [ ] Materials are realistically obtainable
- [ ] Time estimates are realistic
- [ ] Learning objectives match activities
- [ ] Common misconceptions are addressed
- [ ] **STEM/STEAM integration is meaningful (not forced)**
- [ ] **参考资料章节包含真实、可溯源的文献引用**
- [ ] **Assessment rubric includes UDL alternatives** (not just written tests)
- [ ] **馆校合作场景**（如适用）：三阶段模型（课前预备→馆中探究→课后延伸）已完整
- [ ] **家庭学习场景**（如适用）：Guided Play设计策略已融入
- [ ] **混合式学习**（如适用）：线上+线下整合方案已设计
- [ ] **ICAP 认知参与层次已评估**：每个活动阶段标注了目标 ICAP 档位（P/A/C/I），且整体呈上升趋势
- [ ] **明暗线已对齐检查**：每个"有趣"的活动环节都能指认其服务的教学目标（暗线）
- [ ] **元认知嵌入点已标注**：活动流程中明确标记了出声思考、反思卡、自我提问等元认知节点
- [ ] **动机设计已融入（SDT）**：自主性（选择机会）、胜任感（清晰标准+即时反馈）、归属感（不可替代角色）已覆盖
- [ ] **有效失败空间已预留**：探究环节保留了适度的"挣扎空间"，没有急于给出答案

Apply accuracy assurance from [references/accuracy-assurance.md](references/accuracy-assurance.md):

Apply accuracy assurance from [references/accuracy-assurance.md](references/accuracy-assurance.md):
- Add accuracy annotations (🔬 scientific fact, 📐 simplified model, 🎭 analogy)
- Flag areas needing expert review
- Include verification prompts for controversial topics

## Output Format

Generate output in standard Markdown following the template in [references/output-schema.md](references/output-schema.md). Include:

```markdown
# [Activity Name]

## 基本信息
- **适用年龄**: 
- **活动时长**: 
- **参与人数**: 
- **学科领域**: 
- **核心概念**: 

## 活动摘要
...

## 学习目标
...

## 背景知识
...

## 活动流程
### 阶段一：引入
### 阶段二：探索
### 阶段三：讨论
### 阶段四：应用

## 材料清单
...

## 安全提示
...

## 应急预案
...

## 参考资料
...
```

## 框架选择指南（Pedagogical Framework Selection Guide）

根据主题特征和约束条件，自动选择最适合的教学框架：

### 选择决策树

```
主题是否涉及伦理争议/社会决策/科学争议？
  ├─ 是 → **终止生成**。该主题涉及社会性科学议题（SSI），内容不宜输出，停止方案生成。
  └─ 否 → 主题是否涉及工程设计/制作实物？
          ├─ 是 → Design Thinking（设计思维）或 Engineering Design Process
          └─ 否 → 是否需要解决真实世界问题？
              ├─ 是 → PBL（项目式学习）或 POE/PEE（预测-观察-解释）
              └─ 否 → 是否强调科学探究过程/开放问题？
                  ├─ 是 → IBL（探究式学习）或 5E/7E 模型
                  │       ├─ 需要前测/暴露前概念 → 7E（增加 Elicit）
                  │       ├─ 需要延伸拓展 → 7E（增加 Extend）
                  │       └─ 标准探究 → 5E
                  └─ 否 → 是否需要连接生活经验/真实情境？
                      ├─ 是 → REACT（关联-体验-应用-协作-迁移）
                      └─ 否 → 目标受众是否为低龄儿童（2-7岁）？
                          ├─ 是 → Guided Play（引导式游戏）
                          └─ 否 → 4阶段流程（博物馆/科技馆互动）
                              └─ 需要预测环节？ → POE/PEE
```

### 框架特征对照（扩展版）

| 框架 | 核心流程 | 最适合的主题 | 年龄适配 | 时间需求 | 评估重点 | 来源 |
|------|---------|------------|---------|---------|---------|------|
| **5E** | 参与→探究→解释→拓展→评价 | 经典科学概念 | 小学-高中 | 45-90min | 概念理解 | Bybee et al., 2006 |
| **7E** | 引出→参与→探究→解释→拓展→延伸→评价 | 需要前测/延伸的概念 | 小学-高中 | 60-120min | 概念理解+前概念转变 | Eisenkraft, 2003 |
| **4-Stage** | 引入→探索→讨论→应用 | 科技馆互动展品 | 全年龄 | 15-60min | 参与体验 | 博物馆教育 |
| **PBL** | 问题→探究→设计→展示→反思 | 真实世界问题 | 初中+ | 数小时-数周 | 问题解决 | Krajcik & Blumenfeld, 2006 |
| **POE/PEE** | 预测→观察/探索→解释 | 反直觉现象 | 小学+ | 20-45min | 前概念暴露 | White & Gunstone, 2014 |
| **Design Thinking** | 同理心→定义→构思→原型→测试 | 工程设计/创客 | 小学+ | 90min-多天 | 设计迭代 | IDEO |
| **IBL** | 问题→假设→探究→分析→结论 | 开放科学问题 | 小学+ | 60-180min | 探究过程 | Pedaste et al., 2015 |
| **REACT** | 关联→体验→应用→协作→迁移 | 生活连接型主题 | 小学+ | 45-90min | 知识迁移 | Crawford, 2001 |
| **LIA** | 启动→探究→行动 | 社区/环境项目 | 小学+ | 60-180min | 行动成果 | PrimaryConnections, 2024 |
| **UbD** | 确定目标→确定评估→设计学习 | 逆向设计课程 | 全年龄 | 灵活 | 理解深度 | Wiggins & McTighe, 2005 |
| **GRRF** | 示范→引导→协作→独立 | 技能逐步掌握 | 全年龄 | 灵活 | 技能熟练度 | Fisher & Frey, 2013 |
| **IDM** | 驱动问题→支持问题→形成性任务→总结性任务 | 历史/社会探究 | 初中+ | 数周 | 探究能力 | Grant et al., 2017 |
| **Guided Play** | 自由探索→引导提问→结构化反思→家庭分享 | 低龄儿童（2-7岁） | 学龄前 | 20-45min | 概念理解 | Hirsh-Pasek et al. |

### 框架详解

#### Guided Play（引导式游戏）
基于引导式游戏研究（Hirsh-Pasek et al. 等），**介于自由游戏和直接教学之间**，既保留游戏的趣味性和自主性，又通过适度引导确保学习目标达成。

**理论基础**：
- 皮亚杰前运算阶段（2-7岁）儿童思维自我为中心，依赖感觉和动作
- 活动应侧重感官探索、体验、模仿和游戏化
- 避免逻辑说教推理

**流程**：
1. **自由探索**：儿童自由接触展品/材料，自主探索
2. **引导提问**：家长/教育者通过开放式问题引导注意力（"你发现了什么？""为什么它会这样？"）
3. **结构化反思**：通过简单的问题帮助儿童整理发现（"刚才你看到了什么？""和我们之前玩的有什么不一样？"）
4. **家庭分享**：鼓励家庭成员分享各自的发现

**设计策略**：
- **故事情境化**：将科学探究融入有趣的故事情境（如"小小侦探"破案）
- **任务驱动化**：设计有挑战性但可完成的任务
- **对话支持化**：提供引导性问题卡，避免简单"是什么"类问题，多用"为什么""怎么样""如果是...会怎样"
- **成果可视化**：设计可展示的学习成果（观察记录、创意作品）

**适用场景**：
- 学龄前儿童（2-7岁）科技馆教育活动
- 家庭学习场景
- 需要兼顾趣味性和学习目标的活动

#### POE / PEE（预测-观察-解释）
由 White & Gunstone (2014) 提出，特别适合**反直觉科学现象**。

**流程**：
1. **预测 (Predict)**：展示现象前，让学生预测会发生什么
   - 暴露前概念（包括错误概念）
   - 激活思维，建立期待
2. **观察/探索 (Observe/Explore)**：进行演示或实验
   - 学生仔细观察实际发生的现象
   - 记录观察结果（与预测对比）
3. **解释 (Explain)**：讨论为什么预测和观察不一致
   - 识别并纠正错误概念
   - 建构科学理解

**变体**：
- **P-POE**：先设计实验计划 (Plan)，再预测-观察-解释
- **P-PEE**：先计划 (Plan)，再预测-探索 (Explore)-解释

**适用场景**：
- 反直觉现象（如：重的物体下落更快？）
- 前概念强烈的主题（如：力与运动、电学）
- 短时长互动（20-45分钟）

#### 7E 模型
在 5E 基础上增加了 **Elicit（引出）** 和 **Extend（延伸）** 两个阶段（Eisenkraft, 2003）。

**完整流程**：
1. **Elicit（引出）**：暴露学生已有知识和前概念（比 5E 的 Engage 更聚焦）
2. **Engage（参与）**：激发兴趣，建立连接
3. **Explore（探究）**：动手操作，收集数据
4. **Explain（解释）**：理解原理，建构知识
5. **Elaborate（拓展）**：迁移应用
6. **Extend（延伸）**：连接到更广泛的情境或跨学科主题
7. **Evaluate（评价）**：评估学习成果

**何时选 7E 而非 5E**：
- 需要系统性地诊断和纠正前概念
- 主题有强烈的跨学科连接价值
- 有充足的时间（60-120分钟）

#### REACT（关联-体验-应用-协作-迁移）
强调**真实情境连接**和**知识迁移**。

**流程**：
1. **Relate（关联）**：将新概念与学生已有经验/生活连接
2. **Experience（体验）**：通过动手活动直接体验现象
3. **Apply（应用）**：在新情境中应用所学
4. **Cooperate（协作）**：小组合作解决问题
5. **Transfer（迁移）**：将理解迁移到完全不同的情境

**适用场景**：
- 强调生活应用的主题（如：环保、健康、能源）
- 需要培养知识迁移能力的长期项目

#### LIA（启动-探究-行动）
适合**社区参与型**和**环境行动型**科学教育。

**流程**：
1. **Launch（启动）**：引入真实社区问题
2. **Inquire（探究）**：科学调查和数据收集
3. **Action（行动）**：基于科学证据采取社区行动

**适用场景**：
- 环境科学（如：本地水质调查→社区倡导）
- 公民科学项目
- 需要产生真实社会影响的主题

#### UbD（Understanding by Design，逆向设计）
Wiggins & McTighe (2005) 提出的课程设计框架。

**核心原则**：
1. **确定目标 (Identify Desired Results)**：
   - 大概念 (Big Ideas)
   - 核心问题 (Essential Questions)
   - 学习目标 (Learning Objectives)
2. **确定评估 (Determine Acceptable Evidence)**：
   - 表现性任务 (Performance Tasks)
   - 其他证据 (Quizzes, Observations, etc.)
   - 自评和互评
3. **设计学习 (Plan Learning Experiences)**：
   - 学习活动
   - 教学策略
   - 资源

**何时使用 UbD**：
- 设计完整课程单元（非单次活动）
- 需要确保"评估驱动教学"
- 强调深度理解而非表面知识

#### GRRF（渐进式责任释放框架）
Fisher & Frey (2013) 提出的技能教学框架。

**四个阶段**：
1. **示范 (I Do)**：教师示范，学生观察
2. **引导 (We Do)**：教师引导，学生参与
3. **协作 (You Do Together)**：学生小组合作，教师支持
4. **独立 (You Do Alone)**：学生独立应用

**适用场景**：
- 科学过程技能（测量、观察、记录）
- 实验操作技能
- 数据分析技能

#### IDM（Inquiry Design Model）
Grant, Swan & Lee (2017) 提出的探究设计模型，特别适用于社会研究和SSI。

**核心元素**：
1. **驱动问题 (Compelling Question)**：激发探究的大问题
2. **支持问题 (Supporting Questions)**：分解驱动问题的子问题
3. **形成性任务 (Formative Tasks)**：回答支持问题的活动
4. **来源 (Sources)**：完成任务所需的信息来源
5. **总结性任务 (Summative Task)**：最终产出
6. **知情行动 (Taking Informed Action)**：将学习转化为社会行动

### NGSS 三维学习框架对齐

所有活动设计应参照 NGSS（Next Generation Science Standards）三维学习框架进行对齐检查：

**三维框架**：
1. **Science and Engineering Practices (SEPs)** — 科学和工程实践：
   - 提出问题 / 定义问题
   - 开发和使用模型
   - 设计和实施调查
   - 分析和解释数据
   - 使用数学和计算思维
   - 构建解释 / 设计解决方案
   - 基于证据的论证
   - 获取、评估和交流信息

2. **Crosscutting Concepts (CCCs)** — 跨学科概念：
   - 模式 (Patterns)
   - 因果：机制和解释 (Cause and Effect)
   - 尺度、比例和数量 (Scale, Proportion, and Quantity)
   - 系统和系统模型 (Systems and System Models)
   - 能量和物质：流动、循环和守恒 (Energy and Matter)
   - 结构和功能 (Structure and Function)
   - 稳定性和变化 (Stability and Change)

3. **Disciplinary Core Ideas (DCIs)** — 学科核心概念：
   - 物质科学 (Physical Science)
   - 生命科学 (Life Science)
   - 地球与空间科学 (Earth and Space Science)
   - 工程、技术和科学应用 (Engineering, Technology, and Applications of Science)

**对齐输出格式**：
```markdown
## NGSS 三维学习对齐

| 维度 | 对齐元素 | 活动体现 |
|------|---------|---------|
| **SEP** | 开发和使用模型 | 学生制作水循环模型 |
| **SEP** | 基于证据的论证 | 讨论环节用数据支持观点 |
| **CCC** | 系统和系统模型 | 将水循环理解为一个系统 |
| **CCC** | 能量和物质 | 追踪水的形态变化和能量来源 |
| **DCI** | ESS2.C: 水在地球系统中的角色 | 核心概念贯穿整个活动 |

**性能期望 (Performance Expectation)**：
- 学生能使用模型描述水在地球系统中的循环，包括水以不同形态存在（固态、液态、气态）
```

**Sensemaking 理念**：
NGSS 强调从"学习关于 (Learning About)"转向"弄清楚 (Figuring Out)"。
- 活动应围绕"现象 (Phenomena)"展开，而非围绕"知识点"
- 学生通过实践、概念和跨学科视角的整合来"弄清楚"现象
- 评估也应是三维的，同时考查实践、概念和内容

### 框架切换说明

在输出中必须明确说明：
> **本活动采用 [框架名称] 框架，因为 [理由：主题特征、目标人群、时间约束、场景需求等]。**

### 混合使用

某些复杂主题可混合框架（SSI 不适用，因涉及伦理/争议主题时直接终止）：
- **PBL** 项目中嵌入 **5E** 阶段来深入理解关键概念
- **Design Thinking** 中嵌入 **IBL** 阶段进行科学实验验证假设
- **Guided Play** 与 **4-Stage** 结合：低龄儿童先用引导式游戏自由探索，再进入结构化讨论

## 形成性评估检查点（内部自动修正机制 — 不直接输出）

每个学习目标必须有至少一个形成性评估检查点，作为系统**内部自动修正机制**使用。检查点嵌入在活动流程的逻辑中，但不在最终输出中呈现为独立的评估表格或检查点清单。系统在生成方案时，根据检查点逻辑自动验证每个阶段是否达成学习目标，若发现不足则自动修正方案后输出。

### 内部设计原则

1. **对齐性**：每个检查点对应一个具体学习目标（内部验证）
2. **时机性**：在"关键理解节点"设置自动验证（内部逻辑）
3. **多样性**：使用多种评估方式（观察、提问、作品、讨论、自评）作为内部修正依据
4. **即时修正**：检查点发现不足时，系统立即调整对应阶段的活动设计

### 检查点类型（内部使用）

| 类型 | 适用场景 | 内部修正动作示例 |
|------|---------|----------------|
| **观察检查点** | 动手操作环节 | 若缺少操作行为观察 → 补充"操作引导卡" |
| **提问检查点** | 讨论环节 | 若缺少关键追问 → 插入预设引导问题 |
| **作品检查点** | 制作/实验环节 | 若缺少作品评价标准 → 补充成功指标描述 |
| **讨论检查点** | 解释/反思环节 | 若缺少思维可见化工具 → 补充思维导图/概念图 |
| **自评检查点** | 任何环节 | 若缺少自我反思机会 → 插入简单自评提示 |

### 内部修正流程（不在输出中展示）

系统按以下逻辑自动执行，用户不感知此过程：

```
阶段X：[阶段名称] (X分钟)

【内部检查点 #X】（对应学习目标：LX）
- 检查方式：观察/提问/作品/讨论/自评
- 检查内容：具体观察什么、问什么问题、评价什么标准
- 成功指标：什么样的反应/作品/回答表示目标达成？
- 未达标应对（自动修正）：
  - 简化策略：若认知负荷过高 → 自动拆分任务步骤
  - 补充策略：若缺少关键概念 → 自动插入解释环节
  - 延伸策略：若挑战不足 → 自动增加开放性问题
```

### 示例（内部修正逻辑，不输出）

```
【内部检查点 #1】（对应学习目标：描述光的折射现象）
- 检查方式：提问 + 观察
- 检查内容：
  - 提问："加水前后硬币的位置变化了吗？硬币真的消失了吗？"
  - 观察：参与者是否用手指向水中的"硬币位置"
- 成功指标：
  - 能说出"硬币还在原地，只是看起来变了位置"
  - 能用手指出硬币的实际位置
- 未达标自动修正：
  - 简化：自动在方案中增加"激光笔+水展示光路"的备选操作
  - 补充：自动增加"从水面正上方观察"的提示
```

> **重要**：上述检查点逻辑仅作为系统内部自动修正依据，**不在最终活动方案中输出**。用户看到的活动方案是经过评估-修正循环优化后的版本，但不包含评估表格或检查点清单。

## UDL 差异化设计（Universal Design for Learning）× SDT 动机设计

每个活动方案必须包含 UDL 差异化设计，确保不同能力、背景、学习风格的参与者都能有效学习。**同时，UDL 必须与 SDT（自我决定理论）动机设计整合**，让"多元参与"不只是形式上的选择，而是有心理需求支撑。

### UDL × SDT 整合框架

```
UDL 三原则              SDT 三要素              整合设计问题
─────────────────────────────────────────────────────────────────
多元表征    →  胜任感   →  "我能理解，因为信息以适合我的方式呈现"
多元表达    →  自主性   →  "我能选择如何展示我的学习"
多元参与    →  归属感   →  "我被需要，我的贡献被看到"
```

### UDL 三原则在活动中的体现

#### 1. 多元表征（Multiple Means of Representation）× 胜任感
同一概念用多种方式呈现，让每个学习者都能建立理解：
- **视觉**：图示、动画、实物演示、思维导图
- **听觉**：讲解、讨论、播客、音频描述
- **动觉**：动手实验、模型操作、角色扮演
- **文字**：阅读材料、标签、步骤清单、概念卡片
- **数字**：模拟软件、互动APP、AR/VR体验

**活动方案中必须标注**：每个核心概念提供 ≥2 种表征方式。

**胜任感保障**：
- 不是降低难度，而是在最近发展区内成功
- 明确成功标准（"满分答案长什么样，一开始就知道"）
- 即时反馈（做对了立刻知道，做错了立刻知道错在哪）
- 进步可视化（让学习者看到"上次我不会，这次我会了"）

#### 2. 多元表达（Multiple Means of Action & Expression）× 自主性
参与者用多种方式展示学习成果：
- **说**：口头解释、小组讨论、辩论
- **写**：填写记录表、写实验报告、画思维导图
- **做**：制作模型、完成实验、设计产品
- **演**：角色扮演、情景模拟、科普剧表演
- **创**：拍摄视频、制作海报、编写故事

**活动方案中必须标注**：每个学习目标提供 ≥2 种表达选项。

**自主性保障**：
- 任务选择："你可以选择A、B、C三个任务之一"
- 方法选择："你可以用文字/图表/展示来解释"
- 顺序选择："先做基础练习还是先尝试挑战题？"
- 小组选择："自己组队还是老师分组？"
- ⚠️ 选择必须都通往同一个教学目标，不能为了选择而牺牲目标

#### 3. 多元参与（Multiple Means of Engagement）× 归属感
提供多种动机和参与方式：
- **兴趣选择**：提供2-3个并行探索路径（如"选A实验或B实验"）
- **难度分层**：基础版/进阶版/挑战版，参与者自选
- **协作模式**：个人、配对、小组、全班轮换
- **真实连接**：与个人生活经验、社会议题、职业场景连接

**活动方案中必须标注**：每个阶段提供 ≥1 种参与方式选择。

**归属感保障**：
- 每个人有不可替代的角色
- 展示环节确保每个人被看到
- 同伴互评：不是挑毛病，而是"我发现你一个优点"
- 集体建构：全班合作完成一个最终作品（都有署名）

### SDT 动机设计的反直觉发现

> **发现1：动机是能力的副产品**
> 不是有了兴趣才去学习，而是学会了才有兴趣。
> 真实的因果链：能力（小成功）→ 胜任感 → 兴趣 → 更多学习
> 
> **启示**：不要先追求"有趣"，先让学习者体验"我能行"

> **发现2：有效失败的价值**
> 在教正式解法之前，让学习者先尝试解决。
> 短期增加认知负荷，长期提升理解深度。
> 
> **启示**：在探究课中保留适度的"挣扎空间"，不要急于给出答案

### UDL × SDT 检查清单

- [ ] 每个核心概念是否有 ≥2 种表征方式？（多元表征）
- [ ] 每个学习目标是否有 ≥2 种表达选项？（多元表达）
- [ ] 参与者是否有选择路径/难度/角色的机会？（自主性）
- [ ] 成功标准是否明确且可达？（胜任感）
- [ ] 每个人是否有不可替代的角色且被看到？（归属感）
- [ ] 是否有为视觉/听觉/阅读障碍者的替代方案？
- [ ] 时间压力是否可调节（快节奏 vs 慢节奏版本）？
- [ ] 是否有为注意力易分散者的结构化支持？

## STEM/STEAM 整合设计（STEM/STEAM Integration）

当主题适合跨学科整合时，设计有意义的STEM/STEAM连接。

### 整合原则

1. **不是硬凑**：整合必须是概念上自然的，不是"为了STEAM而STEAM"
2. **核心驱动**：以一个学科的问题为核心，其他学科提供工具或视角
3. **真实连接**：连接到真实世界问题或职业场景

### 整合框架

```
主题：[核心科学概念]

科学（S）：[核心概念，如光的折射]
  ↓ 问题：如何设计一个更好的潜水面罩？
技术（T）：[工具/技术，如光学设计软件、3D打印]
  ↓ 应用：用光学模拟优化面罩形状
工程（E）：[设计/制作，如设计潜水面罩原型]
  ↓ 输出：制作并测试原型
数学（M）：[计算/分析，如角度计算、折射率公式]
  ↓ 分析：计算最优曲率
艺术（A）：[可选，如美学设计、用户体验]
  ↓ 提升：设计舒适、美观的面罩

整合问题：如何设计一个既科学有效又美观舒适的潜水面罩？
```

### 输出格式

在"背景知识"或"活动摘要"中标注：

```markdown
## STEM/STEAM 整合映射

| 学科 | 在本活动中的角色 | 具体体现 | 活动环节 |
|------|---------------|---------|---------|
| 科学 | 核心概念 | 光的折射原理 | 探索阶段 |
| 技术 | 工具支持 | 激光笔、光学模拟 | 探索+应用阶段 |
| 工程 | 设计挑战 | 设计潜水面罩 | 应用阶段 |
| 数学 | 计算分析 | 折射角度计算 | 讨论阶段 |
| 艺术 | 美学提升 | 面罩外观设计 | 应用阶段（可选） |

**整合问题**：...
```

## 社会性科学议题（SSI）终止条件

当主题涉及科学争议、伦理决策或社会政策时，**直接终止方案生成**，不输出活动方案。

### 终止触发条件

以下任一条件触发时，立即停止方案生成：
- 主题涉及伦理争议（如基因编辑伦理、AI 伦理、克隆技术）
- 主题涉及科学政策/社会决策（如气候变化政策、能源政策、疫苗政策）
- 主题涉及具有争议性的社会性科学议题（如转基因食品、核能利用、安乐死）
- 用户输入明确要求"讨论伦理""辩论政策""社会争议"等关键词

### 终止响应方式

当检测到 SSI 主题时，向用户返回：
> 该主题涉及科学争议、伦理决策或社会政策，属于社会性科学议题（SSI）范畴。基于当前内容安全策略，**不宜生成此类活动方案**。建议用户选择非争议性的科学概念或教育主题重新输入。

### 与"科学前沿"的区别

以下情况**不属于** SSI 终止条件，可正常生成方案：
- 主题涉及科学前沿概念（如量子计算、基因编辑技术原理、暗物质）——这些是科学事实层面的知识，不涉及伦理争议
- 主题涉及科学史（如科学革命的历程）——这是历史事实，不涉及当前社会争议
- 主题涉及已达成共识的科学结论（如进化论、气候变化基本事实）——可作为知识传递型活动设计

> **关键判断**：是否要求参与者在活动中**对争议性议题做出价值判断或立场选择**？如果是，则触发终止；如果仅介绍科学原理/历史/事实，则正常生成。

## 文献检索与引用验证（CoE 零误引架构）

科学教育活动涉及的科学原理必须准确。**本技能采用 ScientistOne 的 Chain-of-Evidence (CoE) 零误引架构**，将引用验证从"事后检查"提升为系统设计的架构属性，确保背景知识和参考资料的可靠性。

> **核心原则**："Every claim must be traceable, through a recorded chain of supporting claims and evidence, to a grounding source."

### 何时触发文献检索

在以下情况必须执行文献检索：
- 主题涉及科学前沿（如量子计算、基因编辑、暗物质）
- 主题存在科学争议（如气候变化细节、进化论教育）
- 需要精确数据（如天文数据、化学常数、生物统计）
- 用户明确要求"基于最新研究"或"引用文献"
- 背景知识中的核心概念不确定或存在多个版本

### 检索工具与流程

#### 英文文献检索

1. **PI 引用图构建（优先执行）**
   - 从 2-4 篇种子论文（如经典科普论文、教育研究综述）出发
   - 通过 Semantic Scholar API 遍历引文关系（2跳深度）
   - 生成候选引文图，LLM 评分筛选精英池（Core + Adjacent）
   - **关键保障**：所有引用必须来自 API 检索结果，而非模型记忆

2. **arXiv 预印本检索**（适合物理、数学、CS、生物前沿）
   ```
   kimi_datasource_get_desc(data_source_name="arxiv")
   kimi_datasource_call(data_source_name="arxiv", api_name="search", params={"query": "[主题] education OR outreach OR popular science", "max_results": 10})
   ```
   - 提取：标题、作者、摘要、PDF链接、发表日期
   - 筛选：优先选择与教育/科普相关的论文
   - **记录来源元数据**：API 名称、查询时间、返回记录、缓存路径

3. **Google Scholar 检索**（适合高引用经典文献）
   ```
   kimi_datasource_get_desc(data_source_name="scholar")
   kimi_datasource_call(data_source_name="scholar", api_name="search", params={"query": "[主题] science education", "num_results": 10})
   ```
   - 提取：标题、作者、引用数、年份、期刊、链接
   - 筛选：优先选择高引用、教育类期刊

4. **网页搜索补充**（快速获取综述和科普）
   - `kimi_search` 搜索 `[主题] review survey science education`
   - 提取权威来源（NASA、CERN、Nature Education、Scientific American 等）

#### 中文文献检索

1. **知网高级检索**（适合中文教育类、科普类期刊）
   - 按 `cnki-advanced-search` 技能流程执行：
     - 打开 https://kns.cnki.net/kns8s/AdvSearch
     - 选择"学术期刊" → 可勾选"北大核心"（教育类）或"CSSCI"
     - 输入关键词：主题词 + 教育/科普/教学（如 `光的折射 + 科普教育`）
     - 按被引量排序 → 50条/页 → 摘要视图
     - 导出"查新（引文格式）"Word文件
   - 提取题录和摘要，用于验证科学概念的准确性

2. **网页搜索补充**
   - `kimi_search` 搜索 `[主题] 科普教育 研究`
   - 提取中科院、中国科协等权威来源

### CoE 文献验证流程（六步验证法：A→B→C→D→E→F）

对检索到的每篇关键文献，执行 CoE 六步验证法：

#### 步骤 A：PI 引用图构建（Citation Graph）
- 从种子论文出发，通过 Semantic Scholar API 遍历引文关系（2跳深度）
- 生成候选引文图，LLM 评分筛选精英池（Core + Adjacent）
- 确保引用来源在**引用图构建阶段**就已确定，而非写作阶段临时编造

#### 步骤 B：Semantic Scholar API 快速筛查（含来源元数据）
- 批量查询作者+标题组合，同时获取 `abstract` 字段和 `paperId`
- 记录来源元数据：API 名称、查询时间、返回记录、缓存路径
- 若返回 `S2_VERIFIED` → 进入步骤 C 核对细节
- 若 `S2_NOT_FOUND` → 进入步骤 D WebSearch 深度验证
- 若 `API_UNAVAILABLE` → 直接进入步骤 D

#### 步骤 C：书目细节交叉核对 + Ground 检查
- 确认作者、标题、年份、期刊/会议名**全部一致**
- 检查 DOI 是否存在且可解析
- 检查页码/卷号是否与出版记录匹配
- 核对摘要是否与出版商页面一致
- **执行 Ground 检查**：验证论文确实存在，DOI 指向正确

#### 步骤 D：多 API 交叉验证（I3 审计）
- 当单一 API 不可用时，同时查询至少 **2 个独立 API**：
  - Semantic Scholar + arXiv（英文论文）
  - Semantic Scholar + CrossRef（通用）
  - arXiv + Google Scholar（预印本）
- 若多个 API 结果不一致 → 标记 `[API结果不一致]`，进一步用 `kimi_fetch` 直访出版商页面核实
- 记录每个 API 的返回结果，形成审计线索

#### 步骤 E：LLM 摘要蕴涵验证（Abstract Entailment）
- 获取摘要原文后，将摘要与活动中的引用声明输入 LLM
- 提问："这篇论文的摘要是否支持以下声明？"
- LLM 判断：`SUPPORT` / `PARTIAL_SUPPORT` / `CONTRADICT` / `UNRELATED`
- 处理：
  - `SUPPORT` → 保留引用
  - `PARTIAL_SUPPORT` → 修改声明以匹配论文内容
  - `CONTRADICT` 或 `UNRELATED` → 删除引用，寻找替代

#### 步骤 F：时间线一致性验证 + 上游库污染检测
- 检查论文发表年份是否早于后续引用它的论文
- 检查技术出现时间是否早于声称的应用落地时间
- 若发现时间悖论 → 标记为 `[时间线待核实]`
- **上游库污染检测**：
  - 检查同一引用是否在多个不相关主题中重复出现 → 触发污染警报
  - 检查引用来源是否为某个框架的内置引用列表 → 必须独立 API 验证
  - 若疑似污染 → 标记 `[上游库污染嫌疑]`，必须独立 API 验证

### 五类幻觉检测清单（强制扫描）

每条文献引用和史实陈述，必须主动排查以下五类模式：

| 类型 | 代码 | 说明 | 检测策略 |
|------|------|------|----------|
| **完全伪造** | TF | 整篇论文或关键事件不存在 | API 查询 + WebSearch 标题+作者，无结果 = TF |
| **真实作者伪作** | PAC | 真实学者被安上不存在的论文 | 通过 Google Scholar / Semantic Scholar 核对该作者的发表列表 |
| **信息不全** | IH | 缺少 DOI、卷号、页码或具体年份 | 标记为 `[待验证]`，需额外搜索补全 |
| **拼接伪造** | PH | 从 2-3 篇真实文献拼接出假引用 | 交叉核对：标题、作者、期刊、年份必须**全部匹配同一来源** |
| **微妙扭曲** | SH | 年份、作者缩写、期刊轻微错误 | 逐字段对比出版页面或数据库记录 |

**复合欺骗模式（特别关注）**：
- **会议/期刊利用**：真实期刊名 + 假论文详情（常见）
- **时间掩码**：正确作者 + 正确主题 + 错误年份
- **DOI 误导**：伪造 DOI 指向不相关的真实论文
- **上游库污染**：hand-curated 的框架内置虚假引用（如 AutoResearchClaw 的 YAML 库）

### 反记忆幻觉策略（CoE 增强版）

> **核心风险**：AI 的"记忆"可能将训练数据中的常见搭配误认为真实引用。不能凭感觉判断引用是否真实。

**强制规则**：
- **必须 API 检索**：不能因"这篇论文很有名"就跳过 API 验证
- **模型记忆不信任**：即使 LLM 能"背诵"论文标题和作者，也必须通过 API 验证
- **交叉验证**：同一关键事件通过至少 2 个独立 API 来源确认
- **怀疑默认**：对任何未经 API 检索的引用保持怀疑，直到验证通过
- **特别警惕**：经典/里程碑论文最容易被伪造——因为"所有人都知道有这篇论文"，所以幻觉更容易通过直觉检查
- **内联证据标签**：写作阶段每个引用声明必须携带 `{source}` 标签，无标签即视为未验证
- **I3 审计**：输出前执行多 API 交叉审计，拦截模型记忆幻觉和上游库污染

### 内联证据标签（Inline Evidence Tags）

在科学教育活动方案的背景知识和参考资料写作过程中，每个引用声明必须携带**内联证据标签**：

| 标签类型 | 格式 | 说明 |
|---------|------|------|
| 引用声明 | `{source: "citation_key"}` | 绑定到引用池中的具体条目 |
| 网络来源 | `{source: "web_url"}` | 绑定到具体网页 URL |
| 数据声明 | `{source: "dataset_id"}` | 绑定到数据集或统计来源 |
| 推断声明 | `{source: "inference"}` | 明确标记为基于已有证据的推断 |

> **铁律**：无来源声明（`{source}` 缺失）自动标记为 `[待验证]`，不得作为已验证事实输出。

### 文献引用格式与 CoE 审计线索

在"参考资料"章节中，使用以下格式：

**英文文献**：
```
作者. (年份). *Title*. Journal/Conference. [DOI/链接]
- 验证状态：✅ VERIFIED / ⚠️ 待确认 / ❌ NOT_FOUND（已删除）
- 验证方法：Semantic Scholar + arXiv + LLM摘要蕴涵
- 摘要要点：[1-2句话概括与教育活动的关联]
- 来源元数据：API查询时间、缓存路径
```

**中文文献**：
```
作者. (年份). 《标题》. 期刊名, 卷(期), 页码.
- 验证状态：✅ VERIFIED / ⚠️ 待确认 / ❌ NOT_FOUND（已删除）
- 验证方法：知网导出 + CrossRef
- 摘要要点：[1-2句话概括]
```

### CoE 验证结果记录（Audit Trail）

在"参考资料"章节之后，追加 CoE 审计记录：

```markdown
## 验证记录（CoE Audit Trail）

| 验证项 | 状态 | 验证方法 | 备注 |
|--------|------|----------|------|
| Smith et al. (2020) | ✅ VERIFIED | Semantic Scholar + arXiv + LLM摘要蕴涵 | DOI: 10.xxxx/xxxxx |
| Jones (2018) 教学效果 | ⚠️ 部分验证 | WebSearch 2次 + API 确认 | 来源A说2018，来源B说2019 |
| Zhang (2022) 关键突破 | ❌ NOT_FOUND | SS/arXiv/CrossRef 均无结果 | **幻觉引用，已删除** |

### 幻觉引用拦截统计

| 类型 | 拦截数量 | 处理方式 |
|------|---------|---------|
| 完全伪造（TF） | X | 已删除 |
| 真实作者伪作（PAC） | X | 已删除 |
| 拼接伪造（PH） | X | 已删除/替换 |
| 微妙扭曲（SH） | X | 已修正 |
| 上游库污染 | X | 已替换为 API 验证版本 |
| **总计** | **X** | **零误引输出** |
```

### 引用规范（零误引标准）

- 每个活动方案至少引用 **2-3 篇**经过 CoE 验证的文献
- 优先引用：教育类期刊论文、权威科普来源、博物馆教育研究
- 不引用：未验证的博客、社交媒体、AI生成内容（除非已人工核实）
- 前沿概念：明确标注"科学界正在研究中"，并介绍不同假说
- **所有引用必须通过 API 检索验证**，不接受模型记忆生成的引用
- **所有删除操作必须在验证记录中注明**，确保审计线索完整

## Example Usage Patterns

**Pattern 1: Concept to Activity**
> User: "设计一个关于光的折射的科普活动，适合小学生"
> > Process: Concept classification → Knowledge deconstruction → Activity generation

**Pattern 2: Exhibit to Activity**
> User: "我们馆有一个静电发生器展品，想设计配套教育活动"
> > Process: Exhibit analysis → Principle extraction → Interactive design

**Pattern 3: Requirements-Driven**
> User: "需要45分钟、20人、8-10岁、材料成本低于50元的物理活动"
> > Process: Constraint matching → Suitable concept selection → Plan generation

## Reference Materials

Load these as needed during the workflow:

- [references/knowledge-deconstruction.md](references/knowledge-deconstruction.md) — Knowledge deconstruction methodology (5 stages)
- [references/output-schema.md](references/output-schema.md) — Complete output format specification
- [references/error-correction.md](references/error-correction.md) — Multi-layer error correction mechanisms
- [references/accuracy-assurance.md](references/accuracy-assurance.md) — Scientific accuracy verification
- [references/example-library.md](references/example-library.md) — Example activities by domain
- [references/icap-framework.md](references/icap-framework.md) — ICAP cognitive engagement framework
- [references/metacognition-design.md](references/metacognition-design.md) — Metacognition embedding strategies
- [references/sdt-motivation.md](references/sdt-motivation.md) — Self-Determination Theory for motivation design
- [references/teaching-strategies.md](references/teaching-strategies.md) — Teaching strategy tool mapping
- [references/edge-cases.md](references/edge-cases.md) — Edge cases and fallback strategies

## Safety Guidelines

Always include safety considerations:

| Risk Level | Examples | Required Actions |
|-----------|----------|------------------|
| **High** | Chemicals, heat, electricity | Detailed safety protocol + emergency procedures |
| **Medium** | Scissors, small parts, outdoor | Safety warnings + supervision guidelines |
| **Low** | Paper, clay, discussion | General safety reminders |

**Never compromise:**
- Age-inappropriate content
- Unverified scientific claims
- Missing safety warnings for risky activities
- Unrealistic time or material estimates

## Iteration Support

If user requests modifications:

1. Identify which aspect needs change (content, format, difficulty, duration, etc.)
2. Reference the relevant deconstruction stage or output section
3. Apply targeted modification
4. Re-run quality assurance checks
5. Present updated plan with change summary
