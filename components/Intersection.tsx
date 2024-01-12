'use client'

import { useMachine } from '@xstate/react'
import TrafficLight from './TrafficLight'
import intersectionMachine from '@/machines/intersectionMachine'

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
