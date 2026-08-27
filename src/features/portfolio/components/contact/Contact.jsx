import SectionHeader from "../project-page/SectionHeader.jsx";
import './Contact.css';
import {FileText, Contact as Linkedin, Mail} from "lucide-react";
import HeroLink from "../../../../shared/components/HeroLink.jsx";

export default function Contact() {
    return (
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
            <div className="grid page-margin">
                <div className="contact-intro">
                    <SectionHeader
                        eyebrow="Contact"
                        title="Let's talk."
                        variant="dark"
                        titleId="contact-title"
                        description="I'm actively seeking junior software roles and am open to opportunities in React, Java, or full-stack development."
                    />
                </div>

                <div className="contact-links">
                    <HeroLink
                        href="mailto:contact@josiahstoltzfus.dev"
                        variant="primary"
                        newTab={false}
                    >
                        Email Me
                    </HeroLink>

                    <HeroLink href="https://www.linkedin.com/in/josiahstoltzfus" variant="secondary-dark">
                        LinkedIn
                    </HeroLink>

                    <HeroLink href="/resume" variant="secondary-dark">
                        Resume
                    </HeroLink>
                </div>


            </div>
        </section>
    )
}