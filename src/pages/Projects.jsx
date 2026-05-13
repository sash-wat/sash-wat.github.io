import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const projects = [
    {
        title: 'League Pulse Analytics',
        description: 'An interactive dashboard for American soccer analytics, featuring the Tactical-Value Mapping System (TVMS) to classify player archetypes across the MLS, USLC, and NWSL.',
        tags: ['React', 'Sports Analytics', 'Machine Learning', 'Data Visualization'],
        github: null,
        demo: null,
        demoLabel: 'Live Demo'
    },
    {
        title: 'EraCV',
        description: 'A platform for dynamic, era-based curriculum vitae generation and timeline visualization.',
        tags: ['Web Development', 'React', 'Frontend'],
        github: null,
        demo: null,
        demoLabel: 'Live Demo'
    },
    {
        title: 'Multimodal Deep RL for Portfolio Optimization',
        description: 'A reinforcement learning framework fusing historical stock data, SEC sentiment, and news embeddings to optimize SP100 trading strategies.',
        tags: ['Machine Learning', 'Reinforcement Learning', 'Finance', 'Research'],
        github: null,
        demo: 'https://arxiv.org/abs/2412.17293',
        demoLabel: 'View Paper'
    },
    {
        title: 'Statistical Valuation of Elite Forwards',
        description: 'An interactive exploration of soccer metrics using R, revealing the hidden statistical drivers behind elite forward valuations.',
        tags: ['Data Science', 'Sports Analytics', 'R'],
        github: null,
        demo: '/projects/soccer-analysis',
        demoLabel: 'Read Post',
        isInternal: true
    }
];

export default function Projects() {
    const container = useRef();

    useGSAP(() => {
        gsap.from('.header-text', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

        gsap.from('.project-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3
        });
    }, { scope: container });

    return (
        <div className="container mx-auto px-6 py-12 md:py-24" ref={container}>
            <div className="max-w-4xl mb-12">
                <h1 className="header-text text-4xl md:text-5xl font-bold mb-4 tracking-tight">Selected Work</h1>
                <p className="header-text text-xl text-gray-400">
                    A showcase of my recent research, analyses, and projects spanning
                    machine learning, finance, and sports analytics.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="project-card glow-on-hover rounded-xl p-6 flex flex-col h-full border border-gray-800 bg-[#111827]">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">{project.title}</h3>
                        <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-[rgba(3,70,148,0.2)] text-[var(--color-cfc-blue)] border border-[rgba(3,70,148,0.3)]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                                    <Github size={16} /> Code
                                </a>
                            )}
                            {project.demo && (
                                project.isInternal ? (
                                    <Link to={project.demo} className="text-[var(--color-cfc-blue)] hover:text-[var(--color-cfc-gold-bright)] transition-colors flex items-center gap-1 text-sm font-medium">
                                        {project.demoLabel || 'View Project'} <ArrowRight size={16} />
                                    </Link>
                                ) : (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[var(--color-cfc-blue)] hover:text-[var(--color-cfc-gold-bright)] transition-colors flex items-center gap-1 text-sm font-medium">
                                        <ExternalLink size={16} /> {project.demoLabel || 'Live Demo'}
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
