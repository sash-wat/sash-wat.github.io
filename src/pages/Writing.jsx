import { Calendar, Clock } from 'lucide-react';

const posts = [
    {
        title: 'The Future of React Server Components',
        date: 'Oct 24, 2023',
        readTime: '5 min read',
        excerpt: 'An exploration into how Server Components change the mental model of building with React, and why they matter for performance.',
        link: '#'
    },
    {
        title: 'Building a Design System with Variables',
        date: 'Sep 12, 2023',
        readTime: '8 min read',
        excerpt: 'Why CSS variables are still the undisputed champion of dynamic theming, and how to scale them for large applications.',
        link: '#'
    },
    {
        title: 'Chelsea\'s Tactical Evolution',
        date: 'Aug 05, 2023',
        readTime: '12 min read',
        excerpt: 'Analyzing the formation changes and pressing triggers that defined our mid-season turnaround at Stamford Bridge.',
        link: '#'
    }
];

export default function Writing() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl">
            <div className="mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Writing</h1>
                <p className="text-xl text-gray-400">
                    Thoughts on engineering, design, and occasionally football.
                </p>
            </div>

            <div className="flex flex-col gap-10 animate-fade-in delay-200">
                {posts.map((post, index) => (
                    <article key={index} className="group pb-10 border-b border-gray-800 last:border-0 last:pb-0">
                        <a href={post.link} className="block">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} /> {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} /> {post.readTime}
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-cfc-gold-bright)] transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                {post.excerpt}
                            </p>

                            <span className="text-[var(--color-cfc-blue)] group-hover:text-[var(--color-cfc-gold-bright)] font-medium transition-colors flex items-center gap-1">
                                Read article &rarr;
                            </span>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    );
}
