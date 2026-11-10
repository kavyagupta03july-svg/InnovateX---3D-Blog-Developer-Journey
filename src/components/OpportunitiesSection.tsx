import React, { useState } from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Briefcase, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  X, 
  ExternalLink 
} from 'lucide-react';
import { opportunityCategories, sampleOpportunities } from '../data/opportunitiesData';
import { OpportunityItem } from '../types/blog';

interface OpportunitiesSectionProps {
  onFilterBlogCategory?: (category: any) => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  onFilterBlogCategory,
}) => {
  const [selectedType, setSelectedType] = useState<'internship' | 'hackathon' | 'job' | null>(null);

  const activeList = selectedType
    ? sampleOpportunities.filter((item) => item.type === selectedType)
    : [];

  const handleOpenType = (type: 'internship' | 'hackathon' | 'job') => {
    setSelectedType(type);
  };

  return (
    <section id="opportunities" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00D4FF] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            Ecosystem Radar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Opportunity Updates: 2026 Season
          </h2>
          <p className="text-base text-[#AAB4C8] leading-relaxed">
            Discover verified internships, upcoming innovation hackathons, and early career developer roles
            curated for technical and computer science engineering students.
          </p>
        </div>

        {/* 3 Large Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunityCategories.map((item) => {
            const isInternship = item.type === 'internship';
            const isHackathon = item.type === 'hackathon';

            return (
              <div
                key={item.type}
                className="group relative rounded-3xl glass-panel-elevated p-8 flex flex-col justify-between border border-white/10 hover:border-[#635BFF]/60 transition-all duration-300 shadow-2xl"
              >
                {/* Glow accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-20 -z-10"
                  style={{ backgroundColor: item.accentColor }}
                />

                <div className="space-y-5">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                      style={{ 
                        backgroundColor: `${item.accentColor}1A`, 
                        color: item.accentColor,
                        border: `1px solid ${item.accentColor}40` 
                      }}
                    >
                      {isInternship && <GraduationCap className="w-6 h-6" />}
                      {isHackathon && <Trophy className="w-6 h-6" />}
                      {!isInternship && !isHackathon && <Briefcase className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#AAB4C8]">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#AAB4C8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6 border-t border-white/10">
                  <button
                    onClick={() => handleOpenType(item.type)}
                    className="w-full py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] hover:from-[#5249EC] hover:to-[#635BFF] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Opportunity Details Drawer / Modal */}
      {selectedType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel-elevated p-6 sm:p-8 space-y-6 border border-white/20 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#00D4FF] tracking-wider uppercase">
                  Verified 2026 Listings
                </span>
                <h3 className="text-2xl font-bold text-white capitalize">
                  {selectedType === 'internship' && 'Internships 2026'}
                  {selectedType === 'hackathon' && 'Hackathons 2026'}
                  {selectedType === 'job' && 'Job Opportunities 2026'}
                </h3>
              </div>
              <button
                onClick={() => setSelectedType(null)}
                className="p-1.5 rounded-lg text-[#AAB4C8] hover:text-white hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Opportunity Cards List */}
            <div className="space-y-4">
              {activeList.map((opp) => (
                <div
                  key={opp.id}
                  className="p-5 rounded-2xl bg-[#080B18]/70 border border-white/10 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{opp.title}</h4>
                      <div className="text-xs text-[#00D4FF] font-medium">{opp.organization}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#AAB4C8]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {opp.mode}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {opp.deadlineOrDate}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                    {opp.description}
                  </p>

                  <div className="text-xs text-[#F8FAFC]/80 bg-white/5 p-2.5 rounded-lg">
                    <span className="text-[#A78BFA] font-semibold">Eligibility: </span>
                    {opp.eligibility}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {opp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] text-[#AAB4C8] bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#AAB4C8]">
                Real student opportunities submitted to InnovateX
              </span>
              <button
                onClick={() => setSelectedType(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#10172A] hover:bg-[#162038] border border-white/10 rounded-xl"
              >
                Close Explorer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
