import React, { useState } from 'react';
import { 
  KeyRound, 
  Database, 
  Users2, 
  Sparkles, 
  Bug, 
  Rocket, 
  Smartphone, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { challengesData } from '../data/challengesData';
import { ChallengeItem } from '../types/blog';

const getChallengeIcon = (id: number) => {
  switch (id) {
    case 1:
      return <KeyRound className="w-5 h-5 text-[#635BFF]" />;
    case 2:
      return <Database className="w-5 h-5 text-[#00D4FF]" />;
    case 3:
      return <Users2 className="w-5 h-5 text-[#A78BFA]" />;
    case 4:
      return <Sparkles className="w-5 h-5 text-amber-400" />;
    case 5:
      return <Bug className="w-5 h-5 text-rose-400" />;
    case 6:
      return <Rocket className="w-5 h-5 text-emerald-400" />;
    case 7:
      return <Smartphone className="w-5 h-5 text-cyan-400" />;
    case 8:
      return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
    default:
      return <Database className="w-5 h-5 text-[#635BFF]" />;
  }
};

export const ChallengesSection: React.FC = () => {
  const [activeChallenge, setActiveChallenge] = useState<ChallengeItem | null>(null);

  return (
    <section id="challenges" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#A78BFA] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
            Engineering Hurdles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Challenges Behind the Code
          </h2>
          <p className="text-base text-[#AAB4C8] leading-relaxed">
            Building a platform is not just about writing code. It is about solving problems, testing ideas,
            and improving continuously.
          </p>
        </div>

        {/* 8 3D Challenge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challengesData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveChallenge(item)}
              className="group rounded-2xl glass-card-interactive p-6 flex flex-col justify-between border border-white/5 hover:border-[#635BFF]/50 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <div className="space-y-4">
                {/* Icon & Index */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getChallengeIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono text-[#AAB4C8]/60">0{item.id}</span>
                </div>

                {/* Unboxed Category */}
                <div className="text-[11px] font-semibold text-[#00D4FF] tracking-wide uppercase">
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Summary Description */}
                <p className="text-xs text-[#AAB4C8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action indicator */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#AAB4C8] group-hover:text-white transition-colors">
                <span>View Solution</span>
                <ArrowUpRight className="w-4 h-4 text-[#635BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Challenge Solution Modal */}
      {activeChallenge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-3xl glass-panel-elevated p-6 sm:p-8 space-y-6 shadow-2xl border border-white/20">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  {getChallengeIcon(activeChallenge.id)}
                </div>
                <div>
                  <div className="text-xs font-mono text-[#00D4FF]">Challenge 0{activeChallenge.id}</div>
                  <h3 className="text-lg font-bold text-white">{activeChallenge.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setActiveChallenge(null)}
                className="text-xs font-bold text-[#AAB4C8] hover:text-white px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10"
              >
                Close
              </button>
            </div>

            {/* Problem */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                The Obstacle
              </div>
              <p className="text-xs sm:text-sm text-[#F8FAFC]/90 bg-rose-500/10 p-3.5 rounded-xl border border-rose-500/20 leading-relaxed">
                {activeChallenge.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                The Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-[#F8FAFC]/90 bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/20 leading-relaxed">
                {activeChallenge.solution}
              </p>
            </div>

            {/* Takeaway */}
            <div className="p-4 rounded-xl bg-[#080B18]/60 border border-white/10 text-xs text-[#AAB4C8] leading-relaxed">
              <span className="font-bold text-[#A78BFA] block mb-1">Key Engineering Takeaway:</span>
              {activeChallenge.engineeringTakeaway}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
