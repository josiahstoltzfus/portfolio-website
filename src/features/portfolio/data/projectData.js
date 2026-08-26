import {SCREENSHOT_MAP} from "./screenshotData.js";
import {HIGHLIGHTS_MAP} from "./highlightsData.js"
import {OVERVIEW_MAP} from "./overviewData.js";
import {DECISIONS_MAP} from "./decisionsData.js";
import word_search_board from '../assets/screenshots/word-search/word-search-board.png'
import manage_squirrels from '../assets/screenshots/squirrel/manage-squirrels.png'
import uno_preview from '../assets/screenshots/uno/uno-preview.png'
import hero_section from '../assets/screenshots/portfolio/hero-section.png'

export const PROJECTS = [
    {
        slug: 'portfolio',
        title: "Portfolio Website",
        summary: "A personal portfolio website built with React to showcase the projects I've been working on.",
        description: "A React portfolio built to present my work, explain the decisions behind it, and provide direct access to interactive projects.",
        navDescription: "This website built with React",
        route: "/projects/portfolio",
        role: "Solo designer and developer",
        status: "Live",
        technologies: ["React", "JavaScript", "CSS", "Figma"],
        screenshots: SCREENSHOT_MAP["portfolio"],
        highlights: HIGHLIGHTS_MAP["portfolio"],
        overview: OVERVIEW_MAP["portfolio"],
        decisions: DECISIONS_MAP["portfolio"],
        links: [
            {
                label: "View Source",
                summary: "View the source code on GitHub",
                url: "https://github.com/josiahstoltzfus/portfolio-website",
                variant: "secondary",
            }
        ],
        preview: {
            image: hero_section,
            alt: "Portfolio homepage showing the hero section and featured projects.",
        }
    },
        {
            slug: 'uno',
            title: "UNO",
            summary:
                "A full-stack UNO game built with Spring Boot and React.",
            description: "A full-stack implementation of UNO where players compete against computer-controlled opponents while a Spring Boot backend enforces the rules and manages game state.",
            navDescription: "Card game built with Java",
            route: "/projects/uno",
            role: "Full-stack developer",
            status: "Live",
            technologies: ["React", "Java", "Spring Boot", "REST API"],
            screenshots: SCREENSHOT_MAP["uno"],
            highlights: HIGHLIGHTS_MAP["uno"],
            overview: OVERVIEW_MAP["uno"],
            decisions: DECISIONS_MAP["uno"],
            links: [
                {
                    label: "Play Game",
                    summary: "Play the live game in your browser",
                    url: "/uno",
                    variant: "primary",
                },
                {
                    label: "Frontend Source",
                    summary: "View the source code on GitHub",
                    url: "https://github.com/josiahstoltzfus/portfolio-website/tree/main/src/highlights/games/uno",
                    variant: "secondary",
                },
                {
                    label: "Backend Source",
                    summary: "View the source code on GitHub",
                    url: "https://github.com/josiahstoltzfus/uno-game-api",
                    variant: "secondary",
                },
            ],
            preview: {
                image: uno_preview,
                alt: "UNO gameboard showing players, cards, draw pile, and discard pile.",
            }
        },
        {
            slug: 'word-search',
            title: "Word Search",
            summary: "A word search game built with React and the HTML Canvas API.",
            description: "A browser-based word-search game with randomly generated puzzles and drag-to-select interaction rendered through the HTML Canvas API.",
            navDescription: "Puzzle game built with JavaScript",
            projectType: "Frontend Web Game",
            route: "/projects/word-search",
            role: "Designer and frontend developer",
            status: "Live",
            technologies: ["React", "JavaScript", "Canvas", "CSS"],
            screenshots: SCREENSHOT_MAP["word-search"],
            highlights: HIGHLIGHTS_MAP["word-search"],
            overview: OVERVIEW_MAP["word-search"],
            decisions: DECISIONS_MAP["word-search"],
            links: [
                {
                    label: "Play Game",
                    summary: "Play the live game in your browser",
                    url: "/word-search",
                    variant: "primary",
                },
                {
                    label: "View Source",
                    summary: "View the source code on GitHub",
                    url: "https://github.com/josiahstoltzfus/portfolio-website/tree/main/src/highlights/games/word-search",
                    variant: "secondary",
                }
            ],
            preview: {
                image: word_search_board,
                alt: "Word Search game board with a letter grid and word list.",
            }
        },
        {
            slug: 'squirrel-tracker',
            title: "Squirrel Tracker",
            summary: "An app that lets squirrels track their food supply, built with Java and React.",
            description: "A full-stack resource-tracking application rebuilt from an earlier C# ASP.NET MVC class project, allowing users to manage squirrels, stash locations, and stored food supplies.",
            navDescription: "Full stack app built with Java",
            projectType: "Full-Stack Web Application",
            route: "/projects/squirrel-tracker",
            role: "Full-stack developer",
            status: "Archived",
            technologies: ["React", "Java", "Spring Boot", "Postgres",],
            screenshots: SCREENSHOT_MAP["squirrel"],
            highlights: HIGHLIGHTS_MAP["squirrel"],
            overview: OVERVIEW_MAP["squirrel"],
            decisions: DECISIONS_MAP["squirrel"],
            links: [
                {
                    label: "Frontend Source",
                    summary: "View the live demo in your browser",
                    url: "https://github.com/josiahstoltzfus/squirrel-frontend",
                    variant: "secondary",
                },
                {
                    label: "Backend Source",
                    summary: "View the source code on GitHub",
                    url: "https://github.com/josiahstoltzfus/squirrel-backend",
                    variant: "secondary",
                },
            ],
            preview: {
                image: manage_squirrels,
                alt: "Squirrel Tracker application showing the squirrel management page."
            }
        }
    ]
;