import { MOCK_PORTAL_ORDERS } from '../../data/mockPortalOrders'
import { ORDER_STEP_LABELS } from '../../domain/orderStatus'
import { OrderStatusStepper } from '../../components/portal/OrderStatusStepper'

export function PortalPedidosPage() {
  const inTransit = MOCK_PORTAL_ORDERS.filter((o) => o.currentStep !== 'entregado')
  const delivered = MOCK_PORTAL_ORDERS.filter((o) => o.currentStep === 'entregado')

  return (
    <div className="flex flex-1 flex-col px-4 py-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-lg font-extrabold tracking-wide text-slate-900 sm:text-xl">PEDIDOS</h1>
        <p className="mt-1 text-sm text-slate-600">
          Seguimiento del ciclo de vida: administración, picking, packing, facturación, envío y entrega.
        </p>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-6">
          <h2 className="text-sm font-extrabold tracking-wide text-novemed-blue">PEDIDOS EN TRÁNSITO</h2>
          <p className="mt-1 text-xs text-slate-600">
            Aquí verás el estado actual de cada orden (por ejemplo, en <strong>picking</strong> o{' '}
            <strong>facturación</strong>).
          </p>

          <ul className="mt-6 space-y-8">
            {inTransit.map((order) => (
              <li key={order.id} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">{order.reference}</p>
                    <p className="text-xs text-slate-500">Creada el {order.createdAt}</p>
                  </div>
                  <p className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-novemed-blue ring-1 ring-sky-100">
                    Estado: {ORDER_STEP_LABELS[order.currentStep]}
                  </p>
                </div>
                <div className="mt-5">
                  <OrderStatusStepper current={order.currentStep} />
                </div>
              </li>
            ))}
          </ul>

          {inTransit.length === 0 ? (
            <p className="mt-6 text-sm text-slate-600">No tienes pedidos en tránsito en este momento.</p>
          ) : null}
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-6">
          <h2 className="text-sm font-extrabold tracking-wide text-slate-800">ENTREGADOS (RECENTES)</h2>
          <ul className="mt-4 divide-y divide-slate-100">
            {delivered.map((order) => (
              <li key={order.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
                <span className="font-bold text-slate-900">{order.reference}</span>
                <span className="text-xs font-semibold text-emerald-700">Entregado · {order.createdAt}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
