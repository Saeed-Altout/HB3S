import { create } from "zustand";

interface UseCreatePatientProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreatePatient = create<UseCreatePatientProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
