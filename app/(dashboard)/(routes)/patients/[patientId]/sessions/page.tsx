import { ClientSessions } from "./_components/client";
import { getSessionsById } from "@/data/patients";

export default async function SessionsPage({
  params,
}: {
  params: { patientId: string };
}) {
  const sessions = await getSessionsById(params.patientId);

  return (
    <div className="space-y-6">
      <ClientSessions sessions={sessions} />
    </div>
  );
}
