import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { NovemedLogo } from '../../components/home/NovemedLogo'

export function PortalLoginPage() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from ?? '/portal'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  if (user?.role === 'client') return <Navigate to="/portal" replace />
  if (user?.role === 'admin') return <Navigate to="/admin" replace />

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    try {
      await login(email, password, 'client')
      navigate(from, { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo iniciar sesión.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/">
            <NovemedLogo />
          </Link>
          <Link to="/" className="text-sm font-semibold text-novemed-blue hover:underline">
            Volver al sitio
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
          <h1 className="text-center text-lg font-extrabold tracking-wide text-slate-900">
            PORTAL DEL CLIENTE
          </h1>
          <p className="mt-2 text-center text-sm text-slate-600">
            Accede con tu correo corporativo. La autenticación es una demostración local (sin backend).
          </p>

          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="text-xs font-semibold text-slate-700" htmlFor="portal-email">
                Correo
              </label>
              <input
                id="portal-email"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-novemed-blue/30 focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700" htmlFor="portal-password">
                Contraseña
              </label>
              <input
                id="portal-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-novemed-blue/30 focus:ring-2"
                required
              />
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-full bg-novemed-blue py-3 text-sm font-bold text-white transition hover:bg-novemed-blue-deep disabled:opacity-60"
            >
              {busy ? 'Entrando…' : 'Entrar'}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            ¿Administración?{' '}
            <Link className="font-semibold text-novemed-blue hover:underline" to="/admin/acceso">
              Ir al acceso admin
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
