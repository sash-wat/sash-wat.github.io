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

    const skills = [
        { icon: <BrainCircuit size={28} />, title: "Machine Learning", desc: "Deep Reinforcement Learning, Generative AI, and predictive modeling for complex datasets." },
        { icon: <BarChart3 size={28} />, title: "Data Science & Analytics", desc: "Advanced statistical analysis, quantitative finance, and sports analytics using R and Python." },
        { icon: <Terminal size={28} />, title: "Full-Stack Development", desc: "Building scalable web applications, dynamic dashboards, and data visualization tools with React." },
    ];

    return (
        <div className="flex flex-col min-h-screen" ref={container}>
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center container mx-auto px-6 py-20">
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-[var(--color-cfc-blue)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse pointer-events-none"></div>
                <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[var(--color-cfc-gold-bright)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>
                
                <div className="relative z-10 max-w-4xl">
                    <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(3,70,148,0.2)] text-[var(--color-cfc-blue)] border border-[rgba(3,70,148,0.3)] mb-8">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-cfc-gold-bright)] animate-pulse"></span>
                        <span className="text-sm font-semibold tracking-wide uppercase">Data Scientist & Developer</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
                        <div className="hero-title-line overflow-hidden py-1">Turning complex data</div>
                        <div className="hero-title-line overflow-hidden py-1">into <span className="text-gradient">intelligent</span></div>
                        <div className="hero-title-line overflow-hidden py-1"><span className="text-gradient-blue">solutions.</span></div>
                    </h1>

                    <p className="hero-desc text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                        I'm Sashwat. I architect machine learning models for finance, engineer tactical sports analytics platforms, and build performant web applications that bring data to life.
                    </p>

                    <div className="hero-actions flex flex-wrap gap-4">
                        <Link to="/projects" className="px-8 py-4 bg-[var(--color-cfc-blue)] text-white font-medium rounded-lg hover:bg-[#0450a8] hover:shadow-[0_0_20px_rgba(3,70,148,0.4)] transition-all flex items-center gap-2">
                            View My Work <ArrowRight size={18} />
                        </Link>
                        <a href="mailto:sashwat.venkatesh@gmail.com" className="px-8 py-4 border border-gray-700 hover:border-[var(--color-cfc-gold)] text-gray-300 font-medium rounded-lg hover:bg-[rgba(250,204,21,0.05)] transition-all">
                            Let's Connect
                        </a>
                    </div>
                </div>

                <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2">
                    <span className="text-sm tracking-widest uppercase">Discover</span>
                    <ChevronDown size={20} />
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="scroll-section container mx-auto px-6 py-24 border-t border-gray-800/50 relative">
                <div className="max-w-3xl mb-16 fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Bridging the gap between <span className="text-white">theory</span> and <span className="text-[var(--color-cfc-gold-bright)]">impact</span>.</h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Whether I'm optimizing SP100 trading strategies using multimodal deep reinforcement learning, or building the Tactical-Value Mapping System (TVMS) to evaluate elite soccer players, my approach remains the same: ground truth in data, deliver through exceptional engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {skills.map((skill, index) => (
                        <div key={index} className="fade-up glow-on-hover p-8 rounded-2xl bg-[#111827]/50 backdrop-blur-sm border border-gray-800 flex flex-col gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(3,70,148,0.3)] to-transparent flex items-center justify-center text-[var(--color-cfc-blue)] border border-[rgba(3,70,148,0.2)]">
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Work CTA */}
            <section className="scroll-section container mx-auto px-6 pb-32 pt-16">
                <div className="fade-up p-12 md:p-16 rounded-3xl bg-gradient-to-r from-[#111827] to-[#0a0f1a] border border-gray-800 relative overflow-hidden shadow-2xl mt-12 md:mt-24">
                    <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[rgba(3,70,148,0.1)] to-transparent pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to see it in action?</h2>
                            <p className="text-lg text-gray-400">Explore my portfolio of quantitative research, full-stack applications, and predictive models.</p>
                        </div>
                        <Link to="/projects" className="shrink-0 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-[var(--color-cfc-gold-bright)] transition-colors flex items-center gap-2">
                            Explore Portfolio <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
