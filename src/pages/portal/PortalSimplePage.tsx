import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
}

export function PortalSimplePage({ title, description }: Props) {
  return (
    <div className="flex flex-1 flex-col px-4 py-8 lg:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <h1 className="text-lg font-extrabold tracking-wide text-slate-900">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
        <p className="mt-6 text-sm text-slate-600">
          <Link to="/portal" className="font-bold text-novemed-blue hover:underline">
            Volver al inicio del portal
          </Link>
        </p>
      </div>
    </div>
  )
}
