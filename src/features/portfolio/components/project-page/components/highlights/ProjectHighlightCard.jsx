import './ProjectHighlightCard.css'

export default function ProjectHighlightCard({title, description, icon}) {
    const Icon = icon;

    return (
        <article className="project-highlight-card">
            <Icon className="project-highlight-card-icon" aria-hidden="true"/>

            <div className="project-highlight-card-content">
                <h3 className="text-card-subtitle project-highlight-card-title">
                    {title}
                </h3>

                <p className="text-card-body project-highlight-card-description">
                    {description}
                </p>
            </div>
        </article>
    )
}