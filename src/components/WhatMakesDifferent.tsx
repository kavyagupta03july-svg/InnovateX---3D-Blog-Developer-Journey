import React from 'react';
import { 
  Compass, 
  Lightbulb, 
  FolderKanban, 
  UserPlus, 
  Network, 
  TrendingUp 
} from 'lucide-react';

interface WhatMakesDifferentProps {
  onExploreInnovateX?: () => void;
}

const differentiatorCards = [
  {
    icon: <Compass className="w-6 h-6 text-[#00D4FF]" />,
    title: 'Discover Opportunities',
    description: 'Explore internships, jobs, and hackathons.',
    actionLabel: 'Browse Openings',
    accent: '#00D4FF',
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-[#A78BFA]" />,
    title: 'Share Ideas',
    description: 'Publish innovative ideas and invite others to collaborate.',
    actionLabel: 'Draft Proposal',
    accent: '#A78BFA',
  },
  {
    icon: <FolderKanban className="w-6 h-6 text-[#635BFF]" />,
    title: 'Showcase Projects',
    description: 'Present your work, technical skills, and achievements.',
    actionLabel: 'View Demos',
    accent: '#635BFF',
  },
  {
    icon: <UserPlus className="w-6 h-6 text-emerald-400" />,
    title: 'Find Teammates',
    description: 'Connect with students who have complementary skills.',
    actionLabel: 'Match Skills',
    accent: '#34D399',
  },
  {
    icon: <Network className="w-6 h-6 text-amber-400" />,
    title: 'Build Connections',
    description: 'Discover students from different technical backgrounds.',
    actionLabel: 'Network Hub',
    accent: '#FBBF24',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-rose-400" />,
    title: 'Grow Together',
    description: 'Learn, collaborate, and develop practical experience.',
    actionLabel: 'Skill Growth',
    accent: '#FB7185',
  },
];

export const WhatMakesDifferent: React.FC<WhatMakesDifferentProps> = () => {
  return (
    <section id="different" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00D4FF] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            Purpose & Differentiator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Makes InnovateX Different?
          </h2>
          <p className="text-base text-[#AAB4C8] leading-relaxed">
            InnovateX is engineered exclusively for student engineers and creators to transition
            from passive social browsing into active project building and career discovery.
          </p>
        </div>

        {/* 6 3D Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiatorCards.map((card, idx) => (
            <div
              key={idx}
              className="group rounded-2xl glass-card-interactive p-8 flex flex-col justify-between border border-white/5 hover:border-[#635BFF]/50 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-[#AAB4C8] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#A78BFA] group-hover:text-white transition-colors">
                <span>{card.actionLabel}</span>
                <span className="text-xs text-[#00D4FF] font-mono">Verified Pillar</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
