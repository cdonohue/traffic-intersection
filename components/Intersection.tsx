import TrafficLight from './TrafficLight'

export default function Intersection() {
  return (
    <div className="grid grid-cols-4 grid-rows-4">
      <div className="bg-green-700 rounded-br-2xl"></div>
      <div className="rotate-180">
        <TrafficLight data-direction="south" />
      </div>
      <div className="border-l-4 border-zinc-700"></div>
      <div className="bg-green-700 rounded-bl-2xl"></div>
      <div className="border-b-4 border-zinc-700"></div>
      <div />
      <div />
      <div className="-rotate-90">
        <TrafficLight data-direction="west" />
      </div>
      <div className="rotate-90">
        <TrafficLight data-direction="east" />
      </div>
      <div />
      <div />
      <div className="border-t-4 border-zinc-700"></div>
      <div className="bg-green-700 rounded-tr-2xl"></div>
      <div className="border-r-4 border-zinc-700"></div>
      <div className="rotate-0">
        <TrafficLight data-direction="north" />
      </div>
      <div className="bg-green-700 rounded-tl-2xl"></div>
    </div>
  )
}
