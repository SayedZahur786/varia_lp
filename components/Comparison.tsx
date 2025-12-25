import React from 'react';
import { Check, X, Minus, Code2, Box, Zap, AlertCircle, ShieldCheck, Cpu, Play } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  traditional: React.ReactNode;
  legacy: React.ReactNode;
  varia: React.ReactNode;
  description?: string;
}

export const Comparison: React.FC = () => {
  const rows: ComparisonRow[] = [
    {
      feature: "Time to Market",
      description: "From concept to production-ready deployment",
      traditional: <span className="text-red-400 font-mono text-xs">8-12 Weeks</span>,
      legacy: <span className="text-yellow-500 font-mono text-xs">2-3 Days</span>,
      varia: <span className="text-brand-400 font-bold font-mono text-xs flex items-center gap-1"><Zap size={12} fill="currentColor"/> &lt; 15 Minutes</span>
    },
    {
      feature: "Engineering Requirement",
      description: "Who is required to build and maintain it?",
      traditional: <div className="flex items-center gap-2 text-neutral-400"><Code2 size={14} /> Senior Engineers</div>,
      legacy: <div className="flex items-center gap-2 text-neutral-400"><Code2 size={14} /> Technical PMs</div>,
      varia: <div className="flex items-center gap-2 text-white font-medium"><Box size={14} /> Anyone (No-Code)</div>
    },
    {
      feature: "Testing Environment",
      description: "How do you verify agent behavior?",
      traditional: <span className="text-neutral-500">Manual Scripts / PyTest</span>,
      legacy: <span className="text-neutral-500">Basic Chat Preview</span>,
      varia: <span className="text-white font-medium flex items-center gap-2"><Play size={12} className="text-green-500" /> Integrated Sandbox</span>
    },
    {
      feature: "Deployment",
      description: "Getting it in front of users",
      traditional: <span className="text-neutral-500">Complex DevOps Pipelines</span>,
      legacy: <span className="text-neutral-500">Only Chat Focused</span>,
      varia: <span className="text-white font-medium">1-Click Multi-Channel</span>
    },
    {
      feature: "Observability",
      description: "Understanding why the agent said what it said",
      traditional: <span className="text-neutral-500">Raw Logs (CloudWatch)</span>,
      legacy: <span className="text-neutral-500">Basic Metrics</span>,
      varia: <span className="text-white font-medium">Detailed Analytics</span>
    },
    {
      feature: "Contextual Understanding",
      traditional: <span className="text-neutral-500">Manual Setup</span>,
      legacy: <span className="text-neutral-500">Raw Scripted Logic</span>,
      varia: <span className="text-white font-medium">Semantic Deep Understanding</span>
    }
  ];

  return (
    <section className="py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The new operating model for AI</h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
                Building agents from scratch is slow and brittle. Legacy chatbot tools lack intelligence. 
                <br className="hidden md:block"/>Varia provides the power of code with the simplicity of a platform.
            </p>
        </div>

        {/* Comparison Grid */}
        <div className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 custom-scrollbar">
          <div className="min-w-[900px]">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 mb-4 items-end">
                <div className="col-span-3 pb-4">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Comparison</span>
                </div>
                
                {/* Traditional Column Header */}
                <div className="col-span-3 p-6 rounded-t-xl bg-transparent border-b border-transparent text-center opacity-60">
                    <div className="flex justify-center mb-3 text-neutral-600">
                        <Cpu size={24} strokeWidth={1.5} />
                    </div>
                    <div className="font-bold text-neutral-300 mb-1">Traditional Dev</div>
                    <div className="text-[10px] text-neutral-500 font-mono">Python, LangChain, AWS</div>
                </div>

                {/* Legacy SaaS Column Header */}
                <div className="col-span-3 p-6 rounded-t-xl bg-transparent border-b border-transparent text-center opacity-80">
                    <div className="flex justify-center mb-3 text-neutral-500">
                        <Box size={24} strokeWidth={1.5} />
                    </div>
                    <div className="font-bold text-neutral-200 mb-1">Legacy SaaS</div>
                    <div className="text-[10px] text-neutral-500 font-mono">Botpress, Intercom</div>
                </div>

                {/* Varia Column Header */}
                <div className="col-span-3 relative">
                    {/* Glowing highlight */}
                    <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-brand-500/10 to-transparent opacity-50"></div>
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
                    
                    <div className="p-6 bg-[#0c0c0c] border-x border-t border-brand-500/20 rounded-t-xl text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-brand-500/5 pointer-events-none" />
                         <div className="flex justify-center mb-3 text-brand-500">
                            <ShieldCheck size={24} strokeWidth={1.5} />
                        </div>
                        <div className="font-bold text-white mb-1">Varia Platform</div>
                        <div className="text-[10px] text-brand-400 font-mono">The Modern Stack</div>
                    </div>
                </div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
                {rows.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-4 items-center group">
                        
                        {/* Feature Label */}
                        <div className="col-span-3 py-4 pr-6 border-b border-white/5 group-hover:border-white/10 transition-colors">
                            <div className="font-medium text-neutral-200 text-sm">{row.feature}</div>
                            {row.description && (
                                <div className="text-[11px] text-neutral-500 mt-1">{row.description}</div>
                            )}
                        </div>

                        {/* Traditional Data */}
                        <div className="col-span-3 py-4 px-4 bg-[#0a0a0a] border border-transparent rounded-lg flex justify-center text-center items-center text-sm">
                            {row.traditional}
                        </div>

                        {/* Legacy Data */}
                        <div className="col-span-3 py-4 px-4 bg-[#0a0a0a] border border-transparent rounded-lg flex justify-center text-center items-center text-sm">
                            {row.legacy}
                        </div>

                        {/* Varia Data */}
                        <div className="col-span-3 py-4 px-4 bg-[#0c0c0c] border border-brand-500/20 rounded-lg flex justify-center text-center items-center text-sm relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                             <div className="absolute inset-0 bg-brand-500/5 pointer-events-none rounded-lg" />
                            {row.varia}
                        </div>

                    </div>
                ))}

                {/* Final Conclusion Row */}
                <div className="grid grid-cols-12 gap-4 mt-12 items-center">
                     <div className="col-span-3"></div>
                     <div className="col-span-3 text-center opacity-50">
                        <X className="mx-auto text-red-500 mb-2" />
                        <span className="text-xs text-neutral-500">High Overhead</span>
                     </div>
                     <div className="col-span-3 text-center opacity-50">
                        <Minus className="mx-auto text-yellow-500 mb-2" />
                        <span className="text-xs text-neutral-500">Limited Capability</span>
                     </div>
                     <div className="col-span-3">
                         <button className="w-full py-3 bg-white text-black font-bold text-sm rounded hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            Start Building Free
                         </button>
                     </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};