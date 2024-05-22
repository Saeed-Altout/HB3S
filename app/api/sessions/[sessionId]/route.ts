import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export async function DELETE(
  req: Request,
  { params }: { params: { sessionId: string } }
) {
  try {
    const { id: userId } = await currentUser();

    if (!userId) {
      return new NextResponse("Unauthorized!", { status: 401 });
    }

    if (!params.sessionId) {
      return new NextResponse("Session id is required!", { status: 400 });
    }

    const session = await db.sessions.delete({
      where: {
        id: params.sessionId,
      },
    });

    return NextResponse.json(session);
  } catch (error) {
    console.log("[SESSIONS_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
