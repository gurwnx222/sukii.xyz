import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/shared/config/database";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json(
      { message: "Database connected successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error connecting to database", error: error.message },
      { status: 500 }
    );
  }
}
