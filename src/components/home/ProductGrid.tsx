type Product = {
  name: string
  image: string
}

const products: Product[] = [
  {
    name: 'Guantes quirúrgicos estériles',
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Kits de instrumental médico',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Textil médico hospitalario',
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Implantes ortopédicos',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Implantes y prótesis',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Mobiliario clínico',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
  },
]

export function ProductGrid() {
  return (
    <section id="catalogo" className="bg-slate-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-extrabold tracking-wide text-slate-900 sm:text-2xl">
          PRODUCTOS DESTACADOS
        </h2>
        <p
          id="equipos"
          className="mx-auto mt-3 max-w-2xl scroll-mt-28 text-center text-sm text-slate-600"
        >
          Selección de insumos y equipos para hospitales, clínicas y centros de salud.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img src={p.image} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-3">
                <p className="text-[10px] font-bold tracking-wide text-novemed-blue">NOVEMED</p>
                <h3 className="text-xs font-bold leading-snug text-slate-900 sm:text-sm">{p.name}</h3>
                <button
                  type="button"
                  className="text-left text-xs font-semibold text-novemed-blue underline-offset-2 hover:underline"
                >
                  Ver Detalles
                </button>
                <button
                  type="button"
                  className="mt-auto w-full rounded-full bg-novemed-blue py-2 text-xs font-bold text-white transition hover:bg-novemed-blue-deep"
                >
                  Añadir al Carrito
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
