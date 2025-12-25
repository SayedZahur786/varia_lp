import React from 'react';
import { Mic, Phone, MessageSquare, GitMerge, Radio, Layers, ArrowRight, Smartphone } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const steps = [
    {
      quarter: "Q4 2025",
      status: "In Public Beta",
      statusStyle: "text-green-400 bg-green-500/10 border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]",
      title: "Advanced Chat Agents",
      description: "The foundation of Varia. Context-aware text agents capable of deep reasoning, RAG (Retrieval Augmented Generation) over business docs, and instant deployment.",
      icon: MessageSquare,
      active: true,
      glow: "shadow-[0_0_50px_rgba(34,197,94,0.15)]"
    },
    {
      quarter: "Q1 2026",
      status: "In Development",
      statusStyle: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      title: "Native Voice Intelligence",
      description: "Breaking the latency barrier. Sub-500ms voice-to-voice models that handle interruptions, tonal nuance, and emotional intelligence for natural human interaction.",
      icon: Mic,
      active: false,
      glow: ""
    },
    {
      quarter: "Q2 2026",
      status: "Planned",
      statusStyle: "text-neutral-400 bg-neutral-800 border-neutral-700",
      title: "Telephony & Omni-Channel",
      description: "Taking agents where your customers are. Native SIP trunking for phone lines, WhatsApp Business API integration, and unified SMS support.",
      icon: Smartphone,
      active: false,
      glow: ""
    },
    {
      quarter: "Q3 2026+",
      status: "Vision",
      statusStyle: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      title: "Advanced Agent Workflows",
      description: "True autonomy. Multi-agent orchestration swarms that can plan, execute, and self-correct complex multi-step business workflows without human oversight.",
      icon: GitMerge,
      active: false,
      glow: ""
    }
  ];

  return (
    <section className="py-32 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="md:flex md:justify-between md:items-end mb-20">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                    Forging the Future of <br/><span className="text-white">Autonomous Enterprise</span>
                </h2>
                <p className="text-lg text-neutral-400 leading-relaxed">
                    We aren't just building a chatbot tool. We are engineering the neural network for the next generation of business. Here is our trajectory.
                </p>
            </div>
             <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-500 border border-white/10 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                System Operational
            </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
            {/* The Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-neutral-800 to-transparent md:-translate-x-1/2 h-full z-0 opacity-50"></div>

            <div className="space-y-12 md:space-y-24 relative z-10">
                {steps.map((step, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>
                            
                            {/* Spacer for the other side */}
                            <div className="hidden md:block w-1/2" />

                            {/* The Node on the Line */}
                            <div className="absolute left-[14px] md:left-1/2 top-0 md:top-8 -translate-x-1/2 z-20">
                                <div className={`w-[26px] h-[26px] rounded-full border-4 border-[#0a0a0a] flex items-center justify-center ${step.active ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)]' : 'bg-neutral-800'}`}>
                                    {step.active && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                                </div>
                            </div>

                            {/* The Card */}
                            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                <div className={`group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 ${step.glow}`}>
                                    {/* Active Highlight Border */}
                                    {step.active && <div className="absolute inset-0 border border-green-500/30 rounded-2xl pointer-events-none" />}
                                    
                                    <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} gap-4`}>
                                        
                                        {/* Header: Date & Status */}
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-mono text-neutral-500 font-bold tracking-wider">{step.quarter}</span>
                                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${step.statusStyle}`}>
                                                {step.status}
                                            </span>
                                        </div>

                                        {/* Title & Icon */}
                                        <div className={`flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${step.active ? 'bg-green-500/10 text-green-500' : 'bg-neutral-900 text-neutral-400'}`}>
                                                <step.icon size={20} />
                                            </div>
                                            <h3 className={`text-2xl font-bold text-white ${step.active ? 'text-green-400' : ''}`}>{step.title}</h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-neutral-400 leading-relaxed text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
            
            {/* Fade out at bottom */}
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-20"></div>
        </div>

      </div>
    </section>
  );
};