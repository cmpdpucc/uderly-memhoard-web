import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
    currentPage: string;
    onNavigate: (page: string) => void;
    onLaunchApp: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate, onLaunchApp }) => {
    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#8A2BE2] selection:text-white flex flex-col">
            <Navbar currentPage={currentPage} onNavigate={onNavigate} onLaunchApp={onLaunchApp} />
            <main className="flex-1 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};
