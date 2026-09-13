# 知识解构流程 (Knowledge Deconstruction)

本文档定义了从科学概念/展品到教育活动方案的完整解构流程，仿照 OpenMAIC 的实现方法。

## 解构阶段

### Stage 1: 核心概念提取 (Core Concept Extraction)

从输入中提取并定义：

1. **主题名称** (Topic Name)
   - 科学概念或展品的正式名称
   - 常见别名/俗称

2. **核心科学原理** (Core Scientific Principles)
   - 涉及的学科领域（物理/化学/生物/天文/地理等）
   - 关键科学定律/理论
   - 核心概念定义（用 1-2 句话解释给外行人）

3. **前置知识** (Prerequisites)
   - 学习者需要具备的基础知识
   - 年龄/年级适配建议

4. **学习目标** (Learning Objectives)
   - 知识目标：理解什么概念
   - 技能目标：掌握什么操作/方法
   - 情感目标：培养什么态度/兴趣

5. **文献检索与知识来源验证** (Literature Search & Verification)
   - 对涉及科学前沿、争议概念或需要精确数据的主题，执行文献检索：
     - 英文文献：`kimi_datasource_get_desc("arxiv")` → `kimi_datasource_call` 搜索相关论文
     - 中文文献：按 `cnki-advanced-search` 流程，在知网检索教育类/科普类期刊
     - 通用：`kimi_search` 搜索权威科普来源（NASA、CERN、中科院等）
   - 提取关键论文的摘要，验证核心概念的准确性
   - 标注文献来源可信度（Tier 1/2/3，见 accuracy-assurance.md）
   - 将验证后的文献纳入活动方案的"参考资料"章节

6. **教学法框架选择** (Pedagogical Framework Selection)
   - 根据主题特征自动选择最适合的教学框架：
     - 是否涉及伦理争议？→ SSI
     - 是否涉及工程设计/制作？→ Design Thinking
     - 是否需要解决真实世界问题？→ PBL
     - 是否强调科学探究过程？→ IBL / 5E
     - 否则 → 4-Stage（博物馆互动）
   - 在输出中明确说明选择理由

### Stage 2: 知识点拆解 (Knowledge Breakdown)

将核心概念拆解为教学模块：

```
知识点层级结构：
├── 核心概念
│   ├── 子概念 A
│   │   ├── 微观机制
│   │   └── 宏观表现
│   ├── 子概念 B
│   └── 关联概念 C
```

每个知识点模块需包含：
- **概念名称**：简洁明确的标题
- **一句话解释**：给孩子的通俗解释
- **生活中的例子**：2-3 个贴近生活的实例
- **常见误解**：学习者容易产生的错误认知
- **演示方式**：如何直观展示（实验/模型/视频/实物）

### Stage 3: 教学序列设计 (Instructional Sequencing)

按认知难度排序知识点，设计学习路径：

1. **引入环节** (Hook)
   - 引发好奇心的开场（问题/现象/故事）
   - 与日常生活的连接点

2. **探索环节** (Exploration)
   - 动手实验或观察活动
   - 引导发现而非直接告知

3. **解释环节** (Explanation)
   - 概念讲解的时机和方式
   - 使用类比和可视化工具

4. **应用环节** (Application)
   - 延伸思考和拓展活动
   - 连接更广泛的科学背景

### Stage 4: 活动形式匹配 (Activity Matching)

为每个知识点匹配适合的活动形式：

| 活动形式 | 适用场景 | 示例 |
|---------|---------|------|
| 动手实验 | 可观察的物理/化学现象 | 制作简易电路 |
| 观察记录 | 生物/天文/地理现象 | 植物生长日记 |
| 模型制作 | 抽象概念或微观结构 | DNA 双螺旋模型 |
| 角色扮演 | 过程模拟或历史情境 | 扮演水循环中的水滴 |
| 游戏竞赛 | 规则性知识或反应训练 | 元素周期表接龙 |
| 讨论辩论 | 争议性话题或伦理问题 | 基因编辑利弊讨论 |
| 参观考察 | 大型展品或实地场景 | 博物馆/自然保护区 |

### Stage 5: 难度分层与 UDL 差异化 (Differentiation & UDL)

为不同年龄段/基础/能力的学习者设计变体，遵循 UDL (Universal Design for Learning) 三原则：

**基础版 (Basic)**：观察现象，了解概念
- 更直观的演示
- 更简单的材料
- 更短的步骤
- 更多引导

**进阶版 (Advanced)**：理解原理，解释原因
- 需要自主推理
- 引入变量控制
- 数据分析要求
- 小组讨论深化

**挑战版 (Challenge)**：设计实验，解决新问题
- 开放性问题
- 工程设计挑战
- 跨学科连接
- 真实世界应用

**UDL 三原则在活动设计中的体现**：

1. **多元表征 (Multiple Means of Representation)**
   - 每个核心概念提供 ≥2 种表征方式：
     - 视觉：图示、动画、实物演示
     - 听觉：讲解、讨论、音频
     - 动觉：动手操作、模型
     - 文字：阅读材料、标签
   - 在知识树中标注每个知识点的"推荐表征方式"

2. **多元表达 (Multiple Means of Action & Expression)**
   - 每个学习目标提供 ≥2 种表达选项：
     - 说：口头解释、讨论
     - 写：记录表、实验报告
     - 做：模型、实验、产品
     - 演：角色扮演、情景模拟
     - 创：视频、海报、故事

3. **多元参与 (Multiple Means of Engagement)**
   - 提供多种动机和参与方式：
     - 兴趣选择：2-3个并行探索路径
     - 难度分层：基础/进阶/挑战自选
     - 协作模式：个人/配对/小组/全班
     - 真实连接：个人生活、社会议题、职业场景

4. **ICAP 认知参与层次评估 (ICAP Assessment)**
   - 为每个活动阶段分配目标 ICAP 档位（P/A/C/I）
   - 设计升档策略，确保整体趋势上升
   - 标注关键升档节点（如从操作到预测+解释）

5. **元认知嵌入计划 (Metacognition Plan)**
   - 活动前：预测与目标设定
   - 活动中：监控与自我提问
   - 活动后：反思与调整
   - 替换低认知活动为 metacognitive equivalents

6. **动机设计（SDT）(Motivation Design)**
   - 自主性：提供有意义的选择（任务/方法/顺序/角色）
   - 胜任感：明确成功标准 + 即时反馈 + 进步可视化
   - 归属感：不可替代角色 + 互评机制 + 集体作品

## 解构输出格式

解构完成后，生成结构化的 JSON 格式：

```json
{
  "topic": {
    "name": "主题名称",
    "aliases": ["别名1", "别名2"],
    "discipline": "所属学科",
    "prerequisites": ["前置知识1", "前置知识2"],
    "target_age": "8-12岁"
  },
  "core_principles": [
    {
      "name": "原理名称",
      "explanation": "通俗解释",
      "prerequisites": ["依赖知识点"]
    }
  ],
  "knowledge_tree": [
    {
      "id": "node_1",
      "name": "知识点名称",
      "level": 1,
      "parent_id": null,
      "explanation": "儿童友好解释",
      "real_world_examples": ["例子1", "例子2"],
      "misconceptions": ["常见误解"],
      "demonstration_method": "演示方式"
    }
  ],
  "learning_sequence": [
    {
      "stage": "hook",
      "knowledge_nodes": ["node_1"],
      "suggested_duration": "10分钟",
      "activity_type": "提问/演示"
    }
  ],
  "differentiation": {
    "basic": {...},
    "advanced": {...},
    "challenge": {...}
  }
}
```
