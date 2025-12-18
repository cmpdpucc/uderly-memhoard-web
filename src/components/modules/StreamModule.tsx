import React, { useState, useRef, useEffect } from 'react';
import { Activity, ImageIcon, Mic, FileText } from 'lucide-react';
import { Button } from '../core/Button';

interface Memory {
    id: number;
    content: string;
    title: string;
    tags: string[];
    timestamp: string;
}

const INITIAL_MEMORY: Memory[] = [
    { id: 1, content: "Deployment on Naval Unit Alpha-4 confirmed. Offline sync successful.", title: "Naval Deployment Log", tags: ["defense", "ops"], timestamp: "2h ago" },
    { id: 2, content: "Detected anomaly in sensor array 4B. Cross-referencing with manual v2.4.", title: "IoT Sensor Alert", tags: ["iot", "maintenance"], timestamp: "5h ago" },
    { id: 3, content: "Reviewing AML compliance docs for client XJ-900. Flagged inconsistency in section 4.", title: "AML Compliance Check", tags: ["legal", "finance"], timestamp: "1d ago" }
];

export const StreamModule: React.FC = () => {
    const [memories, setMemories] = useState<Memory[]>(INITIAL_MEMORY);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
         if (inputRef.current) inputRef.current.focus();
    }, []);

    useEffect(() => {
        setIsTyping(inputValue.length > 0);
    }, [inputValue]);

    const handleSave = () => {
        if (!inputValue.trim()) return;
        const newMemory: Memory = {
            id: Date.now(),
            content: inputValue,
            title: "New Secure Entry",
            tags: ["general"],
            timestamp: "Just now"
        };
        setMemories([newMemory, ...memories]);
        setInputValue("");
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#8A2BE2] to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-700 ${isTyping ? 'opacity-80' : ''}`}></div>
                <div className="relative bg-[#131316] rounded-xl border border-white/10 shadow-2xl p-6">
                    <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                        <span className="text-[10px] font-mono text-[#8A2BE2] uppercase tracking-wider flex items-center gap-2">
                            <Activity size={10} /> Input Stream Ready
                        </span>
                    </div>
                    <textarea 
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter strategic data for ingestion..."
                        className="w-full bg-transparent border-none outline-none text-xl text-white placeholder-gray-600 font-light resize-none h-24 leading-relaxed focus:ring-0"
                    />
                    <div className="flex justify-between items-center mt-4 pt-2">
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 transition-colors"><ImageIcon size={16}/></button>
                            <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 transition-colors"><Mic size={16}/></button>
                        </div>
                        <Button onClick={handleSave} size="sm">
                            ENCRYPT & SAVE
                        </Button>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between pb-2">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Recent Encryption</h3>
                </div>
                {memories.map((m) => (
                    <div key={m.id} className="group bg-[#131316]/80 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:border-[#8A2BE2]/40 transition-all hover:bg-[#18181B] hover:shadow-lg hover:shadow-purple-900/10">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center text-[#8A2BE2] border border-[#8A2BE2]/20">
                                    <FileText size={14} />
                                </div>
                                <div>
                                    <div className="text-white font-medium text-sm">{m.title}</div>
                                    <div className="flex gap-2 mt-1">
                                        {m.tags.map(t => (
                                            <span key={t} className="text-[10px] text-gray-500 uppercase tracking-wider">#{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span className="text-[10px] text-gray-600 font-mono bg-white/5 px-2 py-1 rounded">{m.timestamp}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed pl-11 group-hover:text-gray-300 transition-colors">{m.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
