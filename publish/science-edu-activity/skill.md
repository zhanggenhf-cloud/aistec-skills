---
name: science-edu-activity
description: >
  Generate science education activity plans from scientific concepts or exhibit descriptions.
  Use when the user wants to create educational activity plans, lesson plans, or hands-on
  science activities for museums, schools, or science centers. Supports concepts from physics,
  chemistry, biology, astronomy, geography, and interdisciplinary topics. Includes knowledge
  deconstruction, structured output formatting, error correction, and accuracy assurance.
  Enhanced with literature search and verification capabilities: integrates academic literature
  retrieval and cross-validation to ensure scientific accuracy in background knowledge and references.
---

# Science Education Activity Generator

This skill generates comprehensive, pedagogically sound science education activity plans by deconstructing scientific concepts or exhibit descriptions into teachable, hands-on activities.

## When to Use This Skill

Use this skill when:
- Creating activity plans for science museums, nature centers, or maker spaces
- Designing lesson plans for school science classes
- Converting exhibit descriptions into interactive educational experiences
- Developing STEM/STEAM activities for various age groups
- Adapting complex scientific concepts for public understanding

## Core Workflow

Follow these phases in order:

### Phase 1: Input Analysis & Classification

First, determine the input type:

| Input Type | Examples | Processing Path |
|-----------|----------|----------------|
| **Scientific Concept** | "Newton's Laws", "Photosynthesis", "Electric Circuits" | Concept → Principles → Applications |
| **Exhibit Description** | Planetarium show, Interactive display, Specimen | Object → Principle → Interaction Design |
| **Activity Requirements** | "30-min activity for 10-year-olds about water" | Goal-Driven Reverse Design |
| **Mixed Input** | "DNA + 45 minutes + 20 students" | Multi-Path Fusion |

**Clarification Triggers** — Ask the user if:
- Target age range is not specified
- Activity duration is unclear
- Group size is unknown
- Resource/venue constraints are not mentioned
- The concept is extremely broad (e.g., just "Physics")

### Phase 2: Knowledge Deconstruction

Load [references/knowledge-deconstruction.md](references/knowledge-deconstruction.md) and apply the 5-stage deconstruction process:

1. **Core Concept Extraction** — Identify topic, principles, prerequisites, learning objectives
2. **Knowledge Breakdown** — Deconstruct into hierarchical knowledge nodes with real-world examples
3. **Instructional Sequencing** — Design pedagogical flow using one of the following frameworks (auto-select based on topic + constraints):
   - **5E Model** (Engage→Explore→Explain→Elaborate→Evaluate) — For inquiry-based science concepts
   - **4-Stage Flow** (Hook→Explore→Discuss→Apply) — For museum/science center interactive activities
   - **PBL (Project-Based Learning)** — For real-world problem solving, interdisciplinary themes
   - **Design Thinking** — For engineering design, maker activities
   - **SSI (Socio-Scientific Issues)** — For ethics controversies, science policy discussions
   - **IBL (Inquiry-Based Learning)** — For open inquiry, science process skills training
4. **Activity Matching** — Match each knowledge node to appropriate activity types (experiments, models, games, etc.)
5. **Differentiation** — Create basic/advanced/challenge variants using **UDL (Universal Design for Learning)** principles:
   - Multiple representations: Same concept presented via visual/auditory/kinesthetic/textual methods
   - Multiple expressions: Participants can demonstrate learning via speaking/writing/drawing/building/acting
   - Multiple engagements: Provide different difficulty levels and interest entry points
6. **STEM/STEAM Integration Check** — If topic allows, identify cross-disciplinary connections and add integration points
7. **Assessment Alignment** — Map learning objectives to formative assessment checkpoints (see below)

### Phase 3: Activity Plan Generation

Load [references/output-schema.md](references/output-schema.md) and generate the complete activity plan including:

