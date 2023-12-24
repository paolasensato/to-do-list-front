import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface User {
  name: string,
  token: string
}

interface UserState {
  user: User
  setUser: (user: User) => void,
  clearUser: () => void
}

const initialState = {
  user: {
    name: '',
    token: ''
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
      { name: 'userStore' },
    ),
  ),
);

export default useUserStore;