---
name: science-edu-template-trainer
description: >
  Train and extract general-purpose activity plan templates by analyzing existing
  science education activity plans. Use when the user wants to create a standardized
  template from a collection of existing activity plans, update the output format
  constraints for activity generation, or customize templates for specific institutions
  (museums, schools, science centers). Analyzes structure, pedagogical patterns,
  and best practices to generate comprehensive template specifications.
---

# Science Education Activity Template Trainer

This skill analyzes collections of science education activity plans to extract patterns, best practices, and structural norms, then generates standardized templates that can be used as output format constraints for activity generation.

## When to Use This Skill

Use this skill when:
- Creating a standardized template from an existing collection of activity plans
- Updating or improving the output format for science education activities
- Customizing templates for specific contexts (museums vs. schools vs. outdoor programs)
- Establishing organizational standards for activity documentation
- Migrating legacy activity plans to a modern, consistent format
- Benchmarking your activities against best practices

## Core Workflow

### Phase 1: Input Ingestion & Validation

1. **Collect Activity Plans**
   - Accept files via upload, folder path, or paste
   - Support formats: .md, .docx, .pdf, .txt
   - Minimum viable: 5 plans; Optimal: 20-50 plans

2. **Validate Input Quality**
   Check each plan for:
   - [ ] Basic completeness (has title, objectives, procedure)
   - [ ] Implementability (specific enough to execute)
   - [ ] Age-appropriateness indication
   
   Flag low-quality inputs for user review

3. **Categorize Inputs**
   Auto-classify by:
   - Discipline (physics, chemistry, biology, etc.)
   - Activity type (experiment, field trip, demonstration, etc.)
   - Duration (short/medium/long)
   - Setting (indoor/outdoor, lab/classroom/museum)

### Phase 2: Individual Analysis

For each activity plan, perform comprehensive analysis:

**Analysis Dimensions:**
1. **Metadata Extraction** — Title, age range, duration, group size, discipline
2. **Structure Analysis** — Which sections are present and their quality
3. **Pedagogical Flow** — Presence and distribution of Hook→Exploration→Discussion→Application
4. **Content Depth** — Level of scientific explanation (L1-L4)
5. **Interaction Design** — Types of learner engagement
6. **Assessment** — Evaluation methods used
7. **Language Style** — Formality, perspective, tone
8. **Practicality** — Material accessibility, time realism, safety

**Output:** JSON analysis for each plan + quality scores

### Phase 3: Content Analysis & Linguistic Assessment

For each activity plan, perform deep content analysis beyond structural analysis:

#### 3.1 Readability & Cognitive Load Analysis

**Readability Metrics:**
- **Flesch Reading Ease** (for English plans) / **Chinese Readability Index** (for Chinese plans)
  - Calculate: average sentence length, average word length, complex vocabulary proportion
  - Grading:
    - 90-100: Grade 5-6 level
    - 70-90: Grade 7-8 level
    - 50-70: Grade 9-10 level
    - 30-50: Grade 11-12/University level
    - 0-30: Graduate/Professional level
- **Target age match**: Plan's readability level vs expected reading level for target age
  - Gap > 2 grade levels → Mark "reading difficulty mismatch", suggest adjustment

**Cognitive Load Assessment:**
- **Intrinsic Load**: Complexity of concept itself
  - Evaluate: Does each knowledge point need prerequisite knowledge? Concept hierarchy depth?
  - High intrinsic load → Need longer introduction and more detailed decomposition
- **Extraneous Load**: Extra burden from instructional design
  - Evaluate: Are steps clear? Are materials easily obtainable? Are instructions redundant?
  - High extraneous load → Need simplified steps, optimized materials list
- **Germane Load**: Effective load promoting deep learning
  - Evaluate: Are there analogies, visualizations, life connections?
  - Low germane load → Need strategies promoting deep understanding

**Analysis Method:**
- Extract activity text (instructions, guidance, questions)
- Calculate sentence length, vocabulary complexity, concept density
- Compare with standard educational text corpora for target age
- Annotate readability mismatches and cognitive load high/low positions

#### 3.2 Pedagogical Framework Distribution

Analyze pedagogical framework used in each plan:
- Identify framework type: 5E / 4-Stage / PBL / Design Thinking / SSI / IBL / Other
- Count distribution proportion of each framework in collection
- Identify "framework usage trends": Biased toward one framework? Any framework missing?
- Evaluate framework usage quality: Are framework stages complete? Is logic coherent?

