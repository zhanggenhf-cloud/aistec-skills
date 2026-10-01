[🌐 中文](README.zh.md) | English

---

# AISTEC Skills

AI-driven Integrated Science & Technology Education Content Creation Framework

## Overview

This repository contains three OpenClaw AgentSkills that power the AISTEC (AI-driven Integrated Science Education Content Creation Framework) system.

The framework integrates:
- **Citation verification via multi-API cross-check** (Semantic Scholar + arXiv + CrossRef + Google Scholar + CNKI)
- **13 verified pedagogical frameworks** auto-matched by decision tree (5E, 7E, 4-Stage, PBL, Design Thinking, IBL, POE, REACT, LIA, UbD, GRRF, IDM, Guided Play)
- **UDL × SDT integrated design** — Universal Design for Learning fused with Self-Determination Theory (autonomy × competence × relatedness)
- **SSI termination condition** — automatic halt when topics involve scientific controversy, ethical decisions, or social policy

## Skills

### 1. `research-lineage`
Research lineage intelligent engine. Integrates CiteSpace/VOSviewer bibliometric analysis with PRISMA systematic screening and CoE citation verification.

**Key features:**
- 6-round joint retrieval (WebSearch + arXiv + Google Scholar + Semantic Scholar + CrossRef + CNKI browser automation)
- PI citation graph construction (seed papers → 2-hop citation graph → elite pool via LLM dual scoring)
- CoE 6-step verification pipeline (A→B→C→D→E→F, internal workflow): graph building → API screening → bibliographic cross-check → multi-API cross-verification → LLM summary entailment → timeline consistency + upstream contamination detection
- 5-class hallucination detection (TF/PAC/IH/PH/SH)

### 2. `science-edu-activity`
Science education activity plan generator. Grounded in constructivist learning theory and inquiry-based learning, supporting UDL × SDT integrated design, ICAP cognitive engagement assessment, metacognition embedding, and visible-hidden line alignment checking.

**Key features:**
- **Dual-format output** — every activity plan includes both (1) a human-readable Markdown lesson plan and (2) a machine-parseable page-level executable scheme ready for digitization (OpenMAIC import, interactive classroom deployment, etc.)
- 4 page types in executable scheme: `slide` (SL), `interactive` (IA), `quiz` (QZ), `pbl` (PB) — each with learning contract, interaction design, assessment, scaffolding, pedagogy tags, narration, and timing
- 13 pedagogical frameworks auto-selected by decision tree (5E, 7E, 4-Stage, PBL, Design Thinking, IBL, POE, REACT, LIA, UbD, GRRF, IDM, Guided Play)
- **Knowledge Graph integration** — automatic prerequisite diagnosis via AISTEC Knowledge Graph (121 nodes across primary science, junior physics/chemistry/biology) before activity design
- **UDL × SDT integrated design** — fuses Universal Design for Learning with Self-Determination Theory so "multiple means of engagement" is backed by psychological need satisfaction
- **ICAP cognitive engagement assessment** — assigns P/A/C/I target levels per activity stage, designs upshifting strategies to ensure cognitive engagement progression
- **Metacognition embedding** — marks think-aloud prompts, reflection cards, and self-questioning checkpoints in the activity flow
- **Visible-hidden line alignment check** — ensures every "fun" activity segment maps to a clear learning objective
- Internal formative assessment feedback — auto-corrects plan without exposing evaluation rubrics
- Multi-dimensional internal feedback loop (scientific accuracy, educational effectiveness, inquiry process, learning experience, cognitive engagement, motivation design)
- SSI termination condition — halts generation for controversial ethical/policy topics
- CoE citation verification integrated into scientific background knowledge validation
- STEM/STEAM integration mapping, NGSS 3-dimensional alignment

### 3. `science-edu-template-trainer`
Template extraction and migration learning engine. Converts historical activity plans into standardized templates via 9-phase multi-dimensional quality analysis.

**Key features:**
- 9-phase pipeline: input validation → structural analysis → linguistic analysis → benchmarking → statistical aggregation → knowledge gap audit → template generation → scenario adaptation → validation
- Pedagogical framework analysis (theory basis, learning objectives, assessment alignment)
- Fairness audit (cultural responsiveness, gender equity, accessibility, socioeconomic inclusion)
- Cost-benefit analysis (per-capita cost, time efficiency, educational ROI)
- Multi-scenario optimization (Museum / School / Outdoor / Workshop)

## Verified Frameworks

All pedagogical frameworks referenced in the skills are verified against real academic sources:

- **5E** — Bybee et al. (2006)
- **7E** — Eisenkraft (2003)
- **4-Stage** — Museum/Exhibition inquiry model
- **PBL** — Krajcik & Blumenfeld (2006)
- **Design Thinking** — d.school / IDEO methodology
- **IBL** — Pedaste et al. (2015)
- **POE/PEE** — White & Gunstone (1992)
- **REACT** — Crawford (2001)
- **LIA** — PrimaryConnections (2024)
- **UbD** — Wiggins & McTighe (2005)
- **GRRF** — Fisher & Frey (2013)
- **IDM** — Grant et al. (2017)
- **Guided Play** — Hirsh-Pasek et al. (2016)

## Installation

These are OpenClaw AgentSkills. Place each skill directory under your OpenClaw skills path (e.g. `~/.openclaw/workspace/skills/`).

## Requirements

- OpenClaw with kimi-search plugin
- Access to: Semantic Scholar API, arXiv API, CrossRef API, CNKI (via browser automation)
- For `science-edu-template-trainer`: pandoc (for Word/PDF conversion)

## Platform Dependencies

Two skills contain tool calls specific to the Kimi Claw (Moonshot AI) platform. All pedagogical frameworks and design logic are platform-agnostic — only the tool invocation syntax needs adaptation when porting.

### `research-lineage` — Heavy dependency (29 references in SKILL.md)

The entire CoE verification pipeline routes through four Kimi-specific tools:

| Tool | Function | Suggested replacement |
|------|----------|----------------------|
| `kimi_search` | Web search | Any search tool (`web_search`, Tavily, Exa, etc.) |
| `kimi_datasource_call` + `kimi_datasource_get_desc` | Academic database queries (arXiv, Google Scholar) | Direct API calls (arXiv API, Semantic Scholar API) or platform equivalents |
| `kimi_fetch` / `web_fetch` | Direct URL content fetching | Any fetch tool (`requests`, `playwright`, `firecrawl`, etc.) |

**Porting method:** Rewrite only the tool routing table in SKILL.md (search strategy section), replacing each `kimi_*` call with your platform's equivalent. The CoE 6-step verification logic, hallucination detection, and citation graph construction are entirely platform-independent.

### `science-edu-activity` — Light dependency (10 references)

Tool call examples appear in two places:

1. **SKILL.md** — API call examples for literature retrieval (7 references)
2. **`references/accuracy-assurance.md` and `references/knowledge-deconstruction.md`** — tool names in verification workflows (3 references)

**Porting method:** These are example-level references. Replace `kimi_search` with your search tool, `kimi_datasource_call` with your academic API wrapper, and `kimi_fetch` with your fetch tool. The 5-stage knowledge deconstruction, 13-framework decision tree, UDL × SDT design, and all pedagogical logic require zero changes.

### No dependency

`science-edu-template-trainer` — fully platform-agnostic.

## License

MIT
