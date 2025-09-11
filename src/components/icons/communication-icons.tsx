import { ISOMETRIC_COLORS, STROKE_WIDTHS, ICON_SIZES, IconProps } from './isometric-constants';

export function IsometricEmail({ className = "", style = {} }: IconProps) {
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
      {/* Email envelope base - front face */}
      <path 
        d="M1 14 L1 6 L9 4 L17 6 L17 14 L1 14 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Email envelope top face */}
      <path 
        d="M1 6 L9 4 L17 6 L9 8 L1 6 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Email envelope side face */}
      <path 
        d="M17 6 L17 14 L9 16 L9 8 L17 6 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Envelope flap front */}
      <path 
        d="M1 6 L9 10 L17 6 L9 8 L1 6 Z" 
        fill={ISOMETRIC_COLORS.ACCENT}
        stroke={ISOMETRIC_COLORS.ACCENT_STROKE}
        strokeWidth={STROKE_WIDTHS.THIN}
      />
      
      {/* Letter inside */}
      <rect x="3" y="9" width="10" height="3" fill={ISOMETRIC_COLORS.ACCENT} opacity="0.6" />
      <line x1="4" y1="10" x2="11" y2="10" stroke={ISOMETRIC_COLORS.ACCENT_DARK} strokeWidth={STROKE_WIDTHS.THIN} />
      <line x1="4" y1="11" x2="9" y2="11" stroke={ISOMETRIC_COLORS.ACCENT_DARK} strokeWidth={STROKE_WIDTHS.THIN} />
    </svg>
  );
}

export function IsometricPhone({ className = "", style = {} }: IconProps) {
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
      {/* Phone base - front face */}
      <path 
        d="M6 18 L6 4 L10 3 L14 4 L14 18 L6 18 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Phone top face */}
      <path 
        d="M6 4 L10 3 L14 4 L10 5 L6 4 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Phone side face */}
      <path 
        d="M14 4 L14 18 L10 19 L10 5 L14 4 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Screen */}
      <rect x="7" y="6" width="5" height="8" fill={ISOMETRIC_COLORS.ACCENT} />
      
      {/* Home button */}
      <circle cx="10" cy="16" r="0.8" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      
      {/* Speaker */}
      <rect x="8" y="4.5" width="3" height="0.5" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
    </svg>
  );
}

export function IsometricLocation({ className = "", style = {} }: IconProps) {
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
      {/* Location pin base - front face */}
      <path 
        d="M8 16 L8 8 L10 7 L12 8 L12 16 L8 16 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Location pin top face */}
      <path 
        d="M8 8 L10 7 L12 8 L10 9 L8 8 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Location pin side face */}
      <path 
        d="M12 8 L12 16 L10 17 L10 9 L12 8 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Pin head */}
      <circle cx="10" cy="6" r="2.5" fill={ISOMETRIC_COLORS.ACCENT} stroke={ISOMETRIC_COLORS.ACCENT_STROKE} strokeWidth={STROKE_WIDTHS.THIN} />
      <circle cx="10" cy="6" r="1.2" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      
      {/* Ground shadow */}
      <ellipse cx="10" cy="16.5" rx="2" ry="0.8" fill={ISOMETRIC_COLORS.SHADOW} />
    </svg>
  );
}