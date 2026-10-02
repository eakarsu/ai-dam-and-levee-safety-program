export interface PageConfig {
  label: string;
  href: string;
  description: string;
  entities: string[];
  workflows: string[];
}

export interface EntityConfig {
  name: string;
  label: string;
  fields: Array<{ name: string; kind: "string" | "number" | "boolean" | "date" }>;
}

export interface WorkflowConfig {
  slug: string;
  title: string;
  description: string;
  prompt: string;
  fields: string[];
}

export const appConfig = {
  "slug": "ai-dam-and-levee-safety-program",
  "title": "Dam and Levee Safety Program",
  "tagline": "Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records.",
  "accent": "rose"
};
export const pages: PageConfig[] = [
  {
    "label": "Intake & registers",
    "href": "/registers",
    "description": "Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records.",
    "entities": [
      "SafetyAsset",
      "EngineeringInspection",
      "Instrument"
    ],
    "workflows": [
      "engineer-observation-summary",
      "instrument-anomaly-explanation"
    ]
  },
  {
    "label": "Operational records",
    "href": "/workflow",
    "description": "Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records.",
    "entities": [
      "InstrumentReading",
      "ActionThreshold",
      "CorrectiveAction"
    ],
    "workflows": [
      "corrective-action-draft",
      "emergency-plan-completeness-review"
    ]
  },
  {
    "label": "Review & delivery",
    "href": "/delivery",
    "description": "Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records.",
    "entities": [
      "EmergencyPlan",
      "EmergencyExercise",
      "AssetMaintenance"
    ],
    "workflows": [
      "exercise-lessons-summary",
      "annual-safety-program-narrative"
    ]
  },
  {
    "label": "Tasks & requirements",
    "href": "/operations",
    "description": "Assignments, versioned rules and document requirements.",
    "entities": [
      "OperationalTask",
      "RuleVersion",
      "DocumentRequirement"
    ],
    "workflows": [
      "evidence-completeness-review",
      "operations-handoff-draft"
    ]
  }
];
export const entities: Record<string, EntityConfig> = {
  "SafetyAsset": {
    "name": "SafetyAsset",
    "label": "Safety Asset",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "assetNumber",
        "kind": "string"
      },
      {
        "name": "assetType",
        "kind": "string"
      },
      {
        "name": "owner",
        "kind": "string"
      },
      {
        "name": "location",
        "kind": "string"
      },
      {
        "name": "inspectionDueAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      }
    ]
  },
  "EngineeringInspection": {
    "name": "EngineeringInspection",
    "label": "Engineering Inspection",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "inspectedAt",
        "kind": "date"
      },
      {
        "name": "engineer",
        "kind": "string"
      },
      {
        "name": "observations",
        "kind": "string"
      },
      {
        "name": "severity",
        "kind": "string"
      },
      {
        "name": "nextDueAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "Instrument": {
    "name": "Instrument",
    "label": "Instrument",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "instrumentCode",
        "kind": "string"
      },
      {
        "name": "location",
        "kind": "string"
      },
      {
        "name": "measurementUnit",
        "kind": "string"
      },
      {
        "name": "commissionedAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "InstrumentReading": {
    "name": "InstrumentReading",
    "label": "Instrument Reading",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "instrumentId",
        "kind": "string"
      },
      {
        "name": "measuredAt",
        "kind": "date"
      },
      {
        "name": "value",
        "kind": "number"
      },
      {
        "name": "observer",
        "kind": "string"
      },
      {
        "name": "conditionNotes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "ActionThreshold": {
    "name": "ActionThreshold",
    "label": "Action Threshold",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "instrumentId",
        "kind": "string"
      },
      {
        "name": "lower",
        "kind": "number"
      },
      {
        "name": "upper",
        "kind": "number"
      },
      {
        "name": "ruleVersion",
        "kind": "string"
      },
      {
        "name": "engineerReference",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "CorrectiveAction": {
    "name": "CorrectiveAction",
    "label": "Corrective Action",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "finding",
        "kind": "string"
      },
      {
        "name": "owner",
        "kind": "string"
      },
      {
        "name": "dueAt",
        "kind": "date"
      },
      {
        "name": "action",
        "kind": "string"
      },
      {
        "name": "evidence",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "EmergencyPlan": {
    "name": "EmergencyPlan",
    "label": "Emergency Plan",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "adoptedAt",
        "kind": "date"
      },
      {
        "name": "contacts",
        "kind": "string"
      },
      {
        "name": "activationInstructions",
        "kind": "string"
      },
      {
        "name": "exerciseDueAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "EmergencyExercise": {
    "name": "EmergencyExercise",
    "label": "Emergency Exercise",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "exercisedAt",
        "kind": "date"
      },
      {
        "name": "coordinator",
        "kind": "string"
      },
      {
        "name": "scenario",
        "kind": "string"
      },
      {
        "name": "lessons",
        "kind": "string"
      },
      {
        "name": "correctiveActions",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "AssetMaintenance": {
    "name": "AssetMaintenance",
    "label": "Asset Maintenance",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "equipment",
        "kind": "string"
      },
      {
        "name": "servicedAt",
        "kind": "date"
      },
      {
        "name": "contractor",
        "kind": "string"
      },
      {
        "name": "workDescription",
        "kind": "string"
      },
      {
        "name": "receipt",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "OperationalTask": {
    "name": "OperationalTask",
    "label": "Operational Task",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "owner",
        "kind": "string"
      },
      {
        "name": "priority",
        "kind": "string"
      },
      {
        "name": "startAt",
        "kind": "date"
      },
      {
        "name": "dueAt",
        "kind": "date"
      },
      {
        "name": "done",
        "kind": "boolean"
      },
      {
        "name": "notes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "RuleVersion": {
    "name": "RuleVersion",
    "label": "Rule Version",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "jurisdiction",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "expiresAt",
        "kind": "date"
      },
      {
        "name": "sourceUrl",
        "kind": "string"
      },
      {
        "name": "requirementText",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  },
  "DocumentRequirement": {
    "name": "DocumentRequirement",
    "label": "Document Requirement",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "category",
        "kind": "string"
      },
      {
        "name": "requiredBy",
        "kind": "date"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "evidenceReference",
        "kind": "string"
      },
      {
        "name": "reviewNotes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "safetyAssetId",
        "kind": "string"
      }
    ]
  }
};
export const workflows: WorkflowConfig[] = [
  {
    "slug": "engineer-observation-summary",
    "title": "Engineer observation summary",
    "description": "Engineer observation summary using selected safety asset records and supplied evidence.",
    "prompt": "Engineer observation summary for Dam and Levee Safety Program. Operational scope: Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records. Specific AI scope: Summarize engineer observations and flag overdue evidence; engineers make safety determinations. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "instrument-anomaly-explanation",
    "title": "Instrument anomaly explanation",
    "description": "Instrument anomaly explanation using selected safety asset records and supplied evidence.",
    "prompt": "Instrument anomaly explanation for Dam and Levee Safety Program. Operational scope: Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records. Specific AI scope: Summarize engineer observations and flag overdue evidence; engineers make safety determinations. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "corrective-action-draft",
    "title": "Corrective action draft",
    "description": "Corrective action draft using selected safety asset records and supplied evidence.",
    "prompt": "Corrective action draft for Dam and Levee Safety Program. Operational scope: Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records. Specific AI scope: Summarize engineer observations and flag overdue evidence; engineers make safety determinations. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "emergency-plan-completeness-review",
    "title": "Emergency plan completeness review",
    "description": "Emergency plan completeness review using selected safety asset records and supplied evidence.",
    "prompt": "Emergency plan completeness review for Dam and Levee Safety Program. Operational scope: Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records. Specific AI scope: Summarize engineer observations and flag overdue evidence; engineers make safety determinations. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "exercise-lessons-summary",
    "title": "Exercise lessons summary",
    "description": "Exercise lessons summary using selected safety asset records and supplied evidence.",
    "prompt": "Exercise lessons summary for Dam and Levee Safety Program. Operational scope: Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records. Specific AI scope: Summarize engineer observations and flag overdue evidence; engineers make safety determinations. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "annual-safety-program-narrative",
    "title": "Annual safety program narrative",
    "description": "Annual safety program narrative using selected safety asset records and supplied evidence.",
    "prompt": "Annual safety program narrative for Dam and Levee Safety Program. Operational scope: Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records. Specific AI scope: Summarize engineer observations and flag overdue evidence; engineers make safety determinations. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "evidence-completeness-review",
    "title": "Evidence completeness review",
    "description": "Evidence completeness review using selected safety asset records and supplied evidence.",
    "prompt": "Evidence completeness review for Dam and Levee Safety Program. Operational scope: Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records. Specific AI scope: Summarize engineer observations and flag overdue evidence; engineers make safety determinations. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "operations-handoff-draft",
    "title": "Operations handoff draft",
    "description": "Operations handoff draft using selected safety asset records and supplied evidence.",
    "prompt": "Operations handoff draft for Dam and Levee Safety Program. Operational scope: Maintain inspection evidence, instrumentation trends, corrective actions, emergency plans and exercise records. Specific AI scope: Summarize engineer observations and flag overdue evidence; engineers make safety determinations. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  }
];
export function findPage(href:string){return pages.find(p=>p.href===href);}
