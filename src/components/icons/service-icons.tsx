import { ISOMETRIC_COLORS, STROKE_WIDTHS, ICON_SIZES, IconProps } from './isometric-constants';

export function IsometricActivity({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.HERO.width}
      height={ICON_SIZES.HERO.height}
      viewBox={ICON_SIZES.HERO.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Monitor base - front face */}
      <path 
        d="M8 44 L8 16 L28 12 L48 16 L48 44 L8 44 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY}
      />
      
      {/* Monitor top face */}
      <path 
        d="M8 16 L28 12 L48 16 L28 20 L8 16 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY}
      />
      
      {/* Monitor side face */}
      <path 
        d="M48 16 L48 44 L28 48 L28 20 L48 16 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY}
      />
      
      {/* Screen */}
      <rect x="12" y="20" width="28" height="16" fill={ISOMETRIC_COLORS.ACCENT} />
      
      {/* Activity line */}
      <path 
        d="M16 28 L20 24 L24 32 L28 20 L32 28 L36 24" 
        stroke={ISOMETRIC_COLORS.ACCENT_DARK}
        strokeWidth={STROKE_WIDTHS.QUAD}
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Stand */}
      <rect x="24" y="44" width="8" height="6" fill={ISOMETRIC_COLORS.TERTIARY} />
      <rect x="20" y="50" width="16" height="2" fill={ISOMETRIC_COLORS.PRIMARY} />
    </svg>
  );
}

export function IsometricShield({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SERVICE.width}
      height={ICON_SIZES.SERVICE.height}
      viewBox={ICON_SIZES.SERVICE.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Shield main body */}
      <path 
        d="M28 8 L16 12 L16 28 Q16 36 28 44 Q40 36 40 28 L40 12 L28 8 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY}
      />
      
      {/* Shield side highlight */}
      <path 
        d="M28 8 L40 12 L40 28 Q40 32 36 36 L28 44 L28 8 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THICK}
      />
      
      {/* Shield front highlight */}
      <path 
        d="M28 8 L16 12 L16 28 Q16 32 20 36 L28 44 L28 8 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THICK}
      />
      
      {/* Lock symbol */}
      <rect x="24" y="22" width="8" height="8" fill={ISOMETRIC_COLORS.ACCENT} />
      <path 
        d="M24 22 Q24 18 28 18 Q32 18 32 22" 
        stroke={ISOMETRIC_COLORS.ACCENT_DARK}
        strokeWidth={STROKE_WIDTHS.TRIPLE}
        fill="none"
      />
      
      {/* Key hole */}
      <circle cx="28" cy="26" r="1.6" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
    </svg>
  );
}

export function IsometricEye({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SERVICE.width}
      height={ICON_SIZES.SERVICE.height}
      viewBox={ICON_SIZES.SERVICE.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Eye outer shape */}
      <ellipse cx="28" cy="28" rx="20" ry="10" fill={ISOMETRIC_COLORS.PRIMARY} stroke={ISOMETRIC_COLORS.PRIMARY_STROKE} strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY} />
      
      {/* Eye 3D effect */}
      <ellipse cx="32" cy="24" rx="16" ry="8" fill={ISOMETRIC_COLORS.SECONDARY} stroke={ISOMETRIC_COLORS.SECONDARY_STROKE} strokeWidth={STROKE_WIDTHS.THICK} />
      
      {/* Iris */}
      <circle cx="28" cy="28" r="7" fill={ISOMETRIC_COLORS.ACCENT} stroke={ISOMETRIC_COLORS.ACCENT_STROKE} strokeWidth={STROKE_WIDTHS.HEAVY} />
      
      {/* Pupil */}
      <circle cx="28" cy="28" r="3.6" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      
      {/* Light reflection */}
      <circle cx="30" cy="26" r="1.6" fill={ISOMETRIC_COLORS.WHITE} opacity="0.8" />
      
      {/* Eyelashes */}
      <path d="M12 24 L8 20" stroke={ISOMETRIC_COLORS.PRIMARY_STROKE} strokeWidth={STROKE_WIDTHS.TRIPLE} strokeLinecap="round" />
      <path d="M44 24 L48 20" stroke={ISOMETRIC_COLORS.PRIMARY_STROKE} strokeWidth={STROKE_WIDTHS.TRIPLE} strokeLinecap="round" />
      <path d="M12 32 L8 36" stroke={ISOMETRIC_COLORS.PRIMARY_STROKE} strokeWidth={STROKE_WIDTHS.TRIPLE} strokeLinecap="round" />
      <path d="M44 32 L48 36" stroke={ISOMETRIC_COLORS.PRIMARY_STROKE} strokeWidth={STROKE_WIDTHS.TRIPLE} strokeLinecap="round" />
    </svg>
  );
}

