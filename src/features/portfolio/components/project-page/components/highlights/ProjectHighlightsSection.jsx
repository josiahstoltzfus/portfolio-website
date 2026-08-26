import './ProjectHighlightsSection.css'
import SectionHeader from "../../SectionHeader.jsx";
import ProjectHighlights from "./ProjectHighlights.jsx";

export default function ProjectHighlightsSection({highlights}) {
    return (
        <>
            <section className="section project-highlight-section" aria-labelledby="project-highlights">
                <div className="grid page-margin">
                    <div className="project-highlights-section-header">
                        <SectionHeader
                            eyebrow={"Technical Highlights"}
                            title={"How it works"}
                            titleId={"project-highlights"}
                            variant="dark"
                        />
                    </div>

                    <div className="project-highlights-section-highlights-wrapper">
                        <ProjectHighlights highlights={highlights}/>
                    </div>

                </div>
            </section>
        </>

    )
}