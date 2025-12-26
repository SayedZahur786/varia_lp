import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-black transform rotate-45" />
                </div>
                <span className="font-bold text-white tracking-tight">Varia</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                The best solution for Conversational Intelligence through omnichannels.
            </p>
            <p className="text-neutral-600 text-xs">
                Bangalore, India<br/>
                &copy; 2025 Varia Inc
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#contact" className="hover:text-white transition-colors">Request Access</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
