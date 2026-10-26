import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import ProjectPreview from "@/components/projects/ProjectPreview";
import type { Project } from "@/types/project";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`card-hover overflow-hidden rounded-[19px] border border-border bg-surface ${featured ? "md:col-span-2 lg:grid lg:grid-cols-2" : ""}`}
    >
      <div className="flex min-h-66.25 flex-col items-start gap-3 p-7">
        <div className="flex w-full items-center justify-between">
          <span className="rounded-md border border-border px-2.5 py-1 text-[10px] text-muted">
            {project.category}
          </span>
          <ArrowUpRight size={19} className="text-muted" />
        </div>
        <h3 className="mt-3 text-[25px] font-bold tracking-[-0.8px]">
          {project.title}
        </h3>
        <p className="max-w-92.5 text-xs leading-[1.8] text-muted">
          {project.short}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-border px-2 py-1 text-[10px] text-muted"
            >
              {technology}
            </span>
          ))}
        </div>
        <details className="group w-full pt-2">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-xs font-bold text-primary [&::-webkit-details-marker]:hidden">
            Ver detalhes <ArrowRight size={14} className="transition-transform group-open:translate-x-1" />
          </summary>
          <div className="mt-3 space-y-3 border-t border-border pt-3">
            <p className="text-xs leading-6 text-muted">{project.description}</p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Acessar aplicativo <ExternalLink size={13} />
              </a>
            )}
          </div>
        </details>
      </div>
      <ProjectPreview project={project} />
    </article>
  );
}
