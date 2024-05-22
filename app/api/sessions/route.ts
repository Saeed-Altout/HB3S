import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

async function getNextSequentialId() {
  const lastRecord = await db.sessions.findFirst({
    orderBy: {
      sequentialId: "desc",
    },
  });
  return lastRecord ? lastRecord.sequentialId + 1 : 1;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount } = await body;
    const { id: userId } = await currentUser();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    const nextId = await getNextSequentialId();

    const session = await db.sessions.create({
      data: {
        sequentialId: nextId,
        amount,
      },
    });

    return NextResponse.json(session);
  } catch (error) {
    console.log("[SESSIONS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
