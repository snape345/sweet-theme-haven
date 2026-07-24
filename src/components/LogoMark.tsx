interface LogoMarkProps {
  className?: string;
  size?: number;
}

// Mashrabiya TH monogram — interlocking T + H inside a double frame
export function LogoMark({ className, size = 40 }: LogoMarkProps) {
  return (
    <span
      className={className}
      style={{ width: size, height: size, display: "inline-block" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" className="block" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="92" height="92" strokeWidth="1.5" />
        <rect x="10" y="10" width="80" height="80" strokeWidth="0.75" />
        <rect x="14" y="14" width="3" height="3" fill="currentColor" stroke="none" />
        <rect x="83" y="14" width="3" height="3" fill="currentColor" stroke="none" />
        <rect x="14" y="83" width="3" height="3" fill="currentColor" stroke="none" />
        <rect x="83" y="83" width="3" height="3" fill="currentColor" stroke="none" />
        <line x1="28" y1="30" x2="72" y2="30" strokeWidth="2" strokeLinecap="square" />
        <line x1="50" y1="30" x2="50" y2="76" strokeWidth="2" strokeLinecap="square" />
        <line x1="32" y1="42" x2="32" y2="76" strokeWidth="2" strokeLinecap="square" />
        <line x1="68" y1="42" x2="68" y2="76" strokeWidth="2" strokeLinecap="square" />
        <line x1="32" y1="58" x2="68" y2="58" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    </span>
  );
}