export function IsometricZap({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SERVICE.width}
      height={ICON_SIZES.SERVICE.height}
      viewBox={ICON_SIZES.SERVICE.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Lightning bolt main shape */}
      <path 
        d="M32 8 L16 28 L24 28 L20 48 L40 24 L32 24 L32 8 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY}
      />
      
      {/* Lightning bolt 3D effect */}
      <path 
        d="M32 8 L40 24 L32 24 L36 16 L32 8 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THICK}
      />
      
      <path 
        d="M24 28 L20 48 L28 40 L24 28 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.THICK}
      />
      
      {/* Energy sparkles */}
      <circle cx="12" cy="16" r="2" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="44" cy="12" r="1.6" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="48" cy="40" r="2.4" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="8" cy="44" r="1.2" fill={ISOMETRIC_COLORS.ACCENT} />
      
      {/* Inner glow */}
      <path 
        d="M30 12 L18 26 L26 26 L22 40 L34 26 L30 26 L30 12 Z" 
        fill={ISOMETRIC_COLORS.ACCENT}
        opacity="0.6"
      />
    </svg>
  );
}

export function IsometricClock({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SERVICE.width}
      height={ICON_SIZES.SERVICE.height}
      viewBox={ICON_SIZES.SERVICE.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Clock body - front face */}
      <circle cx="28" cy="28" r="18" fill={ISOMETRIC_COLORS.PRIMARY} stroke={ISOMETRIC_COLORS.PRIMARY_STROKE} strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY} />
      
      {/* Clock body - 3D effect */}
      <circle cx="30" cy="26" r="16" fill={ISOMETRIC_COLORS.SECONDARY} stroke={ISOMETRIC_COLORS.SECONDARY_STROKE} strokeWidth={STROKE_WIDTHS.THICK} />
      
      {/* Clock face */}
      <circle cx="28" cy="28" r="13" fill={ISOMETRIC_COLORS.ACCENT} stroke={ISOMETRIC_COLORS.ACCENT_STROKE} strokeWidth={STROKE_WIDTHS.MEDIUM} />
      
      {/* Hour markers */}
      <circle cx="28" cy="17" r="0.8" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      <circle cx="39" cy="28" r="0.8" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      <circle cx="28" cy="39" r="0.8" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      <circle cx="17" cy="28" r="0.8" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      
      {/* Clock hands */}
      <line x1="28" y1="28" x2="28" y2="20" stroke={ISOMETRIC_COLORS.ACCENT_DARK} strokeWidth={STROKE_WIDTHS.QUAD} strokeLinecap="round" />
      <line x1="28" y1="28" x2="34" y2="28" stroke={ISOMETRIC_COLORS.ACCENT_DARK} strokeWidth={STROKE_WIDTHS.TRIPLE} strokeLinecap="round" />
      
      {/* Center dot */}
      <circle cx="28" cy="28" r="1.6" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      
      {/* Digital display */}
      <rect x="32" y="32" width="10" height="4" fill={ISOMETRIC_COLORS.TERTIARY} />
      <text x="37" y="35" textAnchor="middle" fontSize="6" fill={ISOMETRIC_COLORS.WHITE} fontFamily="monospace">99.9</text>
    </svg>
  );
}

export function IsometricSettings({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SERVICE.width}
      height={ICON_SIZES.SERVICE.height}
      viewBox={ICON_SIZES.SERVICE.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Main gear */}
      <circle cx="28" cy="28" r="12" fill={ISOMETRIC_COLORS.PRIMARY} stroke={ISOMETRIC_COLORS.PRIMARY_STROKE} strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY} />
      
      {/* Gear teeth */}
      <rect x="26" y="4" width="4" height="8" fill={ISOMETRIC_COLORS.SECONDARY} />
      <rect x="26" y="44" width="4" height="8" fill={ISOMETRIC_COLORS.SECONDARY} />
      <rect x="4" y="26" width="8" height="4" fill={ISOMETRIC_COLORS.SECONDARY} />
      <rect x="44" y="26" width="8" height="4" fill={ISOMETRIC_COLORS.SECONDARY} />
      
      {/* Diagonal teeth */}
      <rect x="42" y="14" width="6" height="4" fill={ISOMETRIC_COLORS.SECONDARY} transform="rotate(45 44 16)" />
      <rect x="8" y="14" width="6" height="4" fill={ISOMETRIC_COLORS.SECONDARY} transform="rotate(-45 10 16)" />
      <rect x="42" y="38" width="6" height="4" fill={ISOMETRIC_COLORS.SECONDARY} transform="rotate(-45 44 40)" />
      <rect x="8" y="38" width="6" height="4" fill={ISOMETRIC_COLORS.SECONDARY} transform="rotate(45 10 40)" />
      
      {/* 3D effect */}
      <circle cx="30" cy="26" r="10" fill={ISOMETRIC_COLORS.SECONDARY} stroke={ISOMETRIC_COLORS.SECONDARY_STROKE} strokeWidth={STROKE_WIDTHS.THICK} />
      
      {/* Inner gear */}
      <circle cx="28" cy="28" r="6" fill={ISOMETRIC_COLORS.ACCENT} stroke={ISOMETRIC_COLORS.ACCENT_STROKE} strokeWidth={STROKE_WIDTHS.THICK} />
      
      {/* Center hole */}
      <circle cx="28" cy="28" r="3" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
    </svg>
  );
}

