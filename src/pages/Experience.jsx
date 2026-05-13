import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: 'Technology Leadership Program',
        company: 'Vanguard',
        date: 'August 2024 - Present',
        location: 'Malvern, PA',
        icon: <Briefcase size={20} />,
        bullets: [
            'Rotation 3: Contributed to Generative AI-based offerings for ETF Operations professionals to conduct research through a chat interface, and developed tools to improve developer efficiency by automating pieces of the SDLC.',
            'Rotation 2: Planned and began implementation of a data reconciliation tool to validate data pipeline modernization efforts. Contributed to a Generative AI project for enterprise-wide metadata access.',
            'Rotation 1: Contributed to cloud-native proprietary fund accounting and pricing platform. Worked on a Generative AI Proof of Concept to expedite common reporting processes.'
        ]
    },
    {
        role: 'Investment Systems Software Development Intern',
        company: 'Vanguard',
        date: 'May 2023 - August 2023',
        location: 'Malvern, PA',
        icon: <Code size={20} />,
        bullets: [
            'Created a webapp to display municipal bond metrics to improve trading decisions and profitability for fixed income security traders.',
            'Utilized TypeScript and the React framework to design the user interface.',
            'Connected webapp to Amazon S3 buckets to draw up-to-date bond information.'
        ]
    },
    {
        role: 'Application Developer / Intern',
        company: 'Vanguard',
        date: 'June 2022 - December 2022',
        location: 'Malvern, PA',
        icon: <Code size={20} />,
        bullets: [
            'Built a REST API service hosted on the AWS Cloud (S3, ECS, EC2, CloudWatch, CloudFront).',
            'Delivered API to Portfolio Managers to draw financial data and inform decision-making processes.',
            'Developed a cryptocurrency index product based on market research to determine institutional investment viability.'
        ]
    },
    {
        role: 'Lead Teaching Assistant - Quant Finance',
        company: 'University of Maryland',
        date: 'August 2023 - May 2024',
        location: 'College Park, MD',
        icon: <GraduationCap size={20} />,
        bullets: [
            'Lead TA for Portfolio Management (BUFN402) and BUFN400 under Professor Seokwoo Lee.',
            'Led a pre-semester bootcamp to upskill students on Python for quantitative and financial analysis.',
            'Developed course materials, graded assignments, and conducted office hours.'
        ]
    },
    {
        role: 'Software Intern',
        company: 'ANB Systems, Inc.',
        date: 'May 2021 - August 2021',
        location: 'Houston, TX',
        icon: <Code size={20} />,
        bullets: [
            'Created an error classification system to provide insights on an Optical Character Recognition (OCR) system.',
            'Improved an ML Classifier using a bag-of-words model through a supervised training process.',
            'Completed extensive documentation for numerous systems to support future development efforts.'
        ]
    }
];

export default function Experience() {
    const container = useRef();

    useGSAP(() => {
        gsap.fromTo('.header-text', 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out", clearProps: "all" }
        );

        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.fromTo(item, 
                { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    clearProps: "all"
                }
            );
        });

        gsap.fromTo('.timeline-line', 
            { scaleY: 0 },
            { scaleY: 1, duration: 1.5, ease: "power3.out", transformOrigin: "top", clearProps: "all" }
        );

    }, { scope: container });

    return (
        <div className="container mx-auto px-6 py-12 md:py-24" ref={container}>
            <div className="max-w-4xl mb-20 text-center mx-auto">
                <h1 className="header-text text-5xl md:text-6xl font-bold mb-6 tracking-tight">Professional <span className="text-gradient">Experience</span></h1>
                <p className="header-text text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    My career journey bridging machine learning, cloud engineering, and quantitative finance.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto py-10">
                {/* Center Line */}
                <div className="timeline-line hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--color-cfc-blue)] via-[var(--color-cfc-gold-bright)] to-transparent opacity-20"></div>

                <div className="space-y-16 md:space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* Empty space for alternate side */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Node */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-[#0a0f1a] border-2 border-[var(--color-cfc-blue)] z-10 text-[var(--color-cfc-gold-bright)] shadow-[0_0_20px_rgba(3,70,148,0.6)] top-8 md:top-1/2">
                                {exp.icon}
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-5/12 pl-20 md:pl-0 mt-2 md:mt-0">
                                <div className="p-8 rounded-2xl bg-[#111827]/80 backdrop-blur-md border border-gray-800 hover:border-[var(--color-cfc-blue)] transition-colors glow-on-hover relative">
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className="text-[var(--color-cfc-gold-bright)] font-semibold mb-2">{exp.company}</div>
                                    <div className="text-sm text-gray-500 mb-6 flex flex-col sm:flex-row sm:items-center gap-2">
                                        <span>{exp.date}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>{exp.location}</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                                                <span className="text-[var(--color-cfc-blue)] mt-1 flex-shrink-0">▹</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
