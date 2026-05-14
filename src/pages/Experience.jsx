import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Briefcase, Code } from 'lucide-react';

export default function Experience() {
    const container = useRef();

    useGSAP(() => {
        gsap.fromTo('.fade-in', 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", clearProps: "all" }
        );
    }, { scope: container });

    return (
        <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl" ref={container}>
            <div className="mb-20 text-center fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Professional <span className="text-gradient">Experience</span></h1>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    My career journey bridging machine learning, cloud engineering, and quantitative finance.
                </p>
            </div>

            {/* Current Role */}
            <div className="mb-20 fade-in">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                    <Briefcase className="text-[var(--color-cfc-blue)]" size={24} /> 
                    Current Role
                </h2>
                
                <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0a0f1a] border border-[rgba(3,70,148,0.3)] shadow-[0_0_40px_rgba(3,70,148,0.1)] relative overflow-hidden group hover:border-[var(--color-cfc-blue)] transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[rgba(3,70,148,0.05)] to-transparent pointer-events-none group-hover:from-[rgba(3,70,148,0.1)] transition-colors duration-500"></div>
                    
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-10">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Technology Leadership Program</h3>
                                <div className="text-xl text-[var(--color-cfc-gold-bright)] font-semibold">Vanguard</div>
                            </div>
                            <div className="text-left md:text-right">
                                <div className="text-gray-300 font-medium text-lg">August 2024 - Present</div>
                                <div className="text-gray-500">Malvern, PA</div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-[#0a0f1a]/60 p-6 md:p-8 rounded-2xl border border-gray-800/80 hover:border-gray-600 transition-colors">
                                <h4 className="text-lg text-white font-bold mb-3 flex items-center gap-2"><span className="text-[var(--color-cfc-gold-bright)]">Rotation 3:</span> Applied AI & Developer Experience</h4>
                                <p className="text-gray-400 leading-relaxed text-base">Contributed to Generative AI-based offerings for ETF Operations professionals to conduct research through a chat interface. Developed tools to improve developer efficiency by automating pieces of the Software Development Lifecycle.</p>
                            </div>
                            
                            <div className="bg-[#0a0f1a]/60 p-6 md:p-8 rounded-2xl border border-gray-800/80 hover:border-gray-600 transition-colors">
                                <h4 className="text-lg text-white font-bold mb-3 flex items-center gap-2"><span className="text-[var(--color-cfc-gold-bright)]">Rotation 2:</span> Data Pipeline & Metadata</h4>
                                <p className="text-gray-400 leading-relaxed text-base">Planned and began implementation of a data reconciliation tool to validate data pipeline modernization efforts. Contributed to a Generative AI project for enterprise-wide metadata access.</p>
                            </div>

                            <div className="bg-[#0a0f1a]/60 p-6 md:p-8 rounded-2xl border border-gray-800/80 hover:border-gray-600 transition-colors">
                                <h4 className="text-lg text-white font-bold mb-3 flex items-center gap-2"><span className="text-[var(--color-cfc-gold-bright)]">Rotation 1:</span> Cloud-Native Platforms</h4>
                                <p className="text-gray-400 leading-relaxed text-base">Contributed to cloud-native proprietary fund accounting and pricing platform. Worked on a Generative AI Proof of Concept to expedite common reporting processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Previous Internships */}
            <div className="fade-in">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                    <Code className="text-[var(--color-cfc-gold-bright)]" size={24} /> 
                    Previous Experience & Internships
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-[var(--color-cfc-blue)] transition-colors">
                        <h3 className="text-xl font-bold text-white mb-1">Software Development Intern</h3>
                        <div className="text-[var(--color-cfc-blue)] font-semibold text-sm mb-4">Vanguard • Summer 2023</div>
                        <p className="text-gray-400 text-sm leading-relaxed">Built a TypeScript/React webapp connected to AWS S3 to display municipal bond metrics, improving trading decisions for fixed income security traders.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-[var(--color-cfc-blue)] transition-colors">
                        <h3 className="text-xl font-bold text-white mb-1">Application Developer Intern</h3>
                        <div className="text-[var(--color-cfc-blue)] font-semibold text-sm mb-4">Vanguard • Summer & Fall 2022</div>
                        <p className="text-gray-400 text-sm leading-relaxed">Engineered a REST API hosted on AWS (ECS, EC2) to deliver financial data to Portfolio Managers. Conducted research on institutional cryptocurrency viability.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-gray-600 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-1">Lead TA - Quant Finance</h3>
                        <div className="text-[var(--color-cfc-gold-bright)] font-semibold text-sm mb-4">University of Maryland • 2023 - 2024</div>
                        <p className="text-gray-400 text-sm leading-relaxed">Lead TA for Portfolio Management courses. Directed a pre-semester bootcamp upskilling students in Python for financial analysis.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-gray-600 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-1">Software ML Intern</h3>
                        <div className="text-[var(--color-cfc-gold-bright)] font-semibold text-sm mb-4">ANB Systems • Summer 2021</div>
                        <p className="text-gray-400 text-sm leading-relaxed">Developed an error classification system for an OCR platform and improved an ML Classifier utilizing a supervised bag-of-words model.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
