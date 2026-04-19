const items = [
  {
    title: 'CALIDAD CERTIFICADA',
    body: 'Insumos y equipos con trazabilidad y cumplimiento de estándares de calidad certificados.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden>
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" className="text-novemed-blue" />
        <path d="M32 20v24M20 32h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-novemed-red" />
      </svg>
    ),
  },
  {
    title: 'DISTRIBUCIÓN NACIONAL',
    body: 'Distribución integral de insumos y equipos médicos a nivel nacional.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-novemed-blue" fill="none" aria-hidden>
        <path
          d="M12 44h40M20 44V24l12-8 12 8v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="18" r="4" fill="#d32f2f" />
      </svg>
    ),
  },
  {
    title: 'SOPORTE TÉCNICO',
    body: 'Acompañamiento técnico para instalación, capacitación y mantenimiento de equipos médicos.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-novemed-blue" fill="none" aria-hidden>
        <rect x="14" y="18" width="36" height="30" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M22 28h20M22 36h12" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function Features() {
  return (
    <section id="nosotros" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-novemed-blue">
              {item.icon}
            </div>
            <h3 className="text-sm font-extrabold tracking-wide text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
