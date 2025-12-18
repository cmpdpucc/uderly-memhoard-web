import React, { useState, useEffect } from 'react';
import { BrainCircuit, CheckCircle2 } from 'lucide-react';

interface BootSequenceProps {
    onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const steps = [
        "Initializing Secure Core...",
        "Verifying Local Integrity...",
        "Mounting Neural Database...",
        "Establishing Secure Session..."
    ];

    useEffect(() => {
        if (step < steps.length) {
            const timer = setTimeout(() => setStep(s => s + 1), 600);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(onComplete, 800);
            return () => clearTimeout(timer);
        }
    }, [step, steps.length, onComplete]);

    return (
        <div className="fixed inset-0 bg-black text-[#8A2BE2] font-mono flex flex-col items-center justify-center z-[100]">
            <div className="w-full max-w-md space-y-8 relative">
                <div className="absolute inset-0 bg-[#8A2BE2] blur-[100px] opacity-10 rounded-full pointer-events-none"></div>
                <BrainCircuit size={80} className="mx-auto mb-8 animate-pulse text-white relative z-10" />
                
                <div className="space-y-3 relative z-10">
                    {steps.map((text, i) => (
                        <div key={i} className={`flex items-center gap-4 transition-all duration-500 ${i > step ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                            <div className={`w-2 h-2 rounded-full ${i === step ? 'bg-white animate-ping' : 'bg-[#8A2BE2]'}`}></div>
                            <span className={`text-sm ${i === step ? 'text-white font-bold tracking-widest' : 'text-[#8A2BE2]/60'}`}>{text}</span>
                            {i < step && <CheckCircle2 size={16} className="ml-auto text-green-400" />}
                        </div>
                    ))}
                </div>
                
                <div className="h-0.5 w-full bg-[#1D1D21] mt-12 rounded-full overflow-hidden relative z-10">
                    <div className="h-full bg-gradient-to-r from-[#8A2BE2] to-white transition-all duration-300 ease-out" style={{ width: `${(step / steps.length) * 100}%` }}></div>
                </div>
            </div>
        </div>
    );
};
