import { NextResponse } from "next/server";
import { db } from "@/lib/db";

function formatSequentialId(id: number) {
  return id.toString().padStart(4, "0");
}

export async function GET(
  req: Request,
  { params }: { params: { patientId: string } }
) {
  try {
    if (!params.patientId) {
      return new NextResponse("Patient id is required", { status: 400 });
    }

    const patient = await db.patients.findUnique({
      where: {
        id: params.patientId,
      },
    });

    return NextResponse.json(patient);
  } catch (error) {
    console.log("[PATIENT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { patientId: string } }
) {
  try {
    if (!params.patientId) {
      return new NextResponse("Patient id is required", { status: 400 });
    }

    const patient = await db.patients.delete({
      where: {
        id: params.patientId,
      },
    });

    return NextResponse.json(patient);
  } catch (error) {
    console.log("[PATIENT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { patientId: string } }
) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const patient = await db.patients.update({
      where: {
        id: params.patientId,
      },
      data: {
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
    console.log("[PATIENT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
