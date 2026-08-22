import {
    GraduationCap,
    Server,
    Database,
    PanelsTopLeft,
    Briefcase,
    Hammer,
} from "lucide-react";

export const ABOUT_CARDS = [
    {
        title: "Education",
        icon: GraduationCap,
        items: [
            "Associate Degree in Programming",
            "Greenville Technical College",
            "2025",
        ],
    },
    {
        title: "Frontend",
        icon: PanelsTopLeft,
        items: [
            "React",
            "JavaScript",
            "HTML and CSS",
        ],
    },
    {
        title: "Backend",
        icon: Server,
        items: [
            "Java",
            "Spring Boot",
            "REST APIs",
        ],
    },
    {
        title: "Data",
        icon: Database,
        items: [
            "PostgreSQL",
            "MySQL",
            "Relational SQL",
        ]
    },
    {
        title: "Current Work",
        icon: Hammer,
        items: [
            "Fellowship Baptist Church",
            "Client Website",
        ]
    },
    {
        title: "Seeking",
        icon: Briefcase,
        items: [
            "Junior software roles",
            "Full-stack, React, or Java",
        ]
    },
];