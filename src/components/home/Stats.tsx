import { BriefcaseBusiness, Code2, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

export default function Stats() {
  const stats = [
    {
      icon: BriefcaseBusiness,
      number: "4+ anos",
      label: "Experiência profissional",
    },
    {
      icon: Code2,
      number: "Full Stack",
      label: "C#/.NET, React e TypeScript",
    },
    {
      icon: Sparkles,
      number: `${projects.length} projetos`,
      label: "Aplicações em destaque no site",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
      {stats.map(({ icon: Icon, number, label }, index) => (
        <div
          key={label}
          className={`rounded-[18px] border border-border bg-surface p-4 sm:p-5.5 ${index === 2 ? "col-span-2 sm:col-span-1" : ""}`}
        >
          <Icon size={23} className="mb-3 text-primary" />
          <div className="text-[26px] font-extrabold tracking-[-1px]">
            {number}
          </div>
          <p className="text-xs text-muted">{label}</p>
        </div>
      ))}
    </div>
  );
}
