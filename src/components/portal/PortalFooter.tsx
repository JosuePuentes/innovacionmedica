import { Link } from 'react-router-dom'
import { NovemedLogo } from '../home/NovemedLogo'

export function PortalFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <NovemedLogo variant="footer" />
          <p className="mt-3 text-sm text-slate-600">Catálogo y distribución de insumos y equipos médicos.</p>
        </div>
        <div>
          <h3 className="text-xs font-extrabold tracking-wide text-slate-900">CONTACTO</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Av. Principal, Torre Médica, Piso 3. Maracaibo, Venezuela.</li>
            <li>
              <a href="tel:+582121234567" className="hover:text-novemed-blue">
                +58 212-1234567
              </a>
            </li>
            <li>
              <a href="mailto:ventas@novemed.com" className="hover:text-novemed-blue">
                ventas@novemed.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-extrabold tracking-wide text-slate-900">ENLACES RÁPIDOS</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link to="/" className="hover:text-novemed-blue">
                Sitio público
              </Link>
            </li>
            <li>
              <Link to="/portal/condiciones" className="hover:text-novemed-blue">
                Condiciones
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            {['Facebook', 'YouTube'].map((s) => (
              <span
                key={s}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-novemed-blue text-[10px] font-bold text-white"
              >
                {s[0]}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-3 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NOVEMED — Innovación Médica
      </div>
    </footer>
  )
}
