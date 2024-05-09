"use client";

import { useEffect } from "react";

import { useCreatePerson } from "@/hooks/use-create-person";

export default function DashboardPage() {
  const isOpen = useCreatePerson((state) => state.isOpen);
  const onOpen = useCreatePerson((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div>Dashboard page</div>;
}
