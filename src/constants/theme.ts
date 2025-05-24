import { Platform } from 'react-native';

export const colors = {
  // Primary colors
  primary: {
    light: '#4A7C59', // Light green
    main: '#2E5D3E',  // Dark green
    dark: '#1A3D2A',  // Darker green
  },
  // Earth tones
  earth: {
    ochre: '#D4A373',  // Warm ochre
    tan: '#E9EDC9',    // Light tan
    sand: '#FEFAE0',   // Sand
    brown: '#8B4513',  // Rich brown
  },
  // UI colors
  ui: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    error: '#DC2626',
    success: '#059669',
    warning: '#D97706',
    info: '#2563EB',
  },
  // Text colors
  text: {
    primary: '#1F2937',
    secondary: '#4B5563',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  // Status colors
  status: {
    online: '#10B981',
    offline: '#6B7280',
    loading: '#F59E0B',
  },
} as const;

export const typography = {
  fonts: {
    regular: Platform.select({
      ios: 'Roboto',
      android: 'Roboto',
      default: 'System',
    }),
    heading: Platform.select({
      ios: 'BebasNeue',
      android: 'BebasNeue',
      default: 'System',
    }),
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
} as const;

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
} as const;

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows; 