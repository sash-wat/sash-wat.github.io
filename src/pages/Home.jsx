import { Link } from 'react-router-dom';
import { ArrowRight, Code, PenTool } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Home() {
    const container = useRef();

    useGSAP(() => {
        gsap.from('.hero-text', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        gsap.from('.quick-link', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.8
        });
    }, { scope: container });

    return (
        <div className="container mx-auto px-6 py-12 md:py-24" ref={container}>

            {/* Hero Section */}
            <section className="flex flex-col items-start max-w-3xl mb-32">
                <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Exploring data <br />
                    through <span className="text-gradient">machine learning</span> <br />
                    & <span className="text-gradient-blue">generative AI</span>.
                </h1>

                <p className="hero-text text-xl text-gray-400 mb-10 max-w-xl">
                    I'm Sashwat. A machine learning and data science enthusiast
                    focusing on applications in financial services and sports analytics.
                </p>

                <div className="hero-text flex gap-4">
                    <Link to="/projects" className="px-6 py-3 bg-[var(--color-cfc-blue)] text-white font-medium rounded-lg hover:bg-[#0450a8] transition-colors flex items-center gap-2">
                        View Projects <ArrowRight size={18} />
                    </Link>
                    <a href="mailto:sashwat.venkatesh@gmail.com" className="px-6 py-3 border border-gray-700 hover:border-[var(--color-cfc-gold)] text-gray-300 font-medium rounded-lg transition-colors">
                        Get in touch
                    </a>
                </div>
            </section>

            {/* Quick Links / Highlights */}
            <section className="grid grid-cols-1 gap-8 quick-link">
                <Link to="/projects" className="group glow-on-hover p-8 rounded-2xl flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(3,70,148,0.2)] flex items-center justify-center text-[var(--color-cfc-blue)] group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">
                        <Code size={24} />
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">Selected Work</h2>
                    <p className="text-gray-400">Explore my machine learning research, financial analyses, and sports data explorations.</p>
                </Link>
            </section>

        </div>
    );
}
