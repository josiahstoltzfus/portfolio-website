import './ProjectDecisionsSection.css'
import SectionHeader from "../../SectionHeader.jsx";
import {CircleHelp, CircleCheck} from "lucide-react";

export default function ProjectDecisionsSection({decisions}) {
    const {challenge, decision, result} = decisions;

    return (
        <>
            <section className="section" aria-labelledby="project-decisions">
                <div className="grid page-margin">
                    <div className="project-decisions-section-header">
                        <SectionHeader
                            eyebrow={"A Key Decision"}
                            title={"What I refined"}
                            titleId={"project-decisions"}
                        />
                    </div>

                    <div className="project-decisions-wrapper">
                        <article className="project-decisions-item">
                            <CircleHelp className="project-decisions-icon" />

                            <div className="project-decisions-text">
                                <h3 className="text-section-subtitle">The challenge</h3>
                                <p className="text-section-body">{challenge}</p>
                            </div>
                        </article>

                        <article className="project-decisions-item">
                            <CircleCheck className="project-decisions-icon" />

                            <div className="project-decisions-text">
                                <h3 className="text-section-subtitle">The decision</h3>
                                <p className="text-section-body">{decision}</p>
                            </div>
                        </article>
                    </div>

                    <div className="project-decisions-result">
                        <h3 className="text-section-subtitle">The result</h3>
                        <p className="text-section-body">{result}</p>
                    </div>

                </div>
            </section>
        </>
    )
}