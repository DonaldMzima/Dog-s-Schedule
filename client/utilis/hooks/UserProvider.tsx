import React, { useContext, ReactNode } from 'react'
import { User, useUserData } from '@nhost/nextjs'

interface UserProviderProps {
  children: ReactNode
}

interface UserContextValue {
  user: User | null
}

const UserContext = React.createContext<UserContextValue | null>(null)

export function UserProvider({ children }: UserProviderProps) {
  const user = useUserData()

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (context === null) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
