"use client";

import axios from "axios";
import { toast } from "sonner";
import { Plus } from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { columns } from "./columns";
import { Sessions } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

export const SessionsClient = ({
  initialData,
}: {
  initialData: Sessions[];
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onStartNewSession = async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/sessions", { amount: "90" });
      toast.success("Session is start!");
      router.refresh();
    } catch (error) {
      toast.success("Failed to start a new session!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading
        title="Sessions"
        description="You can added session from one place."
      >
        <Button disabled={isLoading} onClick={() => onStartNewSession()}>
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>
      </Heading>
      <Separator />
      <DataTable columns={columns} data={initialData} />
    </>
  );
};
