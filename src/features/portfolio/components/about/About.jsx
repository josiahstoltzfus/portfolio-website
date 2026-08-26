import './About.css';
import SectionHeader from "../project-page/SectionHeader.jsx";
import {ABOUT_CARDS} from "../../data/aboutData.js";
import AboutCard from "./AboutCard.jsx";

export default function About() {
    return (
        <section id="about" className="section" aria-labelledby="about-title">
            <div className="grid page-margin about-section">

                <div className="about-intro">
                    <SectionHeader
                        eyebrow="ABOUT ME"
                        title="About"
                        titleId="about-title"
                        description="I enjoy building full-stack applications and understanding how the pieces work together."/>

                    <div className="about-divider" aria-hidden="true"/>

                    <div className="text-section-body about-description">
                        <p>
                            I earned an associate degree in Programming and Software Development from Greenville Technical College. I’m continuing to strengthen my skills through projects built with React, Java, Spring Boot, and SQL.
                        </p>
                    </div>
                </div>

                <ul className="about-card-list">
                    {ABOUT_CARDS.map((card) => (
                        <li key={card.title}>
                            <AboutCard {...card} />
                        </li>
                    ))}
                </ul>


            </div>
        </section>
    );
}