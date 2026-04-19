import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { NovemedLogo } from '../home/NovemedLogo'

type Props = {
  cartCount: number
  onLogout: () => void
}

/** Texto demo; sustituir por datos del perfil cuando exista API. */
const DEMO_CLIENT_NAME = 'DR. ANUBIS PUENTES'
const DEMO_PHARMACY = 'FARMACIA SAN LUCAS'

export function PortalHeader({ cartCount, onLogout }: Props) {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-3 px-4 py-3 lg:px-6">
        <Link to="/portal" className="shrink-0">
          <NovemedLogo />
        </Link>

        <div className="hidden flex-1 justify-center sm:flex">
          <span className="rounded-full bg-novemed-blue px-5 py-1.5 text-[11px] font-extrabold tracking-wide text-white shadow-sm">
            PORTAL CLIENTE
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <div className="hidden text-right leading-tight md:block">
            <p className="text-xs font-extrabold text-slate-900">{DEMO_CLIENT_NAME}</p>
            <p className="text-[11px] font-semibold text-novemed-blue">{DEMO_PHARMACY}</p>
            <p className="text-[10px] text-slate-500">{user?.email}</p>
          </div>

          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600"
            aria-hidden
          >
            {user?.email?.[0]?.toUpperCase() ?? 'C'}
          </div>

          <Link
            to="/portal"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-novemed-blue hover:text-novemed-blue"
            aria-label={`Carrito, ${cartCount} artículos`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1" fill="currentColor" stroke="none" />
            </svg>
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-novemed-red px-1 text-[10px] font-extrabold text-white">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            ) : null}
          </Link>

          <button
            type="button"
            onClick={onLogout}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-red-200 hover:text-red-600"
            title="Cerrar sesión"
            aria-label="Cerrar sesión"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 17l-1-1M10 7L9 8" strokeLinecap="round" />
              <path d="M15 12H3M6 8l-3 4 3 4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 5v14" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-2 sm:hidden">
        <span className="inline-flex rounded-full bg-novemed-blue px-4 py-1 text-[10px] font-extrabold tracking-wide text-white">
          PORTAL CLIENTE
        </span>
      </div>
    </header>
  )
}
