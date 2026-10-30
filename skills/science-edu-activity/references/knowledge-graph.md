# AISTEC 知识图谱集成指南

本文件说明 science-edu-activity 技能如何与 AISTEC Knowledge Graph 集成，实现知识点级别的精准活动设计。

**数据模型 Schema 1.1（向后兼容扩展）**：本版集成指南借鉴 GitHub 项目 [xiaoyang111222/cn-math-taxonomy](https://github.com/xiaoyang111222/cn-math-taxonomy)（中小学知识图谱 + 自适应前置诊断，对齐 2022 版义务教育课标）的成熟实践，为知识节点增加可观测掌握判据、守门诊断题、课标对齐置信度等字段。所有新增字段均为可选，与 Schema 1.0 数据完全兼容。

## 集成架构

```
用户输入 → 概念识别 → 知识图谱查询 → 前置诊断 → 活动设计
                ↑                            ↓
         AISTEC Knowledge Graph ← 学习路径生成
                                      ↓
                            诊断回溯（答错沿先修边下探，见第 4 节）
```

## 1. 知识点节点数据模型

### 1.1 字段总表

**必需字段**（同 Schema 1.0）：

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | string | 唯一标识符，格式 `{学科代码}-{主题代码}-{序号}` |
| `name` | string | 中文名称 |
| `subject` | string | 所属学科 |
| `grade` | string | 目标学段，如：小学三年级/初中八年级/高中一年级 |

**新增字段**（Schema 1.1，全部可选）：

| 字段 | 类型 | 说明 |
|------|------|------|
| `type` | enum | `conceptual`（概念性：理解"是什么/为什么"）/ `procedural`（程序性：掌握"怎么做"）。决定诊断题的提问方式：概念性用解释/辨析题，程序性用操作/计算题 |
| `semester` | string | 学期：`上` / `下` |
| `chapter` | string | 教材锚定，格式 `{册} 第{单元序号} {单元名}`，如 `八年级下册 第8章 运动和力`。标注教材版本时写作 `人教版·八年级下册 第8章` |
| `mastery_criteria` | array<string> | 2–4 条**可观测**掌握判据，用"能做 X"句式，不用"理解/掌握"等不可测词。判据同时是诊断题的评分依据 |
| `diagnostic_question` | object | 守门诊断题，见 1.3 |
| `standards` | array<object> | 课标对齐，见第 5 节 |
| `root_reason` | string | 仅根节点（无先修边）填写：说明为什么它是图的起点 |
| `math_links` | array<object> | 本概念**用到的数学工具**（借鉴 cn-math-taxonomy 的 `mathLinks` 设计）：`{id, name, usage}`。是"用法引用"而非先修边——科学图不因数学欠账而阻断诊断，但活动设计时可据此预判数学认知负荷 |
| `elective` | bool | 选学内容标记。`true` 的节点不进入诊断回溯链（借鉴其对教材选学内容"不建诊断点"的处理） |

**Schema 1.0 已有字段继续有效**：`name_en` / `domain` / `description` / `prerequisites` / `postrequisites` / `key_concepts` / `misconceptions`（1.2 升级）/ `cognitive_level` / `activity_suggestions` / `verification` / `interdisciplinary` / `exhibits`。

### 1.2 misconception 结构升级

Schema 1.1 将误解条目扩展为五元组（前三项同 1.0）：

```yaml
misconceptions:
  - statement: "速度大的物体惯性大"        # 误解表述（学习者原话风格）
    correction: "惯性只与质量有关，与速度无关"
    source: "Clement, 1982"
    prevalence: high                      # 新增：very_high / high / medium / low，决定干预优先级
    distractor: "一样难停，因为速度越大惯性越大"   # 新增：由本误解派生的干扰项（见 6.2）
    targeted_activity: |                   # 新增：针对性微活动，供 POE 预测环节等活动直接取用
      POE：两辆质量相同的小车以不同速度运动，
      同时刹停，哪辆更难停？为什么？
```

### 1.3 守门诊断题（diagnostic_question）

每个知识节点自带 1 道守门题，答错即触发回溯（见第 4 节）：

```yaml
diagnostic_question:
  question: "3 的后面一个数是几？"          # 题干，答案必须确定、无歧义
  answer: "4"                            # 标准答案（简答/选择通用）
  acceptable_answers: ["四", "4个"]        # 可选：可接受的其他表述
  criteria_map: ["能按顺序数出 1 到 5"]     # 可选：本题考察 mastery_criteria 中的哪几条
```

设计原则：一节点一题、答案唯一可判定、考察最核心的一条 mastery_criteria、优先选择能暴露已知误解的设问角度。

### 1.4 完整节点示例（Schema 1.1）

```yaml
id: PHYS-NEWTON-001
name: 牛顿第一定律
subject: 物理
domain: 力学
type: conceptual
grade: 初中八年级
semester: 下
chapter: 人教版·八年级下册 第8章 运动和力

description: |
  一切物体在没有受到力的作用时，总保持静止状态或匀速直线运动状态。

mastery_criteria:                        # 可观测判据
  - "能复述牛顿第一定律的内容"
  - "能说出惯性的定义，并指出惯性只与质量有关"
  - "能用惯性解释生活中的 2 个以上实例"

diagnostic_question:
  question: "汽车急刹车时，乘客为什么会向前倾？"
  answer: "乘客由于惯性保持原来的运动状态"
  acceptable_answers: ["惯性"]

math_links:                              # 用法引用，不是先修边
  - id: MATH-RATIO-001
    name: 速度的比值表示
    usage: 理解匀速直线运动中速度不变的含义

standards:
  - id: cs-2022-phy:8.MO.03
    confidence: exact

misconceptions:
  - statement: "速度大的物体惯性大"
    correction: "惯性只与质量有关，与速度无关"
    prevalence: high
    distractor: "因为速度越大惯性越大"
    targeted_activity: "POE：两辆质量相同的小车以不同速度运动，同时刹停，哪辆更难停？"

root_reason: 小学科学已有运动与力的经验性认识，初中首次以定律形式建立力与运动的关系。
```

## 2. 边语义与建边规则

### 2.1 边类型（Schema 1.1 细化）

| 类型 | 说明 | 是否进入诊断回溯 |
|------|------|------------------|
| `direct_prerequisite` | 直接先修：不掌握则无法理解本概念 | 是 |
| `foundational_experience` | 基础经验：前置的感性经验/低年级铺垫，缺失会增加难度但不阻断 | 是（回溯终止层） |
| `related` / `analogous` / `application` | 相关/类比/应用（同 Schema 1.0） | 否 |

强度等级（strong / moderate / weak）同 Schema 1.0，回溯探测顺序 strong → moderate。

### 2.2 分科成图与跨科引用

借鉴 cn-math-taxonomy"分科成图、受控连边"的设计（其数学图可跨学段回溯到小学知识点，英语独立成图仅内部连边，物理用到的数学写入 `mathLinks` 而**不建先修边**），AISTEC 规则如下：

1. **每门学科独立成图**：物理、化学、生物、地球科学、天文学、小学科学各自的先修边只在本学科图内延伸，不做跨学科先修链（避免图的组合爆炸与回溯失控）。
2. **跨科依赖一律用引用字段**：科学/物理课**用到的数学**写 `math_links`；跨学科关联写 `interdisciplinary`（Schema 1.0 已有字段）；科技馆展品写 `exhibits`。这些引用供活动设计时参考（如预判数学负荷、做 STEAM 映射），**不构成诊断阻断**。
3. **回溯允许下探到低学段**：沿 direct_prerequisite 可从高中一路回溯到小学科学的具体知识点（这是本框架的核心诊断能力），但下探终止于 `foundational_experience` 层（见 4.3）。

## 3. 查询接口

### 3.1 概念识别查询

输入：用户原始输入（如"设计一个关于牛顿第一定律的活动"）

输出：匹配的知识节点 ID 和元数据

```yaml
query_type: concept_identification
input: "牛顿第一定律"
output:
  matched_concept:
    id: PHYS-NEWTON-001
    name: 牛顿第一定律
    subject: 物理
    domain: 力学
    grade: 初中八年级
    confidence: 0.95
  alternatives:
    - id: SCI-MOT-001
      name: 运动与力（小学）
      reason: "若目标受众为小学生，此概念更合适"
```

### 3.2 前置知识诊断

输入：概念 ID + 目标年级

输出：学习者必须掌握的前置知识清单（Schema 1.1 响应携带守门题与判据）

```yaml
query_type: prerequisite_diagnosis
concept_id: PHYS-NEWTON-001
target_grade: 初中八年级
depth: 2

output:
  required_prerequisites:
    - id: PHYS-FORCE-001
      name: 力的概念
      grade: 初中八年级
      relationship: direct_prerequisite
      strength: strong
      diagnostic_question: "能否画出力的示意图并说明三要素？"
      mastery_criteria: ["能说出力的三要素", "能画出力的示意图"]
    - id: PHYS-FORCE-004
      name: 摩擦力
      grade: 初中八年级
      relationship: direct_prerequisite
      strength: strong
      diagnostic_question: "能否解释为什么运动的物体会停下来？"
    - id: SCI-MOT-001
      name: 运动与力（小学）
      grade: 小学四年级
      relationship: foundational_experience
      diagnostic_question: "是否有推/拉物体改变运动状态的经验？"
  missing_prerequisites_risk: low   # low / medium / high
```

### 3.3 年级适配检查

输入：概念 ID + 目标年级

输出：适配性评估和建议

```yaml
query_type: grade_appropriateness
concept_id: PHYS-NEWTON-001
target_grade: 小学六年级

output:
  match_status: mismatch             # match / partial_match / mismatch
  concept_grade: 初中八年级
  target_grade: 小学六年级
  warning: |
    牛顿第一定律是形式运算阶段概念（抽象思维），
    小学六年级学生通常处于具体运算阶段，直接教授可能导致认知负荷过高。
  alternatives:
    - id: SCI-MOT-001
      name: 运动与力（小学）
      fit_score: 0.92
      rationale: "同领域、同核心经验、认知阶段匹配"
  scaffolding_suggestions:
    - "使用大量具体实例（滑冰、坐车）而非抽象表述"
    - "避免'惯性'术语，改用'物体想保持原来的运动状态'"
    - "用角色扮演代替公式推导"
```

### 3.4 学习路径生成

输入：起点概念 ID + 终点概念 ID

输出：最优学习路径

```yaml
query_type: learning_path
start: SCI-MOT-001
end: PHYS-NEWTON-001
path_type: shortest                  # shortest / comprehensive

output:
  path:
    - {id: SCI-MOT-001, name: 运动与力（小学）, stage: 起点}
    - {id: PHYS-FORCE-001, name: 力的概念, stage: 过渡}
    - {id: PHYS-FORCE-004, name: 摩擦力, stage: 过渡}
    - {id: PHYS-NEWTON-001, name: 牛顿第一定律, stage: 终点}
  estimated_duration: "6-8 课时"
  prerequisite_gaps: []
```

### 3.5 常见误解预加载

输入：概念 ID

输出：该概念的已知常见误解清单（Schema 1.1 携带 distractor 与针对性活动）

```yaml
query_type: misconception_loading
concept_id: PHYS-NEWTON-001

output:
  misconceptions:
    - statement: "速度大的物体惯性大"
      correction: "惯性只与质量有关，与速度无关"
      prevalence: high
      distractor: "因为速度越大惯性越大"        # 直接注入选择题干扰项池（见 6.2）
      targeted_activity: "POE：两辆质量相同的小车，哪个更难停下来？为什么？"
    - statement: "运动的物体不受力会慢慢停下来"
      correction: "停下来是因为摩擦力；不受力会永远运动"
      prevalence: very_high
      targeted_activity: "演示：气垫导轨上滑块的运动（近似无摩擦）"
```

## 4. 诊断回溯算法

前置诊断的核心机制：**答错不只会报告"该概念不会"，而是沿先修边逐层下探，定位最早的知识断点**。借鉴 cn-math-taxonomy 的诊断引擎行为（数学答错可从高中一直回溯到具体的小学知识点）。

### 4.1 算法流程

```text
function 诊断回溯(目标概念 T):
    断点链 ← []
    当前层 ← {T}
    for 深度 d = 0 … MAX_DEPTH（默认 3）:
        下一层 ← ∅
        for 概念 C in 当前层（按先修强度 strong → moderate 排序，跳过 elective）:
            if 学习者已掌握 C: continue
            r ← 提问(C.diagnostic_question)
            if r == 通过:
                记录 C 已掌握
            else:
                断点链.append({概念: C, 未通过判据: r.failed_criteria})
                下一层 ← 下一层 ∪ C.direct_prerequisites
        if 下一层 == ∅: break                    # 已触达根节点（root_reason 层）
        if 本层与新断点 == 0 且 上一层亦无新断点: break   # 地基已实，提前终止
        当前层 ← 下一层
    return 构建补救路径(断点链)     # 从最早断点到 T 的教学序列
```

### 4.2 成本控制规则

- **跳级抽样**：单层待测节点 > 5 时，只全测 strong 边目标，moderate 边目标抽样 50%；若抽样中出现断点，下一层对该分支恢复全测。
- **缓存**：同一学习者短期内重复诊断，已通过的节点不再提问（守门题只问一次）。

### 4.3 下探终止条件（满足任一即停）

1. 到达 `foundational_experience` 层——只报告"缺少 XX 领域的早期经验"，不再下探到具体知识点；
2. 到达根节点（节点自带 `root_reason`）；
3. 连续两层无新断点；
4. 达到 MAX_DEPTH。

### 4.4 输出示例

```yaml
diagnosis_result:
  target: PHYS-NEWTON-001
  verdict: prerequisite_gap      # mastered / gap / prerequisite_gap
  breakpoints:
    - id: PHYS-FORCE-001
      name: 力的概念
      failed_criteria: ["能画出力的示意图"]
      depth: 1
  earliest_breakpoint: PHYS-FORCE-001
  remediation_path:
    - {id: PHYS-FORCE-001, action: 微复习活动, estimated: "10 分钟"}
    - {id: PHYS-NEWTON-001, action: 返回主活动, scaffolding: 降低抽象层级}
  note: "先修缺口定位到力的示意图，建议活动开头插入 10 分钟微复习再进入牛顿第一定律。"
```

## 5. 课标对齐规范

### 5.1 standards 字段

每个节点应对齐到至少 1 条课程标准条目：

```yaml
standards:
  - id: cs-2022-sci:3.PS.02        # 对齐源 ID，格式见 5.2
    confidence: exact              # exact（条目内容与本节点实质等价）/
                                   # partial（条目覆盖本节点的一部分）/
                                   # unverified（已标注待人工复核）
```

### 5.2 对齐源 ID 格式

```
{标准代码}:{学段}.{领域}.{序号}
```

| 标准代码 | 标准 |
|----------|------|
| `cs-2022-sci` | 《义务教育科学课程标准（2022年版）》 |
| `cs-2022-phy` | 《义务教育物理课程标准（2022年版）》 |
| `cs-2020-phy` | 《普通高中物理课程标准（2017年版2020年修订）》 |

示例：`cs-2022-sci:3.PS.02` = 科学课标（2022）学段 3（5–6 年级）· 物质科学 · 第 2 条。

### 5.3 对齐原则

- 覆盖目标：核心节点 `confidence: exact` 比例 ≥ 90%（见 7.1 校验规则 R8）。
- `partial` 节点应拆分或补充描述，直至可升级为 `exact` 或明确标注差距。
- 课标修订时批量更新（见第 8 节更新机制），并保留上一版映射文件供追溯。

## 6. 诊断题与干扰项设计规范

### 6.1 守门题设计原则

1. **一节点一题**：每节点只维护 1 道守门题，控制诊断成本；提高信度靠 mastery_criteria 拆分而非堆题。
2. **答案可机械判定**：简答题答案 ≤ 20 字，或改造为选择题（4 选 1）。
3. **指向判据**：题干必须能映射到至少 1 条 `mastery_criteria`（用 `criteria_map` 标注）。
4. **暴露误解**：优先采用能激活已知 `misconceptions` 的设问角度（守门题同时是误解探测器）。

### 6.2 干扰项从误解派生

借鉴 cn-math-taxonomy 的 distractor changelog 实践：**题库中每个干扰项必须可溯源到某条 misconception 的 `distractor` 字段**，不得随意编造。好处：

- 选错选项 ≈ 确诊某条误解 → 直接返回对应 `targeted_activity`；
- 干扰项的选用情况反哺 `prevalence` 标注（被选频率高 → prevalence 上调）。

### 6.3 题目生命周期与复审

题目状态机：`draft` → `verified`（双人复核或文献依据）→ `deprecated`（被替换）。

- 借鉴其 second-pass 复审机制：批量生成的题目须经过一次独立复审轮次（换模型/换提示词重答，比对答案一致性）才能进入 `verified`；
- 干扰项的增删写入 `distractor_changelog.json`，记录"哪个选项、对应哪条误解、何时修改、为何修改"。

## 7. 数据质量校验流水线

### 7.1 校验规则（Schema 1.0 五条 + 新增）

| # | 规则 | 级别 |
|---|------|------|
| R1 | ID 全局唯一 | error |
| R2 | prerequisites / postrequisites 双向对应 | error |
| R3 | 依赖图为 DAG（无环） | error |
| R4 | 前置知识年级 ≤ 后续知识年级 | error |
| R5 | id / name / subject / grade 非空 | error |
| R6 | 根节点（无先修边）必须填写 `root_reason` | error |
| R7 | 守门诊断题覆盖率：核心节点 100%，全部节点 ≥ 95% | warning |
| R8 | 课标对齐覆盖率 ≥ 90%，`unverified` 占比 ≤ 10% | warning |
| R9 | 题库干扰项可溯源到 misconception（6.2） | warning |
| R10 | 无孤立节点（既无先修亦无后续的节点必须有 `root_reason` 说明其为图起点） | warning |
| R11 | 每学科图主连通分量覆盖 ≥ 95% 节点（防止碎片子图漏连边） | warning |

### 7.2 校验报告

每次数据更新运行校验工具，输出 `verification_report.json`：

```json
{
  "generated_at": "2026-10-30T11:20:00+08:00",
  "schema_version": "1.1.0",
  "nodes": {"total": 178, "by_subject": {"物理": 45, "科学": 60}},
  "edges": {"total": 203, "by_type": {"direct_prerequisite": 150}},
  "checks": [
    {"id": "R3", "status": "pass", "details": "拓扑排序成功，无环"},
    {"id": "R7", "status": "warn", "details": "12 个节点缺少 diagnostic_question"}
  ],
  "coverage": {
    "diagnostic_question": 0.93,
    "standards_exact": 0.71,
    "misconception": 0.88
  },
  "issues": [
    {"node": "PHYS-HEAT-004", "rule": "R7", "severity": "warning",
     "message": "核心节点缺少守门诊断题"}
  ]
}
```

所有 `error` 必须修复后才能发布版本；`warning` 记入 CHANGELOG 限期补齐。

## 8. 在活动设计中的应用

### 8.1 前置知识快速回顾

如果 KG 诊断发现学习者可能缺失关键前置知识，在活动开头插入：

```markdown
## 引入阶段（5分钟）

**快速回顾：力的概念**

在探索牛顿第一定律之前，让我们先确认一个基础概念：

> "当你推一个箱子，箱子动了；当你停止推，箱子停了。这说明什么？"
>
> （预期回答：力让物体运动... → 引导纠正：力改变运动状态）

*[KG 触发：守门题未通过 → 自动展开 3 分钟微复习，并标记 mastery_criteria 中的具体未通过项]*
```

### 8.2 针对性 POE 设计

如果 KG 预加载了特定误解，直接取用 `targeted_activity` 设计预测环节：

```markdown
## 探索阶段：惯性的预测（POE）

**预测（P）**：
> "两辆质量相同的小车，一辆速度快，一辆速度慢。同时刹车，哪辆更容易停下来？为什么？"

*[KG 触发：选项直接使用 misconception.distractor；选错即确诊"速度大的物体惯性大"]*

**观察（O）**：实验演示……

**解释（E）**：引导学生发现：两辆车同样难停（因为质量相同）……
```

### 8.3 科技馆展品关联

如果 KG 返回了相关展品（`exhibits` 字段），在场景适配层自动插入：

```markdown
## 场景适配：中国科技馆

**推荐展品**：惯性展品（3楼B厅）

**活动建议**：
> 在展品前设置挑战："如何让鸡蛋从快速转动的盘子上不掉下来？"
> 学生操作后引导连接："这就是惯性——鸡蛋想保持原来的静止状态"
```

### 8.4 数学负荷预判（Schema 1.1 新增）

活动设计阶段读取目标节点的 `math_links`，若引用的数学概念年级高于受众年级，在脚手架建议中插入数学铺垫环节。例如：小学科学"速度与比较"活动若 `math_links` 指向"小数的意义"，而受众为三年级（未学小数），则提示改用整数比较或图示方式。

## 9. 范围决策记录（Scope Decisions）

借鉴 cn-math-taxonomy 对"明确不建点"的实践，以下情形**不建节点**或特殊处理，并在此留痕：

| 情形 | 处理方式 |
|------|----------|
| 课标中的选学内容 | 建点但标 `elective: true`，不进入诊断回溯链 |
| 超出课标的拓展/竞赛内容 | 不建点 |
| 涉及科学争议、伦理决策、社会政策（SSI）的话题 | 不建点——触发 science-edu-activity 的 SSI 终止条件，转人工设计 |
| 跨学科应用实例 | 不建点——写入 `interdisciplinary` 引用字段 |

## 10. 数据结构、离线使用与更新机制

- 仓库地址：https://github.com/zhanggenhf-cloud/aistec-knowledge-graph
- 数据格式：YAML（每概念一个文件）；Schema 版本 1.1.0（本文件为权威规范）
- 离线使用：克隆仓库 → `tools/query.py` 本地查询，或将 YAML 载入内存实时查询
- 更新机制：
  - 课标变更时批量更新 `standards` 映射（保留旧版文件）
  - 研究发现新误解时增量更新 `misconceptions`（含 `prevalence` 证据）
  - 新展品上线时更新 `exhibits`
  - 每次发布附 `verification_report.json` 与 CHANGELOG
- AISTEC 技能通过版本标签引用特定版本的知识图谱数据

## 参考与致谢

本指南数据模型的以下设计借鉴自 [xiaoyang111222/cn-math-taxonomy](https://github.com/xiaoyang111222/cn-math-taxonomy)（中小学知识图谱 + 自适应诊断，MIT 声明见其仓库）：

| 借鉴点 | 对应本文件章节 |
|--------|----------------|
| 每节点自带守门诊断题（question + answer） | 1.3 / 6.1 |
| 可观测掌握判据 `mastery_criteria` | 1.1 |
| 分科成图、跨科依赖写入 `mathLinks` 不建先修边 | 2.2 / `math_links` |
| 答错沿先修边跨学段回溯至最早断点 | 第 4 节 |
| 干扰项从误解派生 + distractor changelog | 6.2 / 6.3 |
| 课标对齐置信度（exact / partial）与版本化教材锚定 | 第 5 节 |
| `verification_report.json` + second-pass 复审 | 第 7 节 |
| 选学内容不进入诊断链、范围决策留痕 | 9 |
