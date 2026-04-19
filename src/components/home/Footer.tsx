import { NovemedLogo } from './NovemedLogo'

const social = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <path
        fill="currentColor"
        d="M15.12 5H13V3.2c0-.8.06-1.22 1.18-1.22H16V0h-2.4C10.7 0 9 1.44 9 4.1V5H7v3h2v9h3V8h2.46l.34-3H12V4.1c0-.5.05-.7.55-.7H15V5z"
      />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 2.5A5.5 5.5 0 1112 17a5.5 5.5 0 015.5-5.5zm0 2A3.5 3.5 0 1012 15a3.5 3.5 0 003.5-3.5zM18 6a1 1 0 11-1 1 1 1 0 011-1z"
      />
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 00-3.2-3.2C17 2.5 12 2.5 12 2.5s-5 0-8.3.5A3 3 0 00.5 6.2 33 33 0 000 12a33 33 0 00.5 5.8 3 3 0 003.2 3.2c3.3.5 8.3.5 8.3.5s5 0 8.3-.5a3 3 0 003.2-3.2 33 33 0 00.5-5.8 33 33 0 00-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z"
      />
    ),
  },
]

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-slate-100">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <NovemedLogo variant="footer" />
          <p className="mt-4 max-w-xs text-sm text-slate-600">
            Soluciones médicas con enfoque en calidad, logística y soporte técnico.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-extrabold tracking-wide text-slate-900">CONTACTO</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Av. Principal, Torre Médica, Piso 3. Caracas, Venezuela.</li>
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
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <a href="#" className="hover:text-novemed-blue">
                Términos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-novemed-blue">
                Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-novemed-blue">
                Catálogo PDF
              </a>
            </li>
            <li>
              <a href="/portal/acceso" className="font-semibold text-novemed-blue hover:underline">
                Portal cliente
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-extrabold tracking-wide text-slate-900">SÍGUENOS</h3>
          <div className="flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-novemed-blue text-white shadow-sm transition hover:bg-novemed-blue-deep"
                aria-label={s.label}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NOVEMED — Innovación Médica. Todos los derechos reservados.
      </div>
    </footer>
  )
}
