import { ISOMETRIC_COLORS, STROKE_WIDTHS, ICON_SIZES, IconProps } from './isometric-constants';

export function IsometricBuilding({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.XLARGE.width}
      height={ICON_SIZES.XLARGE.height}
      viewBox={ICON_SIZES.XLARGE.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Building base - front face */}
      <path 
        d="M8 40 L8 20 L24 12 L40 20 L40 40 L8 40 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.HEAVY}
      />
      
      {/* Building top face */}
      <path 
        d="M8 20 L24 12 L40 20 L24 28 L8 20 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.HEAVY}
      />
      
      {/* Building side face */}
      <path 
        d="M40 20 L40 40 L24 48 L24 28 L40 20 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.HEAVY}
      />
      
      {/* Windows front */}
      <rect x="12" y="24" width="3" height="4" fill={ISOMETRIC_COLORS.ACCENT} rx="0" />
      <rect x="17" y="24" width="3" height="4" fill={ISOMETRIC_COLORS.ACCENT} rx="0" />
      <rect x="12" y="30" width="3" height="4" fill={ISOMETRIC_COLORS.ACCENT} rx="0" />
      <rect x="17" y="30" width="3" height="4" fill={ISOMETRIC_COLORS.ACCENT} rx="0" />
      
      {/* Windows side */}
      <polygon points="28,24 31,23 31,27 28,28" fill={ISOMETRIC_COLORS.ACCENT} />
      <polygon points="33,22 36,21 36,25 33,26" fill={ISOMETRIC_COLORS.ACCENT} />
      
      {/* Door */}
      <rect x="22" y="32" width="4" height="8" fill={ISOMETRIC_COLORS.ACCENT_DARK} rx="0" />
      <circle cx="22.6" cy="36" r="0.4" fill={ISOMETRIC_COLORS.SECONDARY} />
    </svg>
  );
}

export function IsometricCheck({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.LARGE.width}
      height={ICON_SIZES.LARGE.height}
      viewBox={ICON_SIZES.LARGE.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Check box base - front face */}
      <path 
        d="M4 32 L4 12 L16 8 L28 12 L28 32 L4 32 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THICK}
      />
      
      {/* Check box top face */}
      <path 
        d="M4 12 L16 8 L28 12 L16 16 L4 12 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THICK}
      />
      
      {/* Check box side face */}
      <path 
        d="M28 12 L28 32 L16 36 L16 16 L28 12 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THICK}
      />
      
      {/* Check mark */}
      <path 
        d="M8 20 L12 24 L20 16" 
        stroke={ISOMETRIC_COLORS.ACCENT}
        strokeWidth={STROKE_WIDTHS.QUAD}
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Check mark shadow on side */}
      <path 
        d="M21 15 L24 19 L30 12" 
        stroke={ISOMETRIC_COLORS.ACCENT_TRANSPARENT}
        strokeWidth="1.6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function IsometricCube({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.MEDIUM.width}
      height={ICON_SIZES.MEDIUM.height}
      viewBox={ICON_SIZES.MEDIUM.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Cube front face */}
      <path 
        d="M3 18 L3 8 L9 6 L15 8 L15 18 L3 18 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Cube top face */}
      <path 
        d="M3 8 L9 6 L15 8 L21 6 L15 4 L9 6 L3 8 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Cube right face */}
      <path 
        d="M15 8 L21 6 L21 16 L15 18 L15 8 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Detail lines */}
      <line x1="6" y1="7.5" x2="6" y2="16.5" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.LIGHT} />
      <line x1="9" y1="7" x2="9" y2="17" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.LIGHT} />
      <line x1="12" y1="7.5" x2="12" y2="16.5" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.LIGHT} />
      
      {/* Side detail lines */}
      <line x1="17" y1="6.5" x2="17" y2="16.5" stroke={ISOMETRIC_COLORS.ACCENT_TRANSPARENT} strokeWidth="0.4" />
      <line x1="19" y1="6.2" x2="19" y2="16.2" stroke={ISOMETRIC_COLORS.ACCENT_TRANSPARENT} strokeWidth="0.4" />
    </svg>
  );
}

