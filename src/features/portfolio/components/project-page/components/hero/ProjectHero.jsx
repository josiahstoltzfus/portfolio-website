import './ProjectHero.css'
import ProjectHeroIntro from "./ProjectHeroIntro.jsx";
import HeroLink from "../../../../../../shared/components/HeroLink.jsx";

export default function ProjectHero({project}) {
    const {title, description, projectType, links, role, status, technologies} = project;

    return (
        <section className="project-hero-section" aria-labelledby="project-hero-title">
            <div className="grid page-margin project-hero-grid">

                <div className="project-hero-wrapper">
                    <ProjectHeroIntro titleId="project-hero-title" title={title} description={description} projectType={projectType}/>

                    <dl className="project-hero-facts">
                        <div className="project-hero-fact">
                            <dt className="text-eyebrow project-hero-fact-label">Role</dt>
                            <dd className="text-card-body project-hero-fact-value">{role}</dd>
                        </div>

                        <div className="project-hero-fact">
                            <dt className="text-eyebrow project-hero-fact-label">Stack</dt>
                            <dd className="text-card-body project-hero-fact-value">
                                {technologies.join(" · ")}
                            </dd>
                        </div>

                        <div className="project-hero-fact">
                            <dt className="text-eyebrow project-hero-fact-label">Status</dt>
                            <dd className="text-card-body project-hero-fact-value">{status}</dd>
                        </div>
                    </dl>

                    <div className="project-hero-links">
                        {links.map((link) => {
                            return (
                                <HeroLink key={link.label} href={link.url} variant={link.variant}>{link.label}</HeroLink>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}