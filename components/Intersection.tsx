'use client'

import { useMachine } from '@xstate/react'
import TrafficLight from './TrafficLight'
import intersectionMachine from '@/machines/intersectionMachine'

export default function Intersection() {
  const [currentState, send] = useMachine(intersectionMachine)

  function getLightState(direction: string) {
    const { value } = currentState

    let straightState = 'stop'

    if (value === 'northSouthGreen') {
      if (direction === 'north' || direction === 'south') {
        straightState = 'go'
      }
    } else if (value === 'eastWestGreen') {
      if (direction === 'east' || direction === 'west') {
        straightState = 'go'
      }
    } else if (value === 'northSouthYellow') {
      if (direction === 'north' || direction === 'south') {
        straightState = 'caution'
      }
    } else if (value === 'eastWestYellow') {
      if (direction === 'east' || direction === 'west') {
        straightState = 'caution'
      }
    } else if (value === 'northSouthRed') {
      if (direction === 'north' || direction === 'south') {
        straightState = 'stop'
      }
    } else if (value === 'eastWestRed') {
      if (direction === 'east' || direction === 'west') {
        straightState = 'stop'
      }
    }

    return { straightState }
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4">
      <div className="bg-green-700 rounded-br-2xl"></div>
      <div className="rotate-180">
        <TrafficLight {...getLightState('south')} />
      </div>
      <div className="border-l-4 border-zinc-700"></div>
      <div className="bg-green-700 rounded-bl-2xl"></div>
      <div className="border-b-4 border-zinc-700"></div>
      <div />
      <div />
      <div className="-rotate-90">
        <TrafficLight {...getLightState('west')} />
      </div>
      <div className="rotate-90">
        <TrafficLight {...getLightState('east')} />
      </div>
      <div />
      <div />
      <div className="border-t-4 border-zinc-700"></div>
      <div className="bg-green-700 rounded-tr-2xl"></div>
      <div className="border-r-4 border-zinc-700"></div>
      <div className="rotate-0">
        <TrafficLight {...getLightState('north')} />
      </div>
      <div className="bg-green-700 rounded-tl-2xl"></div>
    </div>
  )
}
