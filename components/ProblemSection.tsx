import React from 'react';
import { AlertTriangle, Terminal, FileText, GitBranch, XCircle, Clock, Ban, Activity, TrendingDown, Lock } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="pt-32 pb-10 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400 mb-6 uppercase tracking-wider">
              <AlertTriangle size={12} /> The Industry Bottleneck
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Why most AI projects <span className="text-red-500">never launch</span>.
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Businesses are forced to choose between expensive agencies, complex coding, or dumb chatbots.
            </p>
        </div>

        <div className="relative">
            <div className="grid md:grid-cols-3 gap-6 relative z-20">
                
                {/* Card 1: Agency Trap */}
                <div className="group bg-[#0a0a0a] border border-white/10 rounded-xl p-1 flex flex-col hover:border-red-500/30 transition-all duration-300 relative">
                    {/* Visual Top */}
                    <div className="bg-[#050505] rounded-t-lg border-b border-white/5 p-6 h-64 relative overflow-hidden flex items-center justify-center">
                        {/* Invoice UI */}
                        <div className="w-56 bg-[#e5e5e5] text-black p-5 rounded shadow-2xl text-[10px] font-mono transform group-hover:-translate-y-2 transition-transform duration-500 rotate-[-3deg]">
                            <div className="flex justify-between border-b border-black/10 pb-2 mb-3">
                                <span className="font-bold tracking-widest">AGENCY_INV</span>
                                <span className="text-neutral-600">#9921</span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between">
                                    <span className="text-neutral-700">MVP Build</span>
                                    <span className="font-medium">$12,000.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-700">Change Req #4</span>
                                    <span className="font-medium">$2,500.00</span>
                                </div>
                                <div className="flex justify-between text-red-600 font-medium bg-red-50 px-1 -mx-1 rounded">
                                    <span>Monthly Retainer</span>
                                    <span>$2,000.00</span>
                                </div>
                            </div>
                            <div className="flex justify-between border-t border-black/20 pt-2 font-bold text-xs">
                                <span>TOTAL DUE</span>
                                <span>$16,500.00</span>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[10px] text-neutral-400 bg-neutral-900/90 px-2 py-1 rounded border border-white/10 backdrop-blur-sm shadow-lg">
                            <Clock size={10} className="text-red-400" /> Est. Time: 7-9 Weeks
                        </div>
                    </div>
                    {/* Content Bottom */}
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-3 text-red-400">
                            <FileText size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">The Agency Trap</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Bleeding Cash & Time</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Outsourcing creates a black box. You pay a premium for every minor text change, locked into expensive retainers with slow turnaround times.
                        </p>
                    </div>
                    {/* Circuit Connection Point */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-red-500 rounded-full border-4 border-black z-30 hidden md:block" />
                </div>

                {/* Card 2: DIY Framework Maze */}
                <div className="group bg-[#0a0a0a] border border-white/10 rounded-xl p-1 flex flex-col hover:border-red-500/30 transition-all duration-300 relative">
                    {/* Visual Top */}
                    <div className="bg-[#050505] rounded-t-lg border-b border-white/5 p-6 h-64 relative overflow-hidden flex items-center justify-center">
                        {/* Terminal UI */}
                        <div className="w-full h-full max-w-[280px] bg-[#0F0F0F] rounded-lg border border-white/10 p-4 font-mono text-[10px] text-neutral-400 shadow-2xl relative overflow-hidden flex flex-col">
                            <div className="flex items-center gap-1.5 mb-3">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-1 overflow-hidden">
                            <div className="text-blue-400"><span className="text-neutral-600">$</span> python agent.py</div>
                            <div className="text-neutral-500">Loading LangChain v0.1.0...</div>
                            <div className="text-neutral-500">Initializing vector store...</div>
                            <div className="text-red-500 mt-2 font-bold">ValidationError: Missing field</div>
                            <div className="pl-2 text-neutral-600">pydantic_core.ValidationError</div>
                            <div className="pl-2 text-neutral-500">File "/app/langchain/base.py"</div>
                            <div className="pl-4 text-red-400">{`raise ParserException(f"{e}")`}</div>
                            <div className="text-red-400 mt-2 bg-red-900/10 p-1 rounded border border-red-900/20 text-center">
                                CRITICAL: Pipeline Broken
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Content Bottom */}
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-3 text-red-400">
                            <Terminal size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">The DIY Maze</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Engineering Nightmare</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Stitching together vector DBs, LangChain, and APIs creates fragile "spaghetti code" that breaks with every library update or schema change.
                        </p>
                    </div>
                     {/* Circuit Connection Point */}
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-red-500 rounded-full border-4 border-black z-30 hidden md:block" />
                </div>

                {/* Card 3: Rigid Decision Trees */}
                <div className="group bg-[#0a0a0a] border border-white/10 rounded-xl p-1 flex flex-col hover:border-red-500/30 transition-all duration-300 relative">
                    {/* Visual Top */}
                    <div className="bg-[#050505] rounded-t-lg border-b border-white/5 p-4 h-64 relative overflow-hidden flex items-center justify-center">
                        {/* Tree Visual - Scaled to fit */}
                        <div className="relative w-full max-w-[220px] flex flex-col items-center transform scale-95">
                            {/* User Input */}
                            <div className="bg-neutral-800 text-neutral-200 px-3 py-2 rounded-lg text-[10px] border border-white/10 mb-4 w-full shadow-lg relative z-10">
                                <span className="text-neutral-500 text-[9px] uppercase block mb-1">User Input</span>
                                "It arrived broken..."
                            </div>
                            
                            {/* Logic Engine */}
                            <div className="w-[1px] h-4 bg-neutral-700 mb-1"></div>
                            <div className="bg-neutral-900 border border-white/10 rounded px-2 py-1 text-[9px] font-mono text-neutral-500 mb-3 flex items-center gap-2">
                            <Activity size={10} /> processing...
                            </div>

                            {/* Branches */}
                            <div className="flex justify-between w-full gap-2 relative mb-3">
                                {/* Branch 1 (Miss) */}
                                <div className="flex flex-col items-center w-1/2 opacity-30">
                                    <div className="text-[9px] text-neutral-500 mb-1">Key: "Refund"</div>
                                    <div className="w-full h-[1px] bg-neutral-700"></div>
                                    <div className="w-[1px] h-3 bg-neutral-700"></div>
                                    <div className="p-1.5 border border-white/10 rounded bg-neutral-900 text-[9px] w-full text-center">Form 2B</div>
                                </div>

                                {/* Branch 2 (Miss) */}
                                <div className="flex flex-col items-center w-1/2 opacity-30">
                                    <div className="text-[9px] text-neutral-500 mb-1">Key: "Return"</div>
                                    <div className="w-full h-[1px] bg-neutral-700"></div>
                                    <div className="w-[1px] h-3 bg-neutral-700"></div>
                                    <div className="p-1.5 border border-white/10 rounded bg-neutral-900 text-[9px] w-full text-center">LabelGen</div>
                                </div>
                            </div>

                            {/* Error Result */}
                            <div className="bg-red-950/30 border border-red-500/30 p-2 rounded w-full flex items-center gap-2 animate-pulse">
                                <Ban size={12} className="text-red-500 shrink-0" />
                                <div className="text-[9px] text-red-200">
                                    <div className="font-bold">NO MATCH</div>
                                    <div className="opacity-70">Trigger: Fallback</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Content Bottom */}
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-3 text-red-400">
                            <GitBranch size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">Rigid Decision Trees</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">The "Dumb Bot" Problem</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Traditional chatbots rely on strict keyword matching. When a user describes a problem instead of using a specific keyword, the bot fails immediately.
                        </p>
                    </div>
                     {/* Circuit Connection Point */}
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-red-500 rounded-full border-4 border-black z-30 hidden md:block" />
                </div>

            </div>

             {/* Connection Lines (Visible Cables) */}
             <div className="hidden md:block absolute top-full left-0 w-full h-16 z-0 pointer-events-none -mt-1">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M 16.66% 0 V 20 C 16.66% 40, 50% 10, 50% 60 V 100" fill="none" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="6 4" />
                    <path d="M 50% 0 V 60" fill="none" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="6 4" />
                    <path d="M 83.33% 0 V 20 C 83.33% 40, 50% 10, 50% 60 V 100" fill="none" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="6 4" />
                </svg>
             </div>
        </div>

        {/* Diagnostic Check Section (Refined) */}
        <div className="mt-16 relative z-10">
            <div className="bg-[#080808] border border-white/10 rounded-xl overflow-hidden relative shadow-[0_0_50px_rgba(220,38,38,0.15)]">
                
                {/* Connection Node (Input) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full -mt-2 shadow-[0_0_15px_rgba(239,68,68,0.8)] z-20 hidden md:block"></div>
                
                {/* Header Bar */}
                <div className="bg-[#0f0f0f] border-b border-white/5 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Activity className="text-neutral-500" size={16} />
                        <span className="text-sm font-mono text-neutral-300 font-medium">System Diagnostic Report</span>
                    </div>
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded text-xs font-mono text-red-500 animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        STATUS: CRITICAL
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h3 className="text-2xl font-bold text-white mb-6">The Cumulative Impact</h3>
                         <div className="space-y-6">
                            {/* Item 1 */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 border border-red-500/20">
                                    <XCircle size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Broken Customer Experience</h4>
                                    <p className="text-neutral-500 text-sm mt-1">Users rage-quit when bots fail to understand context or get stuck in loops, damaging brand reputation.</p>
                                </div>
                            </div>
                            
                             {/* Item 2 */}
                             <div className="flex gap-4">
                                <div className="w-10 h-10 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 border border-orange-500/20">
                                    <TrendingDown size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Spiral of Technical Debt</h4>
                                    <p className="text-neutral-500 text-sm mt-1">Custom codebases grow unmanageable. Simple prompt updates require deployment cycles.</p>
                                </div>
                            </div>

                             {/* Item 3 */}
                             <div className="flex gap-4">
                                <div className="w-10 h-10 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0 border border-yellow-500/20">
                                    <Lock size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Operational Paralysis</h4>
                                    <p className="text-neutral-500 text-sm mt-1">Every text change requires an engineer. Marketing and Support teams are blocked from improving the agent.</p>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* Right Side Visual - Diagnostic Screen */}
                    <div className="bg-black border border-white/10 rounded-lg p-6 font-mono text-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
                        <div className="flex justify-between text-neutral-500 border-b border-white/5 pb-2 mb-4">
                            <span>DIAGNOSTIC_ID: #404-FAIL</span>
                            <span>TIME: NOW</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Customer_Satisfaction</span>
                                <span className="text-red-500 font-bold flex items-center gap-2">
                                    <span className="w-20 h-1 bg-neutral-800 rounded-full overflow-hidden inline-block"><span className="w-[30%] h-full bg-red-500 block"></span></span> 32% (LOW)
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Engineering_Overhead</span>
                                <span className="text-red-500 font-bold flex items-center gap-2">
                                     <span className="w-20 h-1 bg-neutral-800 rounded-full overflow-hidden inline-block"><span className="w-[90%] h-full bg-red-500 block"></span></span> 92% (CRITICAL)
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Time_To_Market</span>
                                <span className="text-orange-500 font-bold">7-8 WEEKS</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Maintenance_Cost</span>
                                <span className="text-red-500 font-bold">$1,000 / mo</span>
                            </div>
                        </div>
                        <div className="mt-6 border-t border-white/5 pt-4 text-center">
                            <span className="text-red-500 blink-text font-bold tracking-widest">SYSTEM UNSTABLE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};