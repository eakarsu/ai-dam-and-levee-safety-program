import { NextRequest, NextResponse } from "next/server";
import { requireUser } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { domainInsights } from "@/lib/featurepack";
export async function GET(request: NextRequest) { const user = await requireUser(); if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); const entity = request.nextUrl.searchParams.get("entity") || "Inspection"; void entity; const tasks = await prisma.staffTask.findMany({ take: 10000 }); const rows = tasks as unknown as Record<string, unknown>[]; return NextResponse.json({ aiGenerated: false, insights: domainInsights(rows) }); }
