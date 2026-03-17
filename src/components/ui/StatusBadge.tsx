interface StatusBadgeProps {
  label: string;
  variant?: "red" | "amber" | "green";
  pulse?: boolean;
}

export default function StatusBadge({ label, variant = "red", pulse = false }: StatusBadgeProps) {
  const colors = {
    red: "text-brand-red border-brand-red/60 bg-brand-red/10",
    amber: "text-amber-500 border-amber-500/60 bg-amber-500/10",
    green: "text-green-500 border-green-500/60 bg-green-500/10",
  };

  const dotColors = {
    red: "bg-brand-red",
    amber: "bg-amber-500",
    green: "bg-green-500",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.2em] uppercase border ${colors[variant]}`}>
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${dotColors[variant]}`} />
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColors[variant]}`} />
        </span>
      )}
      {label}
    </span>
  );
}
