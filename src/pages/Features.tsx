import React, { useState } from 'react';
import { PageContainer, SectionTitle } from './Home';
import type { LucideIcon } from 'lucide-react';
import { Server, ShieldCheck, Fingerprint, FileText, MessageSquare, Tags, CalendarClock, Image as ImageIcon, Camera, Languages, Cpu, Plug, Activity, XCircle } from 'lucide-react';

interface FeatureCardProps {
    id: string;
    title: string;
    desc: string;
    longDesc: string;
    icon: LucideIcon;
    isActive: boolean;
    isBlurred: boolean;
    onToggle: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, longDesc, icon: Icon, isActive, isBlurred, onToggle }) => {
    return (
        <div 
            onClick={onToggle}
            className={`
                relative p-8 rounded-2xl border transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col
                ${isActive 
                    ? 'bg-[#1E1E24] border-[#8A2BE2] shadow-[0_0_50px_rgba(138,43,226,0.15)] md:col-span-2 md:row-span-2 z-10 scale-[1.02]' 
                    : 'bg-[#18181B]/40 border-white/5 hover:bg-[#18181B] hover:border-white/10 hover:-translate-y-1'
                }
                ${isBlurred ? 'blur-[2px] opacity-40 scale-95 pointer-events-none grayscale-[0.5]' : 'opacity-100'}
            `}
        >
             <div className={`
                 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 flex-shrink-0
                 ${isActive ? 'bg-[#8A2BE2] text-white shadow-lg' : 'bg-[#18181B] text-[#8A2BE2] group-hover:bg-[#8A2BE2] group-hover:text-white'}
             `}>
                    <Icon size={28} />
             </div>
             
             <div className="flex-1 flex flex-col relative z-10">
                 <h4 className={`font-bold mb-3 transition-all duration-300 ${isActive ? 'text-3xl text-white' : 'text-xl text-white'}`}>
                     {title}
                 </h4>
                 
                 <div className="relative">
                     {/* Short Description (Fades out when active) */}
                     <p className={`text-gray-400 font-light leading-relaxed transition-all duration-500 absolute top-0 left-0 w-full ${isActive ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                         {desc}
                     </p>
                     
                     {/* Long Description (Fades in when active) */}
                     <div className={`text-gray-300 text-lg leading-relaxed font-light transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                         {longDesc}
                         <div className="mt-6 flex items-center gap-2 text-[#8A2BE2] text-sm font-bold uppercase tracking-widest">
                             <Activity size={16} /> Analysis Active
                         </div>
                     </div>
                 </div>
             </div>

             {/* Decorative Elements for Active State */}
             {isActive && (
                 <>
                     <div className="absolute top-0 right-0 p-8 text-[#8A2BE2]/10 pointer-events-none">
                            <Icon size={200} />
                     </div>
                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8A2BE2] to-transparent"></div>
                     <button className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                         <XCircle size={24} />
                     </button>
                 </>
             )}
        </div>
    );
};

export const FeaturesPage: React.FC = () => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const toggleCard = (id: string) => {
        setActiveCard(activeCard === id ? null : id);
    };

    const coreFeatures = [
        { id: 'f1', title: 'Fully On-Premise & Offline', desc: 'No internet connection required. Your data never leaves your premises.', longDesc: 'Operates completely air-gapped from the public internet. By design, no data packet ever leaves your local network infrastructure. This zero-trust architecture ensures that even in the event of external network compromise, your strategic assets remain isolated and unreachable.', icon: Server },
        { id: 'f2', title: 'Multi-Level Security', desc: 'Granular access controls mirroring military-grade protocols.', longDesc: 'Implements a hierarchical security model inspired by DEFCON levels. Granular Role-Based Access Control (RBAC) ensures users only see what they are explicitly authorized to access. Audit logs track every single query and document access in real-time.', icon: ShieldCheck },
        { id: 'f3', title: 'MFA Authentication', desc: 'Multi-factor authentication adds an extra layer of security.', longDesc: 'Enforced hardware-key or biometric multi-factor authentication for all administrative and user access. Prevents unauthorized entry even if credentials are compromised via social engineering or phishing.', icon: Fingerprint },
        { id: 'f4', title: 'Local RAG on Documents', desc: 'Powerful Retrieval-Augmented Generation runs locally.', longDesc: 'Utilizes advanced vector embeddings computed locally on your hardware. This allows the AI to "read" and "understand" millions of your internal documents without ever sending a single byte to OpenAI, Anthropic, or Google servers.', icon: FileText },
        { id: 'f5', title: 'Chat with Documents', desc: 'Engage in natural language conversations with your knowledge base.', longDesc: 'Transform static PDFs, Word docs, and Excel sheets into an interactive conversation. Ask complex questions like "What are the liability clauses in the Johnson contract?" and get immediate, citation-backed answers drawn directly from your files.', icon: MessageSquare },
        { id: 'f6', title: 'Automatic Classification', desc: 'AI automatically organizes your documents.', longDesc: 'Ingest chaotic data dumps and watch as the AI automatically categorizes, tags, and creates a taxonomy for your files based on their semantic content, not just keywords.', icon: Tags },
        { id: 'f7', title: 'Smart Deadlines & Reminders', desc: 'Smartly tracks deadlines and expirations in every document.', longDesc: 'Never miss a renewal date. The AI proactively scans contracts and certificates for expiry dates, automatically adding them to a centralized calendar and alerting stakeholders weeks in advance.', icon: CalendarClock },
        { id: 'f8', title: 'Advanced Multimodality', desc: 'Processes text, images and sounds.', longDesc: 'Beyond text: upload blueprints, schematics, or voice memos. The multimodal engine analyzes visual and audio data, making it searchable and queryable alongside your text documents.', icon: ImageIcon },
        { id: 'f9', title: 'Semantic Image Interpretation', desc: 'AI understands content of images.', longDesc: 'Advanced computer vision models describe and index the content of images. Search for "damaged pipe" or "safety violation" and find relevant photos instantly, even if they have no filenames or metadata.', icon: Camera },
        { id: 'f10', title: 'Cross-Language Chat', desc: 'Converse with files in any language.', longDesc: 'Break down language barriers. Query a Japanese technical manual in English, or summarize a German contract in Spanish. Real-time, context-aware translation happens entirely on-device.', icon: Languages },
        { id: 'f11', title: 'Multi-Expert AI Engine', desc: 'Multiple AI agents cross-verify information.', longDesc: 'Orchestrates a swarm of specialized AI agents (e.g., Legal Bot, Technical Bot, Compliance Bot) that debate and cross-verify answers before presenting them to the user, significantly reducing hallucinations.', icon: Cpu },
        { id: 'f12', title: 'Secure Local API', desc: 'Integrate directly into ERP and CRM tools.', longDesc: 'Provides a RESTful API endpoint that mimics standard cloud AI providers, allowing you to drop-in MemHoard as a backend for your existing internal apps without rewriting code.', icon: Plug },
    ];

    return (
        <PageContainer>
            <SectionTitle subtitle="Technology" title="The Neural Stack" />
            
            <div className="mb-20">
                <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-[#8A2BE2] pl-4">Core Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {coreFeatures.map((f) => (
                        <FeatureCard 
                            key={f.id} 
                            {...f} 
                            isActive={activeCard === f.id}
                            isBlurred={activeCard !== null && activeCard !== f.id}
                            onToggle={() => toggleCard(f.id)}
                        />
                    ))}
                </div>
            </div>
        </PageContainer>
    );
};
