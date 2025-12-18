import React, { useState, useEffect } from 'react';
import { X, Menu, ArrowRight, Github } from 'lucide-react';

interface NavbarProps {
    onNavigate: (page: string) => void;
    onLaunchApp: () => void;
    currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onLaunchApp, currentPage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'Philosophy' },
        { id: 'features', label: 'Stack' },
        { id: 'use-cases', label: 'Use Cases' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNav = (id: string) => {
        onNavigate(id);
        setMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#121214]/80 backdrop-blur-md border-b border-white/5 py-4' : 'py-8 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <button onClick={() => handleNav('home')} className="flex items-center gap-3 group relative z-50">
                    <div className="w-10 h-10 rounded-xl bg-[#8A2BE2] flex items-center justify-center shadow-[0_0_20px_rgba(138,43,226,0.5)] group-hover:scale-105 transition-transform">
                        <img src="/assets/LogoMH.png" alt="MemHoard Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xl font-bold text-white tracking-tight leading-none">MemHoard</span>
                    </div>
                </button>

                {/* Desktop Nav */}
                <div className={`hidden md:flex items-center gap-2 bg-[#18181B]/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 transition-all duration-500`}>
                    {navItems.map(item => (
                        <button 
                            key={item.id}
                            onClick={() => handleNav(item.id)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${currentPage === item.id ? 'bg-[#27272A] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4 relative z-50">
                    <a href="https://github.com/compevity/memhoard" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <button 
                        onClick={onLaunchApp}
                        className="group bg-[#8A2BE2] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#7a25c9] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] hover:-translate-y-0.5"
                    >
                        Start App <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white relative z-50" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-300">
                    {navItems.map(item => (
                        <button key={item.id} onClick={() => handleNav(item.id)} className={`text-3xl font-bold ${currentPage === item.id ? 'text-[#8A2BE2]' : 'text-gray-400'}`}>
                            {item.label}
                        </button>
                    ))}
                    <button onClick={() => { setMenuOpen(false); onLaunchApp(); }} className="bg-[#8A2BE2] text-white px-8 py-4 rounded-full font-bold text-xl mt-8">Launch Demo</button>
                </div>
            )}
        </nav>
    );
};
