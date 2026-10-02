# Dam and Levee Safety Program

Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records.

## Implemented records

- **Safety Asset**: name, asset Number, asset Type, owner, location, inspection Due At, status.
- **Engineering Inspection**: title, inspected At, engineer, observations, severity, next Due At, status.
- **Instrument**: name, instrument Code, location, measurement Unit, commissioned At, status.
- **Instrument Reading**: title, measured At, value, observer, condition Notes, status.
- **Action Threshold**: title, lower, upper, rule Version, engineer Reference, status.
- **Corrective Action**: title, finding, owner, due At, action, evidence, status.
- **Emergency Plan**: title, version, adopted At, contacts, activation Instructions, exercise Due At, status.
- **Emergency Exercise**: title, exercised At, coordinator, scenario, lessons, corrective Actions, status.
- **Asset Maintenance**: title, equipment, serviced At, contractor, work Description, receipt, status.
- **Operational Task**: title, owner, priority, start At, due At, done, notes, status.
- **Rule Version**: title, jurisdiction, version, effective At, expires At, source Url, requirement Text, status.
- **Document Requirement**: title, category, required By, source Reference, evidence Reference, review Notes, status.

## AI workflows

- Engineer observation summary: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Instrument anomaly explanation: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Corrective action draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Emergency plan completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Exercise lessons summary: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Annual safety program narrative: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Evidence completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Operations handoff draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.

## Calculations

- Instrumentation threshold comparison: Compare instrument readings with engineer-supplied thresholds; no engineering safety determination is made.
- Safety Asset evidence checklist: Check source presence against an explicitly supplied document list; reviewer assesses adequacy.
- Operational deadline queue: Compute overdue items from entered dates and completed flags; no external notifications.

## Workspace features

Role-based login and account management; validated create/edit/delete; required parent and sibling relationships; search and pagination; atomic JSON imports; CSV/JSON exports; optimistic concurrency; two independent human reviews; immutable source-text uploads with independent review; dated task calendar; aggregate reports; searchable audit trail; model catalog and administrator AI settings; configured HTTPS connectors with approval, idempotency and receipt checks.

## Integration boundaries

A finite working scope, not every conceivable feature. No production regulator, insurer, carrier, court, university or clinical integration is preconfigured. Source uploads support text/CSV/JSON/Markdown, not OCR/PDF parsing. AI produces drafts and cannot authorize clinical handling, adjudicate rights, select recipients or jurors, establish eligibility, certify regulatory compliance or send submissions. Live external execution requires a configured adapter and independent human approval of the current record. Calculations use supplied rules and units; example rules are fictional.
