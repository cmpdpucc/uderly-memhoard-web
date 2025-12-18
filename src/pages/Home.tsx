import React from 'react';
import type { ReactNode } from 'react';
import { Sparkles, ChevronRight, BrainCircuit, Star } from 'lucide-react';
import { ColorBends } from '../components/core/ColorBends';

const PageContainer = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
    <div className={`container mx-auto px-6 py-20 lg:py-32 animate-page-enter max-w-7xl relative z-10 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ subtitle, title, align = "center" }: { subtitle: string, title: string, align?: "center" | "left" }) => (
    <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 text-[#8A2BE2] text-xs font-bold uppercase tracking-widest mb-6`}>
            <Sparkles size={12} /> {subtitle}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight text-glow">
            {title}
        </h2>
    </div>
);

interface HomePageProps {
    onLaunch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onLaunch }) => (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
            <ColorBends 
                opacity={0.8} 
                scale={1.5}
                colors={['#000000', '#240046', '#8A2BE2', '#5B2C6F', '#000000', '#9D4EDD', '#E0AAFF']} 
                speed={0.15}
                transparent={false} 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] z-10 pointer-events-none"></div>
        </div>

        <PageContainer className="text-center mt-[-5vh]">
            <div className="mb-8 animate-in fade-in zoom-in duration-1000 delay-200">
                <div className="shine-badge inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#18181B]/80 border border-white/10 backdrop-blur-md text-gray-300 text-sm font-medium mb-10 hover:border-[#8A2BE2]/50 transition-colors cursor-pointer group">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A2BE2] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8A2BE2]"></span>
                    </span>
                    <span className="tracking-wide">MemHoard Enterprise v2.0 Live</span>
                    <ChevronRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                MemHoard
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                On-Premise Artificial Intelligence <br/>
                with <span className="text-white font-semibold underline decoration-[#8A2BE2] decoration-2 underline-offset-4">Full Data Control</span>.
            </p>
            
            <p className="text-lg text-[#8A2BE2] font-mono mb-12 italic">"Don't let it out!"</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                    onClick={onLaunch}
                    className="group relative px-10 py-5 bg-[#8A2BE2] hover:bg-[#7a25c9] text-white rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(138,43,226,0.3)] hover:shadow-[0_0_60px_rgba(138,43,226,0.5)] hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <BrainCircuit size={20} />
                    <span className="relative tracking-wide">Launch Interface</span>
                </button>
                
                <button className="px-10 py-5 bg-[#18181B]/50 backdrop-blur-md text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 group">
                    <Star size={18} className="text-gray-500 group-hover:text-yellow-400 transition-colors" />
                    <span>Star on GitHub</span>
                </button>
            </div>

            <div className="mt-24 pt-8 border-t border-white/5 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-6">Sovereignty as a Must</p>
                <div className="flex gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                     {/* Placeholder logos - replacing with div blocks for now, can insert img tags if SVGs available */}
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                    <div className="h-8 w-24 bg-white/20 rounded hidden sm:block"></div>
                </div>
            </div>
        </PageContainer>
    </div>
);

interface StatCardProps {
    number: string;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
    <div className="bg-[#18181B]/50 p-6 rounded-2xl border border-white/5 text-center hover:bg-[#18181B] transition-colors">
        <div className="text-4xl font-bold text-white mb-2">{number}</div>
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</div>
    </div>
);

import { Database, ShieldAlert, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => (
    <PageContainer>
        <SectionTitle subtitle="Philosophy" title="Sovereignty as a Must" />
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    Presented by <strong className="text-white">Compevity L.L.C-FZ</strong>. 
                    <br/>We represent a bridge of local engineering excellence to global markets, delivering cutting-edge, secure AI solutions.
                </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
             {/* Problem Section */}
             <div className="space-y-8">
                 <div className="bg-[#18181B] border border-red-500/20 p-10 rounded-3xl relative overflow-hidden group hover:bg-[#1E1E24] transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Database size={120} className="text-red-500" />
                            <ShieldAlert size={60} className="absolute bottom-8 right-8 text-red-500" />
                        </div>
                        <h3 className="text-red-400 font-bold text-xl mb-4 uppercase tracking-widest flex items-center gap-2"><Database className="text-red-500" size={20}/> The Problem</h3>
                        <h2 className="text-3xl font-bold text-white mb-6">Your Data is Your Most Strategic Asset.</h2>
                        <p className="text-gray-400 leading-relaxed text-lg font-light">
                            In the era of cloud-based AI, companies risk exposing their most sensitive information—trade secrets, financial data, and strategic plans—to external servers, effectively forcing a choice between safeguarding strategic data and deploying AI in decision-making.
                        </p>
                 </div>
             </div>

             {/* Solution Section */}
             <div className="space-y-8">
                 <div className="bg-[#18181B] border border-green-500/20 p-10 rounded-3xl relative overflow-hidden group hover:bg-[#1E1E24] transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ShieldCheck size={140} className="text-green-500" />
                        </div>
                        <h3 className="text-green-400 font-bold text-xl mb-4 uppercase tracking-widest flex items-center gap-2"><ShieldCheck className="text-green-500" size={20}/> Our Solution</h3>
                        <h2 className="text-3xl font-bold text-white mb-6">Total Control, Absolute Security, On-Premise AI.</h2>
                        <p className="text-gray-400 leading-relaxed text-lg font-light">
                            With <span className="text-white font-bold">MemHoard AI</span>, you no longer have to sacrifice the power of AI for data sovereignty. 
                            <br/><br/>
                            Our solution allows you to achieve both: use cutting-edge artificial intelligence locally on your own data, without ever losing control. As a physical, on-premise device, it operates <span className="text-white font-semibold">fully offline</span>, ensuring your sensitive information is never transmitted over the internet. Access is governed by your internal security policies, guaranteeing full compliance and peace of mind.
                        </p>
                 </div>
             </div>
        </div>

        {/* Expanded Stats/Philosophy */}
        <div className="relative mt-20">
             <div className="absolute -inset-4 bg-gradient-to-r from-[#8A2BE2] to-blue-600 rounded-3xl blur-2xl opacity-10 animate-pulse"></div>
             <div className="glass-panel p-12 rounded-3xl relative text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Why On-Premise Matters Now</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                         <StatCard number="0b" label="Data Leaked" />
                         <StatCard number="100%" label="Offline Uptime" />
                         <StatCard number="DEFCON 1" label="Security Level" />
                         <StatCard number="Local" label="Inference" />
                    </div>
             </div>
        </div>
    </PageContainer>
);

export { PageContainer, SectionTitle };
