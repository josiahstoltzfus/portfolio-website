import './ProjectScreenshotSection.css'
import SectionHeader from "../../SectionHeader.jsx";
import ProjectScreenshotCarousel from "./ProjectScreenshotCarousel.jsx";

export default function ProjectScreenshotSection({screenshots}) {
    return (
        <>
            <section className="section project-screenshot-section" id="project-screenshots">
                <div className="grid">

                    <div className="page-margin project-screenshot-section-header">
                        <SectionHeader
                            eyebrow={"Project Tour"}
                            title={"Screenshots"}
                            titleId={"project-screenshots"}
                            variant="dark"
                        />
                    </div>

                    <div className="page-margin project-screenshot-section-carousel-wrapper">
                        <ProjectScreenshotCarousel screenshots={screenshots}/>
                    </div>

                </div>
            </section>
        </>

    )
}