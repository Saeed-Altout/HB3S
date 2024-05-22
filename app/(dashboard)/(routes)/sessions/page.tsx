import { getSessions } from "@/data/sessions";
import { SessionsClient } from "./_components/client";

export default async function SessionPage() {
  const sessions = await getSessions();
  return (
    <div className="w-full flex-1 overflow-x-hidden space-y-6">
      <SessionsClient initialData={sessions} />
    </div>
  );
}
