import { NextRequest, NextResponse } from "next/server";
import { ocr } from "~/server/ocr"; 

export async function GET(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const image = searchParams.get("image");

  if (!image) {
    return NextResponse.json({ error: "Image URL is required" }, { status: 400 });
  }

  try {
    const text = await ocr(image);
    return NextResponse.json({ text: text }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to perform OCR" }, { status: 500 });
  }
} 