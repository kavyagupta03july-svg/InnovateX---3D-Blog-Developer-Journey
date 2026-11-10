import React from 'react';
import { Globe, Lightbulb, FolderKanban, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onExploreInnovateX: () => void;
  onShareIdea?: () => void;
  onDiscoverProjects?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onExploreInnovateX,
}) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10172A]/50 to-[#080B18] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#635BFF]/20 to-[#00D4FF]/20 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10172A] border border-white/10 text-xs font-semibold text-[#00D4FF]">
          <span>Where Student Ideas Become Reality</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Your Next Big Idea{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] via-[#A78BFA] to-[#00D4FF]">
            Starts Here.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#AAB4C8] max-w-2xl mx-auto leading-relaxed">
          Join a community where students connect, collaborate, share opportunities,
          and transform ideas into meaningful projects.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onExploreInnovateX}
            className="px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] hover:from-[#5249EC] hover:to-[#635BFF] rounded-xl shadow-xl shadow-[#635BFF]/35 hover:shadow-[#635BFF]/50 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span>Explore InnovateX</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
