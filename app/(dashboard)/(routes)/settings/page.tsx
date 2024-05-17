import Image from "next/image";
import { HashIcon, Mail, Text } from "lucide-react";

import { currentUser } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";

export default async function SettingsPage() {
  const { id, name, image, email } = await currentUser();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-start gap-x-5">
        <Image
          src={image || "/avatar.png"}
          alt="image user"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
        <div className="space-y-3">
          <h3 className="flex items-center">
            <HashIcon className="h-5 w-5 mr-2" /> {id}
          </h3>
          <h3 className="flex items-center">
            <Text className="h-5 w-5 mr-2" />{" "}
            <span className="capitalize">{name}</span>
          </h3>
          <h3 className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            {email}
          </h3>
        </div>
      </div>
      <Separator />
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe
        iusto earum reprehenderit praesentium suscipit omnis iste a deserunt, ad
        expedita. Aliquam pariatur vel dignissimos neque magnam non atque in?
      </div>
    </div>
  );
}
