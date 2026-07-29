export type JournalEntry = {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
};

export const journalEntries: JournalEntry[] = [
  {
    title: "Catching a data leak before it wins",
    excerpt:
      "How a 99% accuracy score turned out to be a lookup table, and what an honest 84% actually looks like.",
    readTime: "4 min",
    date: "Jun 2026",
  },
  {
    title: "Real-time chat with Socket.IO, without the polling",
    excerpt: "Wiring room-per-conversation messaging into an Express REST API.",
    readTime: "5 min",
    date: "May 2026",
  },
  {
    title: "Designing a class hierarchy that actually means something",
    excerpt: "IS-A vs HAS-A in a ride-booking simulator, and why the diagram came first.",
    readTime: "3 min",
    date: "May 2026",
  },
  {
    title: "Chaining RAG, vision, and triage into one pipeline",
    excerpt:
      "Twelve steps from a voice recording to a confidence-scored differential diagnosis.",
    readTime: "6 min",
    date: "2026",
  },
];
