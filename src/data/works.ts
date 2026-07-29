export type Work = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  span: "wide" | "narrow"; // controls bento column span
  gradient: [string, string];
};

export const works: Work[] = [
  {
    slug: "aqi-ml-pipeline",
    title: "India AQI Prediction",
    category: "Machine Learning",
    blurb:
      "Multi-class air quality classification — caught a data leak that inflated accuracy to 99%, fixed it, shipped an honest 84%.",
    span: "wide",
    gradient: ["#2b2f3a", "#0a0a0f"],
  },
  {
    slug: "online-book-exchange",
    title: "Book Exchange Platform",
    category: "Full Stack · MERN",
    blurb:
      "A community book marketplace with real-time chat and a 5-stage exchange lifecycle.",
    span: "narrow",
    gradient: ["#1f2733", "#0a0a0f"],
  },
  {
    slug: "ride-booking-app",
    title: "Ride Booking Application",
    category: "Java · OOP",
    blurb:
      "A menu-driven ride-hailing simulator built around a real inheritance hierarchy, not a UI mockup.",
    span: "narrow",
    gradient: ["#242a24", "#0a0a0f"],
  },
  {
    slug: "ai-doctor-pro",
    title: "AI Doctor Pro",
    category: "Full Stack · AI/ML",
    blurb:
      "Voice and image symptoms in, RAG-grounded differential diagnosis and specialist triage out.",
    span: "wide",
    gradient: ["#1e2430", "#0a0a0f"],
  },
];
