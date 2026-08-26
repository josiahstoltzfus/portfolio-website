import {
    Bot,
    ClipboardCheck,
    Database,
    FolderOpen,
    Monitor,
    MousePointer,
    Paintbrush,
    Pencil,
    Puzzle,
    Server,
    Smartphone,
} from "lucide-react";

export const HIGHLIGHTS_MAP = {
    uno: [
        {
            title: "Backend-Managed State",
            description:
                "The Spring Boot backend validates actions, applies card effects, and returns the updated game state.",
            icon: Server,
        },
        {
            title: "Rule Workflows",
            description:
                "Supports skips, reverses, draw cards, wild-color selection, UNO calls, and callouts.",
            icon: ClipboardCheck,
        },
        {
            title: "Computer Turns",
            description:
                "Computer players draw, play cards, choose colors, and advance turns through the same game rules.",
            icon: Bot,
        },
    ],
    "word-search": [
        {
            title: "Puzzle Generation",
            description:
                "Creates a new grid and places a randomized set of hidden words for each puzzle.",
            icon: Puzzle,
        },
        {
            title: "Canvas Rendering",
            description:
                "The HTML Canvas API draws the puzzle board and updates its visual state.",
            icon: Paintbrush,
        },
        {
            title: "Drag Selection",
            description:
                "Pointer input is translated into letter selections and checked against the hidden words.",
            icon: MousePointer,
        },
    ],
    portfolio: [
        {
            title: "Data-Driven Project Pages",
            description:
                "Shared project data powers cards, navigation, screenshots, and reusable detail-page layouts.",
            icon: FolderOpen,
        },
        {
            title: "Interactive Applications",
            description:
                "UNO and Word Search run directly within the portfolio instead of existing only as screenshots.",
            icon: Monitor,
        },
        {
            title: "Responsive Shared Layouts",
            description:
                "Navigation, galleries, typography, and project content adapt across desktop and mobile screens.",
            icon: Smartphone,
        },
    ],
    squirrel: [
        {
            title: "REST API",
            description:
                "The React frontend communicates with Spring Boot endpoints for the application's data operations.",
            icon: Server,
        },
        {
            title: "Relational Data",
            description:
                "PostgreSQL stores squirrels, stash locations, food supplies, and their relationships.",
            icon: Database,
        },
        {
            title: "CRUD Workflows",
            description:
                "Forms and views support creating, editing, and removing the application's managed records.",
            icon: Pencil,
        },
    ],
};