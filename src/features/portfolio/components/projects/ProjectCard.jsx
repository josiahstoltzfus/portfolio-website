import './ProjectCard.css'
import {Link} from "react-router-dom";

export default function ProjectCard({project}) {
    const {title, summary, technologies, route, preview} = project;

    return (
        <Link className="project-card" to={route}>

            <div className="project-card-image-wrapper">
                <img className="project-card-image" src={preview.image} alt={preview.alt}/>
            </div>

            <div className="project-card-text-wrapper">
                <div className="project-card-text">
                    <h3 className="text-card-title">{title}</h3>
                    <p className="text-card-body project-card-summary">{summary}</p>
                </div>

                <div className="project-card-technologies">
                    {technologies?.map((tech) => (
                        <p className="text-badge project-card-tech">{tech}</p>
                    ))}
                </div>

                <span className="text-label project-card-link">View Project →</span>
            </div>

        </Link>
    )
}