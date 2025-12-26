import React, { useState } from 'react';
import { ArrowRight, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactCTA: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      await emailjs.sendForm(
        'service_gczesvx',      // Your Service ID
        'template_zwhq59r',     // Your Template ID
        e.currentTarget,
        '3GRhYeiaLY4dqkTlv'     // Your Public Key
      );
      
      setStatus('success');
      setMessage('Request sent successfully! We\'ll get back to you soon.');
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setMessage('Failed to send request. Please try again.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          Ready to deploy intelligence?
        </h2>
        <p className="text-neutral-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Skip the engineering roadmap. Start building autonomous agents that drive real business value today.
        </p>

        {/* Form Card */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-1.5 max-w-[480px] mx-auto shadow-2xl relative group">
           {/* Subtle gradient border effect */}
           <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-transparent to-green-500/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-700"></div>
           
           <form onSubmit={handleSubmit} className="relative bg-neutral-900/90 rounded-xl p-6 sm:p-8 flex flex-col gap-5 text-left backdrop-blur-xl">
              <div className="space-y-4">
                  <div>
                     <label className="block text-xs font-medium text-neutral-400 mb-1.5 ml-1 uppercase tracking-wider">Work Email</label>
                     <div className="relative group/input">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within/input:text-white transition-colors" size={16} />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="name@company.com" 
                            required
                            disabled={status === 'loading'}
                            className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-500/50 focus:bg-black transition-all placeholder:text-neutral-700 disabled:opacity-50" 
                        />
                     </div>
                  </div>
                  
                  <div>
                     <label className="block text-xs font-medium text-neutral-400 mb-1.5 ml-1 uppercase tracking-wider">How can we help?</label>
                     <div className="relative group/input">
                        <MessageSquare className="absolute left-3 top-3.5 text-neutral-600 group-focus-within/input:text-white transition-colors" size={16} />
                        <textarea 
                            rows={3} 
                            name="message"
                            placeholder="Tell us about your use case..." 
                            required
                            disabled={status === 'loading'}
                            className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-500/50 focus:bg-black transition-all placeholder:text-neutral-700 resize-none disabled:opacity-50"
                        ></textarea>
                     </div>
                  </div>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-black font-bold py-3.5 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                 {status === 'loading' ? (
                   <>
                     <Loader2 size={16} className="animate-spin" />
                     Sending...
                   </>
                 ) : (
                   <>
                     Request Access <ArrowRight size={16} />
                   </>
                 )}
              </button>

              {/* Success/Error Messages */}
              {message && (
                <div className={`text-sm text-center py-2 px-4 rounded-lg ${
                  status === 'success' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {status === 'success' && <CheckCircle2 size={16} className="inline mr-2" />}
                  {message}
                </div>
              )}
           </form>
        </div>
        
        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-mono">
           <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-500" /> SOC2 CERTIFIED</span>
           <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-500" /> ENTERPRISE READY</span>
           <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-500" /> 99.99% UPTIME</span>
        </div>

      </div>
    </section>
  );
};
