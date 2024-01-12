# Traffic Intersection

![CleanShot 2024-01-12 at 14 30 06@2x](https://github.com/cdonohue/traffic-intersection/assets/1928846/fd1d6aee-18c3-4d7b-b1b9-3f228a1716ce)

## Description

This project simulates a 4-way traffic intersection.
The intersection is a four-way intersection. Each part of the intersection has four lanes:

- A left turn lane
- Two middle lanes that go straight
- A right turn lane
- A light can either be red, yellow, or green.
  The left-hand turn lane has its own dedicated light. That light can either be red, yellow, green, or flashing orange (go if no cars are coming the other way).

- All lights change based on a timer. Green lights stay active for 5 seconds and yellow lights stay active for 2 seconds.
- Traffic flow is modeled by a moving directional arrow. This currently is only implemented for the straight traffic lanes.
- Left turn signals respect the opposite signal and provide both a dedicated left turn signal and a flashing orange light.

## Coming soon

- [ ] Add sensors to detect cars waiting at the intersection. This would override the default timers and then fall back into the default timer once the sensor is no longer triggered.
- [ ] Add crosswalks and pedestrian signals.

## Demo

[https://traffic-intersection.vercel.app/](https://traffic-intersection.vercel.app/)

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
