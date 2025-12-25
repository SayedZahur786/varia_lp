import React from 'react';
import { 
  Terminal, 
  FileText, 
  Share2, 
  Palette, 
  UploadCloud,
  MoreHorizontal,
  Calendar,
  Search,
  CreditCard,
  Slack,
  Globe,
  Smartphone,
  Phone,
  CheckCircle2,
  Layout,
  Image as ImageIcon,
  Monitor
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">From idea to live AI agent in minutes</h2>
           <p className="text-neutral-400 text-lg">A unified workflow designed for speed and reliability.</p>
        </div>

        {/* BUILDER CANVAS CONTAINER */}
        <div className="w-full bg-[#050505] rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col min-h-[900px] md:min-h-[850px]">
           
           {/* Terminal Header */}
           <div className="h-12 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-50">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="opacity-50">project /</span>
                    <span className="text-white">real_estate_agent_v1</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white border border-[#0a0a0a]">JD</div>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white border border-[#0a0a0a]">AI</div>
                 </div>
                 <button className="bg-white text-black text-xs font-bold px-3 py-1.5 rounded hover:bg-neutral-200 transition-colors">
                    Save Changes
                 </button>
              </div>
           </div>

           {/* MAIN CANVAS - FLEX LAYOUT FOR SVG PRECISION */}
           {/* Scaled down dimensions to fit on screen. 
               Col 1: 220px, Gap: 50px, Col 2: 280px, Gap: 50px, Col 3: 280px. 
               Total content width ~900px.
           */}
           <div className="flex-1 p-8 md:p-10 overflow-x-auto flex justify-center bg-[#050505]">
              <div className="relative min-w-[920px] min-h-[750px] scale-95 origin-top">
                
                {/* SVG LAYER */}
                {/* 
                   Layout Geometry (Offset X=25, Y=32 from pt-8):
                   
                   Col 1: Width 220. Start X=25. End X=245. Center X=135.
                   Gap 1: 50.
                   
                   Col 2: Width 280. Start X=295. End X=575. Center X=435.
                   Gap 2: 50.
                   
                   Col 3: Width 280. Start X=625. End X=905. Center X=765.

                   Y Positions (Relative to container):
                   Row 1 Top: 32.
                   S1 Height: 220. Center Y: 32 + 110 = 142.
                   S3 Height: 220. Center Y: 32 + 110 = 142.
                   S6 Height: 380. Center Y: 32 + 190 = 222.
                   
                   Row 2 Top (After S1/S3/S6 + 32 gap):
                   S2 Top: 284. Height 180. Center Y: 284 + 90 = 374.
                   S4 Top: 284. Height 220. Center Y: 284 + 110 = 394.
                   S7 Top: 444. Height 260. Center Y: 444 + 130 = 574.

                   Row 3 Top (After S4 + 32 gap):
                   S5 Top: 536. Height 180. Center Y: 536 + 90 = 626.
                */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#737373" />
                      </marker>
                      <marker id="arrowhead-active" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                      </marker>
                  </defs>

                  {/* Connection 1: S1 (Prompt) -> S3 (Knowledge) */}
                  {/* (245, 142) -> (295, 142) */}
                  <path d="M 245 142 L 295 142" stroke="#737373" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  {/* Connection 2: S2 (Guidelines) -> S3 (Knowledge) */}
                  {/* (245, 374) -> (295, 142) */}
                  <path d="M 245 374 C 275 374, 275 142, 295 142" stroke="#737373" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#arrowhead)" />

                  {/* Connection 3: S3 -> S4 (Vertical) */}
                  {/* (435, 252) -> (435, 284) */}
                  <line x1="435" y1="252" x2="435" y2="284" stroke="#737373" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  {/* Connection 4: S4 -> S5 (Vertical) */}
                  {/* (435, 504) -> (435, 536) */}
                  <line x1="435" y1="504" x2="435" y2="536" stroke="#737373" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  {/* Connection 5: S3 -> S6 */}
                  {/* (575, 142) -> (625, 222) */}
                  <path d="M 575 142 C 600 142, 600 222, 625 222" stroke="#737373" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  {/* Connection 6: S4 -> S6 */}
                  {/* (575, 394) -> (625, 222) */}
                  <path d="M 575 394 C 600 394, 600 222, 625 222" stroke="#737373" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#arrowhead)" />

                  {/* Connection 7: S5 -> S6 */}
                  {/* (575, 626) -> (625, 222) */}
                  <path d="M 575 626 C 600 626, 600 222, 625 222" stroke="#737373" strokeWidth="2" strokeOpacity="0.4" markerEnd="url(#arrowhead)" />

                  {/* Connection 8: S6 -> S7 (Vertical) */}
                  {/* (765, 412) -> (765, 444) */}
                  <line x1="765" y1="412" x2="765" y2="444" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowhead-active)" />

                </svg>

                <div className="flex gap-[50px] pl-[25px] relative z-10">

                  {/* COLUMN 1: DESCRIBE (Width 220px) */}
                  <div className="w-[220px] flex flex-col gap-8 pt-8">
                      {/* LABEL */}
                      <div className="absolute top-0 left-[25px] flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Describe</h3>
                      </div>

                      {/* Step 1: Prompt - H:220px */}
                      <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-1 shadow-lg group hover:border-blue-500/30 transition-all z-10 h-[220px]">
                          <div className="bg-neutral-900/50 p-3 rounded-t-lg border-b border-white/5 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                  <span className="bg-blue-500/10 text-blue-500 border border-blue-500/20 w-5 h-5 flex items-center justify-center rounded text-[10px] font-mono">1</span>
                                  <span className="text-xs font-semibold text-white">Definition</span>
                              </div>
                              <Terminal size={12} className="text-neutral-500" />
                          </div>
                          <div className="p-4 relative h-[calc(100%-48px)]">
                              <p className="text-[11px] font-mono text-neutral-300 leading-relaxed">
                                  <span className="text-blue-500 font-bold">Build an agent</span> that acts as a real estate concierge. Qualify leads ($2k-$10k, NYC) and schedule viewings.
                              </p>
                              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-green-900/20 border border-green-500/20 px-2 py-1 rounded text-[9px] text-green-400 font-mono">
                                  <CheckCircle2 size={10} /> Parsed
                              </div>
                          </div>
                      </div>

                      {/* Step 2: Guidelines - H:180px */}
                      <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-1 shadow-lg opacity-80 hover:opacity-100 transition-all border-dashed z-10 h-[180px]">
                          <div className="bg-neutral-900/50 p-3 rounded-t-lg border-b border-white/5 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                  <span className="bg-neutral-800 text-neutral-400 border border-white/5 w-5 h-5 flex items-center justify-center rounded text-[10px] font-mono">2</span>
                                  <span className="text-xs font-semibold text-neutral-300">Guidelines</span>
                              </div>
                              <div className="text-[9px] border border-white/10 px-1.5 py-0.5 rounded text-neutral-500">OPTIONAL</div>
                          </div>
                          <div className="p-3 space-y-2">
                              <div className="flex items-center gap-2 text-[10px] text-neutral-400 bg-black border border-white/5 px-2 py-1.5 rounded leading-tight">
                                  <div className="w-1 h-1 bg-orange-500 rounded-full shrink-0"></div> Never discuss commissions
                              </div>
                              <div className="flex items-center gap-2 text-[10px] text-neutral-400 bg-black border border-white/5 px-2 py-1.5 rounded leading-tight">
                                  <div className="w-1 h-1 bg-orange-500 rounded-full shrink-0"></div> Verify email first
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* COLUMN 2: CONFIGURE (Width 280px) */}
                  <div className="w-[280px] flex flex-col gap-8 pt-8">
                      {/* LABEL */}
                       <div className="absolute top-0 left-[295px] flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Configure</h3>
                      </div>

                      {/* Step 3: Knowledge Base - H:220px */}
                      <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-1 shadow-lg hover:border-purple-500/30 transition-all z-10 h-[220px]">
                          <div className="bg-neutral-900/50 p-3 rounded-t-lg border-b border-white/5 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                  <span className="bg-purple-500/10 text-purple-500 border border-purple-500/20 w-5 h-5 flex items-center justify-center rounded text-[10px] font-mono">3</span>
                                  <span className="text-xs font-semibold text-white">Knowledge Base</span>
                              </div>
                              <UploadCloud size={12} className="text-neutral-500" />
                          </div>
                          <div className="p-4 space-y-3">
                              {/* File 1 */}
                              <div className="flex items-center justify-between bg-black border border-white/5 p-2 rounded group cursor-pointer hover:border-white/20">
                                  <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-400">
                                          <FileText size={14} />
                                      </div>
                                      <div>
                                          <div className="text-[11px] text-neutral-200 font-medium">listings_q1_2024.csv</div>
                                          <div className="text-[9px] text-neutral-500">12,402 vectors</div>
                                      </div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                              </div>
                              {/* File 2 */}
                              <div className="flex items-center justify-between bg-black border border-white/5 p-2 rounded group cursor-pointer hover:border-white/20">
                                  <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 bg-pink-500/10 rounded flex items-center justify-center text-pink-400">
                                          <FileText size={14} />
                                      </div>
                                      <div>
                                          <div className="text-[11px] text-neutral-200 font-medium">lease_terms_v2.pdf</div>
                                          <div className="text-[9px] text-neutral-500">Processing...</div>
                                      </div>
                                  </div>
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                              </div>
                          </div>
                      </div>

                      {/* Step 4: Appearance - H:220px */}
                      <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-1 shadow-lg hover:border-pink-500/30 transition-all z-10 h-[220px]">
                          <div className="bg-neutral-900/50 p-3 rounded-t-lg border-b border-white/5 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                  <span className="bg-pink-500/10 text-pink-500 border border-pink-500/20 w-5 h-5 flex items-center justify-center rounded text-[10px] font-mono">4</span>
                                  <span className="text-xs font-semibold text-white">Appearance</span>
                              </div>
                              <Palette size={12} className="text-neutral-500" />
                          </div>
                          <div className="p-4 h-full">
                              <div className="grid grid-cols-2 gap-3 h-full pb-8">
                                  {/* Option 1: Colors */}
                                  <div className="bg-black border border-white/10 p-2 rounded flex flex-col justify-center gap-1.5 cursor-pointer hover:bg-neutral-900 group transition-colors">
                                      <div className="flex items-center gap-2 text-[10px] text-neutral-400 group-hover:text-white">
                                          <Palette size={10} /> Colors
                                      </div>
                                      <div className="flex gap-1">
                                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                          <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                                      </div>
                                  </div>
                                  
                                  {/* Option 2: Theme */}
                                  <div className="bg-black border border-white/10 p-2 rounded flex flex-col justify-center gap-1.5 cursor-pointer hover:bg-neutral-900 group transition-colors">
                                      <div className="flex items-center gap-2 text-[10px] text-neutral-400 group-hover:text-white">
                                          <Layout size={10} /> Theme
                                      </div>
                                      <div className="text-[9px] text-neutral-600 bg-neutral-900 px-1 rounded w-fit border border-white/5">Dark Mode</div>
                                  </div>

                                  {/* Option 3: Logo */}
                                  <div className="bg-black border border-white/10 p-2 rounded flex flex-col justify-center gap-1.5 cursor-pointer hover:bg-neutral-900 group transition-colors">
                                      <div className="flex items-center gap-2 text-[10px] text-neutral-400 group-hover:text-white">
                                          <ImageIcon size={10} /> Logo
                                      </div>
                                      <div className="flex items-center gap-1.5">
                                          <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center text-[8px] text-white">V</div>
                                          <span className="text-[9px] text-green-500">Uploaded</span>
                                      </div>
                                  </div>

                                  {/* Option 4: Display Config */}
                                  <div className="bg-black border border-white/10 p-2 rounded flex flex-col justify-center gap-1.5 cursor-pointer hover:bg-neutral-900 group transition-colors">
                                      <div className="flex items-center gap-2 text-[10px] text-neutral-400 group-hover:text-white">
                                          <Monitor size={10} /> Display
                                      </div>
                                      <div className="text-[9px] text-neutral-500">Bottom-Right</div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Step 5: Integrations - H:180px */}
                      <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-1 shadow-lg hover:border-yellow-500/30 transition-all z-10 h-[180px]">
                          <div className="bg-neutral-900/50 p-3 rounded-t-lg border-b border-white/5 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                  <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 w-5 h-5 flex items-center justify-center rounded text-[10px] font-mono">5</span>
                                  <span className="text-xs font-semibold text-white">Integrations</span>
                              </div>
                              <MoreHorizontal size={12} className="text-neutral-500" />
                          </div>
                          <div className="p-4">
                              <div className="grid grid-cols-2 gap-2">
                                  <div className="bg-black border border-white/10 p-2 rounded flex items-center gap-2 cursor-pointer hover:bg-neutral-900 transition-colors">
                                      <Calendar size={12} className="text-blue-400" />
                                      <span className="text-[10px] text-neutral-300">Google Cal</span>
                                      <div className="ml-auto w-6 h-3 bg-green-500/20 rounded-full border border-green-500/30 relative"><div className="absolute right-0.5 top-0.5 w-2 h-2 bg-green-500 rounded-full"></div></div>
                                  </div>
                                  <div className="bg-black border border-white/10 p-2 rounded flex items-center gap-2 cursor-pointer hover:bg-neutral-900 transition-colors">
                                      <Search size={12} className="text-neutral-400" />
                                      <span className="text-[10px] text-neutral-300">Notion</span>
                                      <div className="ml-auto w-6 h-3 bg-neutral-800 rounded-full border border-white/10 relative"><div className="absolute left-0.5 top-0.5 w-2 h-2 bg-neutral-600 rounded-full"></div></div>
                                  </div>
                                  <div className="bg-black border border-white/10 p-2 rounded flex items-center gap-2 cursor-pointer hover:bg-neutral-900 transition-colors">
                                      <CreditCard size={12} className="text-purple-400" />
                                      <span className="text-[10px] text-neutral-300">Stripe</span>
                                      <div className="ml-auto w-6 h-3 bg-neutral-800 rounded-full border border-white/10 relative"><div className="absolute left-0.5 top-0.5 w-2 h-2 bg-neutral-600 rounded-full"></div></div>
                                  </div>
                                  <div className="bg-black border border-white/10 p-2 rounded flex items-center gap-2 cursor-pointer hover:bg-neutral-900 transition-colors">
                                      <Slack size={12} className="text-orange-400" />
                                      <span className="text-[10px] text-neutral-300">Slack</span>
                                      <div className="ml-auto w-6 h-3 bg-neutral-800 rounded-full border border-white/10 relative"><div className="absolute left-0.5 top-0.5 w-2 h-2 bg-neutral-600 rounded-full"></div></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* COLUMN 3: TEST & PUBLISH (Width 280px) */}
                  <div className="w-[280px] flex flex-col gap-8 pt-8">
                       {/* LABEL */}
                       <div className="absolute top-0 left-[625px] flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Test & Publish</h3>
                      </div>

                      {/* Step 6: Preview - H:380px */}
                      <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-1 shadow-lg hover:border-green-500/30 transition-all flex flex-col h-[380px] z-10">
                          <div className="bg-neutral-900/50 p-3 rounded-t-lg border-b border-white/5 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                  <span className="bg-green-500/10 text-green-500 border border-green-500/20 w-5 h-5 flex items-center justify-center rounded text-[10px] font-mono">6</span>
                                  <span className="text-xs font-semibold text-white">Live Preview</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                  <span className="text-[9px] text-neutral-500 uppercase">Online</span>
                              </div>
                          </div>
                          {/* Chat Interface */}
                          <div className="flex-1 bg-black p-4 space-y-4 overflow-hidden relative">
                              {/* Messages */}
                              <div className="flex gap-3">
                                  <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-[9px] text-neutral-400 mt-1">U</div>
                                  <div className="bg-[#1a1a1a] p-2.5 rounded-lg rounded-tl-none text-[11px] text-neutral-300 max-w-[85%] border border-white/5">
                                      I need a 2-bedroom in Brooklyn, max $3500.
                                  </div>
                              </div>
                              <div className="flex gap-3 flex-row-reverse">
                                  <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-[9px] text-white mt-1 shadow-lg shadow-blue-500/20">AI</div>
                                  <div className="bg-blue-900/20 p-2.5 rounded-lg rounded-tr-none text-[11px] text-neutral-200 max-w-[85%] border border-blue-500/20">
                                      I found 2 matches in Williamsburg. One is $3,400 with a balcony. Would you like to see photos?
                                  </div>
                              </div>
                              {/* Input placeholder */}
                              <div className="absolute bottom-3 left-3 right-3">
                                  <div className="h-8 bg-[#111] border border-white/10 rounded flex items-center px-3 text-[10px] text-neutral-600">
                                      Type a message...
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Step 7: Deployment - H:260px */}
                      <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-1 shadow-lg hover:border-green-500/30 transition-all flex-1 z-10 min-h-[260px] relative">
                          <div className="bg-neutral-900/50 p-3 rounded-t-lg border-b border-white/5 flex justify-between items-center">
                               <div className="flex items-center gap-2">
                                  <span className="bg-green-500/10 text-green-500 border border-green-500/20 w-5 h-5 flex items-center justify-center rounded text-[10px] font-mono">7</span>
                                  <span className="text-xs font-semibold text-white">Deploy</span>
                              </div>
                              <Share2 size={12} className="text-neutral-500" />
                          </div>
                          <div className="p-4 space-y-3">
                              <div className="bg-black border border-white/10 p-3 rounded flex items-center justify-between group cursor-pointer hover:border-green-500/30 transition-colors">
                                  <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
                                          <Globe size={16} />
                                      </div>
                                      <div>
                                          <div className="text-xs font-medium text-white">Web Widget</div>
                                          <div className="text-[10px] text-green-500 flex items-center gap-1"><span className="w-1 h-1 bg-green-500 rounded-full"></span> Live</div>
                                      </div>
                                  </div>
                                  <div className="text-[10px] text-neutral-500 font-mono">v1.2</div>
                              </div>

                               <div className="bg-black border border-white/10 p-3 rounded flex items-center justify-between group cursor-pointer hover:border-green-500/30 transition-colors">
                                  <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
                                          <Smartphone size={16} />
                                      </div>
                                      <div>
                                          <div className="text-xs font-medium text-white">WhatsApp</div>
                                          <div className="text-[10px] text-neutral-500">Not Connected</div>
                                      </div>
                                  </div>
                                  <button className="text-[10px] bg-white/5 hover:bg-white/10 text-neutral-300 px-2 py-1 rounded transition-colors">Connect</button>
                              </div>

                              <div className="bg-black border border-white/10 p-3 rounded flex items-center justify-between group cursor-pointer hover:border-green-500/30 transition-colors">
                                  <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
                                          <Phone size={16} />
                                      </div>
                                      <div>
                                          <div className="text-xs font-medium text-white">Voice API</div>
                                          <div className="text-[10px] text-neutral-500">Ready</div>
                                      </div>
                                  </div>
                                   <button className="text-[10px] bg-white/5 hover:bg-white/10 text-neutral-300 px-2 py-1 rounded transition-colors">Deploy</button>
                              </div>
                          </div>
                      </div>

                  </div>

                </div>
              </div>
           </div>

           {/* Glow Effect */}
           <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-50" />
        </div>
      </div>
    </section>
  );
};
