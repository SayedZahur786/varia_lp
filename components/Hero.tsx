import React from 'react';
import { Button } from './Button';
import { 
  Terminal, 
  MessageSquare, 
  Database, 
  PlayCircle, 
  Shield, 
  FileText, 
  CheckCircle2, 
  Send, 
  Globe, 
  LayoutTemplate,
  Settings
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden bg-[#050505]">
      
      {/* Modern High-End Background */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Main Spotlight (Top Center) */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500/15 via-brand-900/5 to-transparent blur-[60px]" />
          
          {/* Subtle Grid with Mask */}
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:linear-gradient(to_bottom,black_30%,transparent_90%)]" />
          
          {/* Secondary Glows for depth */}
          <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>Varia 2.0 is now available in public beta</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text leading-[1.1] pb-2">
          Deploy Conversational <br className="hidden md:block"/> AI Agents Instantly.
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-400 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Build conversational intelligence without code, developers, or agencies.
        </p>

        <p className="text-base text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Create, test, and scale enterprise-grade agents using simple prompts and business documents. Ready for production today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#contact">
            <Button variant="primary" showArrow className="w-full sm:w-auto h-12 px-8 text-base shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Request Early Access
            </Button>
          </a>
          <a href="#how-it-works">
            <Button variant="secondary" className="w-full sm:w-auto h-12 px-8 text-base group bg-[#0a0a0a]/50 backdrop-blur-sm hover:bg-[#1a1a1a]">
              <PlayCircle className="w-4 h-4 mr-2 group-hover:text-brand-500 transition-colors" />
              See How It Works
            </Button>
          </a>
        </div>
      </div>

      {/* UI Preview - Sandbox Style */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-6 perspective-[2000px] group">
        <div className="relative rounded-xl border border-white/10 bg-[#0c0c0c] shadow-2xl transform transition-transform duration-700 ease-out md:rotate-x-[8deg] md:group-hover:rotate-x-[2deg] overflow-hidden ring-1 ring-white/5">
          
          {/* Toolbar */}
          <div className="h-12 border-b border-white/5 bg-[#111] flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
               <div className="flex gap-2 group/traffic">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] group-hover/traffic:brightness-110 transition-all" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] group-hover/traffic:brightness-110 transition-all" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] group-hover/traffic:brightness-110 transition-all" />
              </div>
              <div className="hidden sm:block text-xs font-mono text-neutral-500 ml-2">varia-agent-builder — main</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3 text-neutral-600">
                <Globe size={14} />
                <LayoutTemplate size={14} />
              </div>
              <div className="hidden sm:block h-4 w-[1px] bg-white/10" />
              <button className="bg-brand-500 hover:bg-brand-600 text-white text-xs font-medium px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]">
                <PlayCircle size={12} fill="currentColor" />
                Deploy
              </button>
            </div>
          </div>

          {/* Main App Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:h-[650px] bg-[#050505]">
            
            {/* LEFT COLUMN: Create Agent */}
            <div className="md:col-span-3 border-r border-white/5 p-6 flex flex-col bg-[#080808]">
               <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6">Create Agent</div>
               
               {/* Prompt Box */}
               <div className="flex-1 min-h-[200px] md:min-h-0 bg-[#0f0f0f] rounded-xl border border-white/5 p-4 relative mb-6 hover:border-white/10 transition-colors focus-within:border-brand-500/30 group/prompt">
                  <div className="flex items-center gap-2 text-brand-500 mb-3">
                    <span className="font-mono text-lg leading-none">&gt;</span>
                    <span className="text-xs font-bold tracking-wide">Prompt</span>
                  </div>
                  <p className="text-sm text-neutral-300 font-mono leading-relaxed group-focus-within/prompt:text-white transition-colors">
                    Create a internal policy and SOP helper agent for the employees of the organization. It should allow access to HR docs and IT guidelines.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] border border-green-500/20 font-medium">
                    <CheckCircle2 size={10} /> Parsed
                  </div>
               </div>

               {/* Model Selector */}
               <div className="mt-auto">
                 <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Model</div>
                 <div className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg p-3 flex items-center justify-between text-xs text-neutral-300 cursor-pointer hover:bg-white/5 transition-colors group/model">
                    <span className="group-hover/model:text-white transition-colors">GPT-4o (Reasoning)</span>
                    <Settings size={12} className="text-neutral-500" /> 
                 </div>
               </div>
            </div>

            {/* MIDDLE COLUMN: Agent Config */}
            <div className="md:col-span-5 border-r border-white/5 p-6 relative bg-[#050505]">
              {/* Background dots for tech feel */}
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full gap-6">

                {/* Agent Identity Card */}
                <div className="bg-[#0f0f0f] rounded-xl border border-white/5 p-5 relative group">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                   <div className="flex justify-between items-start">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                          <Shield size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-sm">Internal SOP Helper</h3>
                          <div className="text-[10px] text-neutral-500 font-mono mt-0.5">ID: agt_8x92m</div>
                        </div>
                     </div>
                     <span className="px-2 py-0.5 rounded bg-green-900/20 text-green-400 text-[10px] font-mono border border-green-500/20 tracking-wide uppercase">Published</span>
                   </div>
                </div>

                {/* Guardrails Card */}
                <div className="bg-[#0f0f0f] rounded-xl border border-white/5 p-5">
                   <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-wide font-medium">
                       <Shield size={12} /> Guardrails
                     </div>
                     <span className="text-[10px] text-green-500 font-medium">Active</span>
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-xs text-neutral-300 bg-[#151515] px-3 py-2 rounded border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]" /> No financial advice
                     </div>
                     <div className="flex items-center gap-2 text-xs text-neutral-300 bg-[#151515] px-3 py-2 rounded border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]" /> Internal employees only
                     </div>
                   </div>
                </div>

                {/* Vertical Line Connector */}
                <div className="hidden md:block absolute left-1/2 top-[160px] bottom-[280px] w-[1px] bg-gradient-to-b from-transparent via-brand-500/30 to-transparent -translate-x-1/2" />

                {/* Knowledge Base */}
                <div className="bg-[#0f0f0f] rounded-xl border border-white/5 p-5 flex-1 min-h-[180px]">
                   <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-wide font-medium">
                       <Database size={12} /> Knowledge Base
                     </div>
                     <span className="text-[10px] text-neutral-600 font-mono">124 MB</span>
                   </div>
                   
                   <div className="space-y-2">
                      <div className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-[#151515] hover:border-brand-500/30 transition-all cursor-pointer">
                        <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                          <FileText size={14} />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-neutral-200 group-hover:text-brand-400 transition-colors">Internal_Policies_2024.pdf</div>
                          <div className="text-[10px] text-neutral-500 mt-0.5">Embedded • 42 pages</div>
                        </div>
                      </div>

                      <div className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-[#151515] hover:border-brand-500/30 transition-all cursor-pointer">
                        <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                          <FileText size={14} />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-neutral-200 group-hover:text-brand-400 transition-colors">IT_Security_Guidelines.docx</div>
                          <div className="text-[10px] text-neutral-500 mt-0.5">Embedded • 15 pages</div>
                        </div>
                      </div>
                   </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Preview Environment */}
            <div className="md:col-span-4 p-6 flex flex-col bg-[#050505] relative">
               <div className="flex items-center justify-between mb-6">
                 <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Preview Environment</div>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
               </div>

               {/* Chat Area */}
               <div className="flex-1 space-y-5 overflow-y-auto mb-4 pr-2 custom-scrollbar">
                  
                  {/* User Message */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded bg-[#222] flex items-center justify-center text-[10px] text-neutral-400 flex-shrink-0 mt-0.5 font-medium border border-white/5">U</div>
                    <div className="bg-[#1a1a1a] border border-white/5 rounded-lg rounded-tl-none p-3 text-xs text-neutral-300 leading-relaxed shadow-sm">
                       What is the policy for remote work equipment reimbursement?
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-[10px] text-white flex-shrink-0 mt-0.5 font-bold shadow-lg shadow-indigo-500/20">AI</div>
                    <div className="bg-[#1e1b4b]/50 border border-indigo-500/30 rounded-lg rounded-tr-none p-3 text-xs text-neutral-200 leading-relaxed shadow-sm">
                       Based on the <span className="text-indigo-400 border-b border-indigo-400/30 hover:border-indigo-400 cursor-pointer transition-colors">2024 Remote Work SOP</span>, full-time employees are eligible for a one-time stipend of $500 for home office equipment. This requires VP approval.
                    </div>
                  </div>

                  {/* User Message */}
                   <div className="flex gap-3">
                    <div className="w-6 h-6 rounded bg-[#222] flex items-center justify-center text-[10px] text-neutral-400 flex-shrink-0 mt-0.5 font-medium border border-white/5">U</div>
                    <div className="bg-[#1a1a1a] border border-white/5 rounded-lg rounded-tl-none p-3 text-xs text-neutral-300 leading-relaxed shadow-sm">
                       Does that cover a standing desk?
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-[10px] text-white flex-shrink-0 mt-0.5 font-bold shadow-lg shadow-indigo-500/20">AI</div>
                    <div className="bg-[#1e1b4b]/50 border border-indigo-500/30 rounded-lg rounded-tr-none p-3 text-xs text-neutral-200 leading-relaxed shadow-sm">
                       Yes, office furniture including standing desks is covered under the "Ergonomic Equipment" category in Section 4.2.
                    </div>
                  </div>

               </div>

               {/* Input Area */}
               <div className="mt-auto relative group">
                 <input 
                   type="text" 
                   placeholder="Type a message..." 
                   className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg pl-4 pr-10 py-3 text-xs text-neutral-300 focus:outline-none focus:border-white/20 focus:bg-[#0f0f0f] transition-all placeholder:text-neutral-700 shadow-inner"
                 />
                 <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-neutral-400 transition-colors cursor-pointer hover:text-white">
                    <Send size={14} />
                 </div>
               </div>
            </div>

          </div>
        </div>
        
        {/* Glow under the UI */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-brand-500/10 blur-[100px] -z-10 opacity-60" />
      </div>
    </section>
  );
};