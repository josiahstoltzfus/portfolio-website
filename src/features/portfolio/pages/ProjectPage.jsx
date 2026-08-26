import ProjectHero from "../components/project-page/components/hero/ProjectHero.jsx";
import ProjectScreenshotSection from "../components/project-page/components/screenshots/ProjectScreenshotSection.jsx";
import ProjectHighlightsSection from "../components/project-page/components/highlights/ProjectHighlightsSection.jsx";
import ProjectOverviewSection from "../components/project-page/components/overview/ProjectOverviewSection.jsx";
import ProjectDecisionsSection from "../components/project-page/components/decisions/ProjectDecisionsSection.jsx";

export default function ProjectPage({project}) {
    const {screenshots, highlights, overview, decisions} = project;

    return (
        <>
            <ProjectHero project={project}/>
            <ProjectScreenshotSection screenshots={screenshots}/>
            <ProjectOverviewSection overview={overview}/>
            <ProjectHighlightsSection highlights={highlights}/>
            <ProjectDecisionsSection decisions={decisions}/>
        </>
    )
}