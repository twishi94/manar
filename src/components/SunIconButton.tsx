import { Sun } from 'lucide-react';

interface SunIconButtonProps {
  onClick?: () => void;
  className?: string;
  size?: number;
}

export function SunIconButton({ onClick, className = '', size = 20 }: SunIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex 
        items-center 
        justify-center 
        text-primary 
        hover:text-primary/80 
        transition-all 
        duration-200 
        active:scale-95
        hover:opacity-70
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        ${className}
      `}
      style={{
        width: `${size + 8}px`,
        height: `${size + 8}px`,
      }}
    >
      <Sun 
        className="transition-transform duration-200 hover:scale-110" 
        size={size} 
      />
    </button>
  );
}