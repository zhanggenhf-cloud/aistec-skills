[🌐 中文](README.zh.md) | English

---

# AISTEC Skills

AI-driven Integrated Science Education Content Creation Framework
## Overview

This repository contains three OpenClaw AgentSkills that power the AISTEC (AI-driven Integrated Science Education Content Creation Framework) system.

The framework integrates:
- **zero-misattribution citation verification** via multi-API cross-audit (I3 audit: Semantic Scholar + arXiv + CrossRef)
- **13 pedagogical frameworks** auto-matched by decision tree (5E, PBL, Design Thinking, POE, 7E, etc.)
- **Internal formative assessment feedback** — SMEALOS four-dimension evaluation used as system-internal auto-correction, not exposed to end users
- **SSI termination condition** — automatic halt when topics involve scientific controversy, ethical decisions, or social policy

## Skills

### 1. `research-lineage`
Research lineage intelligent梳理 engine. Integrates CiteSpace/VOSviewer bibliometric analysis with PRISMA systematic screening and CoE zero-misattribution citation verification.

**Key features:**
- 6-round joint retrieval (WebSearch + arXiv + Scholar + Semantic Scholar + CrossRef + CNKI browser automation)
- PI citation graph construction (seed papers → 2-hop citation graph → elite pool via LLM dual scoring)
- CoE 6-step verification (A→B→C→D→E→F): graph building → API screening → bibliographic cross-check → I3 multi-API audit → LLM summary entailment → timeline consistency + upstream contamination detection
- 5-class hallucination detection (TF/PAC/IH/PH/SH) with inline evidence tags `{source}`

### 2. `science-edu-activity`
Science education activity plan generator. Built on CIC "Context-Inquiry-Construction" triadic model and ACPRE "4-dimension 5-step" cognitive psychology design model.

**Key features:**
- 13 pedagogical frameworks auto-selected by decision tree
- UDL (Universal Design for Learning) three-principles mandatory embedding
- Internal formative assessment feedback — auto-corrects plan without exposing evaluation rubrics
- SMEALOS 4-dimension internal feedback loop (Scientific Literacy / Interest / Inquiry Ability / Learning Experience)
- SSI termination condition — halts generation for controversial ethical/policy topics
- CoE citation verification integrated into scientific background knowledge validation
- STEM/STEAM integration mapping, NGSS 3-dimensional alignment

### 3. `science-edu-template-trainer`
Template extraction and migration learning engine. Converts historical activity plans into standardized templates via 9-phase multi-dimensional quality analysis.

**Key features:**
- 9-phase pipeline: input validation → structural analysis → linguistic analysis → benchmarking → statistical aggregation → knowledge gap audit → template generation → scenario adaptation → validation
- Fairness audit (cultural responsiveness, gender equity, accessibility, socioeconomic inclusion)
- Cost-benefit analysis (per-capita cost, time efficiency, educational ROI)
- Multi-scenario optimization (Museum / School / Outdoor / Workshop)

## Installation

These are OpenClaw AgentSkills. Place each skill directory under your OpenClaw skills path (e.g. `~/.openclaw/workspace/skills/`).

## Requirements

- OpenClaw with kimi-search plugin
- Access to: Semantic Scholar API, arXiv API, CrossRef API, CNKI (via browser automation)
- For `science-edu-template-trainer`: pandoc (for Word/PDF conversion)

## License

MIT
