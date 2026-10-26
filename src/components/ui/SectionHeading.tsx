export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-[clamp(29px,3.3vw,43px)] leading-tight font-extrabold tracking-[-1.5px]">
        {title}<span className="text-primary">.</span>
      </h2>
      {description && (
        <p className="mt-3 max-w-150 text-sm leading-7 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
