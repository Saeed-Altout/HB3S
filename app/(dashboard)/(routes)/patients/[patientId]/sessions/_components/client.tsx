"use client";

import axios from "axios";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { Circle, Play } from "lucide-react";

import { Sessions } from "@prisma/client";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

export const ClientSessions = ({ sessions }: { sessions: Sessions[] }) => {
  const params = useParams();

  const onStart = async () => {
    try {
      await axios.post(`/api/patients/${params.patientId}/sessions`);
      toast.success("Session Start");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Heading
        title="Sessions"
        description="You can start and track all session from one place."
      >
        <div className="flex justify-end items-center gap-x-4">
          <Button onClick={() => onStart()}>
            <Play className="h-5 w-5 mr-2" /> Start
          </Button>
          <Button variant="outline">
            <Circle className="h-5 w-5 mr-2" /> Stop
          </Button>
        </div>
      </Heading>
      <Separator />
      <DataTable columns={columns} data={sessions} />
    </>
  );
};