- Metadata (name, age, duration, group size, discipline)
- Executive summary with safety highlights
- SMART learning objectives (Bloom's taxonomy aligned)
- Background knowledge (science principles + applications + verified literature references)
- **Pedagogical Framework Selection** — Explicitly state which framework is used and why (5E / 4-Stage / PBL / Design Thinking / SSI / IBL)
- **UDL Differentiation Plan** — How the activity supports diverse learners (multiples of representation, expression, engagement)
- Framework-specific activity flow with facilitator guides
- **Formative Assessment Checkpoints** — Embedded assessment points aligned with each learning objective (see below)
- **STEM/STEAM Integration Map** (if applicable) — Cross-disciplinary connections
- Complete materials list with sourcing info
- Venue requirements and setup instructions
- Assessment rubrics (including UDL-aligned assessment alternatives)
- Contingency plans
- Extension resources
- Literature references (verified, with citations)

### Phase 4: Quality Assurance

Apply multi-layer error correction from [references/error-correction.md](references/error-correction.md):

**Self-Correction Checklist:**
- [ ] All required sections present (see output schema)
- [ ] Scientific concepts are accurate (cross-reference Tier 1 sources)
- [ ] **Key scientific concepts verified via literature search (arXiv/scholar/CNKI at least one)**
- [ ] **Citations passed five-class hallucination detection (TF/PAC/IH/PH/SH)**
- [ ] **Citations annotated with verification status (✅verified / ⚠️pending)**
- [ ] Age-appropriateness verified (Piaget stages)
- [ ] **Pedagogical framework selection is justified** (why this framework for this topic?)
- [ ] **UDL differentiation covers all three principles** (representation, expression, engagement)
- [ ] **Formative assessment checkpoints are aligned with every learning objective**
- [ ] Safety considerations identified and addressed
- [ ] Materials are realistically obtainable
- [ ] Time estimates are realistic
- [ ] Learning objectives match activities
- [ ] Common misconceptions are addressed
- [ ] **STEM/STEAM integration is meaningful (not forced)**
- [ ] **References section contains real, traceable literature citations**
- [ ] **Assessment rubric includes UDL alternatives** (not just written tests)

Apply accuracy assurance from [references/accuracy-assurance.md](references/accuracy-assurance.md):
- Add accuracy annotations (🔬 scientific fact, 📐 simplified model, 🎭 analogy)
- Flag areas needing expert review
- Include verification prompts for controversial topics

## Output Format

Generate output in standard Markdown following the template in [references/output-schema.md](references/output-schema.md). Include:

```markdown
# [Activity Name]

## Basic Information
- **Target Age**: 
- **Duration**: 
- **Group Size**: 
- **Discipline**: 
- **Core Concept**: 

## Activity Summary
...

## Learning Objectives
...

## Background Knowledge
...

## Activity Flow
### Stage 1: Introduction
### Stage 2: Exploration
### Stage 3: Discussion
### Stage 4: Application

## Materials List
...

## Safety Notes
...

## Contingency Plans
...

## References
...
```

## Framework Selection Guide (Pedagogical Framework Selection Guide)

Auto-select the most suitable pedagogical framework based on topic characteristics and constraints:

### Selection Decision Tree

```
Does the topic involve ethics controversy/societal decision-making?
  ├─ Yes → SSI framework (Socio-Scientific Issue)
  └─ No → Does the topic involve engineering design/creating physical objects?
      ├─ Yes → Design Thinking or Engineering Design Process
      └─ No → Does it need to solve a real-world problem?
          ├─ Yes → PBL (Project-Based Learning) or POE/PEE (Predict-Observe-Explain)
          └─ No → Does it emphasize scientific inquiry process/open questions?
              ├─ Yes → IBL (Inquiry-Based Learning) or 5E/7E Model
              │       ├─ Need pre-assessment/expose pre-conceptions → 7E (add Elicit)
              │       ├─ Need extension → 7E (add Extend)
              │       └─ Standard inquiry → 5E
              └─ No → Does it need to connect to life experience/real contexts?
                  ├─ Yes → REACT (Relate-Experience-Apply-Cooperate-Transfer)
                  └─ No → 4-Stage Flow (museum/science center interactive)
                      └─ Need prediction环节? → POE/PEE
```

### Framework Feature Comparison (Extended)

| Framework | Core Flow | Best For | Age | Time | Assessment Focus | Source |
|-----------|-----------|----------|-----|------|-----------------|--------|
| **5E** | Engage→Explore→Explain→Elaborate→Evaluate | Classic science concepts | Elementary-High | 45-90min | Concept understanding | Bybee et al., 2006 |
| **7E** | Elicit→Engage→Explore→Explain→Elaborate→Extend→Evaluate | Concepts needing pre-test/extension | Elementary-High | 60-120min | Concept understanding + pre-conception shift | Eisenkraft, 2003 |
| **4-Stage** | Hook→Explore→Discuss→Apply | Museum interactive exhibits | All ages | 15-60min | Participation experience | Museum Education |
| **PBL** | Problem→Investigate→Design→Present→Reflect | Real-world problems | Middle+ | Hours-weeks | Problem solving | Krajcik & Blumenfeld, 2006 |
| **POE/PEE** | Predict→Observe/Explore→Explain | Counter-intuitive phenomena | Elementary+ | 20-45min | Pre-conception exposure | White & Gunstone, 2014 |
| **Design Thinking** | Empathize→Define→Ideate→Prototype→Test | Engineering design/maker | Elementary+ | 90min-days | Design iteration | IDEO |
| **SSI** | Issue→Evidence→Perspectives→Decision→Action | Science ethics/policy | Middle+ | 60-120min | Argumentation ability | Sadler, 2004 |
| **IBL** | Question→Hypothesis→Investigate→Analyze→Conclude | Open scientific questions | Elementary+ | 60-180min | Inquiry process | Pedaste et al., 2015 |
| **REACT** | Relate→Experience→Apply→Cooperate→Transfer | Life-connected topics | Elementary+ | 45-90min | Knowledge transfer | Crawford, 2001 |
| **LIA** | Launch→Inquire→Action | Community/environment projects | Elementary+ | 60-180min | Action outcomes | PrimaryConnections, 2024 |
| **UbD** | Identify goals→Determine assessment→Design learning | Reverse design curriculum | All ages | Flexible | Depth of understanding | Wiggins & McTighe, 2005 |
| **GRRF** | Model→Guide→Collaborate→Independent | Skill gradual mastery | All ages | Flexible | Skill proficiency | Fisher & Frey, 2013 |
| **IDM** | Driving question→Supporting questions→Formative tasks→Summative tasks | History/social inquiry | Middle+ | Weeks | Inquiry ability | Grant et al., 2017 |
| **STREAMING** | Science+Tech+Robotics+Engineering+AI+Math+EQ+Inclusion+Gamification | Comprehensive STEM integration | Elementary+ | Flexible | Comprehensive ability | Drigas & Kefalis, 2024 |

### New Framework Details

#### POE / PEE (Predict-Observe-Explain)
Proposed by White & Gunstone (2014), especially suitable for **counter-intuitive scientific phenomena**.

**Flow**:
1. **Predict**: Before showing phenomenon, have students predict what will happen
   - Expose pre-conceptions (including misconceptions)
   - Activate thinking, establish expectations
2. **Observe/Explore**: Conduct demonstration or experiment
   - Students carefully observe actual phenomenon
   - Record observations (compare with predictions)
3. **Explain**: Discuss why predictions and observations differ
   - Identify and correct misconceptions
   - Construct scientific understanding

**Variants**:
- **P-POE**: First design experiment plan (Plan), then Predict-Observe-Explain
- **P-PEE**: First plan (Plan), then Predict-Explore-Explain

**Applicable Scenarios**:
- Counter-intuitive phenomena (e.g., do heavy objects fall faster?)
- Topics with strong pre-conceptions (e.g., force and motion, electricity)
- Short interactive sessions (20-45 minutes)

#### 7E Model
Adds **Elicit** and **Extend** stages on top of 5E (Eisenkraft, 2003).

**Complete Flow**:
1. **Elicit**: Expose students' existing knowledge and pre-conceptions (more focused than 5E's Engage)
2. **Engage**: Stimulate interest, establish connections
3. **Explore**: Hands-on operation, collect data
4. **Explain**: Understand principles, construct knowledge
5. **Elaborate**: Transfer and apply
6. **Extend**: Connect to broader contexts or interdisciplinary themes
7. **Evaluate**: Assess learning outcomes

