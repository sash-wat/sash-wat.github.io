import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const notes = [
    {
        label: 'NFL field notes · Week 1',
        title: 'Drake Maye’s opener wasn’t bad. His ending was.',
        date: 'September 2026',
        description: 'Three interceptions, one defensive identity, and the first entries in a season-long team ledger.',
        to: '/writing/nfl-2026-week-1-patriots-seahawks',
    },
    {
        label: 'Research note',
        title: 'What makes a forward valuable?',
        date: 'December 2023',
        description: 'Elastic net, expected goals, and the football actions that explain market value beyond scoring.',
        to: '/projects/soccer-analysis',
    },
];

export default function Writing() {
    return (
        <div className="page-enter">
            <header className="site-shell page-hero writing-hero">
                <p className="eyebrow">Writing / working notes</p>
                <div className="page-hero-grid">
                    <h1>A place to think in public.</h1>
                    <p>
                        Occasional essays about intelligent software, quantitative systems, and football.
                        The standard is useful—not frequent.
                    </p>
                </div>
            </header>

            <section className="site-shell writing-list">
                {notes.map((note, index) => (
                    <Link
                        className="writing-row"
                        to={note.to}
                        viewTransition
                        key={note.title}
                        data-reveal
                        style={{ '--reveal-delay': `${index * 55}ms` }}
                    >
                        <span className="writing-number">0{index + 1}</span>
                        <div>
                            <p className="writing-meta">{note.label} · {note.date}</p>
                            <h2>{note.title}</h2>
                            <p>{note.description}</p>
                        </div>
                        <ArrowRight className="writing-arrow" size={30} />
                    </Link>
                ))}

                <div className="writing-coming-soon" data-reveal>
                    <p className="eyebrow">The 2026 notebook</p>
                    <h2>One week at a time. Thirty-two team profiles by January.</h2>
                    <a href="mailto:sashwat.venkatesh@gmail.com?subject=Portfolio%20note" className="text-link">
                        Suggest a topic <ArrowUpRight size={18} />
                    </a>
                </div>
            </section>
        </div>
    );
}
