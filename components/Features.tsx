import React from 'react';
import { Blocks, BrainCircuit, Zap, Globe, BarChart2, ShieldCheck } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "No-Code Agent Builder",
    description: "Drag-and-drop or prompt-to-build interface designed for non-technical users.",
    icon: Blocks
  },
  {
    title: "Smart Automation",
    description: "Leverage advanced AI to understand context, learn from interactions, and improve responses over time automatically.",
    icon: BrainCircuit
  },
  {
    title: "Omnichannel Deploy",
    description: "Deploy your agent across web chat, voice call, WhatsApp, email, and more from a single platform.",
    icon: Globe
  },
  {
    title: "Analytics Dashboard",
    description: "Track conversation, measure performance, and gain insight with real-time analytics and reporting.",
    icon: BarChart2
  },
  {
    title: "Instant Deployment",
    description: "Go live in a minute with one-click deployment. Update and iterate without downtime.",
    icon: Zap
  },
  {
    title: "Enterprise Security",
    description: "SOC2 compliant infrastructure where your data stays secure, private, and isolated.",
    icon: ShieldCheck
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">The Operating System for <br/><span className="text-brand-500">Autonomous Agents</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900/60 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white mb-4 group-hover:bg-brand-500 group-hover:text-black transition-colors">
                {feature.icon && <feature.icon size={20} strokeWidth={1.5} />}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};