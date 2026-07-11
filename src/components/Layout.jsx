import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Menu, X } from 'lucide-react';

const navigation = [
    { label: 'Work', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Writing', to: '/writing' },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <header className="site-header">
            <div className="site-shell header-inner">
                <Link to="/" viewTransition className="wordmark" aria-label="Sashwat Venkatesh, home">
                    <span>SV</span>
                    <span className="wordmark-dot" aria-hidden="true" />
                </Link>

                <nav className="desktop-nav" aria-label="Primary navigation">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            viewTransition
                            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <a className="header-contact" href="mailto:sashwat.venkatesh@gmail.com">
                    Start a conversation <ArrowUpRight size={16} strokeWidth={2.2} />
                </a>

                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <nav className="site-shell mobile-nav" aria-label="Mobile navigation">
                        {navigation.map((item, index) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                viewTransition
                                className="mobile-nav-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span>0{index + 1}</span>
                                {item.label}
                            </NavLink>
                        ))}
                        <a
                            className="mobile-nav-link mobile-contact"
                            href="mailto:sashwat.venkatesh@gmail.com"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span>04</span>
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-shell footer-grid">
                <div>
                    <p className="eyebrow footer-eyebrow">Open to good conversations</p>
                    <h2>Have a strange, useful idea?</h2>
                    <a className="footer-email" href="mailto:sashwat.venkatesh@gmail.com">
                        Let&apos;s talk <ArrowUpRight size={24} />
                    </a>
                </div>

                <div className="footer-meta">
                    <div className="footer-links">
                        <a href="https://github.com/sash-wat" target="_blank" rel="noreferrer">
                            <Github size={18} /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/sashvenk/" target="_blank" rel="noreferrer">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>
                    <p>Applied AI, data products, and football.</p>
                    <p>© {new Date().getFullYear()} Sashwat Venkatesh</p>
                </div>
            </div>
        </footer>
    );
}

export default function Layout() {
    const location = useLocation();

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('supports-view-transitions', typeof document.startViewTransition === 'function');
        return () => root.classList.remove('supports-view-transitions');
    }, []);

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('[data-reveal]'));
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion || !('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('is-revealed'));
            return undefined;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, [location.pathname]);

    return (
        <div className="site-frame">
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
