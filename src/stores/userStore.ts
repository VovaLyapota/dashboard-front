import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { User } from '@/interfaces/User';

interface userState {
  user: User | null;
  setUser: (user: User) => void;
  deleteUser: () => void;
}

const useUserStore = create<userState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      deleteUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useUserStore;
