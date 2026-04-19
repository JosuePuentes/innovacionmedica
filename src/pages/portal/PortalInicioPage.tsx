import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { MOCK_PORTAL_PRODUCTS } from '../../data/mockPortalProducts'
import type { PortalOutletContext } from './portalOutletContext'

function formatMoney(n: number) {
  return n.toLocaleString('es-VE', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export function PortalInicioPage() {
  const { cartTotal, addToCart } = useOutletContext<PortalOutletContext>()
  const [query, setQuery] = useState('')
  const [qtyById, setQtyById] = useState<Record<string, number>>(() =>
    Object.fromEntries(MOCK_PORTAL_PRODUCTS.map((p) => [p.id, 1])),
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return MOCK_PORTAL_PRODUCTS
    return MOCK_PORTAL_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.priceLabel.toLowerCase().includes(q),
    )
  }, [query])

  function setQty(id: string, value: number) {
    const next = Math.max(1, Math.min(999, value || 1))
    setQtyById((prev) => ({ ...prev, [id]: next }))
  }

  return (
    <div className="flex flex-1 flex-col px-4 py-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
          <p className="text-xs font-bold text-slate-500">Límite de crédito disponible</p>
          <p className="mt-1 text-2xl font-extrabold text-novemed-blue">{formatMoney(15000)}</p>
          <p className="mt-1 text-[11px] text-slate-500">
            Resumen financiero; el estado operativo de tus pedidos se gestiona en <strong>Pedidos</strong>.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-6xl flex-1">
        <label className="relative block">
          <span className="sr-only">Buscar</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar…"
            className="w-full rounded-2xl border-2 border-sky-100 bg-white py-3 pl-4 pr-12 text-sm text-slate-800 shadow-sm outline-none ring-novemed-blue/20 focus:ring-4"
          />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-novemed-blue">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3-3" strokeLinecap="round" />
            </svg>
          </span>
        </label>

        <div className="mt-8 flex gap-3 lg:gap-5">
          <div className="hidden shrink-0 items-start pt-8 md:flex">
            <span className="text-[11px] font-extrabold tracking-[0.35em] text-slate-400 [writing-mode:vertical-rl]">
              FILTROS
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => {
                const qty = qtyById[p.id] ?? 1
                return (
                  <article
                    key={p.id}
                    className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img src={p.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <p className="text-[10px] font-extrabold tracking-wide text-novemed-blue">NOVEMED</p>
                      <h3 className="text-sm font-extrabold text-slate-900">{p.name}</h3>
                      <p className="text-xs text-slate-600">
                        <span className="font-semibold">SKU:</span> {p.sku} · {p.priceLabel}
                      </p>
                      <p className="text-xs font-semibold text-emerald-700">En stock: {p.stock}</p>

                      <div className="mt-1 flex items-center gap-2">
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-lg font-bold text-slate-700 hover:bg-slate-50"
                          onClick={() => setQty(p.id, qty - 1)}
                          aria-label="Disminuir cantidad"
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold text-slate-900">{qty}</span>
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-lg font-bold text-slate-700 hover:bg-slate-50"
                          onClick={() => setQty(p.id, qty + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => addToCart(p.id, p.name, p.unitPrice, qty)}
                        className="mt-auto w-full rounded-full bg-novemed-blue py-2.5 text-xs font-extrabold tracking-wide text-white transition hover:bg-novemed-blue-deep"
                      >
                        AÑADIR AL CARRITO
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 shadow-sm backdrop-blur sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-extrabold tracking-wide text-slate-600">PROCESAR COMPRA</p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <p className="text-right text-sm font-extrabold text-slate-900 sm:text-base">
              TOTAL <span className="text-novemed-blue">{formatMoney(cartTotal)}</span>
            </p>
            <button
              type="button"
              className="rounded-full bg-novemed-blue px-6 py-3 text-center text-xs font-extrabold tracking-wide text-white shadow-sm transition hover:bg-novemed-blue-deep"
            >
              GENERAR ORDEN DE COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
