import type { OrderLifecycleStep } from '../domain/orderStatus'

export type PortalOrder = {
  id: string
  reference: string
  createdAt: string
  currentStep: OrderLifecycleStep
}

export const MOCK_PORTAL_ORDERS: PortalOrder[] = [
  {
    id: '1',
    reference: 'OC-2026-0142',
    createdAt: '2026-04-12',
    currentStep: 'picking',
  },
  {
    id: '2',
    reference: 'OC-2026-0138',
    createdAt: '2026-04-08',
    currentStep: 'facturacion',
  },
  {
    id: '3',
    reference: 'OC-2026-0129',
    createdAt: '2026-03-28',
    currentStep: 'entregado',
  },
]
