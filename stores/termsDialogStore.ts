import { create } from 'zustand';

interface TermsDialogStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useTermsDialogStore = create<TermsDialogStore>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
