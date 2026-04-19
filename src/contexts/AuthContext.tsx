import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type UserRole = 'client' | 'admin'

export type AuthUser = {
  id: string
  email: string
  role: UserRole
}

type AuthContextValue = {
  user: AuthUser | null
  loading: boolean
  login: (email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const STORAGE_KEY = 'novemed.auth'

function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as AuthUser
    if (parsed?.id && parsed?.email && (parsed.role === 'client' || parsed.role === 'admin')) {
      return parsed
    }
  } catch {
    /* ignore */
  }
  return null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser())
  const [loading] = useState(false)

  const login = useCallback(async (email: string, password: string, role: UserRole) => {
    if (!email.trim() || !password) {
      throw new Error('Credenciales incompletas.')
    }
    const next: AuthUser = {
      id: crypto.randomUUID(),
      email: email.trim().toLowerCase(),
      role,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setUser(next)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      logout,
    }),
    [user, loading, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
