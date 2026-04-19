export type PortalProduct = {
  id: string
  name: string
  sku: string
  priceLabel: string
  /** Precio unitario de referencia para el carrito demo (USD). */
  unitPrice: number
  stock: number
  image: string
}

export const MOCK_PORTAL_PRODUCTS: PortalProduct[] = [
  {
    id: 'p1',
    name: 'Guantes estériles nitrilo',
    sku: 'NOV-GN-100',
    priceLabel: '$12 — $18 / caja',
    unitPrice: 15,
    stock: 250,
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p2',
    name: 'Monitor multiparamétrico',
    sku: 'NOV-MX-220',
    priceLabel: '$4,200 — $4,800',
    unitPrice: 4500,
    stock: 12,
    image:
      'https://images.unsplash.com/photo-1559757172-0c0929f933f9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p3',
    name: 'Kit instrumental quirúrgico',
    sku: 'NOV-KQ-09',
    priceLabel: '$890 — $1,050',
    unitPrice: 970,
    stock: 45,
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p4',
    name: 'Textil quirúrgico desechable',
    sku: 'NOV-TQ-55',
    priceLabel: '$35 — $48 / paquete',
    unitPrice: 41,
    stock: 600,
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
  },
]
