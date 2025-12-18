import React from 'react';
import { PageContainer } from './Home';
import { Button } from '../components/core/Button';
import { ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => (
    <PageContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Initialize Contact</h2>
            <p className="text-xl text-gray-400">Ready to secure your enterprise intelligence?</p>
        </div>
        
        <div className="max-w-xl mx-auto glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full bg-[#121214] border border-white/10 rounded-xl py-4 px-6 text-white focus:border-[#8A2BE2] focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full bg-[#121214] border border-white/10 rounded-xl py-4 px-6 text-white focus:border-[#8A2BE2] focus:outline-none transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Company</label>
                    <input type="text" className="w-full bg-[#121214] border border-white/10 rounded-xl py-4 px-6 text-white focus:border-[#8A2BE2] focus:outline-none transition-colors" placeholder="Acme Corp" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea className="w-full bg-[#121214] border border-white/10 rounded-xl py-4 px-6 text-white focus:border-[#8A2BE2] focus:outline-none transition-colors h-32 resize-none" placeholder="Tell us about your data sovereignty needs..." />
                </div>

                <Button className="w-full mt-4 flex items-center justify-center gap-2" size="lg">
                    Request a Demo <ArrowRight size={20} />
                </Button>
            </form>
        </div>
    </PageContainer>
);
