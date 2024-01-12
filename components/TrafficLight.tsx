import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@heroicons/react/16/solid'

type Props = {
  straightState: 'stop' | 'caution' | 'go'
  turnState: 'stop' | 'caution' | 'go' | 'yield'
}

export default function TrafficLight({
  straightState = 'stop',
  turnState = 'stop',
}: Props) {
  return (
    <div className="flex flex-col items-center bg-zinc-300">
      <div className="p-12">
        <div className="bg-zinc-900 p-3 rounded-lg inline-flex gap-2">
          <ArrowLight state={turnState} />
          <SolidLight color="red" isOn={straightState === 'stop'} />
          <SolidLight color="yellow" isOn={straightState === 'caution'} />
          <SolidLight color="green" isOn={straightState === 'go'} />
        </div>
      </div>
      <Street>
        <Lane direction="left" />
        <Lane direction="straight" />
        <Lane direction="straight" />
        <Lane direction="right" />
      </Street>
    </div>
  )
}

type SolidLightProps = {
  color: 'red' | 'yellow' | 'green'
  isOn?: boolean
}

function SolidLight({ color, isOn = false }: SolidLightProps) {
  if (!isOn) {
    return <div className="w-8 h-8 rounded-full bg-zinc-800" />
  }

  const bg =
    color === 'red'
      ? 'bg-red-500'
      : color === 'yellow'
      ? 'bg-yellow-500'
      : color === 'green'
      ? 'bg-green-500'
      : 'bg-zinc-600'

  return <div className={`w-8 h-8 rounded-full transition-colors ${bg}`} />
}

type ArrowLightProps = {
  state: 'stop' | 'caution' | 'go' | 'yield'
}

function ArrowLight({ state }: ArrowLightProps) {
  const color =
    state === 'go'
      ? 'text-green-500'
      : state === 'caution'
      ? 'text-yellow-500'
      : state === 'stop'
      ? 'text-red-500'
      : state === 'yield'
      ? 'text-orange-500'
      : 'text-zinc'

  return (
    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-800">
      <ArrowLeftIcon
        className={`w-6 h-6 ${color} ${
          state === 'yield' ? 'animation-blink' : ''
        }`}
      />
    </div>
  )
}

function Street({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex divide-x-2 divide-zinc-100 divide-dashed">
      {children}
    </div>
  )
}

function Lane({
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
