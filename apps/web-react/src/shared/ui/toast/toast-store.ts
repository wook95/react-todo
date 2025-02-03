import { create } from 'zustand';

export interface ToastMessage {
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info';
}

interface ToastStore {
  toast: ToastMessage | null;
  isOpen: boolean;
  showToast: (message: ToastMessage) => void;
  setIsOpenToast: (isOpen: boolean) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toast: null,
  isOpen: false,
  showToast: (message) => set({ toast: message, isOpen: true }),
  setIsOpenToast: (isOpen: boolean) => set({ isOpen }),
}));
