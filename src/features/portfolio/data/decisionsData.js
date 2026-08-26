export const DECISIONS_MAP = {
    portfolio: {
        challenge:
            "The original project pages relied on generic feature lists that repeated information visitors could already see.",
        decision:
            "I redesigned the pages around project context, technical highlights, and the reasoning behind the work.",
        result:
            "Each project now communicates what I built, how it works, and the decisions I made.",
    },
    uno: {
        challenge:
            "Card animations delayed game-state updates and made the turn sequence more complicated than necessary.",
        decision:
            "I removed the flying-card animation layer and updated the interface directly from each completed backend response.",
        result:
            "Turns now update immediately, and the frontend state flow is simpler and easier to maintain.",
    },
    "word-search": {
        challenge:
            "The puzzle needed fluid grid rendering and drag selection without representing every letter as a separate interface element.",
        decision:
            "I used the Canvas API for drawing and pointer interaction while React manages the surrounding controls and game state.",
        result:
            "The board supports responsive rendering and continuous drag selection while keeping the interface logic organized.",
    },
    squirrel: {
        challenge:
            "The original class project was built with C# and ASP.NET MVC, but I wanted to revisit the same domain using a React and Java stack.",
        decision:
            "I rebuilt the application from scratch with a React frontend, Spring Boot REST API, and PostgreSQL database.",
        result:
            "The rebuild helped me apply the original idea in a different architecture and gain experience connecting each layer of a Java-based full-stack application.",
    },
};