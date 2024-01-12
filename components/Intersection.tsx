'use client'

import { useMachine } from '@xstate/react'
import TrafficLight from './TrafficLight'
import intersectionMachine from '@/machines/intersectionMachine'
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowLongDownIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowLongUpIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@heroicons/react/24/outline'

export default function Intersection() {
  const [currentState, send] = useMachine(intersectionMachine)

  function getLightState(direction: string) {
    const { value } = currentState

    let straightState = 'stop'
    let turnState = 'stop'

    if (value === 'northGreenArrow') {
      if (direction === 'north') {
        turnState = 'go'
        straightState = 'go'
      }
    } else if (value === 'northYellowArrow') {
      if (direction === 'north') {
        turnState = 'caution'
        straightState = 'go'
      }
    } else if (value === 'northSouthGreen') {
      if (direction === 'north' || direction === 'south') {
        straightState = 'go'
        turnState = 'yield'
      }
    } else if (value === 'northYellow') {
      if (direction === 'north') {
        straightState = 'caution'
        turnState = 'caution'
      }
      if (direction === 'south') {
        straightState = 'go'
        turnState = 'yield'
      }
    } else if (value === 'southGreenArrow') {
      if (direction === 'south') {
        turnState = 'go'
        straightState = 'go'
      }
    } else if (value === 'southYellowArrow') {
      if (direction === 'south') {
        turnState = 'caution'
        straightState = 'caution'
      }
    } else if (value === 'eastGreenArrow') {
      if (direction === 'east') {
        turnState = 'go'
        straightState = 'go'
      }
    } else if (value === 'eastYellowArrow') {
      if (direction === 'east') {
        turnState = 'caution'
        straightState = 'go'
      }
    } else if (value === 'eastWestGreen') {
      if (direction === 'east' || direction === 'west') {
        straightState = 'go'
        turnState = 'yield'
      }
    } else if (value === 'eastYellow') {
      if (direction === 'east') {
        straightState = 'caution'
        turnState = 'caution'
      }
      if (direction === 'west') {
        straightState = 'go'
        turnState = 'yield'
      }
    } else if (value === 'westGreenArrow') {
      if (direction === 'west') {
        turnState = 'go'
        straightState = 'go'
      }
    } else if (value === 'westYellowArrow') {
      if (direction === 'west') {
        turnState = 'caution'
        straightState = 'caution'
      }
    }

    return { straightState, turnState }
  }

  function getTrafficState() {
    const { value } = currentState

    if (value === 'northGreenArrow') {
      return 'north'
    } else if (value === 'northYellowArrow') {
      return 'north'
    } else if (value === 'northSouthGreen') {
      return 'northSouth'
    } else if (value === 'northYellow') {
      return 'northSouth'
    } else if (value === 'southGreenArrow') {
      return 'south'
    } else if (value === 'southYellowArrow') {
      return 'south'
    } else if (value === 'eastGreenArrow') {
      return 'east'
    } else if (value === 'eastYellowArrow') {
      return 'east'
    } else if (value === 'eastWestGreen') {
      return 'eastWest'
    } else if (value === 'eastYellow') {
      return 'eastWest'
    } else if (value === 'westGreenArrow') {
      return 'west'
    } else if (value === 'westYellowArrow') {
      return 'west'
    }

    return ''
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4">
      <div className="bg-zinc-700 rounded-br-2xl"></div>
      <div className="rotate-180">
        <TrafficLight {...getLightState('south')} />
      </div>
      <div className="border-l border-zinc-700"></div>
      <div className="bg-zinc-700 rounded-bl-2xl"></div>
      <div className="border-b border-zinc-700"></div>
      <SimulateTraffic direction={getTrafficState()} />
      <div className="-rotate-90">
        <TrafficLight {...getLightState('west')} />
      </div>
      <div className="rotate-90">
        <TrafficLight {...getLightState('east')} />
      </div>
      <div className="border-t border-zinc-700"></div>
      <div className="bg-zinc-700 rounded-tr-2xl"></div>
      <div className="border-r border-zinc-700"></div>
      <div className="rotate-0">
        <TrafficLight {...getLightState('north')} />
      </div>
      <div className="bg-zinc-700 rounded-tl-2xl"></div>
    </div>
  )
}

function SimulateTraffic({ direction }: { direction: string }) {
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
