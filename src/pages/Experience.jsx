import { ArrowUpRight } from 'lucide-react';

const currentFocus = [
    {
        number: '01',
        title: 'Agentic Software Delivery',
        body: 'Enabling the next generation of agentic software delivery for large-scale investment systems, architecting autonomous workflows and developer tooling.',
    },
    {
        number: '02',
        title: 'SDLC AI Enhancement',
        body: 'Enhancing the software development lifecycle using AI to modernize engineering workflows, streamline testing and review processes, and elevate delivery velocity.',
    },
];

const earlierRoles = [
    {
        period: '2024–26',
        role: 'Technology Leadership Program',
        org: 'Vanguard',
        body: 'Completed three engineering rotations across Applied AI & Developer Experience, Data Pipelines & Metadata, and Cloud-Native Platforms (August 2024 — July 2026)—building generative AI tools for ETF operations, data reconciliation systems, and fund pricing engines.',
    },
    {
        period: '2023–24',
        role: 'Lead TA, Quantitative Finance',
        org: 'University of Maryland',
        body: 'Led portfolio management course support and a Python bootcamp for financial analysis.',
    },
    {
        period: '2023',
        role: 'Software Development Intern',
        org: 'Vanguard',
        body: 'Built a TypeScript and React application backed by AWS S3 for municipal bond traders to explore fixed-income metrics.',
    },
    {
        period: '2022',
        role: 'Application Developer Intern',
        org: 'Vanguard',
        body: 'Engineered an AWS-hosted REST API delivering financial data to portfolio managers and researched institutional crypto viability.',
    },
    {
        period: '2021',
        role: 'Software ML Intern',
        org: 'ANB Systems',
        body: 'Developed an OCR error-classification system and improved a supervised text classifier.',
    },
];

const education = [
    { school: 'Georgia Institute of Technology', degree: 'M.S. Computer Science', note: 'In progress' },
    { school: 'University of Maryland', degree: 'B.S. Computer Science', note: 'Machine learning + quantitative finance' },
];

export default function Experience() {
    return (
        <div className="page-enter">
            <header className="site-shell page-hero experience-hero">
                <p className="eyebrow">Experience / education</p>
                <div className="page-hero-grid">
                    <h1>Learning the whole system, one layer at a time.</h1>
                    <p>
                        My path has moved through machine learning, cloud platforms, financial data,
                        and product engineering. Each role added a new way to see the same problem.
                    </p>
                </div>
            </header>

            <section className="experience-current">
                <div className="site-shell current-grid">
                    <div className="current-heading">
                        <p className="eyebrow">Now</p>
                        <h2>Applied AI Engineer</h2>
                        <p className="current-org">Vanguard · Malvern, PA</p>
                        <p className="current-date">August 2026 — Present</p>
                    </div>

                    <div className="rotation-list">
                        {currentFocus.map((item, index) => (
                            <article
                                className="rotation-item"
                                key={item.number}
                                data-reveal
                                style={{ '--reveal-delay': `${index * 55}ms` }}
                            >
                                <span>{item.number}</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="site-shell experience-section">
                <div className="section-heading compact-heading" data-reveal>
                    <div>
                        <p className="eyebrow">Earlier chapters</p>
                        <h2>Where I learned by doing.</h2>
                    </div>
                </div>

                <div className="role-list">
                    {earlierRoles.map((role, index) => (
                        <article
                            className="role-row"
                            key={`${role.period}-${role.role}`}
                            data-reveal
                            style={{ '--reveal-delay': `${index * 45}ms` }}
                        >
                            <span className="role-period">{role.period}</span>
                            <div>
                                <h3>{role.role}</h3>
                                <p className="role-org">{role.org}</p>
                            </div>
                            <p className="role-body">{role.body}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="site-shell education-section">
                <p className="eyebrow">Education</p>
                <div className="education-grid" data-reveal>
                    {education.map((item) => (
                        <article key={item.school}>
                            <h3>{item.school}</h3>
                            <p>{item.degree}</p>
                            <span>{item.note}</span>
                        </article>
                    ))}
                    <a className="education-cta" href="mailto:sashwat.venkatesh@gmail.com">
                        Want the full résumé? <ArrowUpRight size={22} />
                    </a>
                </div>
            </section>
        </div>
    );
}
