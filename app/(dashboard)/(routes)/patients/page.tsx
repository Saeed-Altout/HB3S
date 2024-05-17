import { PatientsClient } from "./_components/client";

import { getPatients } from "@/data/patients";

export default async function PatientsPage() {
  const data = await getPatients();

  return (
    <div className="space-y-6">
      <PatientsClient initialData={data} />
    </div>
  );
}
