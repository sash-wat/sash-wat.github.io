import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with dynamic inventory management and seamless checkout experience.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        github: '#',
        demo: '#',
    },
    {
        title: 'AI Productivity Assistant',
        description: 'An AI-powered application that seamlessly integrates with your calendar to optimize daily workflows and task scheduling.',
        tags: ['Next.js', 'TypeScript', 'OpenAI API'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Chelsea Fan Hub',
        description: 'A real-time dashboard for match stats, player analytics, and live community discussions.',
        tags: ['Vue', 'Firebase', 'Tailwind'],
        github: '#',
        demo: '#',
    }
];

export default function Projects() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24">
            <div className="max-w-4xl mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Selected Projects</h1>
                <p className="text-xl text-gray-400">
                    A showcase of my favorite deep dives in software engineering,
                    from scalable backends to highly interactive frontends.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in delay-200">
                {projects.map((project, index) => (
                    <div key={index} className="glow-on-hover rounded-xl p-6 flex flex-col h-full border border-gray-800 bg-[#111827]">
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
                            <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                                <Github size={16} /> Code
                            </a>
                            <a href={project.demo} className="text-[var(--color-cfc-blue)] hover:text-[var(--color-cfc-gold-bright)] transition-colors flex items-center gap-1 text-sm font-medium">
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
