import { create } from 'zustand';
import { User, LoginCredentials, RegisterData } from '../types/auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  login: async (credentials) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      const user: User = {
        id: '1',
        email: credentials.email,
        name: 'John Doe',
        role: 'parent',
        isPremium: false,
      };
      set({ user, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  register: async (data) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      const user: User = {
        id: '1',
        email: data.email,
        name: data.name,
        role: data.role,
        isPremium: false,
      };
      set({ user, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  logout: () => set({ user: null }),
}));