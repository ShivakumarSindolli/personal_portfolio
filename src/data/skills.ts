export type SkillGroup = {
    category: string;
    skills: string[];
};

export const skillGroups: SkillGroup[] = [
    { category: "Languages", skills: ["Java", "JavaScript", "Python", "C", "SQL"] },
    { category: "Frontend", skills: ["React", "HTML", "CSS", "Tailwind CSS", "Vite"] },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "REST API", "MongoDB", "Socket.IO"],
    },
    { category: "AI", skills: ["Python", "Pandas", "Scikit-learn", "Machine Learning"] },
    { category: "Tools", skills: ["Git", "GitHub", "Postman"] },
    { category: "Deployment / Cloud", skills: ["Vercel", "Render", "HuggingFace"] },
    {
        category: "Core CS",
        skills: [
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "DBMS",
            "Computer Networks",
            "Operating Systems",
            "Software Engineering",
        ],
    },
];