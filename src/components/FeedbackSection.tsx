import React from 'react';
import { MessageSquareHeart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FeedbackCategory } from '../types/blog';

interface FeedbackSectionProps {
  onOpenFeedback: () => void;
}

const categoriesList: FeedbackCategory[] = [
  'Website loading and performance',
  'Server errors',
  'Login and registration',
  'User interface and design',
  'Navigation',
  'Internship and job opportunities',
  'Project collaboration',
  'Missing features',
  'General suggestions',
];

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ onOpenFeedback }) => {
  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-72 h-72 bg-[#00D4FF]/10 blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00D4FF] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                Community Driven Evolution
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Help Us Make InnovateX Better
              </h2>

              <p className="text-base text-[#AAB4C8] leading-relaxed">
                InnovateX is continuously evolving. Your feedback can help improve the platform and make
                it more useful for students.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenFeedback}
                  className="px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] hover:from-[#5249EC] hover:to-[#635BFF] rounded-xl shadow-lg shadow-[#635BFF]/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquareHeart className="w-4 h-4" />
                  <span>Share Your Feedback</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Column: 9 Categories Overview */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-[#080B18]/70 border border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
                  Active Feedback Channels
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categoriesList.map((cat, idx) => (
                    <div
                      key={idx}
                      onClick={onOpenFeedback}
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-xs text-[#F8FAFC]/90 flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                      <span className="truncate">{cat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
