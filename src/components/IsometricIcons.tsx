// Main exports for all isometric icons
// This file serves as the central entry point for all isometric icons

// Export service icons
export {
  IsometricActivity,
  IsometricShield,
  IsometricEye,
  IsometricZap,
  IsometricClock,
  IsometricSettings,
  IsometricObservability
} from './icons/service-icons';

// Export utility icons
export {
  IsometricBuilding,
  IsometricCheck,
  IsometricCube,
  IsometricGear,
  IsometricChart,
  IsometricMoney
} from './icons/utility-icons';

// Export communication icons
export {
  IsometricEmail,
  IsometricPhone,
  IsometricLocation
} from './icons/communication-icons';

// Export social icons
export {
  IsometricLinkedIn,
  IsometricTwitter,
  IsometricGithub
} from './icons/social-icons';

// Export navigation icons
export {
  IsometricMenu,
  IsometricClose,
  IsometricArrowRight
} from './icons/navigation-icons';

// Re-export types and constants for external use
export type { IconProps } from './icons/isometric-constants';
export { ISOMETRIC_COLORS, STROKE_WIDTHS, ICON_SIZES } from './icons/isometric-constants';

// Legacy icons that might be needed - creating placeholder functions
// These would need to be implemented in the appropriate category files if used
export function IsometricHome({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M10 3 L2 9 L2 17 L8 17 L8 12 L12 12 L12 17 L18 17 L18 9 L10 3 Z" fill="#FF7043" stroke="#E64A19" strokeWidth="0.5" />
      <rect x="9" y="13" width="2" height="4" fill="#6A1B9A" />
    </svg>
  );
}

export function IsometricBriefcase({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M4 7 L4 16 L16 16 L16 7 L4 7 Z" fill="#FF7043" stroke="#E64A19" strokeWidth="0.5" />
      <path d="M7 7 L7 5 L13 5 L13 7" stroke="#E64A19" strokeWidth="0.5" fill="none" />
      <rect x="9" y="10" width="2" height="1" fill="#E1BEE7" />
    </svg>
  );
}

export function IsometricHeart({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M10 17 C10 17 3 12 3 8 C3 6 5 4 7 4 C8 4 10 5 10 7 C10 5 12 4 13 4 C15 4 17 6 17 8 C17 12 10 17 10 17 Z" fill="#FF7043" stroke="#E64A19" strokeWidth="0.5" />
    </svg>
  );
}

export function IsometricCpu({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect x="5" y="5" width="10" height="10" fill="#FF7043" stroke="#E64A19" strokeWidth="0.5" />
      <rect x="7" y="7" width="6" height="6" fill="#E1BEE7" />
      <line x1="3" y1="7" x2="5" y2="7" stroke="#E64A19" strokeWidth="0.5" />
      <line x1="15" y1="7" x2="17" y2="7" stroke="#E64A19" strokeWidth="0.5" />
      <line x1="7" y1="3" x2="7" y2="5" stroke="#E64A19" strokeWidth="0.5" />
      <line x1="7" y1="15" x2="7" y2="17" stroke="#E64A19" strokeWidth="0.5" />
    </svg>
  );
}

export function IsometricLeaf({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M10 18 Q4 15 4 8 Q4 4 8 4 Q15 4 15 10 Q15 15 10 18 Z" fill="#FF7043" stroke="#E64A19" strokeWidth="0.5" />
      <path d="M8 6 Q10 8 12 10 Q14 12 15 14" stroke="#E1BEE7" strokeWidth="0.5" fill="none" />
    </svg>
  );
}

export function IsometricBuilding2({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect x="3" y="8" width="6" height="9" fill="#FF7043" stroke="#E64A19" strokeWidth="0.5" />
      <rect x="11" y="5" width="6" height="12" fill="#FFB74D" stroke="#F57C00" strokeWidth="0.5" />
      <rect x="4" y="10" width="1" height="1" fill="#E1BEE7" />
      <rect x="6" y="10" width="1" height="1" fill="#E1BEE7" />
      <rect x="12" y="7" width="1" height="1" fill="#E1BEE7" />
      <rect x="15" y="7" width="1" height="1" fill="#E1BEE7" />
    </svg>
  );
}

export function IsometricUsers({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="7" cy="7" r="2" fill="#FF7043" stroke="#E64A19" strokeWidth="0.5" />
      <circle cx="13" cy="7" r="2" fill="#FFB74D" stroke="#F57C00" strokeWidth="0.5" />
      <path d="M3 17 Q3 13 7 13 Q11 13 11 17" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="0.3" />
      <path d="M9 17 Q9 13 13 13 Q17 13 17 17" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="0.3" />
    </svg>
  );
}

export function IsometricGraduationCap({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M10 4 L2 8 L10 12 L18 8 L10 4 Z" fill="#FF7043" stroke="#E64A19" strokeWidth="0.5" />
      <path d="M4 9 L4 13 Q4 15 10 15 Q16 15 16 13 L16 9" stroke="#FFB74D" strokeWidth="0.5" fill="none" />
      <line x1="18" y1="8" x2="18" y2="14" stroke="#E1BEE7" strokeWidth="0.5" />
      <rect x="17" y="14" width="2" height="1" fill="#6A1B9A" />
    </svg>
  );
}