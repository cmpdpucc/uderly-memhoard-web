import React, { useState } from 'react';
import { BootSequence } from './BootSequence';
import { StreamModule } from './StreamModule';
import { BrainCircuit, Search, Share2, Settings, Power } from 'lucide-react';
// Placeholders for other modules
const SearchModule = () => <div className="text-center text-gray-500 mt-20">Global Search Module Placeholder</div>;
const GraphModule = () => <div className="text-center text-gray-500 mt-20">Knowledge Graph Module Placeholder</div>;
const SettingsModule = () => <div className="text-center text-gray-500 mt-20">Settings Module Placeholder</div>;


interface NeuralInterfaceProps {
    onExit: () => void;
}

export const NeuralInterface: React.FC<NeuralInterfaceProps> = ({ onExit }) => {
    const [booted, setBooted] = useState(false);
    const [activeModule, setActiveModule] = useState<'stream' | 'search' | 'graph' | 'settings'>('stream');

    if (!booted) return <BootSequence onComplete={() => setBooted(true)} />;

    const modules = [
        { id: 'stream', label: 'Neural Stream', icon: BrainCircuit },
        { id: 'search', label: 'Global Search', icon: Search },
        { id: 'graph', label: 'Knowledge Graph', icon: Share2 },
        { id: 'settings', label: 'Settings', icon: Settings },
    ] as const;

    return (
        <div className="fixed inset-0 bg-[#0A0A0C] text-gray-200 font-sans flex flex-col animate-page-enter z-50">
            <header className="h-16 bg-[#0E0E10]/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center px-6 z-20">
                <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[#8A2BE2] to-[#4c1d95] p-2 rounded-lg shadow-lg shadow-purple-900/30">
                        <BrainCircuit size={20} className="text-white" />
                    </div>
                    <div>
                        <div className="font-bold text-white tracking-widest text-xs">MEMHOARD<span className="text-[#8A2BE2]">.OS</span></div>
                        <div className="text-[10px] text-green-400 font-mono flex items-center gap-1 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> ONLINE
                        </div>
                    </div>
                </div>
                
                <button 
                    onClick={onExit}
                    className="group flex items-center gap-3 px-4 py-2 rounded-lg bg-[#18181B] border border-white/5 hover:border-red-500/50 hover:bg-red-950/10 transition-all"
                >
                    <div className="text-right hidden sm:block">
                         <div className="text-[10px] font-bold text-gray-400 group-hover:text-red-400 tracking-widest">DISCONNECT</div>
                    </div>
                    <Power size={16} className="text-gray-500 group-hover:text-red-500 transition-colors" />
                </button>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 bg-[#0E0E10]/50 border-r border-white/5 flex flex-col py-6 hidden md:flex backdrop-blur-sm">
                    <div className="px-4 mb-8">
                         <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 px-2">System Modules</div>
                         <nav className="space-y-2">
                             {modules.map((item) => (
                                 <button 
                                     key={item.id} 
                                     onClick={() => setActiveModule(item.id)}
                                     className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${activeModule === item.id ? 'bg-[#8A2BE2]/10 text-white border border-[#8A2BE2]/20 shadow-[0_0_15px_rgba(138,43,226,0.1)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
                                 >
                                    <item.icon size={18} className={activeModule === item.id ? "text-[#8A2BE2]" : "text-gray-500"}/>
                                    <span>{item.label}</span>
                                    {activeModule === item.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#8A2BE2] shadow-[0_0_5px_#8A2BE2]"></span>}
                                 </button>
                             ))}
                         </nav>
                    </div>
                    
                    <div className="mt-auto px-6 pb-6">
                         <div className="p-4 rounded-xl bg-gradient-to-br from-[#18181B] to-[#0E0E10] border border-white/5">
                                <div className="text-xs text-gray-500 font-mono mb-2">STORAGE USAGE</div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                                     <div className="h-full bg-[#8A2BE2] w-[45%]"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-400">
                                     <span>450GB</span>
                                     <span>1TB</span>
                                </div>
                         </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-transparent flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/5 to-transparent pointer-events-none"></div>
                    
                    <div className="flex-1 overflow-y-auto p-4 lg:p-10 scrollbar-hide relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeModule}>
                        {activeModule === 'stream' && <StreamModule />}
                        {activeModule === 'search' && <SearchModule />}
                        {activeModule === 'graph' && <GraphModule />}
                        {activeModule === 'settings' && <SettingsModule />}
                    </div>
                </div>
            </div>
        </div>
    );
};
