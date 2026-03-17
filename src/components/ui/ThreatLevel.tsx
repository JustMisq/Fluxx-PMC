interface ThreatLevelProps {
  level: "low" | "medium" | "high" | "critical" | "variable";
  showLabel?: boolean;
}

const config = {
  low: { label: "LOW", color: "text-green-500", bar: "bg-green-500", width: "w-1/4" },
  medium: { label: "MEDIUM", color: "text-amber-500", bar: "bg-amber-500", width: "w-2/4" },
  high: { label: "HIGH", color: "text-orange-500", bar: "bg-orange-500", width: "w-3/4" },
  critical: { label: "CRITICAL", color: "text-red-500", bar: "bg-red-500", width: "w-full" },
  variable: { label: "VARIABLE", color: "text-brand-red", bar: "bg-brand-red", width: "w-2/4" },
};

export default function ThreatLevel({ level, showLabel = true }: ThreatLevelProps) {
  const c = config[level];
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${c.bar} ${c.width} rounded-full transition-all duration-500`} />
      </div>
      {showLabel && (
        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${c.color}`}>
          {c.label}
        </span>
      )}
    </div>
  );
}
