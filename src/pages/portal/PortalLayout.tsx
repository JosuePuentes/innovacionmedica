import { useCallback, useMemo, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { PortalFooter } from '../../components/portal/PortalFooter'
import { PortalHeader } from '../../components/portal/PortalHeader'
import { PortalSidebar } from '../../components/portal/PortalSidebar'
import { useAuth } from '../../contexts/AuthContext'
import type { PortalOutletContext } from './portalOutletContext'

type CartLine = {
  productId: string
  name: string
  unitPrice: number
  qty: number
}

export function PortalLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [lines, setLines] = useState<CartLine[]>([])

  const cartCount = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines])
  const cartTotal = useMemo(() => lines.reduce((s, l) => s + l.qty * l.unitPrice, 0), [lines])

  const addToCart = useCallback((productId: string, name: string, unitPrice: number, qty: number) => {
    if (qty <= 0) return
    setLines((prev) => {
      const i = prev.findIndex((l) => l.productId === productId)
      if (i === -1) return [...prev, { productId, name, unitPrice, qty }]
      const copy = [...prev]
      copy[i] = { ...copy[i], qty: copy[i].qty + qty }
      return copy
    })
  }, [])

  const onLogout = useCallback(() => {
    logout()
    navigate('/portal/acceso', { replace: true })
  }, [logout, navigate])

  const outletCtx = useMemo<PortalOutletContext>(
    () => ({
      cartCount,
      cartTotal,
      addToCart,
    }),
    [cartCount, cartTotal, addToCart],
  )

  return (
    <div className="portal-shell-bg flex min-h-full flex-col">
      <PortalHeader cartCount={cartCount} onLogout={onLogout} />
      <div className="flex min-h-0 flex-1">
        <PortalSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Outlet context={outletCtx} />
        </div>
      </div>
      <PortalFooter />
    </div>
  )
}
