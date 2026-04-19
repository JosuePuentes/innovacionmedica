import { NavLink } from 'react-router-dom'
import { NovemedLogo } from './NovemedLogo'

const nav: { to: string; label: string; end?: boolean }[] = [
  { to: '/', label: 'INICIO', end: true },
  { to: '/#nosotros', label: 'SOBRE NOSOTROS' },
  { to: '/#catalogo', label: 'CATÁLOGO' },
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
            {nav.map((item) => (
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
            ))}
          </nav>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end lg:w-auto">
          <label className="relative block w-full sm:max-w-xs lg:w-64">
            <span className="sr-only">Buscar</span>
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-novemed-blue">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3-3" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Buscar productos…"
              className="w-full rounded-full border-0 bg-sky-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-novemed-blue/40"
            />
          </label>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-novemed-blue px-5 py-2.5 text-center text-xs font-bold tracking-wide text-white shadow-sm transition hover:bg-novemed-blue-deep"
          >
            SOLICITAR COTIZACIÓN
          </a>
        </div>
      </div>

      <nav className="border-t border-slate-100 px-4 py-2 xl:hidden">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 text-[11px] font-bold tracking-wide text-slate-800">
          {nav.map((item) => (
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
          ))}
        </div>
      </nav>
    </header>
  )
}