**When to choose 7E over 5E**:
- Need systematic diagnosis and correction of pre-conceptions
- Topic has strong interdisciplinary connection value
- Have ample time (60-120 minutes)

#### REACT (Relate-Experience-Apply-Cooperate-Transfer)
Emphasizes **real-world context connection** and **knowledge transfer**.

**Flow**:
1. **Relate**: Connect new concepts to students' existing experiences/life
2. **Experience**: Directly experience phenomena through hands-on activities
3. **Apply**: Apply learning in new contexts
4. **Cooperate**: Group collaboration to solve problems
5. **Transfer**: Transfer understanding to completely different contexts

**Applicable Scenarios**:
- Topics emphasizing life applications (e.g., environmental protection, health, energy)
- Long-term projects needing knowledge transfer ability cultivation

#### LIA (Launch-Inquire-Action)
Suitable for **community participation** and **environmental action** science education.

**Flow**:
1. **Launch**: Introduce real community problems
2. **Inquire**: Scientific investigation and data collection
3. **Action**: Take community action based on scientific evidence

**Applicable Scenarios**:
- Environmental science (e.g., local water quality investigation → community advocacy)
- Citizen science projects
- Topics needing real social impact

#### UbD (Understanding by Design, Reverse Design)
Wiggins & McTighe (2005) proposed curriculum design framework.

