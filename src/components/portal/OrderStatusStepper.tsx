import { Fragment } from 'react'
import {
  ORDER_LIFECYCLE_STEPS,
  ORDER_STEP_LABELS,
  orderStepIndex,
  type OrderLifecycleStep,
} from '../../domain/orderStatus'

type Props = {
  current: OrderLifecycleStep
}

export function OrderStatusStepper({ current }: Props) {
  const activeIdx = orderStepIndex(current)

  return (
    <div className="w-full overflow-x-auto pb-1">
      <div className="flex min-w-[640px] items-center gap-0">
        {ORDER_LIFECYCLE_STEPS.map((step, idx) => {
          const isComplete = idx < activeIdx
          const isCurrent = idx === activeIdx
          const label = ORDER_STEP_LABELS[step]
          const segmentDone = idx > 0 && idx <= activeIdx

          return (
            <Fragment key={step}>
              {idx > 0 ? (
                <div
                  className={['h-1 flex-1 rounded-full', segmentDone ? 'bg-novemed-blue' : 'bg-slate-200'].join(
                    ' ',
                  )}
                  aria-hidden
                />
              ) : null}
              <div className="flex w-24 shrink-0 flex-col items-center sm:w-28">
                <div
                  className={[
                    'flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold',
                    isComplete
                      ? 'bg-novemed-blue text-white'
                      : isCurrent
                        ? 'bg-novemed-blue text-white ring-4 ring-sky-100'
                        : 'bg-slate-100 text-slate-400',
                  ].join(' ')}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {isComplete ? '✓' : idx + 1}
                </div>
                <p
                  className={[
                    'mt-2 text-center text-[10px] font-bold leading-tight sm:text-xs',
                    isCurrent ? 'text-novemed-blue' : isComplete ? 'text-slate-800' : 'text-slate-400',
                  ].join(' ')}
                >
                  {label}
                </p>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
