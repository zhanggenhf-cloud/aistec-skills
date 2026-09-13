# Research Lineage — 研究脉络梳理

Trace the academic research lineage of any topic — from landmark papers to emerging frontiers.

## 🎯 What It Does

Transforms any user topic (phenomenon, concept, technology) into a structured research history with:
- Research timeline with key milestones
- Thematic branch analysis
- Bibliometric analysis (co-citation, citation bursts, research frontiers)
- Cross-disciplinary connections
- Research gap identification
- Verified citations with hallucination checks

## 🌐 Languages

Supports both **English** and **Chinese** literature search and output.

## 📋 Requirements

### Required Capabilities

| Capability | Purpose | Priority |
|-----------|---------|----------|
| `web_search` | General web search for overviews and milestones | Required |
| `web_fetch` | Fetch specific URLs for verification | Required |
| `academic_search` | arXiv, Semantic Scholar, Google Scholar queries | Recommended |
| `browser_automation` | CNKI advanced search automation | Optional (for Chinese sources) |

### API Keys (if using external search providers)

```yaml
web_search:
  provider: tavily  # or your preferred provider
  api_key: YOUR_KEY

academic:
  arxiv:
    enabled: true        # free
  semantic_scholar:
    enabled: true        # free
  crossref:
    enabled: true        # free
```

## 🚀 Usage

### As a System Prompt

Copy the contents of `skill.md` into your AI assistant's system prompt. Ensure the required tools are available.

### Example Queries

- "梳理深度学习在医学影像中的研究脉络"
- "Trace the research lineage of CRISPR gene editing"
- "关于量子计算的研究历史和当前前沿"

### Expected Output

A structured Markdown document containing:
1. Research overview
2. Timeline (Gantt + ASCII)
3. Key milestones table
4. Thematic branches
5. Citation network analysis
6. Research frontiers and gaps
7. Verified reference list with verification log

## 🔍 Search Strategy

The skill uses a 7-round search strategy:

1. **Overview** — General search for review/survey papers
2. **Milestones** — Landmark papers and breakthroughs
3. **Timeline** — Year-by-year verification
4. **Frontiers** — Recent advances (last 2-3 years)
5. **Chinese sources** — CNKI CSSCI search (when applicable)
6. **Academic APIs** — arXiv + Scholar deep retrieval
7. **Verification** — Direct platform visits for unverified items

## 🛡️ Hallucination Prevention

The skill includes a mandatory 5-class hallucination detection system:

| Type | Code | Detection Strategy |
|------|------|-------------------|
| Totally Fabricated | TF | Search title+author, no result = TF |
| Pseudo-Authored | PAC | Check author's actual publication list |
| Incomplete Info | IH | Flag missing DOI/volume/page/year |
| Patchwork Hoax | PH | Cross-check all fields match one source |
| Subtle Distortion | SH | Field-by-field comparison |

## 📁 Files

- `skill.md` — Main skill prompt (copy into system prompt)
- `references/mermaid-templates.md` — Mermaid diagram templates
- `references/search-strategies.md` — Detailed search round strategies

## 📄 License

MIT
