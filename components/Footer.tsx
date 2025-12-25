import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-black transform rotate-45" />
                </div>
                <span className="font-bold text-white tracking-tight">Varia</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                The operating system for autonomous enterprise agents.
            </p>
            <p className="text-neutral-600 text-xs">
                San Francisco, CA<br/>
                &copy; 2024 Varia Labs Inc.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
