import React from 'react';
import { UseCaseItem } from '../types';
import { BookOpen, TrendingUp, Shield, Calendar, ArrowRight, Activity, Users, Plus, Cpu, FileText } from 'lucide-react';

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Architected for Critical Business Operations</h2>
            <p className="text-neutral-400 text-lg">Solutions designed for high-value workflows, not just chat.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Case 1: HR Policy Assistant */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-blue-500/30 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                <FileText size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">HR Policy Copilot</h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
                HR teams are overloaded with repetitive queries. Varia instantly answers employee questions about benefits, leave, and compliance with accurate citations from your existing documents.
            </p>
            <div className="flex items-center text-sm font-medium text-blue-500 group-hover:text-blue-400">
                See Policy Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Case 2: Sales Enablement & Support */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-green-500/30 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 bg-green-900/20 rounded-lg flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                <TrendingUp size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Sales Enablement & Support</h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
                Engage visitors 24/7. Your agent qualifies leads based on your playbook, answers objection questions, and routes hot leads to your CRM instantly.
            </p>
             <div className="flex items-center text-sm font-medium text-green-500 group-hover:text-green-400">
                View Sales Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Case 3: Internal Knowledge Management */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-purple-500/30 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-500 mb-6 border border-purple-500/20">
                <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Internal Knowledge Management</h3>
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                Stop the new-hire confusion. Varia guides employees through paperwork, IT setup, and training with personalized, context-aware support integrated with your HRIS.
            </p>
          </div>

          {/* Case 4: Order Booking and Appointment Scheduling */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-orange-500/30 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-500 mb-6 border border-orange-500/20">
                <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Order Booking and Appointment Scheduling</h3>
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                Turn website traffic into booked appointments. The agent checks availability in real-time and books slots.
            </p>
          </div>

          {/* Case 5: Many More - Spans 2 columns */}
          <div className="md:col-span-2 p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/20 transition-all group flex flex-col justify-center items-center text-center cursor-pointer min-h-[200px]">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 mb-4 group-hover:scale-110 transition-transform">
                <Plus size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Build Your Own</h3>
            <p className="text-neutral-500 text-sm max-w-md">
                Varia is flexible enough for any workflow. Create custom agents that integrate with your specific API and business logic.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};