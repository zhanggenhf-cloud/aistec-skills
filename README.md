[🌐 中文](README.zh.md) | English

---

# AISTEC Skills

AI-driven Integrated Science & Technology Education Content Creation Framework

## Overview

This repository contains three OpenClaw AgentSkills that power the AISTEC (AI-driven Integrated Science Education Content Creation Framework) system.

The framework integrates:
- **Citation verification via multi-API cross-check** (Semantic Scholar + arXiv + CrossRef + Google Scholar + CNKI)
- **12 verified pedagogical frameworks** auto-matched by decision tree (5E, 7E, 4-Stage, PBL, Design Thinking, IBL, POE, REACT, UbD, GRRF, IDM, Guided Play)
- **Internal formative assessment feedback** — multi-dimensional evaluation used as system-internal auto-correction, not exposed to end users
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
Science education activity plan generator. Grounded in constructivist learning theory and inquiry-based learning, supporting UDL (Universal Design for Learning) mandatory embedding.

**Key features:**
- 12 pedagogical frameworks auto-selected by decision tree (5E, 7E, 4-Stage, PBL, Design Thinking, IBL, POE, REACT, UbD, GRRF, IDM, Guided Play)
- UDL (Universal Design for Learning) three-principles mandatory embedding
- Internal formative assessment feedback — auto-corrects plan without exposing evaluation rubrics
- Multi-dimensional internal feedback loop (scientific accuracy, educational effectiveness, inquiry process, learning experience)
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

## License

MIT
