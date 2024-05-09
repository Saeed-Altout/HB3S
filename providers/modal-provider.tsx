"use client";

import { useEffect, useState } from "react";

import { CreatePerson } from "@/components/modals/create-person";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <CreatePerson />;
};
