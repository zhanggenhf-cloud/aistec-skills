# Science Education Activity Template Trainer

Train and extract general-purpose activity plan templates by analyzing existing science education activity plans.

## 🎯 What It Does

Analyzes collections of science education activity plans to extract patterns, best practices, and structural norms, then generates standardized templates for consistent, high-quality activity documentation.

## 🌐 Languages

Supports both **English** and **Chinese** activity plan analysis.

## 📋 Requirements

### Required Capabilities

| Capability | Purpose | Priority |
|-----------|---------|----------|
| `web_search` | Search for pedagogical standards and benchmarks | Optional |
| File reading | Read uploaded activity plan files | Required |

### Prerequisites

**Required Input:**
- A collection of existing activity plans (minimum 5-10 recommended)
- Plans can be in Markdown, Word, PDF, or plain text format
- Each plan should represent a complete, implementable activity

**Optional Context:**
- Target institution type (museum, school, nature center, etc.)
- Specific requirements or constraints
- Preferred pedagogical approach
- Curriculum standards to align with (NGSS, CCSS, IB, PISA, 中国课程标准, etc.)

## 🚀 Usage

### As a System Prompt

Copy the contents of `skill.md` into your AI assistant's system prompt.

### Example Queries

- "分析我们馆的30个活动方案，生成一个标准模板"
- "Analyze these 20 activity plans and generate a standardized template"
- "基于现有模板，为野外考察活动生成专门模板"
- "Benchmark our activity plans against NGSS standards"

### Expected Outputs

1. **Template File** — Standardized template specification
2. **Analysis Report** — Multi-dimensional scoring, benchmarking, gap analysis

## 📁 Files

- `skill.md` — Main skill prompt
- `references/analysis-framework.md` — Analysis framework dimensions
- `references/template-generation.md` — Template generation guidelines
- `references/integration-guide.md` — Integration with activity generator

## 📄 License

MIT
