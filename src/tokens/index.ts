// Reroom Design System — TypeScript Token Exports

export const spacing = {
  100: 4,
  200: 8,
  300: 12,
  400: 16,
  600: 24,
  800: 32,
  1600: 64,
  2400: 96,
  4000: 160,
} as const

export const radius = {
  100: 4,
  200: 8,
  400: 16,
  xl: 24,
  full: 9999,
} as const

export const sizing = {
  iconSmall: 24,
} as const

export const colors = {
  background: {
    default: {
      default: '#ffffff',
      secondary: '#f5f5f5',
      tertiary: '#ebebeb',
      hover: '#f0f0f0',
    },
    brand: {
      default: '#2c2c2c',
      secondary: '#3d3d3d',
      tertiary: '#525252',
      hover: '#1a1a1a',
    },
    neutral: {
      default: '#5a5a5a',
      secondary: '#757575',
      tertiary: '#919191',
      hover: '#4a4a4a',
    },
    positive: {
      default: '#14ae5c',
      secondary: '#d9f5e7',
      tertiary: '#f0fbf5',
      hover: '#0e9a50',
    },
    warning: {
      default: '#e8b931',
      secondary: '#fdf3d0',
      tertiary: '#fef9ec',
      hover: '#d4a620',
    },
    danger: {
      default: '#ec221f',
      secondary: '#fdd9d8',
      tertiary: '#fff0f0',
      hover: '#d41a17',
    },
  },
  border: {
    default: {
      default: '#d9d9d9',
      secondary: '#ebebeb',
      tertiary: '#f5f5f5',
    },
    brand: {
      default: '#2c2c2c',
      secondary: '#525252',
      tertiary: '#757575',
    },
    neutral: {
      default: '#919191',
      secondary: '#b5b5b5',
      tertiary: '#d9d9d9',
    },
    positive: {
      default: '#14ae5c',
      secondary: '#5fd99a',
      tertiary: '#a8eccc',
    },
    warning: {
      default: '#e8b931',
      secondary: '#f1d27e',
      tertiary: '#f7e4b0',
    },
    danger: {
      default: '#ec221f',
      secondary: '#f47978',
      tertiary: '#f9bcbc',
    },
  },
  text: {
    default: {
      default: '#1e1e1e',
      secondary: '#5a5a5a',
      tertiary: '#919191',
      onColor: '#ffffff',
    },
    brand: {
      default: '#2c2c2c',
      secondary: '#525252',
      onColor: '#ffffff',
    },
    neutral: {
      default: '#5a5a5a',
      secondary: '#757575',
      onColor: '#ffffff',
    },
    positive: {
      default: '#0a8a49',
      secondary: '#14ae5c',
      onColor: '#ffffff',
    },
    warning: {
      default: '#a07c10',
      secondary: '#c49a1e',
      onColor: '#ffffff',
    },
    danger: {
      default: '#c01a17',
      secondary: '#ec221f',
      onColor: '#ffffff',
    },
  },
  icon: {
    default: {
      default: '#1e1e1e',
      secondary: '#5a5a5a',
      tertiary: '#919191',
      onColor: '#ffffff',
    },
    brand: {
      default: '#2c2c2c',
      secondary: '#525252',
      onColor: '#ffffff',
    },
    neutral: {
      default: '#5a5a5a',
      secondary: '#757575',
      onColor: '#ffffff',
    },
    positive: {
      default: '#0a8a49',
      secondary: '#14ae5c',
      onColor: '#ffffff',
    },
    warning: {
      default: '#a07c10',
      secondary: '#c49a1e',
      onColor: '#ffffff',
    },
    danger: {
      default: '#c01a17',
      secondary: '#ec221f',
      onColor: '#ffffff',
    },
  },
} as const

export const typography = {
  fontFamily: {
    base: "'Inter', sans-serif",
    code: "'Roboto Mono', monospace",
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    titleHero: 72,
    titlePage: 48,
    subtitle: 32,
    heading: 24,
    subheading: 20,
    body: 16,
    bodySmall: 14,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    body: 1.5,
  },
  letterSpacing: {
    tight: '-0.03em',
    snug: '-0.02em',
    normal: '0em',
  },
  styles: {
    titleHero: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 72,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.03em',
    },
    titlePage: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    subtitle: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    heading: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    subheading: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    bodyBase: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    bodyStrong: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    bodySmall: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    bodyCode: {
      fontFamily: "'Roboto Mono', monospace",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
  },
} as const

export type SpacingKey = keyof typeof spacing
export type RadiusKey = keyof typeof radius
export type ColorCategory = keyof typeof colors