**Core Principles**:
1. **Identify Desired Results**:
   - Big Ideas
   - Essential Questions
   - Learning Objectives
2. **Determine Acceptable Evidence**:
   - Performance Tasks
   - Other Evidence (Quizzes, Observations, etc.)
   - Self and peer assessment
3. **Plan Learning Experiences**:
   - Learning activities
   - Teaching strategies
   - Resources

**When to use UbD**:
- Design complete curriculum units (not single activities)
- Need to ensure "assessment drives instruction"
- Emphasize deep understanding over surface knowledge

#### GRRF (Gradual Release of Responsibility Framework)
Fisher & Frey (2013) proposed skill teaching framework.

**Four Stages**:
1. **Model (I Do)**: Teacher models, students observe
2. **Guide (We Do)**: Teacher guides, students participate
3. **Collaborate (You Do Together)**: Students collaborate in groups, teacher supports
4. **Independent (You Do Alone)**: Students apply independently

**Applicable Scenarios**:
- Science process skills (measurement, observation, recording)
- Lab operation skills
- Data analysis skills

#### IDM (Inquiry Design Model)
Grant, Swan & Lee (2017) proposed inquiry design model, especially for social studies and SSI.

**Core Elements**:
1. **Compelling Question**: Big question stimulating inquiry
2. **Supporting Questions**: Sub-questions decomposing the compelling question
3. **Formative Tasks**: Activities answering supporting questions
4. **Sources**: Information sources needed to complete tasks
5. **Summative Task**: Final output
6. **Taking Informed Action**: Transform learning into social action

#### STREAMING Framework
Drigas & Kefalis (2024) proposed inclusive STEAM education framework.

**Components**:
- **S**cience, **T**echnology, **R**obotics, **E**ngineering, **A**I, **M**athematics
- **E**motional Intelligence, **I**nclusion, **N**gamification, **G** (holistic integration)

**Core Concept**:
- Not only integrate disciplines, but also emotional intelligence, inclusivity, and gamification
- Suitable for designing future-oriented comprehensive STEM activities

