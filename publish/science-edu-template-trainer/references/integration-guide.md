# 与 science-edu-activity 的集成规范

本文档定义生成的模板如何与 `science-edu-activity.skill` 集成。

## 集成架构

```
┌─────────────────────────────────────────────────────────────┐
│  science-edu-template-trainer (训练技能)                    │
│  ├── 输入: 大量现有活动方案                                  │
│  ├── 处理: 分析 → 提取模式 → 生成模板                        │
│  └── 输出: 标准模板文件 (template-schema.md)                │
│                      ↓                                       │
│              更新引用或文件替换                               │
│                      ↓                                       │
│  science-edu-activity (生成技能)                            │
│  ├── 输入: 科学概念/展品描述                                 │
│  ├── 处理: 知识解构 → 按模板生成                            │
│  └── 输出: 符合模板规范的活动方案                            │
└─────────────────────────────────────────────────────────────┘
```

## 模板交付方式

### 方式一：直接文件更新（推荐用于重大更新）

将生成的模板内容更新到 `science-edu-activity/references/output-schema.md`

**更新内容映射：**

| 训练技能输出 | science-edu-activity 目标位置 |
|-------------|------------------------------|
| 模板元数据 | output-schema.md 的 "输出格式规范" 章节 |
| 必须章节列表 | "活动方案结构" 的主列表 |
| 各章节详细规范 | 对应章节的详细说明 |
| 格式规范 | Markdown 输出模板部分 |
| 质量检查清单 | 完整性检查清单 |

**更新流程：**
1. 生成新模板
2. 与现有 output-schema.md 对比
3. 生成差异报告
4. 人工确认关键变更
5. 执行更新

### 方式二：扩展引用文件（推荐用于增量更新）

创建独立模板文件，供 science-edu-activity 引用：

```
science-edu-activity/references/
├── output-schema.md (基础规范)
├── template-v1.0-base.md (基础模板 - 由 trainer 生成)
├── template-v1.1-museum.md (博物馆特化)
├── template-v1.2-school.md (学校特化)
└── ...
```

在 SKILL.md 中增加模板选择逻辑：

```markdown
### 模板选择

根据应用场景选择模板：
- 博物馆场景 → 使用 template-v1.1-museum.md
- 学校课堂 → 使用 template-v1.2-school.md
- 通用场景 → 使用 template-v1.0-base.md
```

### 方式三：配置注入（推荐用于动态适配）

通过 OpenClaw 配置系统传递模板参数：

```json
{
  "skills": {
    "entries": {
      "science-edu-activity": {
        "enabled": true,
        "config": {
          "template_profile": "museum",
          "template_version": "1.1.0"
        }
      }
    }
  }
}
```

## 数据兼容性保证

### 向后兼容

新模板必须兼容旧版本生成的方案：
- 不删除已存在的必须章节
- 新增章节标记为可选
- 保留旧字段的别名支持

### 版本声明

在生成的方案中嵌入模板版本：

```markdown
<!--
template_version: "1.1.0"
template_profile: "museum"
generated_by: "science-edu-activity"
-->
```

## 质量反馈循环

建立从生成技能到训练技能的反馈通道：

```
science-edu-activity 生成方案
         ↓
    用户使用/实施
         ↓
    收集反馈（效果、问题）
         ↓
    反馈传递给 trainer
         ↓
    分析反馈，识别模板改进点
         ↓
    生成新版本模板
         ↓
    更新 science-edu-activity
```

**反馈收集维度：**
- 模板章节是否完整
- 时间分配是否现实
- 格式是否便于使用
- 是否缺少常用内容

## 协同工作流程

### 场景1：初始化 science-edu-activity 输出规范

1. 收集 20-50 个优质活动方案
2. 使用 science-edu-template-trainer 分析
3. 生成初始模板
4. 将模板写入 science-edu-activity/references/output-schema.md
5. science-edu-activity 开始使用新模板生成方案

### 场景2：基于用户反馈优化模板

1. science-edu-activity 收集实施反馈
2. 整理问题方案和改进建议
3. 将新增/修改方案输入 trainer
4. 重新分析，识别模式变化
5. 生成模板更新建议
6. 人工审核后更新 output-schema.md

### 场景3：针对特定机构定制模板

1. 收集该机构的现有方案（10-20个）
2. 使用 trainer 分析机构特色
3. 生成机构专属模板 profile
4. 保存为 science-edu-activity/references/template-[institution].md
5. 在生成时通过配置选择该模板

## 接口约定

### 训练技能输出格式

```yaml
# trainer-output.yaml
template_spec:
  version: "1.1.0"
  profile: "museum"
  generated_at: "2024-XX-XX"
  based_on:
    sample_count: 45
    source_types: ["博物馆", "学校", "科普中心"]
  
structure:
  required:
    - name: "基本信息"
      fields: [...]
    - name: "学习目标"
      constraints: {...}
    # ...
  
formatting:
  markdown_rules: {...}
  style_guide: {...}
  
constraints:
  hard: [...]  # 必须遵守
  soft: [...]  # 建议遵守
  
examples:
  minimal: "最小可行方案示例"
  standard: "标准完整方案示例"
  excellent: "优秀方案示例"
```

### 生成技能读取方式

在 science-edu-activity 的 SKILL.md 中：

```markdown
## 模板加载

根据配置加载对应模板：
1. 检查配置中的 template_profile
2. 加载 references/template-{profile}.md 或默认 output-schema.md
3. 按模板结构约束生成内容
```