#### 3.3 UDL Coverage Analysis

Check if each plan follows UDL three principles:
- **Multiple representations**: Does each core concept have ≥2 presentation methods?
- **Multiple expressions**: Does each learning objective have ≥2 expression options?
- **Multiple engagements**: Do participants have choice of path/difficulty/role?

**Statistics**:
- Plans with full UDL three-principle coverage
- Plans with 1-2 principle coverage
- Plans with no principle coverage
- Average coverage depth per principle (0-3 points)

#### 3.4 Formative Assessment Integration

Check if each plan includes formative assessment checkpoints:
- Number of checkpoints vs learning objectives (ideal: 1:1)
- Checkpoint embedding positions (scattered in flow, not just at end)
- Checkpoint method diversity (observation/questioning/artifact/discussion/self-assessment)
- Presence of "success indicators" and "below-standard response strategies"

### Phase 4: Quality Scoring & Benchmarking

#### 4.1 Weighted Quality Rubric

Design multi-dimensional weighted scoring criteria:

| Dimension | Weight | Scoring (1-5) | Method |
|-----------|--------|---------------|--------|
| **Scientific Accuracy** | 20% | 1=errors, 3=basically accurate, 5=precise and frontier | Expert review + literature verification |
| **Educational Effectiveness** | 20% | 1=unclear objectives, 3=objectives met but bland, 5=higher-order thinking + deep learning | Bloom's coverage + objective-activity alignment |
| **Framework Completeness** | 15% | 1=chaotic/missing, 3=present but incomplete, 5=complete and logical | Framework identification + stage completeness |
| **Operability** | 15% | 1=unexecutable, 3=executable but hard materials, 5=easy materials + clear steps | Materials list check + step clarity |
| **UDL Coverage** | 10% | 1=no differentiation, 3=partial, 5=full three principles | UDL analysis results |
| **Formative Assessment** | 10% | 1=no assessment, 3=summative only, 5=embedded formative + UDL alternatives | Checkpoint analysis |
| **Safety** | 10% | 1=no warnings, 3=warnings but insufficient, 5=complete protocol + emergency | Safety section check |

**Total Score**:
```
Total = Σ(dimension score × weight) / 5 × 100
```

**Grading**:
- 90-100: Excellent (A)
- 80-89: Good (B)
- 70-79: Satisfactory (C)
- 60-69: Passing (D)
- <60: Needs Improvement (F)

#### 4.2 Benchmarking Against Standards

Compare plan collection against external standards:

**Standards (Optional)**:
- **NGSS**: Three-dimensional framework (CCC+SEP+DCI)
- **中国义务教育科学课程标准**: Physical/Life/Earth/Engineering Science
- **PISA Science Literacy**: Scientific contexts, knowledge, competencies
- **IB MYP Science**: Conceptual understanding, skill development, personal engagement

#### 4.3 Cross-Institutional Comparison

If input comes from multiple institutions, perform horizontal comparison.

### Phase 5: Pattern Aggregation with Statistical Rigor

#### 5.1 Statistical Analysis Enhancement

Add to base statistics:
- **Variance analysis**: Standard deviation of each dimension (identify quality consistency)
- **Correlation analysis**:
  - Framework type vs quality score
  - UDL coverage vs educational effectiveness score
  - Formative assessment count vs learning outcomes
- **Cluster analysis**: Cluster plans by features
- **Regression analysis**: Identify key factors affecting quality score

#### 5.2 Trend Analysis (Longitudinal)

If plans have timestamps, analyze design paradigm evolution:
- Time series analysis of each dimension score
- Best practice emergence detection
- Outdated pattern identification
- Innovation assessment

### Phase 6: Gap Analysis & Equity Audit

#### 6.1 Curriculum Coverage Gap Analysis

Identify "knowledge blind spots" in plan collection:
- Discipline coverage statistics (physics/chemistry/biology/astronomy/geography/engineering)
- Grade level coverage (elementary/middle/high/adult)
- Activity type coverage (experiment/observation/model/game/discussion/performance)
- Identify "zero coverage" or "low coverage" areas

#### 6.2 Equity & Diversity Audit

Check fairness and diversity of plan collection:
- **Cultural responsiveness**: Multiple cultural backgrounds? Western/single-culture centered?
- **Gender equality**: Gender stereotypes?
- **Accessibility**: Considered visual/auditory/motor/cognitive impairments?
- **Socioeconomic inclusivity**: Material costs too high? Depend on expensive equipment?
- **Language diversity**: Multi-language support?

