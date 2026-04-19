import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PORTAL_LOGIN_REDIRECT } from '../../lib/portalAccess'
import { NovemedLogo } from './NovemedLogo'

const nav: { to: string; label: string; end?: boolean; requiresLogin?: boolean }[] = [
  { to: '/', label: 'INICIO', end: true },
  { to: '/#nosotros', label: 'SOBRE NOSOTROS' },
  { to: '/portal/acceso', label: 'CATÁLOGO', requiresLogin: true },
  { to: '/#equipos', label: 'EQUIPOS' },
  { to: '/#contacto', label: 'CONTACTO' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 lg:py-4">
        <Link to="/" className="min-w-0 shrink" onClick={closeMenu}>
          <NovemedLogo />
        </Link>

        <nav
          className="hidden flex-wrap items-center justify-center gap-6 text-xs font-bold tracking-wide text-slate-800 xl:flex"
          aria-label="Principal"
        >
          {nav.map((item) =>
            item.requiresLogin ? (
              <Link
                key={item.label}
                to={item.to}
                state={PORTAL_LOGIN_REDIRECT}
                className="border-b-2 border-transparent pb-1 text-slate-800 transition-colors hover:text-novemed-blue"
              >
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={Boolean(item.end)}
                className={({ isActive }) =>
                  [
                    'border-b-2 pb-1 transition-colors',
                    isActive ? 'border-novemed-blue text-novemed-blue' : 'border-transparent hover:text-novemed-blue',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/portal/acceso"
            state={PORTAL_LOGIN_REDIRECT}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-novemed-blue px-4 py-2.5 text-center text-[11px] font-extrabold leading-tight tracking-wide text-white shadow-sm transition hover:bg-novemed-blue-deep sm:px-5 sm:text-xs xl:min-h-10 xl:rounded-full xl:py-2.5"
          >
            INICIAR SESIÓN
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-novemed-blue hover:text-novemed-blue xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-movil-novemed"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="menu-movil-novemed"
          className="fixed inset-0 z-[100] flex flex-col bg-white xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <Link to="/" onClick={closeMenu}>
              <NovemedLogo />
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700"
              aria-label="Cerrar menú"
              onClick={closeMenu}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4 pb-10" aria-label="Móvil">
            {nav.map((item) =>
              item.requiresLogin ? (
                <Link
                  key={item.label}
                  to={item.to}
                  state={PORTAL_LOGIN_REDIRECT}
                  onClick={closeMenu}
                  className="flex min-h-[52px] items-center rounded-xl px-4 text-base font-bold tracking-wide text-slate-800 hover:bg-sky-50 hover:text-novemed-blue active:bg-sky-50"
                >
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={Boolean(item.end)}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      'flex min-h-[52px] items-center rounded-xl px-4 text-base font-bold tracking-wide',
                      isActive ? 'bg-sky-50 text-novemed-blue' : 'text-slate-800 hover:bg-sky-50 hover:text-novemed-blue',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
