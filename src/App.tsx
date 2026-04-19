import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage'
import { AdminLoginPage } from './pages/admin/AdminLoginPage'
import { HomePage } from './pages/HomePage'
import { PortalInicioPage } from './pages/portal/PortalInicioPage'
import { PortalLayout } from './pages/portal/PortalLayout'
import { PortalLoginPage } from './pages/portal/PortalLoginPage'
import { PortalPedidosPage } from './pages/portal/PortalPedidosPage'
import { PortalSimplePage } from './pages/portal/PortalSimplePage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/portal/acceso" element={<PortalLoginPage />} />
      <Route
        path="/portal"
        element={
          <ProtectedRoute allowedRoles={['client']}>
            <PortalLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<PortalInicioPage />} />
        <Route path="pedidos" element={<PortalPedidosPage />} />
        <Route
          path="facturas"
          element={
            <PortalSimplePage
              title="FACTURAS"
              description="Aquí podrás consultar y descargar tus facturas cuando conectes el backend de facturación."
            />
          }
        />
        <Route
          path="cuentas-por-pagar"
          element={
            <PortalSimplePage
              title="CUENTAS POR PAGAR"
              description="Resumen de saldos y vencimientos. Integra aquí tu ERP o módulo financiero."
            />
          }
        />
        <Route
          path="condiciones"
          element={
            <PortalSimplePage
              title="CONDICIONES"
              description="Términos comerciales, plazos de entrega y políticas de devolución aplicables a tu cuenta."
            />
          }
        />
      </Route>

      <Route path="/admin/acceso" element={<AdminLoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
