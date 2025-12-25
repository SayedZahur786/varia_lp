import React from 'react';
import { Sparkles, CheckCircle2, Zap, ShieldCheck, Activity, Terminal, ArrowDown, Database, Clock, FastForward } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="pb-32 bg-black relative overflow-hidden">
        {/* Connection Gradient (Red to Green transition) */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neutral-950 to-black z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-red-500/20 via-neutral-800 to-green-500/50 z-10 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black border border-green-500/30 text-green-500 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.3)] animate-pulse">
                System Recovered
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 mt-6">
              <span className="text-green-500">Varia</span> Solves the Infrastructure Chaos.
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              We replace the broken, expensive, and fragile components with a single unified operating system for intelligence.
            </p>
        </div>

        {/* The Solution Grid (Mirroring the Problem Grid) */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            
            {/* Solution 1: Time Solved (Fixes Agency Trap) */}
            <div className="bg-[#080808] border border-green-500/20 rounded-xl p-1 shadow-[0_0_30px_rgba(34,197,94,0.05)] group">
                {/* Visual Top */}
                <div className="bg-[#050505] rounded-t-lg border-b border-white/5 p-6 h-64 relative overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-full max-w-[240px] bg-neutral-900 rounded-lg p-5 border border-white/5 relative shadow-2xl">
                        
                        {/* Comparison 1: Traditional */}
                        <div className="mb-6 opacity-50 grayscale">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Traditional Dev</span>
                                <span className="text-[10px] font-mono text-red-400">Est. 8 Weeks</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[15%] bg-neutral-500" />
                            </div>
                        </div>

                        {/* Comparison 2: Varia */}
                        <div className="relative">
                            <div className="absolute -left-2 -right-2 -top-2 -bottom-2 bg-green-500/5 rounded-lg border border-green-500/10 pointer-events-none" />
                            <div className="flex justify-between items-end mb-2 relative z-10">
                                <span className="text-[10px] font-mono text-white uppercase tracking-wider font-bold">Varia Deploy</span>
                                <span className="text-[10px] font-mono text-green-400 font-bold flex items-center gap-1">
                                    <Zap size={10} fill="currentColor" /> DONE
                                </span>
                            </div>
                            <div className="h-1.5 bg-green-900/30 rounded-full overflow-hidden relative z-10">
                                <div className="h-full w-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                            </div>
                            <div className="mt-2 text-[10px] text-green-500/80 font-mono text-right">
                                T+ 2m 14s
                            </div>
                        </div>

                    </div>
                </div>
                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-green-500">
                        <FastForward size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Problem Resolved</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Working Agent in Minutes</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        We collapsed the entire development lifecycle. Skip the hiring, onboarding, and coding sprints. Go from concept to live production in the time it takes to grab coffee.
                    </p>
                </div>
            </div>

            {/* Solution 2: Stability (Fixes DIY Maze) */}
             <div className="bg-[#080808] border border-green-500/20 rounded-xl p-1 shadow-[0_0_30px_rgba(34,197,94,0.05)] group">
                {/* Visual Top */}
                <div className="bg-[#050505] rounded-t-lg border-b border-white/5 p-6 h-64 relative overflow-hidden flex flex-col items-center justify-center">
                     <div className="w-full h-full max-w-[280px] bg-[#0F0F0F] rounded-lg border border-green-500/20 p-4 font-mono text-[10px] text-neutral-400 shadow-2xl relative overflow-hidden flex flex-col">
                        <div className="flex items-center gap-1.5 mb-3">
                             <div className="w-2 h-2 rounded-full bg-green-500" />
                             <div className="w-2 h-2 rounded-full bg-neutral-700" />
                             <div className="w-2 h-2 rounded-full bg-neutral-700" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-green-500"><span className="text-neutral-600">$</span> varia deploy --prod</div>
                          <div className="text-neutral-500">Analyzing schema... <span className="text-green-500">OK</span></div>
                          <div className="text-neutral-500"> optimizing vectors... <span className="text-green-500">OK</span></div>
                          <div className="text-neutral-500"> checking guardrails... <span className="text-green-500">OK</span></div>
                          <div className="mt-4 p-2 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-center font-bold">
                             Build Successful (142ms)
                          </div>
                          <div className="text-center text-neutral-600 mt-2">v2.4.0 Live on Edge</div>
                        </div>
                     </div>
                </div>
                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-green-500">
                        <Terminal size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Problem Resolved</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Production-Grade Stability</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        No brittle Python scripts. Varia is a managed platform with 99.99% uptime, handling vector databases, RAG pipelines, and LLM orchestration for you.
                    </p>
                </div>
            </div>

            {/* Solution 3: Semantic Excellence (Fixes Rigid Trees) */}
             <div className="bg-[#080808] border border-green-500/20 rounded-xl p-1 shadow-[0_0_30px_rgba(34,197,94,0.05)] group">
                {/* Visual Top */}
                <div className="bg-[#050505] rounded-t-lg border-b border-white/5 p-6 h-64 relative overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-full max-w-[240px] flex flex-col gap-3">
                         {/* Input */}
                         <div className="bg-neutral-800 text-neutral-200 px-3 py-2 rounded-lg text-[10px] border border-white/10 w-full shadow-lg opacity-60">
                            "It arrived broken..."
                        </div>
                        
                        {/* Varia Brain */}
                        <div className="flex items-center gap-2 justify-center">
                            <div className="h-6 w-px bg-gradient-to-b from-neutral-700 to-green-500"></div>
                        </div>
                        <div className="bg-green-900/10 border border-green-500/30 rounded px-2 py-1.5 text-[10px] text-green-400 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                           <Sparkles size={10} /> Intent: DAMAGED_GOODS
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <div className="h-6 w-px bg-gradient-to-b from-green-500 to-neutral-700"></div>
                        </div>

                         {/* Result */}
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-3 text-[10px] text-white w-full shadow-lg relative overflow-hidden">
                             <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                             "I'm sorry to hear that. Since it's damaged, I can process a replacement immediately. Shall I proceed?"
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-green-500">
                        <CheckCircle2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Problem Resolved</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Semantic Excellence</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        Varia uses advanced semantic reasoning to understand user intent, even if they don't use specific keywords. It adapts like a human agent.
                    </p>
                </div>
            </div>

        </div>

        {/* Connection to Final Report */}
         <div className="flex justify-center mb-8 relative z-10">
             <ArrowDown className="text-green-500 animate-bounce" size={24} />
         </div>

        {/* The "Fixed" Diagnostic Report */}
        <div className="relative z-10">
            <div className="bg-[#050505] border border-green-500/30 rounded-xl overflow-hidden relative shadow-[0_0_80px_rgba(34,197,94,0.1)]">
                
                {/* Header Bar */}
                <div className="bg-[#0a0a0a] border-b border-white/5 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Activity className="text-green-500" size={16} />
                        <span className="text-sm font-mono text-white font-medium">Fixed System Report</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded text-xs font-mono text-green-500">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        STATUS: OPTIMAL
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h3 className="text-2xl font-bold text-white mb-6">The Varia Impact</h3>
                         <div className="space-y-6">
                            {/* Item 1 */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 border border-green-500/20">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Delighted Customers</h4>
                                    <p className="text-neutral-500 text-sm mt-1">Users get instant, accurate help 24/7. Satisfaction scores increase by an average of 40%.</p>
                                </div>
                            </div>
                            
                             {/* Item 2 */}
                             <div className="flex gap-4">
                                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 border border-green-500/20">
                                    <Database size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Zero Technical Debt</h4>
                                    <p className="text-neutral-500 text-sm mt-1">Your team focuses on product, not pipeline maintenance. Varia handles the infrastructure.</p>
                                </div>
                            </div>

                             {/* Item 3 */}
                             <div className="flex gap-4">
                                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 border border-green-500/20">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Rapid Agility</h4>
                                    <p className="text-neutral-500 text-sm mt-1">Update your agent's knowledge or behavior in seconds, not weeks. Move at the speed of your business.</p>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* Right Side Visual - Diagnostic Screen (Green) */}
                    <div className="bg-black border border-green-900/30 rounded-lg p-6 font-mono text-sm relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
                        <div className="flex justify-between text-neutral-500 border-b border-white/5 pb-2 mb-4">
                            <span>REPORT_ID: #VARIA-SUCCESS</span>
                            <span>TIME: NOW</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Customer_Satisfaction</span>
                                <span className="text-green-500 font-bold flex items-center gap-2">
                                    <span className="w-20 h-1 bg-neutral-800 rounded-full overflow-hidden inline-block"><span className="w-full h-full bg-green-500 block"></span></span> 100% (HIGH)
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Engineering_Overhead</span>
                                <span className="text-green-500 font-bold flex items-center gap-2">
                                     <span className="w-20 h-1 bg-neutral-800 rounded-full overflow-hidden inline-block"><span className="w-[5%] h-full bg-green-500 block"></span></span> 0% (MINIMAL)
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Time_To_Market</span>
                                <span className="text-green-500 font-bold">INSTANT</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Maintenance_Cost</span>
                                <span className="text-green-500 font-bold">$0 / mo</span>
                            </div>
                        </div>
                        <div className="mt-6 border-t border-white/5 pt-4 text-center">
                            <span className="text-green-500 font-bold tracking-widest flex items-center justify-center gap-2">
                                <ShieldCheck size={16} /> SYSTEM OPTIMAL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};