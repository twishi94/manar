import svgPaths from "../../imports/svg-pbgrngzn5j";

export function Globe({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`} data-name="Globe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_132_159)" id="Frame">
          <path clipRule="evenodd" d={svgPaths.p28dbd280} fill="#FF5722" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_132_159">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}