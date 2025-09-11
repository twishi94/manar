import { ISOMETRIC_COLORS, STROKE_WIDTHS, ICON_SIZES, IconProps } from './isometric-constants';

export function IsometricLinkedIn({ className = "", style = {} }: IconProps) {
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
      {/* LinkedIn card base - front face */}
      <path 
        d="M2 16 L2 6 L8 4.5 L14 6 L14 16 L2 16 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* LinkedIn card top face */}
      <path 
        d="M2 6 L8 4.5 L14 6 L8 7.5 L2 6 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* LinkedIn card side face */}
      <path 
        d="M14 6 L14 16 L8 17.5 L8 7.5 L14 6 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* LinkedIn logo elements */}
      <rect x="4" y="8" width="1" height="6" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="4.5" cy="7" r="0.5" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="6" y="10" width="1" height="4" fill={ISOMETRIC_COLORS.ACCENT} />
      <rect x="8" y="10" width="1" height="4" fill={ISOMETRIC_COLORS.ACCENT} />
      <path d="M8 10 Q9 9 10 10 L10 14" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.THICK} fill="none" />
    </svg>
  );
}

export function IsometricTwitter({ className = "", style = {} }: IconProps) {
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
      {/* Twitter card base - front face */}
      <path 
        d="M2 16 L2 6 L8 4.5 L14 6 L14 16 L2 16 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Twitter card top face */}
      <path 
        d="M2 6 L8 4.5 L14 6 L8 7.5 L2 6 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Twitter card side face */}
      <path 
        d="M14 6 L14 16 L8 17.5 L8 7.5 L14 6 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* Twitter bird silhouette */}
      <path 
        d="M4 12 Q6 8 10 10 Q11 9 12 10 Q11 11 10 11 Q8 13 4 12 Z" 
        fill={ISOMETRIC_COLORS.ACCENT}
      />
      <circle cx="9" cy="10" r="0.3" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
    </svg>
  );
}

export function IsometricGithub({ className = "", style = {} }: IconProps) {
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
      {/* GitHub card base - front face */}
      <path 
        d="M2 16 L2 6 L8 4.5 L14 6 L14 16 L2 16 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* GitHub card top face */}
      <path 
        d="M2 6 L8 4.5 L14 6 L8 7.5 L2 6 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* GitHub card side face */}
      <path 
        d="M14 6 L14 16 L8 17.5 L8 7.5 L14 6 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.LIGHT}
      />
      
      {/* GitHub logo - simplified cat face */}
      <circle cx="8" cy="10" r="2.5" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="7" cy="9.5" r="0.3" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      <circle cx="9" cy="9.5" r="0.3" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      <path d="M7.5 11 Q8 11.5 8.5 11" stroke={ISOMETRIC_COLORS.ACCENT_DARK} strokeWidth={STROKE_WIDTHS.THIN} fill="none" />
      
      {/* Ears */}
      <polygon points="6,8 7,7 7.5,8.5" fill={ISOMETRIC_COLORS.ACCENT} />
      <polygon points="10,8 9,7 8.5,8.5" fill={ISOMETRIC_COLORS.ACCENT} />
    </svg>
  );
}