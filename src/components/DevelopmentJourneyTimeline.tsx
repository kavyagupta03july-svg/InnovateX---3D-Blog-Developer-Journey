import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Layers, 
  X, 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  Smartphone, 
  Compass 
} from 'lucide-react';
import { TimelineMilestone } from '../types/blog';
import { timelineMilestones } from '../data/timelineData';

export const DevelopmentJourneyTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone | null>(null);

  return (
    <section id="journey" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00D4FF] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            Development Journey: Day 1 to Day 20
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Iterative Engineering & Daily Evolution
          </h2>
          <p className="text-base text-[#AAB4C8] leading-relaxed">
            Building InnovateX has been a continuous process of engineering, testing, debugging, and refining.
            Explore the milestones achieved from initial architecture to our Day 20 production preparation.
          </p>
        </div>

        {/* 3D Connected Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Connector Line (Desktop & Tablet) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#635BFF] via-[#00D4FF] to-[#A78BFA]/50 opacity-40" />

          {/* Timeline Cards Grid */}
          <div className="space-y-8 md:space-y-12">
            {timelineMilestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.day}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Marker on Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080B18] border-2 border-[#00D4FF] items-center justify-center z-10 shadow-lg shadow-[#00D4FF]/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF]" />
                  </div>

                  {/* Card Container (Takes 50% on desktop) */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? 'md:pl-0' : 'md:pr-0'}`}>
                    <div
                      className="group rounded-2xl glass-card-interactive p-6 border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 shadow-xl"
                    >
                      {/* Top Bar with Day and Phase */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-[#635BFF]/20 border border-[#635BFF]/30 text-xs font-bold text-[#A78BFA] font-mono">
                            {milestone.day}
                          </span>
                          <span className="text-xs text-[#AAB4C8] font-medium">
                            {milestone.phaseTitle}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{milestone.status === 'deployed' ? 'Live on Vercel' : 'Completed'}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Highlights List */}
                      <div className="space-y-2 mb-5">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-[#A78BFA]">
                          Development Highlights:
                        </div>
                        <ul className="space-y-1.5">
                          {milestone.highlights.slice(0, 4).map((h, i) => (
                            <li key={i} className="text-xs text-[#F8FAFC]/90 flex items-start gap-2">
                              <span className="text-[#00D4FF] mt-0.5">•</span>
                              <span className="leading-snug">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Read More Button */}
                      <button
                        onClick={() => setSelectedMilestone(milestone)}
                        className="w-full py-2 px-3 text-xs font-semibold text-white bg-white/5 hover:bg-[#635BFF]/20 border border-white/10 hover:border-[#635BFF]/40 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Deep Dive into {milestone.day}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Deep Dive Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-elevated p-6 sm:p-8 space-y-6 shadow-2xl border border-white/20">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-lg bg-[#635BFF]/30 border border-[#635BFF]/50 text-xs font-bold text-[#A78BFA] font-mono">
                  {selectedMilestone.day}
                </span>
                <span className="text-xs text-[#AAB4C8]">{selectedMilestone.phaseTitle}</span>
              </div>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="p-1.5 rounded-lg text-[#AAB4C8] hover:text-white hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Title */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedMilestone.title}
              </h3>
              <p className="text-sm text-[#AAB4C8] leading-relaxed">
                {selectedMilestone.description}
              </p>
            </div>

            {/* Complete Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#00D4FF]">
                Full Development Highlights
              </h4>
              <div className="space-y-2 bg-[#080B18]/60 p-4 rounded-xl border border-white/5">
                {selectedMilestone.highlights.map((item, idx) => (
                  <div key={idx} className="text-xs sm:text-sm text-[#F8FAFC] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Takeaways & Architecture Notes */}
            {selectedMilestone.technicalDetails && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold tracking-wider uppercase text-[#A78BFA]">
                  Architecture & Code Details
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedMilestone.technicalDetails.map((tech, i) => (
                    <div key={i} className="text-xs text-[#AAB4C8] bg-white/5 p-2.5 rounded-lg flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-[#635BFF]" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Founder Note / Lessons Learned */}
            {selectedMilestone.lessonsLearned && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#635BFF]/10 to-[#00D4FF]/10 border border-[#635BFF]/20 text-xs text-[#F8FAFC] leading-relaxed">
                <span className="font-bold text-[#A78BFA] block mb-1">Founder Engineering Note:</span>
                "{selectedMilestone.lessonsLearned}"
              </div>
            )}

            {/* Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedMilestone(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#10172A] hover:bg-[#162038] border border-white/10 rounded-xl transition-colors"
              >
                Close Deep Dive
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
