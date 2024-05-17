import { getPatientById } from "@/data/patients";

import { PatientClient } from "./_components/client";

export default async function Patient({
  params,
}: {
  params: { patientId: string };
}) {
  const data = await getPatientById(params.patientId);

  return (
    <div className="space-y-6">
      <PatientClient initialData={data} />
    </div>
  );
}
