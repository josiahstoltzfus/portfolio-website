import './HeroLink.css';

export default function HeroLink({href, children, variant = "primary", newTab = true}) {
    return (
        <a
            className={`text-button hero-link hero-link--${variant}`}
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
        >
            {children}
        </a>
    )
}