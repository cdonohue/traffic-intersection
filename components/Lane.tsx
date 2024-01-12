import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@heroicons/react/16/solid'

export default function Lane({
  direction = 'straight',
}: {
  direction: 'left' | 'straight' | 'right'
}) {
  return (
    <div className="p-4 grid grid-rows-4 w-16">
      <div className="flex items-center justify-center">
        {direction === 'left' ? (
          <ArrowLeftIcon className="w-6 h-6 text-zinc-200" />
        ) : null}
        {direction === 'straight' ? (
          <ArrowUpIcon className="w-6 h-6 text-zinc-200" />
        ) : null}
        {direction === 'right' ? (
          <ArrowRightIcon className="w-6 h-6 text-zinc-200" />
        ) : null}
      </div>
    </div>
  )
}
