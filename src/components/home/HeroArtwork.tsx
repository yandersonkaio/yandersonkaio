import { Sparkles, Terminal } from "lucide-react";

export default function HeroArtwork() {
  return (
    <div className="relative isolate mx-auto grid min-h-75 w-full max-w-125 place-items-center lg:min-h-100">
      <div className="hero-glow pointer-events-none absolute inset-6 -z-10 rounded-full" />

      <div className="relative w-[90%] rotate-[-4deg] rounded-[19px] border border-[#3a375a] bg-[linear-gradient(150deg,#212239,#101522_80%)] p-4 text-[#b2beda] shadow-card sm:p-5">
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-4">
          <span className="size-1.75 rounded-full bg-[#fb6b79]" />
          <span className="size-1.75 rounded-full bg-[#efb852]" />
          <span className="size-1.75 rounded-full bg-[#70e2ab]" />
          <span className="ml-auto text-[10px] text-[#77849c]">
            developer.tsx
          </span>
        </div>

        <div className="mt-6 overflow-hidden font-mono text-[10px] leading-[2.2] whitespace-nowrap sm:mt-7 sm:text-xs">
          <div><span className="text-[#da9ef4]">const</span> developer = {"{"}</div>
          <div className="pl-4">name: <span className="text-[#e9ca85]">&apos;Yanderson Kaio&apos;</span>,</div>
          <div className="pl-4">stack: [<span className="text-[#e9ca85]">&apos;.NET&apos;</span>, <span className="text-[#e9ca85]">&apos;React&apos;</span>],</div>
          <div className="pl-4">mindset: <span className="text-[#e9ca85]">&apos;Build & Learn&apos;</span>,</div>
          <div className="pl-4">creating: <span className="text-[#7bdff4]">true</span></div>
          <div>{"}"}</div>
        </div>

        <div className="mt-5 flex gap-1.5">
          <span className="h-1.25 w-[44%] rounded-full bg-[#8471dc]" />
          <span className="h-1.25 w-[30%] rounded-full bg-[#527ca2]" />
          <span className="h-1.25 w-[10%] rounded-full bg-[#2e364e]" />
        </div>
      </div>

      <div className="absolute top-[7%] right-0 flex rotate-[5deg] items-center gap-3 rounded-[14px] border border-[#464366] bg-[#212239ed] p-2.5 text-white shadow-[0_15px_50px_#05060d77] backdrop-blur-xl sm:right-[-2%] sm:p-3.5">
        <span className="grid size-9 place-items-center rounded-[10px] bg-[#6553aa88] text-[#c9b8ff]">
          <Terminal size={19} />
        </span>
        <span>
          <strong className="block text-xs">Full Stack</strong>
          <small className="text-[10px] text-[#b8b9ca]">Web · APIs · Produtos</small>
        </span>
      </div>

      <div className="absolute bottom-[7%] left-0 flex rotate-[5deg] items-center gap-3 rounded-[14px] border border-[#464366] bg-[#212239ed] p-2.5 text-white shadow-[0_15px_50px_#05060d77] backdrop-blur-xl sm:left-[-2%] sm:p-3.5">
        <span className="grid size-9 place-items-center rounded-[10px] bg-[#6553aa88] text-[#c9b8ff]">
          <Sparkles size={19} />
        </span>
        <span>
          <strong className="block text-xs">Ideas → Products</strong>
          <small className="text-[10px] text-[#b8b9ca]">Projetos independentes</small>
        </span>
      </div>
    </div>
  );
}
