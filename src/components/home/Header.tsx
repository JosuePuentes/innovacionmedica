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
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <NovemedLogo />
          <nav className="hidden flex-wrap items-center justify-center gap-6 text-xs font-bold tracking-wide text-slate-800 xl:flex">
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
        </div>

        <div className="flex w-full items-center justify-end lg:w-auto">
          <Link
            to="/portal/acceso"
            state={PORTAL_LOGIN_REDIRECT}
            className="inline-flex items-center justify-center rounded-full bg-novemed-blue px-5 py-2.5 text-center text-xs font-bold tracking-wide text-white shadow-sm transition hover:bg-novemed-blue-deep"
          >
            INICIAR SESIÓN
          </Link>
        </div>
      </div>

      <nav className="border-t border-slate-100 px-4 py-2 xl:hidden">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 text-[11px] font-bold tracking-wide text-slate-800">
          {nav.map((item) =>
            item.requiresLogin ? (
              <Link
                key={item.label}
                to={item.to}
                state={PORTAL_LOGIN_REDIRECT}
                className="hover:text-novemed-blue"
              >
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={Boolean(item.end)}
                className={({ isActive }) =>
                  isActive ? 'text-novemed-blue underline decoration-2 underline-offset-4' : 'hover:text-novemed-blue'
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>
      </nav>
    </header>
  )
}
