import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
export default async function SettingsPage() {
  const { id, name } = await currentUser();

  return (
    <div>
      <div>ID :{id}</div>
      <div>Name :{name}</div>
    </div>
  );
}
