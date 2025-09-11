import { ISOMETRIC_COLORS, STROKE_WIDTHS, ICON_SIZES, IconProps } from './isometric-constants';

export function IsometricMenu({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SMALL.width}
      height={ICON_SIZES.SMALL.height}
      viewBox={ICON_SIZES.SMALL.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Menu lines with 3D effect */}
      <path 
        d="M3 6 L17 6 L15 8 L1 8 L3 6 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      <path 
        d="M1 8 L15 8 L15 9 L1 9 L1 8 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      
      <path 
        d="M3 10 L17 10 L15 12 L1 12 L3 10 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      <path 
        d="M1 12 L15 12 L15 13 L1 13 L1 12 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      
      <path 
        d="M3 14 L17 14 L15 16 L1 16 L3 14 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      <path 
        d="M1 16 L15 16 L15 17 L1 17 L1 16 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
    </svg>
  );
}

export function IsometricClose({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SMALL.width}
      height={ICON_SIZES.SMALL.height}
      viewBox={ICON_SIZES.SMALL.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* X shape with 3D effect */}
      <path 
        d="M5 5 L15 15 L13 17 L3 7 L5 5 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      <path 
        d="M3 7 L13 17 L13 18 L3 8 L3 7 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      
      <path 
        d="M15 5 L5 15 L7 17 L17 7 L15 5 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      <path 
        d="M17 7 L7 17 L7 18 L17 8 L17 7 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
    </svg>
  );
}

export function IsometricArrowRight({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SMALL.width}
      height={ICON_SIZES.SMALL.height}
      viewBox={ICON_SIZES.SMALL.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Arrow shaft - front face */}
      <path 
        d="M2 9 L2 11 L12 11 L12 9 L2 9 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Arrow shaft - top face */}
      <path 
        d="M2 9 L14 7 L14 9 L2 11 L2 9 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Arrow head - front face */}
      <path 
        d="M12 6 L12 14 L18 10 L12 6 Z" 
        fill={ISOMETRIC_COLORS.ACCENT}
        stroke={ISOMETRIC_COLORS.ACCENT_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Arrow head - 3D effect */}
      <path 
        d="M12 6 L18 10 L16 8 L12 6 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      
      {/* Arrow head bottom */}
      <path 
        d="M12 14 L18 10 L16 12 L12 14 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
    </svg>
  );
}