#### 6.3 Cost-Effectiveness Analysis

Calculate educational input-output ratio:
- **Per capita material cost**: Total cost / participants
- **Time efficiency**: Learning objectives / activity duration
- **Educational ROI**: Quality score / per capita cost
- Identify "high value" activities: low cost + high quality + high coverage
- Identify "low value" activities: high cost + low quality + low coverage

### Phase 7: Template Generation

Generate comprehensive template:

**Template Components:**
1. **Template Metadata** — Version, generation source, applicability
2. **Structure Specification** — Required/Recommended/Optional sections
3. **Field Specifications** — Default values, constraints, format rules
4. **Content Guidelines** — Quality standards for each section
5. **Format Standards** — Markdown rules, style guide
6. **Quality Checklist** — Validation criteria

**Customization Options:**
- Base template (generic)
- Museum-optimized (exhibit-focused)
- School-optimized (curriculum-aligned)
- Outdoor-optimized (field-trip-focused)
- Workshop-optimized (short, hands-on)

### Phase 8: Integration with Activity Generator

Prepare template for deployment with activity generation:

**Integration Options:**

1. **Direct Update** — Replace template content (major updates)
2. **Profile Addition** — Create new template-[profile].md file (specialized variants)
3. **Configuration-Based** — Set up profile selection in config

**Version Management:**
- Tag template with semantic version
- Document changes from previous version
- Maintain backward compatibility notes

### Phase 9: Validation & Delivery

1. **Template Validation**
   - Test template by generating a sample activity
   - Verify all required sections are producible
   - Check formatting consistency

2. **User Review**
   - Present template summary with key metrics
   - Highlight key decisions
   - Offer customization before finalization

3. **Delivery**
   - Save template file(s)
   - Provide integration instructions

## Usage Patterns

### Pattern 1: Initialize New Template
**Scenario:** Organization has 30 existing activities in various formats, wants to standardize
```
User: "分析我们馆的30个活动方案，生成一个标准模板"
> Run complete analysis workflow (Phase 1-7)
> Generate museum-optimized template
```

### Pattern 2: Create Specialized Variant
**Scenario:** Museum has good general template, wants outdoor-specific version
```
User: "基于现有模板，为野外考察活动生成专门模板"
> Analyze 10-15 outdoor activity plans
> Generate outdoor-profile template
> Save as template-outdoor.md
```

### Pattern 3: Template Update from New Examples
**Scenario:** Organization has been using template, wants to incorporate newer activities
```
User: "最近设计了10个新活动，想更新现有模板"
> Analyze 10 new plans
> Compare patterns with existing template
> Identify evolution
> Generate template v1.1
> Show diff from v1.0
```

### Pattern 4: Best Practice Extraction
**Scenario:** Want to benchmark and improve existing activities
```
User: "分析我们的活动方案，找出优势和改进点"
> Analyze all plans with multi-dimensional scoring
> Generate comparison report with rankings
> Identify top-performing plans and why
> List actionable recommendations with priority
```

## Output Specifications

### Main Output: Template File

```markdown
# Science Education Activity Plan Template
## Template Metadata
- Version: 1.0.0
- Generated from: 45 activity plans
- Profile: Museum-General
- Date: 2024-XX-XX
- Frameworks supported: 5E, 4-Stage, PBL, Design Thinking, SSI, IBL, POE, 7E

## Structure Requirements

### Required Sections
1. Basic Information (age, duration, group size, discipline)
2. Learning Objectives (3-5, SMART, Bloom's aligned)
3. Pedagogical Framework Selection (explicitly state framework + justification)
4. Activity Flow (framework-specific stages with facilitation guides)
5. Formative Assessment Checkpoints (≥1 per learning objective, embedded in flow)
6. UDL Differentiation Plan (representation, expression, engagement)
7. Materials List (with sourcing info and cost estimates)
8. Safety Notes (risk assessment + emergency procedures)

### Recommended Sections
1. Activity Summary (with safety highlights)
2. Background Knowledge (verified with literature references)
3. STEM/STEAM Integration Map (if applicable)
4. NGSS 3D Alignment (if applicable)
5. Assessment Rubrics (including UDL alternatives)
6. Contingency Plans (weather, participant issues, equipment failure)
7. Extension Resources (further reading, follow-up activities)
8. Literature References (verified, with verification status)

### Optional Sections
1. Venue Requirements
2. Staffing
3. Pre-visit/Post-visit Materials
4. Accessibility Guide (detailed)
5. Parent/Caregiver Notes

## Format Specifications
- Framework-specific flow sections must include detailed facilitation guides
- Each checkpoint must include: check method, success criteria, remediation strategies
- UDL plan must cover all three principles with ≥2 options per principle
- STEM integration must include integration problem statement
- All scientific claims must include accuracy annotations (🔬📐🎭)
- Literature references must include verification status (✅/⚠️/❌)
```

