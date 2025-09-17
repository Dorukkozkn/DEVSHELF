"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  email: string
  user_metadata?: {
    username?: string
  }
}

interface AuthContextType {
  user: User | null
  signOut: () => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, username?: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const signOut = async () => {
    setUser(null)
    // TODO: Implement actual sign out logic
  }

  const signIn = async (email: string, password: string) => {
    // TODO: Implement actual sign in logic
    const mockUser: User = {
      id: "1",
      email,
      user_metadata: { username: email.split("@")[0] },
    }
    setUser(mockUser)
  }

  const signUp = async (email: string, password: string, username?: string) => {
    // TODO: Implement actual sign up logic
    const mockUser: User = {
      id: "1",
      email,
      user_metadata: { username: username || email.split("@")[0] },
    }
    setUser(mockUser)
  }

  return <AuthContext.Provider value={{ user, signOut, signIn, signUp }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
