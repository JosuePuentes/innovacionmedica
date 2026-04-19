import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { NovemedLogo } from '../../components/home/NovemedLogo'

export function AdminDashboardPage() {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-full flex-col bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
          <Link to="/">
            <NovemedLogo />
          </Link>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              Admin
            </span>
            <span className="hidden text-sm text-slate-600 sm:inline">{user?.email}</span>
            <button
              type="button"
              onClick={logout}
              className="rounded-full bg-novemed-blue px-4 py-2 text-xs font-bold text-white hover:bg-novemed-blue-deep"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:col-span-2">
            <h1 className="text-xl font-extrabold tracking-wide text-slate-900">Dashboard administrativo</h1>
            <p className="mt-2 text-sm text-slate-600">
              Ruta protegida: solo usuarios con rol <strong>admin</strong>. Conecta aquí tu API, métricas y
              gestión de catálogo.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: 'Pedidos', s: 'Resumen y estados' },
                { t: 'Inventario', s: 'SKU y existencias' },
                { t: 'Clientes', s: 'Cuentas del portal' },
                { t: 'Reportes', s: 'Exportaciones' },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-900">{c.t}</p>
                  <p className="mt-1 text-xs text-slate-600">{c.s}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
            <h2 className="text-sm font-extrabold tracking-wide">Estado de sesión</h2>
            <p className="mt-3 text-xs leading-relaxed text-white/80">
              El <code className="rounded bg-white/10 px-1">AuthProvider</code> mantiene el usuario en memoria y
              sincroniza con <code className="rounded bg-white/10 px-1">localStorage</code> para recargas.
            </p>
            <p className="mt-4 text-xs text-white/70">
              Usuario actual: <span className="font-semibold text-white">{user?.email}</span>
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
