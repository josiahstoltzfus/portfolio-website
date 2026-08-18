import './HeroIntro.css';

export default function HeroIntro({titleId}) {
    return (
        <div className="hero-intro">
            <p className="text-page-eyebrow hero-eyebrow">Full-Stack Developer</p>
            <h1 id={titleId} className="text-section-title hero-intro-title">
                I build thoughtful web experiences with clear interfaces and dependable code.
            </h1>

            <div className="section-header-divider" aria-hidden="true"></div>

            <p className="text-section-body hero-intro-description">
                I’m Josiah Stoltzfus, a full-stack developer working with React, TypeScript, Java, and Spring Boot. I
                create practical, accessible applications with an emphasis on clarity, maintainability, and the people
                who use them.
            </p>
        </div>
    );
}