### Framework Switching Notes

Must explicitly state in output:
> **This activity uses [Framework Name] framework because [reason: topic characteristics, target audience, time constraints, etc.].**

### Mixed Use

Some complex topics can mix frameworks:
- First use **4-Stage** for introduction and exploration (museum interactive), then **SSI** for discussion and decision-making (social issues)
- **PBL** projects embed **5E** stages for deep understanding of key concepts
- **Design Thinking** embeds **IBL** stages for scientific experiment validation of hypotheses

## NGSS Three-Dimensional Learning Framework Alignment

All activity designs should reference NGSS (Next Generation Science Standards) three-dimensional learning framework for alignment checking:

**Three Dimensions**:
1. **Science and Engineering Practices (SEPs)** — Scientific and engineering practices:
   - Asking questions / Defining problems
   - Developing and using models
   - Planning and carrying out investigations
   - Analyzing and interpreting data
   - Using mathematics and computational thinking
   - Constructing explanations / Designing solutions
   - Engaging in argument from evidence
   - Obtaining, evaluating, and communicating information

2. **Crosscutting Concepts (CCCs)** — Cross-disciplinary concepts:
   - Patterns
   - Cause and Effect
   - Scale, Proportion, and Quantity
   - Systems and System Models
   - Energy and Matter: Flows, Cycles, and Conservation
   - Structure and Function
   - Stability and Change

3. **Disciplinary Core Ideas (DCIs)** — Disciplinary core concepts:
   - Physical Science
   - Life Science
   - Earth and Space Science
   - Engineering, Technology, and Applications of Science

**Alignment Output Format**:
```markdown
## NGSS Three-Dimensional Learning Alignment

| Dimension | Aligned Element | Activity Reflection |
|-----------|----------------|---------------------|
| **SEP** | Developing and using models | Students make water cycle model |
| **SEP** | Engaging in argument from evidence | Discussion uses data to support viewpoints |
| **CCC** | Systems and system models | Understand water cycle as a system |
| **CCC** | Energy and matter | Track water form changes and energy sources |
| **DCI** | ESS2.C: Role of water in Earth systems | Core concept贯穿 entire activity |

**Performance Expectation**:
- Students can use models to describe water cycling in Earth systems, including water existing in different forms (solid, liquid, gas)
```

**Sensemaking Philosophy**:
NGSS emphasizes shifting from "Learning About" to "Figuring Out".
- Activities should revolve around "Phenomena" rather than "Knowledge points"
- Students "figure out" phenomena through integration of practices, concepts, and cross-disciplinary perspectives
- Assessment should also be three-dimensional, examining practices, concepts, and content simultaneously

## Formative Assessment Checkpoint Design

Each learning objective must have at least one formative assessment checkpoint embedded in the activity flow.

### Design Principles

1. **Alignment**: Each checkpoint corresponds to one specific learning objective
2. **Timing**: Set at "critical understanding nodes", not just at activity end
3. **Diversity**: Use multiple assessment methods (observation, questioning, artifacts, discussion, self-assessment)
4. **Immediate Feedback**: Checkpoints should immediately provide feedback to facilitators for instructional adjustment

### Checkpoint Types

| Type | Applicable Scenario | Tool Examples |
|------|--------------------|---------------|
| **Observation Checkpoint** | Hands-on operation环节 | Observation record (behavior indicators) |
| **Questioning Checkpoint** | Discussion环节 | Key question list (preset follow-ups) |
| **Artifact Checkpoint** | Making/experiment环节 | Artifact evaluation criteria (with success indicators) |
| **Discussion Checkpoint** | Explanation/reflection环节 | Discussion guidance framework (thinking visualization) |
| **Self-Assessment Checkpoint** | Any环节 | Self-assessment scale (1-3 stars) |

### Output Format

Label checkpoints after each activity stage:

