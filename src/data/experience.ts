export type TimelineItem = {
    id: string;
    category: "education" | "hackathons" | "leadership" | "certifications";
    title: string;
    org: string;
    description: string;
    meta?: string[];
};

export const timelineItems: TimelineItem[] = [
    {
        id: "education",
        category: "education",
        title: "B.E. in Computer Science Engineering",
        org: "KLE Technological University",
        description:
            "Currently pursuing undergraduate studies in 5th Semester with a 9.2 CGPA.",
        meta: ["Undergraduate", "5th Semester", "9.2 CGPA"],
    },
    {
        id: "hackathon-journey",
        category: "hackathons",
        title: "Hackathon Journey",
        org: "5 Hackathons · 2 Top-10 Finishes",
        description:
            "Participated in 5 hackathons, gaining hands-on experience in rapid problem solving, teamwork, ideation, and building working prototypes under time constraints.",
    },
    {
        id: "leadership",
        category: "leadership",
        title: "Class Representative",
        org: "KLE Technological University",
        description:
            "Served as a Class Representative, helping coordinate communication between students and faculty, sharing important information, and supporting class coordination.",
        meta: ["Leadership", "Communication", "Team Coordination", "Responsibility", "Problem Solving"],
    },
];

export type Hackathon = {
    id: string;
    status: "Top 10 Finalist" | "Participant";
    name: string;
    year: string;
    team?: string;
    problemStatement?: string;
    solution?: string;
    tech?: string;
    achievement?: string;
};

// Placeholders only — names, teams, dates, and achievements are not invented.
export const hackathons: Hackathon[] = [
    { id: "h1", status: "Top 10 Finalist", name: "[Hackathon Name]", year: "[Year]" },
    { id: "h2", status: "Top 10 Finalist", name: "[Hackathon Name]", year: "[Year]" },
    { id: "h3", status: "Participant", name: "[Hackathon Name]", year: "[Year]" },
    { id: "h4", status: "Participant", name: "[Hackathon Name]", year: "[Year]" },
    { id: "h5", status: "Participant", name: "[Hackathon Name]", year: "[Year]" },
];

export const achievementStats = [
    { value: "9.2", label: "CGPA" },
    { value: "5th", label: "Semester" },
    { value: "5+", label: "Hackathons Attended" },
    { value: "2×", label: "Top 10 Finishes" },
];