import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = auth();
    const body = await req.json();
    const { name } = body;

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const person = await db.person.create({
      data: {
        name,
      },
    });

    return NextResponse.json(person);
  } catch (error) {
    console.log("[PERSONS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
