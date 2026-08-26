import './ProjectHighlights.css'
import ProjectHighlightCard from "./ProjectHighlightCard.jsx";

export default function ProjectHighlights({highlights}) {
    return (
        <ul className="project-highlights-list">
            {highlights.map((highlight) =>
                <li key={highlight.title}>
                    <ProjectHighlightCard
                        title={highlight.title}
                        description={highlight.description}
                        icon={highlight.icon}/>
                </li>)}
        </ul>
    )
}