import Frame from "../../imports/Frame-132-489";

export function PlugConnected({ className }: { className?: string }) {
  return (
    <div className={className} style={{ width: '32px', height: '32px' }}>
      <Frame />
    </div>
  );
}