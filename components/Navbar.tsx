import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/70 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-black transform rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Varia</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors">How it Works</a>
          <a href="#use-cases" className="text-sm text-neutral-400 hover:text-white transition-colors">Use Cases</a>
          <a href="#roadmap" className="text-sm text-neutral-400 hover:text-white transition-colors">Roadmap</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact">
            <Button variant="primary" className="py-2 px-4 h-9 text-xs">Request Access</Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-neutral-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-900 border-b border-neutral-800 p-6 flex flex-col gap-4 md:hidden">
           <a href="#features" className="text-sm text-neutral-400">Features</a>
          <a href="#how-it-works" className="text-sm text-neutral-400">How it Works</a>
          <a href="#use-cases" className="text-sm text-neutral-400">Use Cases</a>
          <Button variant="primary" className="w-full">Request Access</Button>
        </div>
      )}
    </nav>
  );
};