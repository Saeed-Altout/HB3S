import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { id: userId } = await currentUser();
    const body = await req.json();
    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const person = await db.person.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(person);
  } catch (error) {
    console.log("[PERSONS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
