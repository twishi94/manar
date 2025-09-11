import Frame from "../../imports/Frame-132-519";

export function ObservabilityIcon({ className }: { className?: string }) {
  return (
    <div className={className} style={{ width: '32px', height: '32px' }}>
      <Frame />
    </div>
  );
}