```markdown
### Stage X: [Stage Name] (X minutes)

**Formative Assessment Checkpoint #X** (Aligned with learning objective: LX)
- **Check Method**: Observation/Questioning/Artifact/Discussion/Self-assessment
- **Check Content**: Specifically observe what, ask what questions, evaluate what criteria
- **Success Indicator**: What response/artifact/answer indicates objective achieved?
- **Below-Standard Response**: If participants don't achieve, how does facilitator adjust?
  - Simplify strategy: ...
  - Supplement strategy: ...
  - Extension strategy: ...
```

## UDL Differentiation Design (Universal Design for Learning)

Each activity plan must include UDL differentiation design, ensuring participants with different abilities, backgrounds, and learning styles can effectively learn.

### UDL Three Principles in Activities

#### 1. Multiple Means of Representation
Present same concept in multiple ways:
- **Visual**: Diagrams, animations, live demonstrations, mind maps
- **Auditory**: Explanations, discussions, podcasts, audio descriptions
- **Kinesthetic**: Hands-on experiments, model operation, role play
- **Textual**: Reading materials, labels, step lists, concept cards
- **Digital**: Simulation software, interactive apps, AR/VR experiences

**Must label in activity plan**: Each core concept provides ≥2 representation methods.

#### 2. Multiple Means of Action & Expression
Participants demonstrate learning in multiple ways:
- **Speaking**: Oral explanation, group discussion, debate
- **Writing**: Fill record sheets, write lab reports, draw mind maps
- **Making**: Build models, complete experiments, design products
- **Acting**: Role play, scenario simulation, science show performance
- **Creating**: Shoot videos, make posters, write stories

**Must label in activity plan**: Each learning objective provides ≥2 expression options.

#### 3. Multiple Means of Engagement
Provide multiple motivation and participation methods:
- **Interest choice**: Provide 2-3 parallel exploration paths (e.g., "choose Experiment A or B")
- **Difficulty tiering**: Basic/Advanced/Challenge, participants self-select
- **Collaboration modes**: Individual, pair, group, whole class rotation
- **Real-world connection**: Connect to personal life experience, social issues, career scenarios

**Must label in activity plan**: Each stage provides ≥1 engagement choice.

### UDL Checklist

- [ ] Does each core concept have ≥2 representation methods?
- [ ] Does each learning objective have ≥2 expression options?
- [ ] Do participants have choice of path/difficulty/role?
- [ ] Are there alternatives for visual/auditory/reading impairments?
- [ ] Is time pressure adjustable (fast-paced vs slow-paced versions)?
- [ ] Is there structured support for attention-deficit participants?

## STEM/STEAM Integration Design

When topic allows for cross-disciplinary integration, design meaningful STEM/STEAM connections.

### Integration Principles

1. **Not forced**: Integration must be conceptually natural, not "STEM for STEM's sake"
2. **Core-driven**: One discipline's problem as core, others provide tools or perspectives
3. **Real connection**: Connect to real-world problems or career scenarios

### Integration Framework

```
Topic: [Core science concept]

Science (S): [Core concept, e.g., light refraction]
  ↓ Problem: How to design a better diving mask?
Technology (T): [Tools/tech, e.g., optical design software, 3D printing]
  ↓ Application: Use optical simulation to optimize mask shape
Engineering (E): [Design/build, e.g., design diving mask prototype]
  ↓ Output: Build and test prototype
Mathematics (M): [Computation/analysis, e.g., angle calculation, refractive index formula]
  ↓ Analysis: Calculate optimal curvature
Art (A): [Optional, e.g., aesthetic design, user experience]
  ↓ Enhancement: Design comfortable, beautiful mask

Integration Question: How to design a diving mask that is both scientifically effective and aesthetically comfortable?
```

### Output Format

Label in "Background Knowledge" or "Activity Summary":

