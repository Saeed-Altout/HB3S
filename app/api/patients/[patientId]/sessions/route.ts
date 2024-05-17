import { NextResponse } from "next/server";
import { db } from "@/lib/db";

async function getNextSequentialId() {
  const lastRecord = await db.sessions.findFirst({
    orderBy: {
      sequentialId: "desc",
    },
  });
  return lastRecord ? lastRecord.sequentialId + 1 : 1;
}

function formatSequentialId(id: number) {
  return id.toString().padStart(4, "0");
}

export async function POST(
  req: Request,
  { params }: { params: { patientId: string } }
) {
  try {
    if (!params.patientId) {
      return new NextResponse("Patient id is required", { status: 400 });
    }

    const nextId = await getNextSequentialId();

    const session = await db.sessions.create({
      data: {
        sequentialId: nextId,
        patientId: params.patientId,
      },
    });

    const formattedPatient = {
      ...session,
      formattedSequentialId: formatSequentialId(session.sequentialId),
    };

    return NextResponse.json(formattedPatient);
  } catch (error) {
    console.log("[SESSIONS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
