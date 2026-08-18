import './Hero.css';
import HeroIntro from "./HeroIntro.jsx";
import PortfolioLinks from "../../../../shared/components/PortfolioLinks.jsx";

export default function Hero() {
    const links =
        [
            {
                label: "GitHub",
                url: "https://github.com/josiahstoltzfus"
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/josiahstoltzfus"
            },
            {
                label: "Resume",
                url: "/resume"
            },
        ]

    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="grid page-margin">
                <div className="hero-intro-wrapper">
                    <HeroIntro titleId="hero-title"/>
                </div>

                <div className="hero-links-wrapper">
                    <PortfolioLinks links={links}/>
                </div>

                <aside className="hero-info-wrapper" aria-label="Current work and focus">
                    <div className="hero-info-item">
                        <dt className="text-eyebrow hero-info-title">Currently</dt>
                        <dd className="text-section-body hero-info-description">
                            Building a new website for Fellowship Baptist Church
                        </dd>
                    </div>

                    <div className="hero-info-item">
                        <dt className="text-eyebrow hero-info-title">Focus</dt>
                        <dd className="text-section-body hero-info-description">
                            Accessible interfaces and maintainable applications
                        </dd>
                    </div>
                </aside>
            </div>
        </section>
    );
}