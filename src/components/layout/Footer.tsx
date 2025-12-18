import React from 'react';
import { Globe, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#020202] border-t border-white/5 py-20 relative z-10">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded bg-[#18181B] flex items-center justify-center">
                            <img src="/assets/LogoMH.png" alt="MemHoard Logo" className="w-5 h-5 object-contain" />
                        </div>
                        <span className="text-lg font-bold text-white">MemHoard.ai</span>
                    </div>
                    <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
                        The secure memory layer for the next generation of enterprise AI agents. Fully local, fully sovereign.
                    </p>
                    <div className="flex gap-4 text-gray-400">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8A2BE2] hover:text-white transition-colors"><Globe size={14}/></a>
                        <a href="mailto:contact@memhoard.ai" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8A2BE2] hover:text-white transition-colors"><Mail size={14}/></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Product</h4>
                    <ul className="space-y-4 text-gray-500">
                        <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Neural Stack</a></li>
                        <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Changelog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
                    <ul className="space-y-4 text-gray-500">
                        <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Legal</a></li>
                        <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
                <span>© 2025 Compevity LLC FZ. All Rights Reserved.</span>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};
