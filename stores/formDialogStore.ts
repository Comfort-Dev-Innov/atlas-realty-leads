import { create } from 'zustand';

export type DemoDataType = {
  number_of_records: number;
  total_amount: number;
  price: number;
};

export type CustomerDataType = {
  first_name: string;
  middle_name?: string;
  last_name: string;
  zip_code: string;
  email: string;
  phone_number: string;
  selected_plan: string | null | undefined;
  demo_data?: DemoDataType;
};

interface FormDialogStore {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: CustomerDataType;
  setFormData: (data: CustomerDataType) => void;
  error: boolean;
  setError: (error: boolean) => void;
  success: boolean;
  setSuccess: (success: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
  reset: () => void;
  setSelectedPlan: (selected_plan: string) => void;
}

export const useFormDialogStore = create<FormDialogStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  data: {
    first_name: '',
    middle_name: '',
    last_name: '',
    zip_code: '',
    email: '',
    phone_number: '',
    selected_plan: null,
  },
  setFormData: (data) => set({ data }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  error: false,
  setError: (error) => set({ error }),
  success: false,
  setSuccess: (success) => set({ success }),
  errorMessage: '',
  setErrorMessage: (errorMessage) => set({ errorMessage }),
  setSelectedPlan: (selected_plan) =>
    set((state) => ({
      data: { ...state.data, selected_plan },
    })),
  reset: () =>
    set({
      open: false,
      data: {
        first_name: '',
        middle_name: '',
        last_name: '',
        zip_code: '',
        email: '',
        phone_number: '',
        selected_plan: null,
      },
      isLoading: false,
      error: false,
      success: false,
      errorMessage: '',
    }),
}));