export function IsometricObservability({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SERVICE.width}
      height={ICON_SIZES.SERVICE.height}
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="19.9981" cy="20.0001" r="16.2994" stroke="currentColor" strokeWidth="0.733333"></circle>
      <path d="M20.043 3.7002C22.6698 3.7002 25.1085 5.45021 26.9092 8.40625C28.7058 11.3558 29.8291 15.454 29.8291 20C29.8291 24.546 28.7058 28.6442 26.9092 31.5938C25.1085 34.5498 22.6698 36.2998 20.043 36.2998C17.4161 36.2998 14.9784 34.5498 13.1777 31.5938C11.381 28.6442 10.2568 24.5462 10.2568 20C10.2568 15.4538 11.381 11.3558 13.1777 8.40625C14.9784 5.45028 17.4162 3.70022 20.043 3.7002Z" stroke="currentColor" strokeWidth="0.733333"></path>
      <path d="M36.2979 20.0449C36.2979 22.6718 34.5478 25.1104 31.5918 26.9111C28.6423 28.7078 24.5441 29.831 19.998 29.8311C15.4521 29.8311 11.3538 28.7078 8.4043 26.9111C5.44826 25.1104 3.69824 22.6718 3.69824 20.0449C3.69826 17.4181 5.44828 14.9804 8.4043 13.1797C11.3539 11.3829 15.4519 10.2588 19.998 10.2588C24.5442 10.2588 28.6422 11.3829 31.5918 13.1797C34.5478 14.9804 36.2978 17.4181 36.2979 20.0449Z" stroke="currentColor" strokeWidth="0.733333"></path>
    </svg>
  );
}

export function IsometricSmartEnergy({ className = "", style = {} }: IconProps) {
  return (
    <svg 
      width={ICON_SIZES.SERVICE.width}
      height={ICON_SIZES.SERVICE.height}
      viewBox={ICON_SIZES.SERVICE.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Energy housing base - front face */}
      <path 
        d="M8 44 L8 20 L20 16 L32 18 L44 22 L44 44 L8 44 Z" 
        fill={ISOMETRIC_COLORS.PRIMARY}
        stroke={ISOMETRIC_COLORS.PRIMARY_STROKE}
        strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY}
      />
      
      {/* Energy housing top face */}
      <path 
        d="M8 20 L20 16 L32 18 L44 22 L32 26 L20 24 L8 20 Z" 
        fill={ISOMETRIC_COLORS.SECONDARY}
        stroke={ISOMETRIC_COLORS.SECONDARY_STROKE}
        strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY}
      />
      
      {/* Energy housing side face */}
      <path 
        d="M44 22 L44 44 L32 48 L32 26 L44 22 Z" 
        fill={ISOMETRIC_COLORS.TERTIARY}
        stroke={ISOMETRIC_COLORS.TERTIARY_STROKE}
        strokeWidth={STROKE_WIDTHS.EXTRA_HEAVY}
      />
      
      {/* Main lightning bolt - based on imported design */}
      <path 
        d="M29 10 L19 26 L24 26 L22 38 L32 22 L27 22 L29 10 Z" 
        fill={ISOMETRIC_COLORS.ACCENT}
        stroke={ISOMETRIC_COLORS.ACCENT_STROKE}
        strokeWidth={STROKE_WIDTHS.THICK}
      />
      
      {/* Lightning bolt 3D effect */}
      <path 
        d="M29 10 L32 22 L27 22 L30 14 L29 10 Z" 
        fill={ISOMETRIC_COLORS.ACCENT_DARK}
        stroke={ISOMETRIC_COLORS.ACCENT_STROKE}
        strokeWidth={STROKE_WIDTHS.MEDIUM}
      />
      
      {/* Energy meter display */}
      <rect x="12" y="28" width="16" height="8" fill={ISOMETRIC_COLORS.WHITE} stroke={ISOMETRIC_COLORS.PRIMARY_STROKE} strokeWidth={STROKE_WIDTHS.MEDIUM} />
      
      {/* Digital readout lines */}
      <line x1="14" y1="30" x2="26" y2="30" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.LIGHT} />
      <line x1="14" y1="32" x2="22" y2="32" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.LIGHT} />
      <line x1="14" y1="34" x2="24" y2="34" stroke={ISOMETRIC_COLORS.ACCENT} strokeWidth={STROKE_WIDTHS.LIGHT} />
      
      {/* Energy sparkles around the bolt */}
      <circle cx="35" cy="15" r="1.2" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="16" cy="18" r="0.8" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="38" cy="32" r="1" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="12" cy="38" r="0.6" fill={ISOMETRIC_COLORS.ACCENT} />
      
      {/* Connection ports */}
      <rect x="10" y="40" width="3" height="2" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      <rect x="15" y="40" width="3" height="2" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      <rect x="20" y="40" width="3" height="2" fill={ISOMETRIC_COLORS.ACCENT_DARK} />
      
      {/* Side panel indicators */}
      <circle cx="36" cy="30" r="1" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="36" cy="34" r="1" fill={ISOMETRIC_COLORS.ACCENT} />
      <circle cx="40" cy="32" r="1" fill={ISOMETRIC_COLORS.ACCENT} />
    </svg>
  );
}