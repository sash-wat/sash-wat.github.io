import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const focusAreas = [
    {
        number: '01',
        title: 'Applied AI',
        description: 'Turning emerging models into dependable tools that fit how people actually work.',
    },
    {
        number: '02',
        title: 'Data products',
        description: 'Designing the interfaces, pipelines, and decisions that make complex data useful.',
    },
    {
        number: '03',
        title: 'Quantitative research',
        description: 'Using statistics and machine learning to investigate markets, sport, and behavior.',
    },
];

const featuredWork = [
    {
        index: '01',
        title: 'League Pulse',
        category: 'Sports analytics platform',
        description: 'A tactical-value system for comparing player archetypes across American soccer.',
        color: 'orange',
        href: 'https://sash-wat.github.io/tactical-value-system/index.html',
        external: true,
    },
    {
        index: '02',
        title: 'Multimodal DRL',
        category: 'Published research',
        description: 'A portfolio optimization framework combining price history, filings, and news sentiment.',
        color: 'blue',
        href: 'https://arxiv.org/abs/2412.17293',
        external: true,
    },
    {
        index: '03',
        title: 'Forward Valuation',
        category: 'Statistical analysis',
        description: 'An elastic-net study of what the market really rewards in elite attacking players.',
        color: 'lime',
        href: '/projects/soccer-analysis',
    },
];

function ProjectLink({ project, revealDelay }) {
    const content = (
        <>
            <div className="work-card-topline">
                <span>{project.index}</span>
                <span>{project.category}</span>
            </div>
            <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <span className="work-card-action">
                Explore <ArrowUpRight size={20} />
            </span>
        </>
    );

    if (project.external) {
        return (
            <a
                className={`work-card work-card-${project.color}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                data-reveal
                style={{ '--reveal-delay': revealDelay }}
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            className={`work-card work-card-${project.color}`}
            to={project.href}
            viewTransition
            data-reveal
            style={{ '--reveal-delay': revealDelay }}
        >
            {content}
        </Link>
    );
}

export default function Home() {
    return (
        <div>
            <section className="site-shell home-hero">
                <div className="hero-kicker">
                    <span className="status-dot" aria-hidden="true" />
                    Applied AI engineer · Philadelphia
                </div>

                <div className="hero-grid">
                    <div className="hero-heading-wrap">
                        <p className="hero-index">Portfolio / 2026</p>
                        <h1>I build intelligent systems for <em>messy, real-world</em> problems.</h1>
                    </div>

                    <aside className="hero-note">
                        <p>
                            I&apos;m Sashwat—an engineer working where machine learning, product thinking,
                            and complex data meet.
                        </p>
                        <div className="hero-note-rule" />
                        <p className="hero-note-small">
                            Currently in Vanguard&apos;s Technology Leadership Program and studying computer science at Georgia Tech.
                        </p>
                        <a href="mailto:sashwat.venkatesh@gmail.com" className="text-link">
                            Get in touch <ArrowUpRight size={18} />
                        </a>
                    </aside>
                </div>

                <a className="scroll-cue" href="#selected-work">
                    Scroll to explore <ArrowDown size={17} />
                </a>
            </section>

            <section className="focus-band" aria-label="Areas of focus">
                <div className="site-shell focus-grid">
                    {focusAreas.map((area, index) => (
                        <article
                            className="focus-item"
                            key={area.number}
                            data-reveal
                            style={{ '--reveal-delay': `${index * 55}ms` }}
                        >
                            <span>{area.number}</span>
                            <h2>{area.title}</h2>
                            <p>{area.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="site-shell section-block" id="selected-work">
                <div className="section-heading" data-reveal>
                    <div>
                        <p className="eyebrow">Selected work</p>
                        <h2>Ideas, made tangible.</h2>
                    </div>
                    <Link to="/projects" viewTransition className="round-link" aria-label="View all projects">
                        <ArrowRight size={26} />
                    </Link>
                </div>

                <div className="work-grid">
                    {featuredWork.map((project, index) => (
                        <ProjectLink
                            key={project.title}
                            project={project}
                            revealDelay={`${index * 55}ms`}
                        />
                    ))}
                </div>
            </section>

            <section className="site-shell about-strip" data-reveal>
                <p className="eyebrow">A useful generalist</p>
                <p className="about-statement">
                    I move between <strong>model behavior</strong>, <strong>product interfaces</strong>, and
                    <strong> data infrastructure</strong>—because the interesting problems rarely stay in one lane.
                </p>
                <Link to="/experience" viewTransition className="button-link">
                    See how I got here <ArrowRight size={18} />
                </Link>
            </section>
        </div>
    );
}
