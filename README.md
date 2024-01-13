# Traffic Intersection

![IMG_7790](https://github.com/cdonohue/traffic-intersection/assets/1928846/2291cb7b-0554-4703-bf9f-41609f5d56af)

## Description

This project simulates a 4-way traffic intersection.
The intersection is a four-way intersection. Each part of the intersection has four lanes:

- A left turn lane
- Two middle lanes that go straight
- A right turn lane
- A light can either be red, yellow, or green.
  The left-hand turn lane has its own dedicated light. That light can either be red, yellow, green, or flashing orange (go if no cars are coming the other way).

## Features

- All lights change based on a timer. Green lights stay active for 5 seconds and yellow lights stay active for 2 seconds.
- Traffic flow is modeled by a pulsing directional arrow. This currently is only implemented for the straight traffic lanes.
- Left turn signals respect the opposite signal and provide both a dedicated left turn signal and a flashing orange light.

## Organization

### Components

- `SolidLight` - A solid light that can be red, yellow, green, or off.
- `ArrowLight` - A directional arrow that can be red, yellow, green, or flashing orange.
- `TrafficLight` - A traffic light that contains 4 lights: one independent left turn light and three solid lights representing red, yellow, and green. This component also renders the 4 lanes of traffic.
- `Intersection` - The main component that renders the intersection, all of its lights, and the simulation of flowing traffic.

### State Machine

`Intersection` uses a state machine to manage the state of the intersection. The state machine is defined in `intersectionMachine.ts`.

## Coming soon

- [ ] Add sensors to detect cars waiting at the intersection. This would override the default timers and then fall back into the default timer once the sensor is no longer triggered.
- [ ] Add crosswalks and pedestrian signals.

## Demo

> Best viewed on a larger screen (not mobile friendly)
> [https://traffic-intersection.vercel.app/](https://traffic-intersection.vercel.app/)

## Tech Stack

- React
- Next.js
- TypeScript
- Tailwind
- XState

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```
