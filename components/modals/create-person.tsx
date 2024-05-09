"use client";

import { Modal } from "@/components/ui/modal";
import { useCreatePerson } from "@/hooks/use-create-person";

export const CreatePerson = () => {
  const personModal = useCreatePerson();

  return (
    <Modal
      title="Add a new person"
      description="You can added a new person to dashboard."
      isOpen={personModal.isOpen}
      onClose={personModal.onClose}
    >
      Add a new person Form
    </Modal>
  );
};
