import { createMachine } from 'xstate'

export default createMachine({
  id: 'trafficIntersection',
  initial: 'allRed',
  states: {
    allRed: {
      after: {
        2000: 'northSouthGreen',
      },
    },
    northSouthGreen: {
      after: {
        5000: 'northSouthYellow',
      },
    },
    northSouthYellow: {
      after: {
        2000: 'allRedBeforeEastWest',
      },
    },
    allRedBeforeEastWest: {
      after: {
        1000: 'eastWestGreen',
      },
    },
    eastWestGreen: {
      after: {
        5000: 'eastWestYellow',
      },
    },
    eastWestYellow: {
      after: {
        2000: 'allRedBeforeNorthSouth',
      },
    },
    allRedBeforeNorthSouth: {
      after: {
        1000: 'northSouthGreen',
      },
    },
  },
})
