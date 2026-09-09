# Science Education Activity Skill

An OpenClaw AgentSkill for generating comprehensive, pedagogically sound science education activity plans. Deconstructs scientific concepts or exhibit descriptions into teachable, hands-on activities for museums, schools, and science centers.

## What This Skill Does

Transforms scientific concepts into engaging educational experiences through:

- **Problem-Logic Translation** — Converts "paper logic" to "problem logic": finds the *hook* (what everyday frustration does this solve?) and designs *skyhook analogies* (anchoring unfamiliar concepts to familiar experiences)
- **Scientific Narrative Collection** — Gathers story fragments that humanize science: moments of failure, serendipity, and the "shower moment" insights that make science relatable
- **Pedagogical Framework Selection** — Auto-selects from 12+ frameworks (5E, 4-Stage, PBL, Design Thinking, IBL, Guided Play, POE, etc.) based on topic and constraints
- **UDL × SDT Integration** — Universal Design for Learning merged with Self-Determination Theory to support diverse learners while nurturing intrinsic motivation
- **ICAP Cognitive Engagement** — Ensures activity progression climbs from Passive → Active → Constructive → Interactive
- **Chain-of-Evidence (CoE) Architecture** — Zero-hallucination citation validation through multi-API cross-verification (Semantic Scholar, arXiv, CrossRef, Google Scholar, CNKI)

## Supported Domains

Physics · Chemistry · Biology · Astronomy · Geography · Interdisciplinary STEM/STEAM

## Output Includes

- Activity metadata (age, duration, group size, discipline)
- Theoretical framework justification
- SMART learning objectives (Bloom's aligned)
- Background knowledge with verified literature references
- Framework-specific activity flow with facilitator guides
- UDL differentiation plan
- STEM/STEAM integration map
- Metacognition embedding points
- ICAP level annotations
- Materials list with cost estimates
- Safety protocols and contingency plans
- Museum-School Partnership guide (when applicable)
- Family Learning guide (when applicable)
- Assessment rubrics with UDL alternatives

## Key Design Principles

| Principle | Implementation |
|-----------|---------------|
| **Hook First** | Every activity answers: *What is this like? What is it good for? What does it have to do with me?* |
| **Honest About Limits** | Actively discloses current uncertainties (⚠️ known limitation) — builds trust through transparency |
| **Struggle by Design** | Reserves productive failure space; doesn't rush to answers |
| **Multi-Audience Ready** | Prepares one-sentence (layperson), one-paragraph (enthusiast), and detailed (peer) versions |
| **Narrative-Rich** | Weaves in stories of scientific struggle, accidental discoveries, and contemporary researcher voices |
| **Participation Interfaces** | Open-ended questions and hands-on challenges turn learning into a puzzle |

## When to Use

- Creating activity plans for science museums, nature centers, or maker spaces
- Designing lesson plans for school science classes
- Converting exhibit descriptions into interactive educational experiences
- Developing STEM/STEAM activities for various age groups
- Adapting complex scientific concepts for public understanding

## Usage

```
# Concept to Activity
"Design an activity about light refraction for elementary students"

# Exhibit to Activity
"We have a Van de Graaff generator exhibit — design a companion activity"

# Requirements-Driven
"45 minutes, 20 kids, ages 8-10, under $50 budget, physics"
```

## File Structure

```
skills/science-edu-activity/
├── SKILL.md                          # Main skill definition
├── references/
│   ├── knowledge-deconstruction.md   # 5-stage deconstruction methodology
│   ├── output-schema.md              # Complete output format spec
│   ├── error-correction.md           # Multi-layer QA mechanisms
│   ├── accuracy-assurance.md         # Scientific accuracy verification
│   ├── icap-framework.md             # ICAP cognitive engagement
│   ├── metacognition-design.md       # Metacognition embedding
│   ├── sdt-motivation.md             # Self-Determination Theory
│   ├── teaching-strategies.md        # Strategy tool mapping
│   └── edge-cases.md                 # Edge cases & fallbacks
└── README.md / README.zh.md
```

## License

MIT — feel free to adapt and extend.
