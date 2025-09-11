import svgPaths from "../../imports/svg-ia7aerw4yp";

interface LightningProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Lightning({ className = "", style = {} }: LightningProps) {
  return (
    <div className={`relative ${className}`} style={style}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path 
          d={svgPaths.p54e4800} 
          fill="#FF5722" 
          className="transition-colors duration-200"
        />
      </svg>
    </div>
  );
}