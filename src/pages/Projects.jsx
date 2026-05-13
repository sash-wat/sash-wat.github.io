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
        demoLabel: 'Live Demo',
        image: '/league_pulse.png'
    },
    {
        title: 'EraCV',
        description: 'A platform for dynamic, era-based curriculum vitae generation and timeline visualization.',
        tags: ['Web Development', 'React', 'Frontend'],
        github: null,
        demo: null,
        demoLabel: 'Live Demo',
        image: '/eracv.png'
    },
    {
        title: 'Multimodal Deep RL for Portfolio Optimization',
        description: 'A reinforcement learning framework fusing historical stock data, SEC sentiment, and news embeddings to optimize SP100 trading strategies.',
        tags: ['Machine Learning', 'Reinforcement Learning', 'Finance', 'Research'],
        github: null,
        demo: 'https://arxiv.org/abs/2412.17293',
        demoLabel: 'View Paper',
        image: '/portfolio_rl.png'
    },
    {
        title: 'Statistical Valuation of Elite Forwards',
        description: 'An interactive exploration of soccer metrics using R, revealing the hidden statistical drivers behind elite forward valuations.',
        tags: ['Data Science', 'Sports Analytics', 'R'],
        github: null,
        demo: '/projects/soccer-analysis',
        demoLabel: 'Read Post',
        isInternal: true,
        image: '/soccer_valuation.png'
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
            <div className="max-w-4xl mb-16">
                <h1 className="header-text text-5xl md:text-6xl font-bold mb-6 tracking-tight">Showcase & <span className="text-gradient">Case Studies</span></h1>
                <p className="header-text text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                    A deep dive into my recent work architecting scalable solutions, predictive models, and beautiful data visualizations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {projects.map((project, index) => (
                    <div key={index} className="project-card group rounded-2xl overflow-hidden flex flex-col border border-gray-800 bg-[#111827] hover:border-[var(--color-cfc-blue)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(3,70,148,0.2)]">
                        <div className="w-full h-64 md:h-80 overflow-hidden relative border-b border-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent z-10 opacity-60"></div>
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow relative z-20">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow text-lg">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[rgba(3,70,148,0.2)] text-[var(--color-cfc-blue)] border border-[rgba(3,70,148,0.3)] uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <Github size={18} /> Source Code
                                    </a>
                                )}
                                {project.demo && (
                                    project.isInternal ? (
                                        <Link to={project.demo} className="text-[var(--color-cfc-gold-bright)] hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                                            {project.demoLabel || 'View Project'} <ArrowRight size={18} />
                                        </Link>
                                    ) : (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[var(--color-cfc-gold-bright)] hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                                            <ExternalLink size={18} /> {project.demoLabel || 'Live Demo'}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
