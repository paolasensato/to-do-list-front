import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface User {
  name: string | null,
  token: string | null
}

interface UserState {
  user: User
  setUser: (user: User) => void,
  clearUser: () => void
}

const initialState = {
  user: {
    name: null,
    token: null
  },
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setUser: user => set(() => ({user})),
        clearUser: () => set({...initialState}),
      }),
      { name: 'authUser' },
    ),
  ),
);

export default useUserStore;