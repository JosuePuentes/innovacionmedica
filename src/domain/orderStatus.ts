/** Ciclo de vida de un pedido en el portal (orden cronológico). */
export const ORDER_LIFECYCLE_STEPS = [
  'administracion',
  'picking',
  'packing',
  'facturacion',
  'enviado',
  'entregado',
] as const

export type OrderLifecycleStep = (typeof ORDER_LIFECYCLE_STEPS)[number]

export const ORDER_STEP_LABELS: Record<OrderLifecycleStep, string> = {
  administracion: 'Administración',
  picking: 'Picking',
  packing: 'Packing',
  facturacion: 'Facturación',
  enviado: 'Enviado',
  entregado: 'Entregado',
}

export function orderStepIndex(step: OrderLifecycleStep): number {
  return ORDER_LIFECYCLE_STEPS.indexOf(step)
}
