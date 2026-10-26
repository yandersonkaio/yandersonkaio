export type Project = {
  id: string;
  title: string;
  category: string;
  short: string;
  description: string;
  stack: string[];
  visual: "bingo" | "quiz" | "bible";
  url?: string;
};
