# AISTEC 知识图谱集成指南

本文件说明 science-edu-activity 技能如何与 AISTEC Knowledge Graph 集成，实现知识点级别的精准活动设计。

## 集成架构

```
用户输入 → 概念识别 → 知识图谱查询 → 前置诊断 → 活动设计
                ↑                            ↓
         AISTEC Knowledge Graph ← 学习路径生成
```

## 查询接口

### 1. 概念识别查询

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

### 2. 前置知识诊断

输入：概念 ID + 目标年级

输出：学习者必须掌握的前置知识清单

```yaml
query_type: prerequisite_diagnosis
concept_id: PHYS-NEWTON-001
target_grade: 初中八年级
depth: 2  # 查询深度

output:
  required_prerequisites:
    - id: PHYS-FORCE-001
      name: 力的概念
      grade: 初中八年级
      relationship: direct_prerequisite
      diagnostic_question: "能否画出力的示意图并说明三要素？"
    
    - id: PHYS-FORCE-004
      name: 摩擦力
      grade: 初中八年级
      relationship: direct_prerequisite
      diagnostic_question: "能否解释为什么运动的物体会停下来？"
    
    - id: SCI-MOT-001
      name: 运动与力（小学）
      grade: 小学四年级
      relationship: foundational_experience
      diagnostic_question: "是否有推/拉物体改变运动状态的经验？"
  
  missing_prerequisites_risk: low  # low/medium/high
  # 若风险为 high，建议先补充前置知识活动
```

### 3. 年级适配检查

输入：概念 ID + 目标年级

输出：适配性评估和建议

```yaml
query_type: grade_appropriateness
concept_id: PHYS-NEWTON-001
target_grade: 小学六年级

output:
  match_status: mismatch  # match / partial_match / mismatch
  concept_grade: 初中八年级
  target_grade: 小学六年级
  
  warning: |
    牛顿第一定律是形式运算阶段概念（抽象思维），
    小学六年级学生通常处于具体运算阶段。
    直接教授可能导致认知负荷过高。
  
  alternatives:
    - id: SCI-MOT-001
      name: 运动与力（小学）
      fit_score: 0.92
      rationale: "同领域、同核心经验、认知阶段匹配"
    
    - id: SCI-MAT-004
      name: 物体的运动
      fit_score: 0.78
      rationale: "前置概念，为初中学习做铺垫"
  
  scaffolding_suggestions:
    - "使用大量具体实例（滑冰、坐车）而非抽象表述"
    - "避免'惯性'术语，改用'物体想保持原来的运动状态'"
    - "用角色扮演代替公式推导"
```

### 4. 学习路径生成

输入：起点概念 ID + 终点概念 ID

输出：最优学习路径

```yaml
query_type: learning_path
start: SCI-MOT-001
end: PHYS-NEWTON-001
path_type: shortest  # shortest / comprehensive

output:
  path:
    - id: SCI-MOT-001
      name: 运动与力（小学）
      stage: 起点
    - id: PHYS-FORCE-001
      name: 力的概念
      stage: 过渡
    - id: PHYS-FORCE-004
      name: 摩擦力
      stage: 过渡
    - id: PHYS-NEWTON-001
      name: 牛顿第一定律
      stage: 终点
  
  estimated_duration: "6-8 课时"
  prerequisite_gaps: []  # 路径中缺失的前置知识
```

### 5. 常见误解预加载

输入：概念 ID

输出：该概念的已知常见误解清单

```yaml
query_type: misconception_loading
concept_id: PHYS-NEWTON-001

output:
  misconceptions:
    - statement: "速度大的物体惯性大"
      correction: "惯性只与质量有关，与速度无关"
      source: "Clement, 1982"
      prevalence: high  # high/medium/low
      targeted_activity: |
        POE活动：两个不同速度但相同质量的小车，
        哪个更难停下来？为什么？
    
    - statement: "运动的物体不受力会慢慢停下来"
      correction: "停下来是因为摩擦力；不受力会永远运动"
      prevalence: very_high
      targeted_activity: |
        演示：气垫导轨上滑块的运动（近似无摩擦）
```

## 在活动设计中的应用

### 前置知识快速回顾

如果 KG 诊断发现学习者可能缺失关键前置知识，在活动开头插入：

```markdown
## 引入阶段（5分钟）

**快速回顾：力的概念**

在探索牛顿第一定律之前，让我们先确认一个基础概念：

> "当你推一个箱子，箱子动了；当你停止推，箱子停了。这说明什么？"
> 
> （预期回答：力让物体运动... → 引导纠正：力改变运动状态）

*[KG 触发：若学生无法回答，自动展开 3 分钟微复习]*
```

### 针对性 POE 设计

如果 KG 预加载了特定误解，设计针对性的预测环节：

```markdown
## 探索阶段：惯性的预测（POE）

**预测（P）**：
> "两辆质量相同的小车，一辆速度快，一辆速度慢。
> 同时刹车，哪辆更容易停下来？为什么？"

*[KG 触发：此问题专门 targeting "速度大的物体惯性大" 的误解]*

**观察（O）**：
> 实验演示...

**解释（E）**：
> 引导学生发现：两辆车同样难停（因为质量相同）...
```

### 科技馆展品关联

如果 KG 返回了相关展品，在场景适配层自动插入：

```markdown
## 场景适配：中国科技馆

**推荐展品**：惯性展品（3楼B厅）

**活动建议**：
> 在展品前设置挑战："如何让鸡蛋从快速转动的盘子上不掉下来？"
> 学生操作后引导连接："这就是惯性——鸡蛋想保持原来的静止状态"
```

## 数据结构

知识图谱数据存储在独立仓库：
- 仓库地址：https://github.com/zhanggenhf-cloud/aistec-knowledge-graph
- 数据格式：YAML（每概念一个文件）
- 关系格式：YAML（每领域一个依赖链文件）

## 离线使用

知识图谱数据可以离线加载：
1. 克隆仓库到本地：`git clone https://github.com/zhanggenhf-cloud/aistec-knowledge-graph.git`
2. 使用 `tools/query.py` 进行本地查询
3. 或者直接将 YAML 文件加载到内存中进行实时查询

## 更新机制

知识图谱由社区维护，更新频率：
- 课标变更时：批量更新年级映射
- 研究发现新误解时：增量更新 misconception 字段
- 新展品上线时：更新 exhibits 字段

AISTEC 技能通过版本标签引用特定版本的知识图谱数据。
