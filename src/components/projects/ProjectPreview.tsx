import type { Project } from "@/types/project";

export default function ProjectPreview({ project }: { project: Project }) {
  const gradient = {
    bingo: "from-[#50418f] via-[#1a1837] to-[#0c0f1d]",
    quiz: "from-[#26546e] via-[#1a1837] to-[#0c0f1d]",
    bible: "from-[#66502d] via-[#1a1837] to-[#0c0f1d]",
  }[project.visual];

  const bingoNumbers = [3, 18, 23, 40, 69, 7, 12, 33, 48, 72, 5, 22, 37, 51, 66];

  return (
    <div
      className={`relative grid min-h-56.25 place-items-center overflow-hidden bg-radial-[at_70%_30%] ${gradient} p-6.5 sm:p-8.75`}
    >
      <div className="relative z-10 w-[95%] max-w-82.5 -rotate-6 rounded-[14px] border border-white/20 bg-[#121526] p-4.25 text-white shadow-[0_30px_60px_#06061291]">
        <div className="mb-4 flex items-center justify-between gap-2 text-[11px] font-bold">
          <span>{project.title}</span>
          <span className="text-[9px] text-[#a5a9bb]">● ● ●</span>
        </div>

        {project.visual === "bingo" && (
          <div className="grid grid-cols-5 gap-1.75">
            {bingoNumbers.map((number, index) => (
              <span
                key={`${number}-${index}`}
                className={`rounded-md py-2 text-center text-[10px] ${[1, 4, 7, 10, 14].includes(index) ? "bg-[#7f66e0] text-white" : "bg-[#24273d] text-[#dae0f2]"}`}
              >
                {number}
              </span>
            ))}
          </div>
        )}

        {project.visual === "quiz" && (
          <div className="space-y-1.5">
            <div className="rounded-md bg-[#24273d] p-3 text-[10px]">
              Qual tecnologia é utilizada no QuizMix?
            </div>
            <div className="rounded border border-[#494968] p-2 text-[9px] text-[#ccd0eb]">A. Python</div>
            <div className="rounded border border-[#79d7ca] bg-[#24545370] p-2 text-[9px] text-[#ccd0eb]">B. React e TypeScript ✓</div>
            <div className="rounded border border-[#494968] p-2 text-[9px] text-[#ccd0eb]">C. Java</div>
          </div>
        )}

        {project.visual === "bible" && (
          <div className="font-serif text-xs leading-[1.7] text-[#e7dec3]">
            <span className="text-[#d6b16b]">Filipenses 1:6</span>
            <p className="mt-2">
              Estou certo de que aquele que começou boa obra em vocês{" "}
              <mark className="bg-[#81663e75] px-1 text-inherit">
                vai completá-la
              </mark>{" "}
              até o dia de Cristo Jesus.
            </p>
          </div>
        )}
      </div>
      <span className="absolute right-4 bottom-3 text-[10px] text-white/50">
        Visual ilustrativo
      </span>
    </div>
  );
}
