// Shared constants for isometric icons
export const ISOMETRIC_COLORS = {
  // Orange tones
  PRIMARY: '#FF7043',
  PRIMARY_STROKE: '#E64A19',
  SECONDARY: '#FFB74D', 
  SECONDARY_STROKE: '#F57C00',
  TERTIARY: '#FB8C00',
  TERTIARY_STROKE: '#E65100',
  
  // Purple tones
  ACCENT: '#E1BEE7',
  ACCENT_STROKE: '#9C27B0',
  ACCENT_DARK: '#6A1B9A',
  
  // Utility colors
  WHITE: '#ffffff',
  ACCENT_TRANSPARENT: 'rgba(225,190,231,0.6)',
  ACCENT_LIGHT_TRANSPARENT: 'rgba(225,190,231,0.4)',
  ACCENT_SEMI_TRANSPARENT: 'rgba(225,190,231,0.5)',
  SHADOW: 'rgba(106,27,154,0.2)',
} as const;

export const STROKE_WIDTHS = {
  THIN: '0.3',
  LIGHT: '0.4', 
  MEDIUM: '0.6',
  THICK: '0.8',
  HEAVY: '1',
  EXTRA_HEAVY: '1.2',
  DOUBLE: '1.5',
  TRIPLE: '2',
  QUAD: '2.4',
} as const;

export const ICON_SIZES = {
  SMALL: { width: '20', height: '20', viewBox: '0 0 20 20' },
  MEDIUM: { width: '24', height: '24', viewBox: '0 0 24 24' },
  LARGE: { width: '40', height: '40', viewBox: '0 0 40 40' },
  XLARGE: { width: '48', height: '48', viewBox: '0 0 48 48' },
  SERVICE: { width: '56', height: '56', viewBox: '0 0 56 56' },
  HERO: { width: '64', height: '64', viewBox: '0 0 64 64' },
} as const;

export type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};