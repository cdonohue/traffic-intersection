import {
  ArrowLongDownIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowLongUpIcon,
} from '@heroicons/react/24/outline'

export default function SimulateTraffic({ direction }: { direction: string }) {
  return (
    <div className="col-span-2 row-span-2 text-indigo-800">
      {direction === 'north' ? (
        <div className="flex w-full h-full py-8">
          <div className="flex-1 border-r border-dotted border-zinc-500"></div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <ArrowLongUpIcon className="w-24 h-24 animate-pulse" />
          </div>
        </div>
      ) : null}
      {direction === 'south' ? (
        <div className="flex w-full h-full py-8">
          <div className="flex-1 flex flex-col items-center justify-center border-r border-dotted border-zinc-500">
            <ArrowLongDownIcon className="w-24 h-24 animate-pulse" />
          </div>
          <div className="flex-1"></div>
        </div>
      ) : null}
      {direction === 'northSouth' ? (
        <div className="flex w-full h-full py-8">
          <div className="flex-1 flex flex-col items-center justify-center border-r border-dotted border-zinc-500">
            <ArrowLongDownIcon className="w-24 h-24 animate-pulse" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <ArrowLongUpIcon className="w-24 h-24 animate-pulse" />
          </div>
        </div>
      ) : null}
      {direction === 'east' ? (
        <div className="flex w-full h-full flex-col px-8">
          <div className="flex-1 border-b border-dotted border-zinc-500"></div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <ArrowLongRightIcon className="w-24 h-24 animate-pulse" />
          </div>
        </div>
      ) : null}
      {direction === 'west' ? (
        <div className="flex w-full h-full flex-col px-8">
          <div className="flex-1 flex flex-col items-center justify-center border-b border-dotted border-zinc-500">
            <ArrowLongLeftIcon className="w-24 h-24 animate-pulse" />
          </div>
          <div className="flex-1"></div>
        </div>
      ) : null}
      {direction === 'eastWest' ? (
        <div className="flex w-full h-full flex-col px-8">
          <div className="flex-1 flex flex-col items-center justify-center border-b border-dotted border-zinc-500">
            <ArrowLongLeftIcon className="w-24 h-24 animate-pulse" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <ArrowLongRightIcon className="w-24 h-24 animate-pulse" />
          </div>
        </div>
      ) : null}
    </div>
  )
}