```markdown
## STEM/STEAM Integration Map

| Discipline | Role in This Activity | Specific Reflection | Activity Stage |
|-----------|----------------------|-------------------|---------------|
| Science | Core concept | Light refraction principle | Exploration stage |
| Technology | Tool support | Laser pointer, optical simulation | Exploration+Application stage |
| Engineering | Design challenge | Design diving mask | Application stage |
| Mathematics | Computation analysis | Refraction angle calculation | Discussion stage |
| Art | Aesthetic enhancement | Mask appearance design | Application stage (optional) |

**Integration Question**: ...
```

## Socio-Scientific Issues (SSI) Design Framework

When topic involves science controversy, ethics decision, or social policy, use SSI framework.

### SSI Core Flow

```
1. Issue Introduction
   → Present a controversial real-world social issue
   → Example: "Should gene-editing baby technology be allowed?"

2. Evidence Collection
   → Provide multi-party scientific evidence (note: not just "correct" evidence)
   → Include: supporting evidence, opposing evidence, uncertain evidence

3. Multiple Perspectives
   → Identify positions of different stakeholders
   → Scientists, doctors, parents, religious figures, policy makers...

4. Weighing Decision
   → Guide students to make their own judgment based on evidence and values
   → Not pursuing "correct answer", but "evidence-based position"

5. Action Recommendation
   → Discuss how to communicate their position to society
   → Write letters, make posters, design advocacy campaigns...
```

### SSI Design Principles

1. **Issue authenticity**: Must be real existing social controversy, not fictional
2. **Evidence balance**: Provide multi-party evidence, don't preset "correct" answer
3. **Value pluralism**: Acknowledge rationality of different values
4. **Argumentation training**: Focus on "evidence-based argumentation", not灌输 conclusions
5. **Scientific literacy**: Enhance participants' ability to "understand how science affects social decision-making"

### SSI Checklist

- [ ] Is the issue real and currently controversial?
- [ ] Are at least 2 opposing scientific evidence provided?
- [ ] Are at least 3 different stakeholder perspectives identified?
- [ ] Is "correct answer" preset avoided?
- [ ] Is there an argumentation framework (claim→evidence→reasoning→rebuttal)?
- [ ] Is there an action环节 (let participants express positions)?

## Literature Search & Verification

Scientific education activities involve scientific principles that must be accurate. This skill integrates literature verification mechanisms to ensure background knowledge and references reliability.

### When to Trigger Literature Search

Must execute literature search in following situations:
- Topic involves scientific frontiers (e.g., quantum computing, gene editing, dark matter)
- Topic has scientific controversies (e.g., climate change details, evolution education)
- Need precise data (e.g., astronomical data, chemical constants, biological statistics)
- User explicitly requests "based on latest research" or "with citations"
- Core concepts in background knowledge are uncertain or have multiple versions

### Search Tools & Flow

#### English Literature Search

1. **arXiv Preprint Search** (suitable for physics, math, CS, biology frontiers)
   ```
   Use academic_search(provider="arxiv", query="[topic] education OR outreach OR popular science", max_results=10)
   ```
   - Extract: title, author, abstract, PDF link, publication date
   - Filter: Prioritize papers related to education/popular science

2. **Google Scholar Search** (suitable for highly cited classic literature)
   ```
   Use academic_search(provider="scholar", query="[topic] science education", num_results=10)
   ```
   - Extract: title, author, citation count, year, journal, link
   - Filter: Prioritize highly cited, education journals

3. **Web Search Supplement** (quickly get reviews and popular science)
   - `web_search` for `[topic] review survey science education`
   - Extract authoritative sources (NASA, CERN, Nature Education, Scientific American, etc.)

#### Chinese Literature Search

1. **CNKI Advanced Search** (suitable for Chinese education/popular science journals)
   - Execute via browser_automation following CNKI flow:
     - Open https://kns.cnki.net/kns8s/AdvSearch
     - Select "Academic Journals" → Can check "PKU Core" (education) or "CSSCI"
     - Input keywords: topic + education/popular science/teaching (e.g., `light refraction + popular science education`)
     - Sort by citation count → 50/page → Abstract view
     - Export "Novelty (Citation Format)" Word file
   - Extract bibliographic records and abstracts for verifying scientific concept accuracy

