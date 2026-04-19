type Props = {
  variant?: 'header' | 'footer'
  theme?: 'light' | 'dark'
  className?: string
}

export function NovemedLogo({ variant = 'header', theme = 'light', className = '' }: Props) {
  const scale = variant === 'footer' ? 'scale-95' : ''
  const tagline = theme === 'dark' ? 'text-white' : 'text-slate-900'
  return (
    <div className={`select-none ${scale} ${className}`}>
      <div className="flex items-end gap-0.5 font-extrabold tracking-tight text-novemed-blue">
        <span className="text-2xl sm:text-3xl">N</span>
        <span className="relative inline-flex pb-0.5" aria-hidden>
          <svg
            viewBox="0 0 48 44"
            className="h-7 w-7 sm:h-8 sm:w-8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 39C24 39 4 26.5 4 14.5C4 9.25 7.58 4 13.5 4C17.45 4 20.73 6.2 24 10.2C27.27 6.2 30.55 4 34.5 4C40.42 4 44 9.25 44 14.5C44 26.5 24 39 24 39Z"
              fill="#d32f2f"
            />
            <path
              d="M24 16V28M18 22H30"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-2xl sm:text-3xl">VEMED</span>
      </div>
      <p className={`mt-0.5 text-[10px] font-semibold tracking-[0.2em] sm:text-xs ${tagline}`}>
        INNOVACIÓN MÉDICA
      </p>
      <p className="text-[9px] font-medium text-novemed-blue sm:text-[10px]">J-301763445</p>
    </div>
  )
}
