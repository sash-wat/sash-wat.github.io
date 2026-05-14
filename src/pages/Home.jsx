import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal, BrainCircuit, BarChart3, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const container = useRef();

    useGSAP(() => {
        // Hero Animation
        const tl = gsap.timeline();
        tl.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', clearProps: "all" })
          .fromTo('.hero-title-line', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', clearProps: "all" }, '-=0.3')
          .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: "all" }, '-=0.4')
          .fromTo('.hero-actions', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', clearProps: "all" }, '-=0.4')
          .fromTo('.hero-scroll', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 1, yoyo: true, repeat: -1 }, '+=0.5');

        // Scroll Animations
        gsap.utils.toArray('.scroll-section').forEach(section => {
            gsap.fromTo(section.querySelectorAll('.fade-up'), 
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    clearProps: "all"
                }
            );
        });

    }, { scope: container });


    return (
        <div className="flex flex-col min-h-screen" ref={container}>
            
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex flex-col justify-center container mx-auto px-6 py-20">
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-[var(--color-cfc-blue)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse pointer-events-none"></div>
                <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[var(--color-cfc-gold-bright)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>
                
                <div className="relative z-10 max-w-4xl">
                    <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(3,70,148,0.2)] text-[var(--color-cfc-blue)] border border-[rgba(3,70,148,0.3)] mb-8">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-cfc-gold-bright)] animate-pulse"></span>
                        <span className="text-sm font-semibold tracking-wide uppercase">Applied AI/ML @ Vanguard</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        <div className="hero-title-line overflow-hidden py-1">Hi, I'm <span className="text-white">Sashwat.</span></div>
                        <div className="hero-title-line overflow-hidden py-1 text-[var(--color-cfc-gold-bright)]">Data Scientist & Developer.</div>
                    </h1>

                    <p className="hero-desc text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                        I'm currently part of the Technology Leadership Program at Vanguard and pursuing my M.S. in Computer Science at Georgia Tech. I specialize in bridging the gap between machine learning research and full-stack engineering.
                    </p>

                    <div className="hero-actions flex flex-wrap gap-4">
                        <Link to="/experience" className="px-8 py-4 bg-[var(--color-cfc-blue)] text-white font-medium rounded-lg hover:bg-[#0450a8] hover:shadow-[0_0_20px_rgba(3,70,148,0.4)] transition-all flex items-center gap-2">
                            View My Experience <ArrowRight size={18} />
                        </Link>
                        <Link to="/projects" className="px-8 py-4 border border-gray-700 hover:border-[var(--color-cfc-gold)] text-gray-300 font-medium rounded-lg hover:bg-[rgba(250,204,21,0.05)] transition-all">
                            Personal Projects
                        </Link>
                    </div>
                </div>

                <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2">
                    <span className="text-sm tracking-widest uppercase">Get to Know Me</span>
                    <ChevronDown size={20} />
                </div>
            </section>

            {/* Quick Highlights Section */}
            <section className="scroll-section container mx-auto px-6 py-16 border-t border-gray-800/50 relative">
                <div className="max-w-3xl mb-12 fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">A bit about what I do.</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        My work revolves around extracting value from complex datasets and building the systems that serve them. Here's a snapshot of where my focus lies, both in the office and in my free time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Professional Focus */}
                    <div className="fade-up p-10 rounded-2xl bg-[#111827] border border-gray-800 hover:border-[var(--color-cfc-blue)] transition-colors group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[rgba(3,70,148,0.2)] flex items-center justify-center text-[var(--color-cfc-blue)]">
                                <Terminal size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">Professional Work</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            At Vanguard, I've worked across cloud-native accounting platforms and Generative AI POCs. My focus is on architecting data-intensive applications and accelerating developer workflows using modern AI tools.
                        </p>
                        <Link to="/experience" className="text-[var(--color-cfc-blue)] font-semibold flex items-center gap-2 hover:text-white transition-colors">
                            Read my full experience <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Personal Focus */}
                    <div className="fade-up p-10 rounded-2xl bg-[#111827] border border-gray-800 hover:border-[var(--color-cfc-gold)] transition-colors group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[rgba(250,204,21,0.1)] flex items-center justify-center text-[var(--color-cfc-gold-bright)]">
                                <BrainCircuit size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">Personal Projects</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Outside of work, I build full-stack sports analytics platforms like League Pulse (analyzing MLS/NWSL tactics) and research deep reinforcement learning strategies for portfolio optimization.
                        </p>
                        <Link to="/projects" className="text-[var(--color-cfc-gold-bright)] font-semibold flex items-center gap-2 hover:text-white transition-colors">
                            Explore my projects <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