export function IsometricGear({ className = "", style = {} }: IconProps) {
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
      {/* Gear base - front face */}
      <path 
        d="M2 15 L2 7 L7 5.5 L12 7 L12 15 L2 15 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Gear top face */}
      <path 
        d="M2 7 L7 5.5 L12 7 L7 8.5 L2 7 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Gear side face */}
      <path 
        d="M12 7 L12 15 L7 16.5 L7 8.5 L12 7 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Gear teeth front */}
      <rect x="1" y="9" width="1" height="1.5" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="1" y="11" width="1" height="1.5" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="12" y="9" width="1" height="1.5" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="12" y="11" width="1" height="1.5" fill={ISOMETRIC_COLORS.ACCENT} />
      
      {/* Gear teeth top */}
      <rect x="4" y="6" width="1" height="1" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="6" y="6" width="1" height="1" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="8" y="6" width="1" height="1" fill={ISOMETRIC_COLORS.ACCENT} />
      
      {/* Center hole */}
      <ellipse cx="7" cy="11" rx="1.5" ry="2" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      <ellipse cx="8" cy="10.5" rx="1" ry="1.5" fill="rgba(106,27,154,0.6)" />
    </svg>
  );
}

export function IsometricChart({ className = "", style = {} }: IconProps) {
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
      {/* Chart base - front face */}
      <path 
        d="M2 16 L2 6 L8 4.5 L14 6 L14 16 L2 16 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Chart top face */}
      <path 
        d="M2 6 L8 4.5 L14 6 L8 7.5 L2 6 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Chart side face */}
      <path 
        d="M14 6 L14 16 L8 17.5 L8 7.5 L14 6 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Chart bars front */}
      <rect x="3" y="12" width="1" height="3" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="5" y="10" width="1" height="5" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="7" y="9" width="1" height="6" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="9" y="11" width="1" height="4" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="11" y="8" width="1" height="7" fill={ISOMETRIC_COLORS.ACCENT} />
      
      {/* Chart bars side shadow */}
      <polygon points="10,7.5 11,7.2 11,14.2 10,14.5" fill={ISOMETRIC_COLORS.ACCENT_SEMI_TRANSPARENT} />
      <polygon points="12,7.3 13,7 13,14 12,14.3" fill={ISOMETRIC_COLORS.ACCENT_SEMI_TRANSPARENT} />
    </svg>
  );
}

export function IsometricMoney({ className = "", style = {} }: IconProps) {
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
      {/* Money stack base - front face */}
      <path 
        d="M2 15 L2 7 L8 5.5 L14 7 L14 15 L2 15 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Money stack top face */}
      <path 
        d="M2 7 L8 5.5 L14 7 L8 8.5 L2 7 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Money stack side face */}
      <path 
        d="M14 7 L14 15 L8 16.5 L8 8.5 L14 7 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Stack lines front */}
      <line x1="2" y1="9" x2="14" y2="9" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.THIN} />
      <line x1="2" y1="11" x2="14" y2="11" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.THIN} />
      <line x1="2" y1="13" x2="14" y2="13" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.THIN} />
      
      {/* Dollar sign */}
      <text x="8" y="12" textAnchor="middle" fontSize="6" fill={ISOMETRIC_COLORS.ACCENT_DARK} fontWeight="bold">$</text>
      
      {/* Stack lines side */}
      <line x1="14" y1="9" x2="8" y2="10.5" stroke={ISOMETRIC_COLORS.ACCENT_LIGHT_TRANSPARENT} strokeWidth={STROKE_WIDTHS.THIN} />
      <line x1="14" y1="11" x2="8" y2="12.5" stroke={ISOMETRIC_COLORS.ACCENT_LIGHT_TRANSPARENT} strokeWidth={STROKE_WIDTHS.THIN} />
      <line x1="14" y1="13" x2="8" y2="14.5" stroke={ISOMETRIC_COLORS.ACCENT_LIGHT_TRANSPARENT} strokeWidth={STROKE_WIDTHS.THIN} />
    </svg>
  );
}