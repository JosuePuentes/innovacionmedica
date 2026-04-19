import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth, type UserRole } from '../../contexts/AuthContext'

type Props = {
  children: ReactNode
  allowedRoles: UserRole[]
}

export function ProtectedRoute({ children, allowedRoles }: Props) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600">
        Cargando sesión…
      </div>
    )
  }

  if (!user) {
    const to = allowedRoles.includes('admin') ? '/admin/acceso' : '/portal/acceso'
    return <Navigate to={to} replace state={{ from: location.pathname }} />
  }

  if (!allowedRoles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/admin" replace />
    return <Navigate to="/portal" replace />
  }

  return children
}
