export type Exploration = {
  label: string;
  sublabel: string;
  rotate: number;
};

export const explorations: Exploration[] = [
  { label: "React + R3F", sublabel: "3D hero experiments", rotate: -3 },
  { label: "UML Diagrams", sublabel: "Class & activity design", rotate: 2 },
  { label: "GSAP ScrollTrigger", sublabel: "Scroll-driven motion", rotate: -2 },
  { label: "RAG Pipelines", sublabel: "Retrieval-grounded LLMs", rotate: 3 },
  { label: "Data Viz", sublabel: "Pandas + Matplotlib", rotate: -1 },
  { label: "Design Systems", sublabel: "Tailwind token systems", rotate: 2 },
];
