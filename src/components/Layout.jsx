import { Outlet, Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Writing', path: '/writing' },
    ];

    return (
        <header className={cn(
            'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
            isScrolled ? 'bg-[#0a0f1a]/80 backdrop-blur-md border-[rgba(3,70,148,0.3)] shadow-lg' : 'bg-transparent'
        )}>
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-tighter">
                    <span className="text-white">SD</span>
                    <span className="text-[var(--color-cfc-gold-bright)]">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-[var(--color-cfc-gold-bright)]',
                                location.pathname === link.path ? 'text-[var(--color-cfc-gold-bright)]' : 'text-gray-300'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-cfc-blue)] text-sm font-medium text-white hover:bg-[var(--color-cfc-blue)] transition-all">
                        Contact
                    </a>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 w-full bg-[#111827] border-b border-[var(--color-border)] shadow-xl pb-6 px-6">
                    <nav className="flex flex-col gap-4 pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-lg font-medium text-gray-300 hover:text-[var(--color-cfc-gold-bright)]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[#0a0f1a] py-12 mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-400 text-sm flex items-center gap-2">
                    <span>© {new Date().getFullYear()} Sashwat. All rights reserved.</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-[var(--color-cfc-gold-bright)] transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-[var(--color-cfc-gold-bright)] transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-[var(--color-cfc-gold-bright)] transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
}

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
