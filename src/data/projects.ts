import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "bingocheck",
    title: "BingoCheck",
    category: "Web App",
    short: "Um jeito mais inteligente de acompanhar cartelas de bingo.",
    description:
      "Gerencie diferentes cartelas, acompanhe os números sorteados e organize suas partidas de bingo em um só lugar.",
    stack: ["React", "TypeScript", "PWA"],
    visual: "bingo",
  },
  {
    id: "quizmix",
    title: "QuizMix",
    category: "Plataforma",
    short: "Quizzes que aproximam pessoas e tornam o aprendizado mais divertido.",
    description:
      "Crie quizzes, agrupe perguntas em coleções, organize desafios e acompanhe rankings em uma plataforma interativa.",
    stack: ["React", "TypeScript", "Firebase"],
    visual: "quiz",
    url: "https://quiz-mix.vercel.app",
  },
  {
    id: "thebible",
    title: "TheBible",
    category: "Web App",
    short: "Uma experiência mais agradável para leitura e estudo bíblico.",
    description:
      "Leitura bíblica com comparação de traduções, marcações e recursos para organizar seus estudos.",
    stack: ["React", "TypeScript"],
    visual: "bible",
    url: "https://thebible-app.vercel.app",
  },
];
