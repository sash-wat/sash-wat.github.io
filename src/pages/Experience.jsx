import { ArrowUpRight } from 'lucide-react';

const rotations = [
    {
        number: '03',
        title: 'Applied AI & Developer Experience',
        body: 'Built generative AI experiences for ETF Operations research and tools that automate parts of the software development lifecycle.',
    },
    {
        number: '02',
        title: 'Data Pipeline & Metadata',
        body: 'Planned a reconciliation product for data-platform modernization and contributed to enterprise metadata access through generative AI.',
    },
    {
        number: '01',
        title: 'Cloud-Native Platforms',
        body: 'Worked on fund accounting and pricing systems, plus an early generative AI concept for streamlining reporting workflows.',
    },
];

const earlierRoles = [
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
        period: '2023–24',
        role: 'Lead TA, Quantitative Finance',
        org: 'University of Maryland',
        body: 'Led portfolio management course support and a Python bootcamp for financial analysis.',
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
                        <h2>Technology Leadership Program</h2>
                        <p className="current-org">Vanguard · Malvern, PA</p>
                        <p className="current-date">August 2024 — Present</p>
                    </div>

                    <div className="rotation-list">
                        {rotations.map((rotation, index) => (
                            <article
                                className="rotation-item"
                                key={rotation.number}
                                data-reveal
                                style={{ '--reveal-delay': `${index * 55}ms` }}
                            >
                                <span>{rotation.number}</span>
                                <div>
                                    <h3>{rotation.title}</h3>
                                    <p>{rotation.body}</p>
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
