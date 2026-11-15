import { NextResponse } from "next/server";
import { incrementLinkClick } from "@/lib/clicks";
import { links } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "Unknown link" }, { status: 404 });
  }

  try {
    await incrementLinkClick(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to record link click:", error);
    return NextResponse.json(
      { error: "Click not recorded" },
      { status: 503 },
    );
  }
}
