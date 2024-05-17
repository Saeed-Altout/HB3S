"use client";

import { UserPlus } from "lucide-react";
import { Patients } from "@prisma/client";

import { DataTable } from "./data-table";
import { columns } from "./columns";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCreateModal } from "@/hooks/use-create-modal";

export const PatientsClient = ({
  initialData,
}: {
  initialData: Patients[];
}) => {
  const createModal = useCreateModal();
  return (
    <>
      <Heading title="Patients" description="All patients in our care.">
        <Button size="icon" onClick={() => createModal.onOpen()}>
          <span className="sr-only">UserPlus</span>
          <UserPlus className="h-5 w-5" />
        </Button>
      </Heading>
      <Separator />
      <DataTable columns={columns} data={initialData} />
    </>
  );
};
