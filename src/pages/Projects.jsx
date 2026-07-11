import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        number: '01',
        title: 'League Pulse',
        type: 'Interactive product',
        year: '2026',
        summary: 'A tactical analytics platform built to make player profiles comparable across MLS, USL Championship, and NWSL.',
        challenge: 'Player evaluation is noisy, role-dependent, and difficult to compare across leagues.',
        outcome: 'A visual Tactical-Value Mapping System that groups players by how they influence the game—not only by position.',
        tags: ['React', 'Machine learning', 'Data visualization'],
        href: 'https://sash-wat.github.io/tactical-value-system/index.html',
        accent: 'orange',
        external: true,
        featured: true,
    },
    {
        number: '02',
        title: 'Multimodal Deep RL',
        type: 'Research paper',
        year: '2024',
        summary: 'A reinforcement learning framework for portfolio optimization using market history, SEC filings, and news embeddings.',
        challenge: 'Financial decisions are shaped by both structured prices and unstructured narrative signals.',
        outcome: 'A published framework that studies whether multimodal context can improve SP100 allocation strategies.',
        tags: ['Deep reinforcement learning', 'NLP', 'Finance'],
        href: 'https://arxiv.org/abs/2412.17293',
        accent: 'blue',
        external: true,
    },
    {
        number: '03',
        title: 'VERA',
        type: 'Experimental interface',
        year: '2026',
        summary: 'An exploration of dynamic, era-based curriculum vitae generation and timeline visualization.',
        challenge: 'A conventional résumé flattens a career into one fixed, context-free document.',
        outcome: 'A flexible interface for viewing experience through different moments, themes, and levels of detail.',
        tags: ['Product design', 'React', 'Information architecture'],
        href: 'https://sash-wat.github.io/vera-ghost-innings/index.html',
        accent: 'lime',
        external: true,
    },
    {
        number: '04',
        title: 'What makes a forward valuable?',
        type: 'Data story',
        year: '2023',
        summary: 'An elastic-net analysis of the football metrics that explain market value among elite attacking players.',
        challenge: 'Goals dominate the conversation, but they are only one signal in a player’s market value.',
        outcome: 'A readable statistical investigation spanning expected goals, progressive actions, age, and valuation gaps.',
        tags: ['R', 'Elastic net', 'Football analytics'],
        href: '/projects/soccer-analysis',
        accent: 'paper',
    },
];

function ProjectAction({ project }) {
    const label = project.type === 'Data story' ? 'Read the analysis' : project.type === 'Research paper' ? 'Read the paper' : 'Open project';
    const content = <>{label} {project.external ? <ArrowUpRight size={19} /> : <ArrowRight size={19} />}</>;

    return project.external ? (
        <a className="project-action" href={project.href} target="_blank" rel="noreferrer">{content}</a>
    ) : (
        <Link className="project-action" to={project.href}>{content}</Link>
    );
}

export default function Projects() {
    return (
        <div className="page-enter">
            <header className="site-shell page-hero work-page-hero">
                <p className="eyebrow">Work / experiments / research</p>
                <div className="page-hero-grid">
                    <h1>Things I&apos;ve built to understand things better.</h1>
                    <p>
                        The common thread is curiosity: take a complicated system, find the useful signal,
                        and give people a clearer way to interact with it.
                    </p>
                </div>
            </header>

            <section className="site-shell project-list" aria-label="Selected projects">
                {projects.map((project) => (
                    <article className={`project-row project-row-${project.accent}${project.featured ? ' is-featured' : ''}`} key={project.number}>
                        <div className="project-rail">
                            <span>{project.number}</span>
                            <span>{project.year}</span>
                        </div>

                        <div className="project-main">
                            <p className="project-type">{project.type}</p>
                            <h2>{project.title}</h2>
                            <p className="project-summary">{project.summary}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                            </div>
                        </div>

                        <div className="project-detail">
                            <div>
                                <span className="detail-label">The question</span>
                                <p>{project.challenge}</p>
                            </div>
                            <div>
                                <span className="detail-label">The result</span>
                                <p>{project.outcome}</p>
                            </div>
                            <ProjectAction project={project} />
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}
