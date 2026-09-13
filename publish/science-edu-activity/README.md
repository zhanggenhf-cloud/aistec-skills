# Science Education Activity Generator

Generate comprehensive, pedagogically sound science education activity plans by deconstructing scientific concepts or exhibit descriptions into teachable, hands-on activities.

## 🎯 What It Does

Transforms any scientific concept or exhibit description into a complete activity plan with:
- Knowledge deconstruction into teachable modules
- Pedagogical framework selection (5E, 4-Stage, PBL, Design Thinking, SSI, IBL, and more)
- UDL (Universal Design for Learning) differentiation
- Formative assessment checkpoints
- STEM/STEAM integration mapping
- NGSS three-dimensional alignment
- Safety protocols and contingency plans
- Verified literature references

## 🌐 Languages

Supports both **English** and **Chinese** output.

## 📋 Requirements

### Required Capabilities

| Capability | Purpose | Priority |
|-----------|---------|----------|
| `web_search` | Search for scientific background, teaching resources | Required |
| `web_fetch` | Fetch specific educational resources and papers | Required |
| `academic_search` | Verify scientific accuracy via arXiv, Scholar | Recommended |
| `browser_automation` | CNKI search for Chinese education literature | Optional |

### API Keys

```yaml
web_search:
  provider: tavily
  api_key: YOUR_KEY

academic:
  arxiv:
    enabled: true
  semantic_scholar:
    enabled: true
```

## 🚀 Usage

### As a System Prompt

Copy the contents of `skill.md` into your AI assistant's system prompt.

### Example Queries

- "设计一个关于光的折射的科普活动，适合小学生"
- "Design a 45-minute activity about DNA extraction for middle schoolers"
- "我们馆有一个静电发生器展品，想设计配套教育活动"
- "Generate a lesson plan about climate change for 10-year-olds"

### Expected Output

A complete activity plan in Markdown containing:
1. Basic information (age, duration, group size, discipline)
2. Executive summary with safety highlights
3. SMART learning objectives (Bloom's taxonomy aligned)
4. Background knowledge with verified references
5. Selected pedagogical framework with justification
6. UDL differentiation plan
7. Framework-specific activity flow with facilitator guides
8. Embedded formative assessment checkpoints
9. STEM/STEAM integration map (if applicable)
10. NGSS 3D alignment (if applicable)
11. Complete materials list with sourcing info
12. Safety notes and contingency plans
13. Verified literature references

## 🎓 Supported Pedagogical Frameworks

| Framework | Best For | Source |
|-----------|----------|--------|
| **5E** | Classic science concepts, inquiry-based | Bybee et al., 2006 |
| **7E** | Concepts needing pre-assessment/extension | Eisenkraft, 2003 |
| **4-Stage** | Museum/science center interactive exhibits | Museum Education |
| **PBL** | Real-world problem solving | Krajcik & Blumenfeld, 2006 |
| **POE/PEE** | Counter-intuitive phenomena | White & Gunstone, 2014 |
| **Design Thinking** | Engineering/maker activities | IDEO |
| **SSI** | Science ethics/societal issues | Sadler, 2004 |
| **IBL** | Open scientific inquiry | Pedaste et al., 2015 |
| **REACT** | Life-connected topics | Crawford, 2001 |
| **LIA** | Community/environment projects | PrimaryConnections, 2024 |
| **UbD** | Full curriculum unit design | Wiggins & McTighe, 2005 |
| **GRRF** | Skill gradual mastery | Fisher & Frey, 2013 |
| **IDM** | Inquiry-based social studies | Grant et al., 2017 |
| **STREAMING** | Comprehensive inclusive STEAM | Drigas & Kefalis, 2024 |

## 📁 Files

- `skill.md` — Main skill prompt
- `references/knowledge-deconstruction.md` — Knowledge deconstruction methodology
- `references/output-schema.md` — Complete output format specification
- `references/error-correction.md` — Multi-layer error correction mechanisms
- `references/accuracy-assurance.md` — Scientific accuracy verification
- `references/example-library.md` — Example activities by domain

## 📄 License

MIT
