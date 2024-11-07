import { User } from '@features/auth/model';
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const store: StateCreator<AuthState> = (set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
  logout: () => set({ user: null }),
});

export const useAuthStore =
  import.meta.env.MODE === 'production'
    ? create<AuthState>(store)
    : create<AuthState>()(devtools(store));