import React from 'react';
import { PageContainer, SectionTitle } from './Home';

export const UseCasesPage: React.FC = () => {
    const categories = [
        {
            title: "Defense & Critical Operations",
            cases: [
                { title: 'Mobile and Isolated Operations', type: 'Defense', desc: 'Deploy self-contained, AI-powered units in environments where connectivity cannot be guaranteed—such as military vehicles, naval ships, or remote industrial sites. MemHoard runs entirely offline, storing and indexing strategic knowledge locally.' },
                { title: 'Strategic Data Protection', type: 'Legal', desc: 'Safeguard your most valuable intellectual property, R&D, and financial data from external threats. Ensures zero data exfiltration risks for highly sensitive legal and technical documentation.' },
            ]
        },
        {
            title: "Enterprise Intelligence",
            cases: [
                { title: 'Corporate Knowledge Management', type: 'Enterprise', desc: 'Create a centralized, intelligent, and secure "corporate brain" that retains and surfaces critical information from decades of internal documentation.' },
                { title: 'C-Suite Decision Support', type: 'Management', desc: 'Provide executives with rapid, data-driven insights from internal reports to support high-stakes decisions without waiting for manual analysis.' },
                { title: 'Deadline & Document Handling', type: 'Ops', desc: 'Automate the tracking of complex projects and contractual obligations, reducing administrative overhead and preventing missed critical dates.' },
            ]
        },
        {
            title: "Specialized Industry Solutions",
            cases: [
                { title: 'IoT Data Integration', type: 'Industry', desc: 'MemHoard connects directly to IoT platforms through local agents that extract and normalize sensor data from accumulation databases. Semantically indexed for natural-language querying of live operations.' },
                { title: 'Local AI for Document Intelligence in AML', type: 'Finance', desc: 'MemHoard.ai delivers on-premise AI designed to securely analyze and classify documents in Anti-Money Laundering workflows. Identifies inconsistencies and supports compliance checks entirely within your infrastructure.' },
            ]
        }
    ];

    return (
        <PageContainer>
            <SectionTitle subtitle="Deployments" title="Mission Critical Scenarios" />
            
            <div className="space-y-24">
                {categories.map((cat, idx) => (
                    <div key={idx}>
                        <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#8A2BE2] pl-4">{cat.title}</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {cat.cases.map((c, i) => (
                                <div key={i} className="bg-[#18181B] border border-white/5 p-8 rounded-2xl hover:border-[#8A2BE2]/50 transition-all group hover:bg-[#1E1E24] hover:-translate-y-1">
                                     <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-white max-w-[80%]">{c.title}</h3>
                                            <span className="px-3 py-1 rounded-full bg-[#27272A] text-[10px] font-bold uppercase tracking-widest text-[#8A2BE2] border border-white/5">{c.type}</span>
                                     </div>
                                     <p className="text-gray-400 leading-relaxed text-sm font-light">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};
