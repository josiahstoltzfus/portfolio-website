import './HeroIntro.css';

export default function HeroIntro({titleId}) {
    return (
        <div className="hero-intro">
            <p className="text-page-eyebrow hero-eyebrow">Full-Stack Developer</p>
            <h1 id={titleId} className="text-section-title hero-intro-title">
                I build full-stack web applications.
            </h1>

            <div className="section-header-divider" aria-hidden="true"></div>

            <p className="text-section-body hero-intro-description">
                I work primarily with React, Java, Spring Boot, and SQL. My recent work includes an UNO game, a word-search application, and a client website for Fellowship Baptist Church.            </p>
        </div>
    );
}