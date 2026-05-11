export const themeConfig = {
  storageKey: 'theme',
  attribute: 'data-theme',
  dark: 'dark',
  light: 'light'
} as const;

export const themeChainConfig = {
  anchor: { x: 18, y: 4 },
  chain: {
    restLength: 42,
    controlRatioX: 0.36,
    controlRatioY: 0.54,
    controlAngleBoost: 0.12,
    lowerCurveBoost: 0.22
  },
  hover: {
    radius: 320,
    maxAngle: 1.18,
    enterImpulse: 0.24,
    horizontalResponse: 1.4
  },
  click: {
    duration: 560,
    pullDistance: 10.8,
    recoilDistance: -2.1,
    settleDistance: 0.85,
    centerDeadZone: 0.12,
    swingImpulse: 0.1,
    verticalImpulse: 1.7
  },
  physics: {
    maxAngle: 1.12,
    angleStiffness: 0.05,
    angleDamping: 0.12,
    angleFriction: 0.984,
    pullStiffness: 0.15,
    pullDamping: 0.28,
    pullFriction: 0.91,
    pullClamp: { min: -2.6, max: 11.8 }
  },
  timing: {
    minDt: 0.65,
    maxDt: 1.8
  },
  settle: {
    angleEpsilon: 0.0012,
    velocityEpsilon: 0.0012,
    pullEpsilon: 0.02
  },
  render: {
    epsilon: 0.01
  }
} as const;
