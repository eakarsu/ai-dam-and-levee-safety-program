export function displayValue(v: unknown): string { if (v === false) return "false"; if (v === 0) return "0"; if (v === "" || v == null) return "—"; return String(v); }
export function filterRecords<T extends Record<string, unknown>>(rows: T[] = [], q = "", status = "") { const n = q.trim().toLowerCase(); return rows.filter(r => { if (status && String(r.status ?? "") !== status) return false; if (!n) return true; return Object.values(r ?? {}).some(v => v != null && String(v).toLowerCase().includes(n)); }); }
export function toCSV(rows: Record<string, unknown>[] = []): string { const cols = [...new Set(rows.flatMap(r => Object.keys(r ?? {})))]; if (!cols.length) return "id\n"; const esc = (v: unknown) => { const s = displayValue(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }; return [cols.join(","), ...rows.map(r => cols.map(c => esc(r?.[c])).join(","))].join("\n") + "\n"; }
export function labelledSections(record: Record<string, unknown> = {}) { return Object.entries(record ?? {}).map(([label, value]) => ({ label, value: displayValue(value), raw: value ?? null })); }
export function domainInsights(rows: Record<string, unknown>[] = []) {
  const n = rows.length; const open = rows.filter(r => !["DONE","Closed","Approved","CANCELLED"].includes(String(r.status ?? ""))).length;
  const high = rows.filter(r => ["High","Critical"].includes(String(r.risk ?? ""))).length;
  const sum = (label: string, value: unknown) => ({ label, value: displayValue(value) });
  const mk = (id: string, title: string, sections: {label:string;value:string}[]) => ({ id, title, aiGenerated: false as const, source: "deterministic-fallback", sections });
  return [
    mk("inspection-backlog", "Inspection backlog summary", [sum("Records reviewed", n), sum("Open items", open), sum("High/Critical risk", high)]),
    mk("deficiency-risk", "Deficiency risk watch", [sum("Records reviewed", n), sum("High/Critical risk", high), sum("Requires engineer review", open > 0 ? "Yes" : "No")]),
    mk("remediation-priority", "Remediation priority queue", [sum("Open items", open), sum("Next step", open ? "Schedule inspections and assign remediation owners" : "No open items")]),
  ];
}
