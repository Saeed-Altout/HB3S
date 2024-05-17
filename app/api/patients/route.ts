import { NextResponse } from "next/server";
import { db } from "@/lib/db";

async function getNextSequentialId() {
  const lastRecord = await db.patients.findFirst({
    orderBy: {
      sequentialId: "desc",
    },
  });
  return lastRecord ? lastRecord.sequentialId + 1 : 1;
}

function formatSequentialId(id: number) {
  return id.toString().padStart(4, "0");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const nextId = await getNextSequentialId();

    const patient = await db.patients.create({
      data: {
        sequentialId: nextId,
        name,
        email,
      },
    });

    const formattedPatient = {
      ...patient,
      formattedSequentialId: formatSequentialId(patient.sequentialId),
    };

    return NextResponse.json(formattedPatient);
  } catch (error) {
    console.log("[PATIENTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
