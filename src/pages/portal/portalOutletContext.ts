export type PortalOutletContext = {
  cartCount: number
  cartTotal: number
  addToCart: (productId: string, name: string, unitPrice: number, qty: number) => void
}
