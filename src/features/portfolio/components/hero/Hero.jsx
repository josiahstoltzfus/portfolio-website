import './Hero.css';
import HeroIntro from "./HeroIntro.jsx";
import HeroLink from "../../../../shared/components/HeroLink.jsx";

export default function Hero() {
    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="grid page-margin">
                <div className="hero-intro-wrapper">
                    <HeroIntro titleId="hero-title"/>
                </div>

                <div className="hero-links-wrapper">
                    <div className="hero-links">
                        <HeroLink href="/resume" variant="primary">
                            View Resume
                        </HeroLink>

                        <HeroLink href="https://github.com/josiahstoltzfus" variant="secondary">
                            GitHub
                        </HeroLink>

                        <HeroLink href="https://www.linkedin.com/in/josiahstoltzfus" variant="secondary">
                            LinkedIn
                        </HeroLink>
                    </div>
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