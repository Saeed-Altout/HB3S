import { create } from "zustand";

interface UseCreatePersonProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreatePerson = create<UseCreatePersonProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
