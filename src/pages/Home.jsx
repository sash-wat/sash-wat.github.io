import { Link } from 'react-router-dom';
import { ArrowRight, Code, PenTool } from 'lucide-react';

export default function Home() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24">

            {/* Hero Section */}
            <section className="flex flex-col items-start max-w-3xl mb-32 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Building digital <br />
                    experiences with <br />
                    <span className="text-gradient">precision</span> & <span className="text-gradient-blue">passion</span>.
                </h1>

                <p className="text-xl text-gray-400 mb-10 max-w-xl">
                    I'm Sashwat. A software engineer and writer who loves crafting beautiful,
                    performant, and dynamic web applications.
                </p>

                <div className="flex gap-4">
                    <Link to="/projects" className="px-6 py-3 bg-[var(--color-cfc-blue)] text-white font-medium rounded-lg hover:bg-[#0450a8] transition-colors flex items-center gap-2">
                        View Projects <ArrowRight size={18} />
                    </Link>
                    <a href="mailto:contact@example.com" className="px-6 py-3 border border-gray-700 hover:border-[var(--color-cfc-gold)] text-gray-300 font-medium rounded-lg transition-colors">
                        Get in touch
                    </a>
                </div>
            </section>

            {/* Quick Links / Highlights */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in delay-200">
                <Link to="/projects" className="group glow-on-hover p-8 rounded-2xl flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(3,70,148,0.2)] flex items-center justify-center text-[var(--color-cfc-blue)] group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">
                        <Code size={24} />
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">Latest Work</h2>
                    <p className="text-gray-400">Explore my recent projects, open-source contributions, and technical explorations.</p>
                </Link>

                <Link to="/writing" className="group glow-on-hover p-8 rounded-2xl flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(3,70,148,0.2)] flex items-center justify-center text-[var(--color-cfc-blue)] group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">
                        <PenTool size={24} />
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">Writing</h2>
                    <p className="text-gray-400">Read my thoughts on software engineering, design patterns, and industry trends.</p>
                </Link>
            </section>

        </div>
    );
}
