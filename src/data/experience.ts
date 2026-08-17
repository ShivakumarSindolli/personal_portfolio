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
        title: "Computer Science Engineering",
        org: "KLE Technological University",
        description:
            "[Degree] · [Current semester/year] · [Relevant coursework] · [Academic achievements]",
        meta: ["Degree — editable", "Semester/year — editable", "Coursework — editable"],
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
    {
        id: "certification",
        category: "certifications",
        title: "[Certification Name]",
        org: "[Platform] · [Year]",
        description: "Editable placeholder — add your certification details here.",
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
    { value: "5+", label: "Hackathons Attended" },
    { value: "2×", label: "Top 10 Finishes" },
    { value: "1", label: "Leadership Role" },
    { value: "Multiple", label: "Projects Built" },
];