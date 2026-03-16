interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-brand-red" />
      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-red">
        {label}
      </span>
    </div>
  );
}
