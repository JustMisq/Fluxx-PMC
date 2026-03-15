export default function HudFrame({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Corner brackets */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-left */}
        <div className="absolute top-0 left-0 h-6 w-6">
          <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[var(--color-primary)]/60 to-transparent" />
          <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-[var(--color-primary)]/60 to-transparent" />
        </div>
        {/* Top-right */}
        <div className="absolute top-0 right-0 h-6 w-6">
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[var(--color-primary)]/60 to-transparent" />
          <div className="absolute top-0 right-0 h-[1px] w-full bg-gradient-to-l from-[var(--color-primary)]/60 to-transparent" />
        </div>
        {/* Bottom-left */}
        <div className="absolute bottom-0 left-0 h-6 w-6">
          <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-[var(--color-primary)]/60 to-transparent" />
        </div>
        {/* Bottom-right */}
        <div className="absolute bottom-0 right-0 h-6 w-6">
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent" />
          <div className="absolute bottom-0 right-0 h-[1px] w-full bg-gradient-to-l from-[var(--color-primary)]/60 to-transparent" />
        </div>
      </div>
      {children}
    </div>
  );
}
