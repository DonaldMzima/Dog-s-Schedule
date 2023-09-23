import React, { useContext, ReactNode } from 'react'
import { useUserData } from '@nhost/nextjs'

interface UserProviderProps {
  children: ReactNode
}

interface UserContextValue {
  user: any // Replace "YourUserType" with the actual type of user data
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