2. **Web Search Supplement**
   - `web_search` for `[topic] 科普教育 研究`
   - Extract CAS, CAST, and other authoritative sources

### Literature Verification Flow

For each key paper retrieved, execute:

1. **Five-Class Hallucination Detection**:
   - TF (Totally Fabricated): Confirm paper exists via search title+author
   - PAC (Pseudo-Authored): Check author's publication list
   - IH (Incomplete Info): Flag papers missing DOI, volume, page
   - PH (Patchwork Hoax): Cross-check title, author, journal, year must all match
   - SH (Subtle Distortion): Field-by-field comparison with publisher records

2. **Abstract Acquisition**:
   - Priority: arXiv API directly returns abstract
   - Second: web_fetch visit Semantic Scholar / CrossRef pages
   - Chinese: CNKI export file abstracts

3. **Traceability Annotation**:
   - ✅ Verified: Cross-confirmed by multiple sources
   - ⚠️ Pending: Limited sources, suggest manual verification
   - ❌ Failed: Remove from citations

### Citation Format

In "References" section, use:

**English Literature**:
```
Author. (Year). *Title*. Journal/Conference. [DOI/Link]
- Verification Status: ✅ VERIFIED / ⚠️ PENDING
- Abstract Points: [1-2 sentences summarizing relevance to education activity]
```

**Chinese Literature**:
```
Author. (Year). 《Title》. Journal Name, Volume(Issue), Pages.
- Verification Status: ✅ VERIFIED / ⚠️ PENDING
- Abstract Points: [1-2 sentences summarizing]
```

### Citation Standards

- Each activity plan cites at least **2-3** verified papers
- Prioritize: education journals, authoritative popular science sources, museum education research
- Don't cite: unverified blogs, social media, AI-generated content (unless manually verified)
- Frontier concepts: Clearly mark "under active scientific research", introduce different hypotheses

## Example Usage Patterns

**Pattern 1: Concept to Activity**
> User: "Design an activity about light refraction for elementary students"
> Process: Concept classification → Knowledge deconstruction → Activity generation

**Pattern 2: Exhibit to Activity**
> User: "We have a static electricity generator exhibit, want to design a supporting education activity"
> Process: Exhibit analysis → Principle extraction → Interactive design

**Pattern 3: Requirements-Driven**
> User: "Need a 45-minute, 20-person, 8-10 years old, under $50 materials physics activity"
> Process: Constraint matching → Suitable concept selection → Plan generation

## Reference Materials

Load these as needed during the workflow:

- [references/knowledge-deconstruction.md](references/knowledge-deconstruction.md) — Knowledge deconstruction methodology (5 stages)
- [references/output-schema.md](references/output-schema.md) — Complete output format specification
- [references/error-correction.md](references/error-correction.md) — Multi-layer error correction mechanisms
- [references/accuracy-assurance.md](references/accuracy-assurance.md) — Scientific accuracy verification
- [references/example-library.md](references/example-library.md) — Example activities by domain

## Safety Guidelines

Always include safety considerations:

| Risk Level | Examples | Required Actions |
|-----------|----------|-----------------|
| **High** | Chemicals, heat, electricity | Detailed safety protocol + emergency procedures |
| **Medium** | Scissors, small parts, outdoor | Safety warnings + supervision guidelines |
| **Low** | Paper, clay, discussion | General safety reminders |

**Never compromise:**
- Age-inappropriate content
- Unverified scientific claims
- Missing safety warnings for risky activities
- Unrealistic time or material estimates

## Iteration Support

If user requests modifications:

1. Identify which aspect needs change (content, format, difficulty, duration, etc.)
2. Reference the relevant deconstruction stage or output section
3. Apply targeted modification
4. Re-run quality assurance checks
5. Present updated plan with change summary
