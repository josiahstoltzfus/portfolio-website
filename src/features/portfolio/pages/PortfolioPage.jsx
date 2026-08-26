import Hero from "../components/hero/Hero.jsx";
import Projects from "../components/projects/Projects.jsx";
import About from "../components/about/About.jsx";
import Contact from "../components/contact/Contact.jsx";

export default function PortfolioPage() {
    return (
        <>
            <Hero/>
            <Projects/>
            <About/>
            <Contact/>
        </>
    );
}