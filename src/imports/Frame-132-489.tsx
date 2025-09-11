import svgPaths from "./svg-qjsba1u7tf";

function TablerPlugConnected() {
  return (
    <div className="absolute inset-[12.5%]" data-name="tabler:plug-connected">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="tabler:plug-connected">
            <path d={svgPaths.p9cb1900} id="Vector" stroke="var(--stroke-0, #F16324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full" data-name="Frame">
      <TablerPlugConnected />
    </div>
  );
}