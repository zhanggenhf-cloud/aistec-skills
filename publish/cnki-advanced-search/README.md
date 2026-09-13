# CNKI Advanced Search Automation

Automated advanced search on CNKI (China National Knowledge Infrastructure) for Chinese academic literature retrieval.

## 🎯 What It Does

Performs advanced search on CNKI with:
- Academic journal category selection
- CSSCI source filtering
- Multi-group keyword input with OR/AND logic
- Citation count sorting
- Batch export of bibliographic records and abstracts

## 📋 Requirements

### Required Capabilities

| Capability | Purpose | Priority |
|-----------|---------|----------|
| `browser_automation` | Navigate CNKI website, fill forms, export results | Required |

### Prerequisites

- CNKI institutional access OR valid login cookie
- Browser automation tool (Playwright, Selenium, or similar)

## 🚀 Usage

### As a System Prompt

Copy the contents of `skill.md` into your AI assistant's system prompt.

### Example Queries

- "在知网检索深度学习相关的CSSCI论文"
- "Search CNKI for papers on digital transformation in CSSCI journals"
- "帮我检索量子计算主题的北大核心期刊"

### Expected Output

- Word document export containing:
  - Bibliographic records (title, author, journal, year, volume, issue, pages)
  - Abstracts
  - Citation counts
  - Formatted in citation style suitable for literature review

## 🔍 Search Parameters

### Keyword Construction

```
# Synonyms and related terms (use + to connect)
数字化转型 + 数字化变革 + 数字化

# Multiple groups (use OR to connect groups)
(深度学习 + 神经网络) OR (机器学习 + 人工智能)
```

### Filters

| Filter | Options |
|--------|---------|
| Source Type | Academic Journals / Dissertations / Conference Papers |
| Journal Level | CSSCI / PKU Core / CSCD / All |
| Time Range | Custom years |
| Sort By | Citation Count / Relevance / Date |

### Export Format

- **查新（引文格式）** — Standard citation format with abstracts
- Supported export: Word (.docx)

## 📁 Files

- `skill.md` — Main skill prompt with step-by-step automation instructions

## ⚠️ Important Notes

- CNKI may require CAPTCHA verification during automated search
- Institutional access required for full-text download
- Cookie-based authentication may expire and need renewal
- Export file size limit: typically 500 records per batch

## 📄 License

MIT
