import SectionHeader from "../project-page/SectionHeader.jsx";
import './Contact.css';
import {FileText, Contact as Linkedin, Mail} from "lucide-react";

export default function Contact() {
    return (
        <section className="section contact-section" aria-labelledby="contact-title">
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
                    <a
                        className="text-button contact-link-primary"
                        href="mailto:contact@josiahstoltzfus.dev"
                    >
                        Email Me
                    </a>

                    <a
                        className="text-button contact-link-secondary"
                        href="https://www.linkedin.com/in/josiahstoltzfus"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        className="text-button contact-link-secondary"
                        href="/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Resume
                    </a>
                </div>


            </div>
        </section>
    )
}