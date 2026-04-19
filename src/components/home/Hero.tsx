import { Link } from 'react-router-dom'
import { PORTAL_LOGIN_REDIRECT } from '../../lib/portalAccess'

const HERO_BG =
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=80'

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        role="img"
        aria-label="Quirófano moderno con equipamiento médico"
      />
      <div className="absolute inset-0 bg-slate-900/55" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center text-white">
        <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-wide sm:text-4xl md:text-5xl">
          TECNOLOGÍA AVANZADA PARA LA SALUD.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base font-medium text-white/90 sm:text-lg">
          Catálogo integral de insumos y equipos médicos.
        </p>
        <Link
          to="/portal/acceso"
          state={PORTAL_LOGIN_REDIRECT}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold tracking-wide text-slate-900 shadow-lg transition hover:bg-slate-100"
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
