---
name: cnki-advanced-search
description: >
  CNKI (China National Knowledge Infrastructure) advanced search automation.
  When user provides research keywords (single or multiple groups), automatically
  performs advanced search on CNKI: selects academic journal category, checks CSSCI
  source, inputs topic keywords (with synonyms and related terms connected by +),
  connects multiple groups with OR, sorts by citation count, switches to 50/page,
  opens abstract view, then exports via "Export & Analysis" → "Novelty (Citation Format)"
  as Word file containing complete bibliographic records and abstracts.
  Triggered when user mentions CNKI search, advanced search, CSSCI/C-journal search,
  downloading bibliographic info, or getting paper abstracts from CNKI.
---

# CNKI Advanced Search Automation

## Workflow

### Step 1: Open CNKI Advanced Search

Navigate to: `https://kns.cnki.net/kns8s/AdvSearch`

### Step 2: Configure Search Parameters

1. **Select Source Type**: Choose "学术期刊" (Academic Journals)
2. **Check CSSCI**: In journal level filter, check "CSSCI来源" (CSSCI Source)
   - Alternative: Check "北大核心" (PKU Core) for education-focused topics

### Step 3: Construct Keywords

**Keyword Rules**:
- **Synonyms/Related terms**: Connect with ` + `
  - Example: `数字化转型 + 数字化变革 + 数字化`
- **Multiple groups**: Connect with OR relationship
  - Example: `(深度学习 + 神经网络) OR (机器学习 + 人工智能)`
- **Field selection**: Use "主题" (Topic) for broadest coverage

**Keyword Construction Process**:
1. Translate English topic terms to Chinese
2. Expand synonyms and related terms
3. Group by concept clusters
4. Use ` + ` within groups, OR between groups

### Step 4: Execute Search

1. Click "检索" (Search)
2. Wait for results to load

### Step 5: Configure Result Display

1. **Sort by citation count**: Click "被引" (Cited) column header
2. **Switch to 50 records per page**: Select "50" from page size dropdown
3. **Open abstract view**: Click "摘要" (Abstract) view mode if available

### Step 6: Select and Export

1. **Select all on current page**: Check the select-all checkbox
2. **Click "导出与分析"** (Export & Analysis)
3. **Select export format**: Choose "查新（引文格式）" (Novelty - Citation Format)
4. **Export as Word**: Select Word (.docx) format
5. **Download file**: Save to local directory

### Step 7: Extract and Process

From the exported Word file:
1. Extract bibliographic records:
   - Title (标题)
   - Author (作者)
   - Journal (刊名)
   - Year (年)
   - Volume/Issue (卷/期)
   - Pages (页码)
2. Extract abstracts (摘要)
3. Record citation counts (被引次数)
4. Format for integration into research lineage or activity plan references

## Handling CAPTCHA

If CNKI presents a CAPTCHA during automation:
- Pause automation
- Notify user to manually complete CAPTCHA
- Resume after user confirmation

## Alternative: Manual Cookie-Based Access

If browser automation fails:
1. User manually logs into CNKI via browser
2. Extract cookies from browser developer tools
3. Provide cookies to automation tool for authenticated requests

## Output Format

The exported Word file contains records in this format:

```
[序号] 作者. 标题[J]. 期刊名, 年, 卷(期): 页码.
    摘要: [中文摘要全文]
    关键词: [关键词列表]
    被引次数: [数字]
```

## Quality Notes

- CSSCI sources represent high-quality Chinese academic journals
- Citation count sorting surfaces most influential papers first
- Abstract view enables quick relevance screening
- Export limit: Typically 500 records per batch; paginate for larger sets

## Limitations

- Requires institutional access or valid CNKI account
- CAPTCHA may interrupt automation
- Full-text access depends on institutional subscriptions
- Some newer journals may not be indexed in CSSCI
