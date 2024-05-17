import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { patientId: string; sessionId: string } }
) {
  try {
    if (!params.patientId) {
      return new NextResponse("Patient id is required", { status: 400 });
    }
    if (!params.sessionId) {
      return new NextResponse("Session id is required", { status: 400 });
    }

    const session = await db.sessions.findUnique({
      where: {
        id: params.sessionId,
      },
    });

    return NextResponse.json(session);
  } catch (error) {
    console.log("[SESSION_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { patientId: string; sessionId: string } }
) {
  try {
    if (!params.patientId) {
      return new NextResponse("Patient id is required", { status: 400 });
    }
    if (!params.sessionId) {
      return new NextResponse("Session id is required", { status: 400 });
    }

    const session = await db.sessions.delete({
      where: {
        id: params.sessionId,
      },
    });

    return NextResponse.json(session);
  } catch (error) {
    console.log("[SESSION_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
