import test from "node:test"; import assert from "node:assert/strict"; import {readFileSync,existsSync} from "node:fs";
test("featurepack fallback labelled + insights route auth",()=>{
 const fp=readFileSync("src/lib/featurepack.ts","utf8");
 assert.ok(fp.includes("aiGenerated: false")); assert.ok(fp.includes("inspection-backlog")); assert.ok(fp.includes("deterministic-fallback"));
 assert.ok(existsSync("src/app/api/insights/domain/route.ts"));
 const r=readFileSync("src/app/api/insights/domain/route.ts","utf8"); assert.ok(r.includes("requireUser")); assert.ok(r.includes("401"));
 assert.ok(fp.includes('v === false') && fp.includes('v === 0'));
});
