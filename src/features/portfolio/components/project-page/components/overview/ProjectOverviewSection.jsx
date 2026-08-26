import './ProjectOverviewSection.css'
import SectionHeader from "../../SectionHeader.jsx";

export default function ProjectOverviewSection({overview}) {
    const {text, purpose, responsibilities, context} = overview;

    return (
        <>
            <section className="section" aria-labelledby="project-overview">
                <div className="grid page-margin">
                    <div className="project-overview-section-header">
                        <SectionHeader
                            eyebrow={"OVERVIEW"}
                            title={"What I built"}
                            titleId={"project-overview"}
                        />
                    </div>

                    <p className="text-section-body project-overview-text">
                        {text}
                    </p>

                    <dl className="project-overview-facts">
                        <div className="project-overview-fact">
                            <dt className="text-eyebrow">Purpose</dt>
                            <dd className="text-card-body">{purpose}</dd>
                        </div>

                        <div className="project-overview-fact">
                            <dt className="text-eyebrow">Responsibilities</dt>
                            <dd className="text-card-body">
                                {responsibilities.join(" · ")}
                            </dd>
                        </div>

                        <div className="project-overview-fact">
                            <dt className="text-eyebrow">Context</dt>
                            <dd className="text-card-body">{context}</dd>
                        </div>
                    </dl>




                </div>
            </section>
        </>
    )
}