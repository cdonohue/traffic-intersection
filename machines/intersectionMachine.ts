import { createMachine } from 'xstate'

export default createMachine({
  id: 'trafficIntersection',
  initial: 'allRed',
  states: {
    allRed: {
      after: {
        2000: 'northGreenArrow',
      },
    },
    northGreenArrow: {
      after: {
        5000: 'northYellowArrow',
      },
    },
    northYellowArrow: {
      after: {
        2000: 'northSouthGreen',
      },
    },
    northSouthGreen: {
      after: {
        5000: 'northYellow',
      },
    },
    northYellow: {
      after: {
        2000: 'southGreenArrow',
      },
    },
    southGreenArrow: {
      after: {
        5000: 'southYellowArrow',
      },
    },
    southYellowArrow: {
      after: {
        2000: 'allRedBeforeEastWest',
      },
    },
    allRedBeforeEastWest: {
      after: {
        1000: 'eastGreenArrow',
      },
    },
    eastGreenArrow: {
      after: {
        5000: 'eastYellowArrow',
      },
    },
    eastYellowArrow: {
      after: {
        2000: 'eastWestGreen',
      },
    },
    eastWestGreen: {
      after: {
        5000: 'eastYellow',
      },
    },
    eastYellow: {
      after: {
        2000: 'westGreenArrow',
      },
    },
    westGreenArrow: {
      after: {
        5000: 'westYellowArrow',
      },
    },
    westYellowArrow: {
      after: {
        2000: 'allRedBeforeNorthSouth',
      },
    },
    allRedBeforeNorthSouth: {
      after: {
        1000: 'northGreenArrow',
      },
    },
  },
})
