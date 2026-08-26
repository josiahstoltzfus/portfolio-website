import './Hero.css';
import HeroIntro from "./HeroIntro.jsx";
import {FileText, Contact as Linkedin, Mail} from "lucide-react";

export default function Hero() {
    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="grid page-margin">
                <div className="hero-intro-wrapper">
                    <HeroIntro titleId="hero-title"/>
                </div>

                <div className="hero-links-wrapper">
                    <div className="hero-links">
                        <a
                            className="text-button hero-link-primary"
                            href="/resume"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Resume
                        </a>

                        <a
                            className="text-button hero-link-text"
                            href="https://github.com/josiahstoltzfus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            GitHub
                        </a>

                        <a
                            className="text-button hero-link-text"
                            href="https://www.linkedin.com/in/josiahstoltzfus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
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