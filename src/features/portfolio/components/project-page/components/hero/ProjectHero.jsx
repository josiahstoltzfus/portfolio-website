import './ProjectHero.css'
import ProjectHeroIntro from "./ProjectHeroIntro.jsx";

export default function ProjectHero({title, description, badges, projectType}) {
    return (
        <section className="project-hero-section" aria-labelledby="project-hero-title">
            <div className="grid page-margin project-hero-grid">

                <div className="project-hero-left-side">
                    <ProjectHeroIntro titleId="project-hero-title" title={title} description={description} badges={badges} projectType={projectType}/>
                </div>

                <div className="project-hero-right-side">
                </div>

            </div>
        </section>
    )
}