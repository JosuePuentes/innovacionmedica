import { Link } from 'react-router-dom'
import { PORTAL_LOGIN_REDIRECT } from '../../lib/portalAccess'

const HERO_BG =
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=80'

/** Legibilidad sobre luces quirúrgicas claras del fondo */
const heroTitleShadow =
  '0 2px 4px rgba(0,0,0,0.75), 0 8px 24px rgba(0,0,0,0.55), 0 0 2px rgba(0,0,0,0.9)'
const heroSubtitleShadow = '0 1px 3px rgba(0,0,0,0.85), 0 4px 16px rgba(0,0,0,0.45)'

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-5.5rem)] flex-col justify-center overflow-hidden sm:min-h-[calc(100vh-8rem)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        role="img"
        aria-label="Centro de salud con equipamiento médico"
      />
      {/* Capas oscuras para contraste del texto blanco (móvil un poco más fuerte) */}
      <div className="absolute inset-0 bg-black/55 sm:bg-black/50" />
      <div className="absolute inset-0 bg-slate-950/35" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center text-white sm:py-24">
        <h1
          className="text-balance text-2xl font-extrabold leading-[1.2] tracking-wide sm:text-4xl sm:leading-tight md:text-5xl"
          style={{ textShadow: heroTitleShadow }}
        >
          DISTRIBUCIÓN INTEGRAL DE INSUMOS Y EQUIPOS MÉDICOS.
        </h1>
        <p
          className="mt-4 max-w-2xl text-pretty text-sm font-normal leading-relaxed text-white/95 sm:mt-5 sm:text-base md:text-lg"
          style={{ textShadow: heroSubtitleShadow }}
        >
          Llevamos el abasto que tu institución necesita: logística, entrega oportuna y respaldo en cada pedido.
        </p>
        <Link
          to="/portal/acceso"
          state={PORTAL_LOGIN_REDIRECT}
          className="mt-8 inline-flex min-h-[48px] min-w-[200px] max-w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold tracking-wide text-slate-900 shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition hover:bg-slate-100 sm:mt-10 sm:min-h-[52px] sm:px-8 sm:text-base"
        >
          VER CATÁLOGO COMPLETO
        </Link>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 translate-y-px">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full text-novemed-blue/35"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