### Secondary Output: Analysis Report

```markdown
# Activity Plan Analysis Report

## Dataset Summary
- Total plans analyzed: 45
- Date range: 2020-2024
- Institutions: 3 museums, 2 schools
- Frameworks used: 5E(40%), 4-Stage(30%), PBL(15%), Design Thinking(10%), SSI(5%)

## Multi-Dimensional Scoring Results

### Overall Quality Distribution
| Grade | Count | % | Institutions |
|-------|-------|---|-------------|
| A (90-100) | 3 | 7% | C Center |
| B (80-89) | 12 | 27% | A Museum, C Center |
| C (70-79) | 20 | 44% | B School, A Museum |
| D (60-69) | 8 | 18% | A Museum |
| F (<60) | 2 | 4% | A Museum |

### Dimension Breakdown
| Dimension | Mean | Std | Top Institution | Bottom Institution |
|-----------|------|-----|----------------|-------------------|
| Scientific Accuracy | 82.5 | 8.3 | C Center (92) | A Museum (68) |
| Educational Effectiveness | 76.3 | 12.1 | C Center (88) | A Museum (62) |
| Framework Completeness | 71.4 | 15.2 | B School (82) | A Museum (55) |
| Operability | 85.2 | 6.7 | A Museum (90) | B School (75) |
| UDL Coverage | 58.3 | 18.5 | C Center (85) | A Museum (35) |
| Formative Assessment | 45.6 | 22.1 | C Center (78) | A Museum (20) |

### Key Findings
- **Framework Correlation**: PBL plans score higher on educational effectiveness (r=0.68)
- **UDL Impact**: Plans with UDL coverage >2.0/3 score 15 points higher on average
- **Assessment Gap**: 55% of plans lack formative assessment checkpoints
- **Safety**: 100% include safety notes (baseline met)
- **Literature**: Only 30% include verified literature references

### Best Practice Examples
[Top 5 plans with detailed scoring breakdown]

### Improvement Opportunities
1. **UDL coverage**: 70% of plans need enhanced differentiation
2. **Formative assessment**: 55% need embedded checkpoints
3. **Framework diversity**: 85% rely on only 2 frameworks (5E + 4-Stage)
4. **Literature verification**: 70% need verified references
5. **STEM integration**: 60% lack meaningful cross-disciplinary connections

### Actionable Recommendations
| Priority | Recommendation | Expected Impact | Effort |
|----------|---------------|----------------|--------|
| P0 | Add formative assessment checkpoints | +20% educational effectiveness | Low |
| P0 | Improve UDL coverage to ≥2.0/3 | +15% overall quality | Medium |
| P1 | Introduce PBL/SSI frameworks | +10% framework completeness | High |
| P1 | Add literature verification flow | +8% scientific accuracy | Medium |
| P2 | Deepen STEM integration | +5% educational effectiveness | Medium |
```

## Quality Assurance

### Input Validation
- Reject plans without basic structure (title, objectives, flow)
- Flag unusually short (<500 chars) or long (>5000 chars) plans
- Check for required safety information (mandatory for physical/chemical activities)
- Verify target age is specified

### Analysis Validation
- Cross-check section detection with manual sampling (10% random sample)
- Verify statistical calculations
- Test pattern recognition accuracy against manual coding
- Calibrate scoring rubric with expert ratings (if available)

### Template Validation
- Generate sample activity using template
- Verify all required sections are producible
- Check formatting consistency across output
- Test UDL checkpoint generation
- Verify framework-specific flow works correctly

## Reference Materials

- [references/analysis-framework.md](references/analysis-framework.md) — Comprehensive analysis dimensions
- [references/template-generation.md](references/template-generation.md) — Template generation guidelines
- [references/integration-guide.md](references/integration-guide.md) — Integration with activity generator
