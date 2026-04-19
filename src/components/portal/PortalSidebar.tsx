import { NavLink } from 'react-router-dom'

const links: { to: string; label: string; end?: boolean }[] = [
  { to: '/portal', label: 'INICIO', end: true },
  { to: '/portal/pedidos', label: 'PEDIDOS' },
  { to: '/portal/facturas', label: 'FACTURAS' },
  { to: '/portal/cuentas-por-pagar', label: 'CUENTAS POR PAGAR' },
  { to: '/portal/condiciones', label: 'CONDICIONES' },
]

export function PortalSidebar() {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-slate-200 bg-white shadow-sm">
      <div className="px-4 py-6">
        <p className="text-[10px] font-extrabold tracking-[0.2em] text-slate-400">MENÚ</p>
        <nav className="mt-4 flex flex-col gap-1">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={Boolean(item.end)}
              className={({ isActive }) =>
                [
                  'rounded-xl px-3 py-2.5 text-xs font-bold tracking-wide transition',
                  isActive
                    ? 'bg-sky-50 text-novemed-blue shadow-sm ring-1 ring-sky-100'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-novemed-blue',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
