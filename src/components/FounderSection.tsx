import React, { useState } from 'react';
import { 
  GraduationCap, 
  Code2, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  Check, 
  Copy, 
  Send 
} from 'lucide-react';

interface FounderSectionProps {
  onOpenFeedback: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onOpenFeedback,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  const founderEmail = 'kavyagupta03july@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(founderEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="founder" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#A78BFA] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-center">
            A Note From the Founder
          </h2>
        </div>

        {/* 3D Founder Card Layout */}
        <div className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#635BFF]/15 to-[#00D4FF]/10 blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Clean Founder Profile Card (No invented photo or biography) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-[#080B18]/80 border border-white/10 flex flex-col items-center text-center space-y-4">
                
                {/* Profile Avatar Frame */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#635BFF] via-[#7B73FF] to-[#00D4FF] p-[3px] shadow-xl shadow-[#635BFF]/25">
                  <div className="w-full h-full rounded-full bg-[#10172A] flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00D4FF]">
                      KG
                    </span>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Kavya Gupta
                  </h3>
                  <div className="text-xs font-semibold text-[#00D4FF]">
                    Founder and Developer of InnovateX
                  </div>
                </div>

                {/* Educational Details */}
                <div className="w-full pt-4 border-t border-white/5 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs text-[#AAB4C8]">
                    <GraduationCap className="w-4 h-4 text-[#A78BFA] shrink-0" />
                    <span>B.Tech – Computer Science and Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#AAB4C8]">
                    <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Aspiring Software Engineer</span>
                  </div>
                </div>

                {/* Connect CTA */}
                <button
                  onClick={() => setConnectModalOpen(true)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] hover:from-[#5249EC] hover:to-[#635BFF] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Connect With InnovateX</span>
                </button>
              </div>
            </div>

            {/* Right Column: Founder Messages */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="relative pl-6 border-l-2 border-[#635BFF]/40 space-y-4">
                <blockquote className="text-base sm:text-lg text-[#F8FAFC]/95 font-medium leading-relaxed italic">
                  "While pursuing my B.Tech in Computer Science and Engineering, I realised that many
                  students have innovative ideas, technical skills, and career ambitions, but they
                  sometimes struggle to find the right opportunities and collaborators.
                  <br /><br />
                  This inspired me to build InnovateX.
                  <br /><br />
                  My goal is to create a platform where students can discover opportunities, share
                  their projects, connect with talented individuals, and grow together.
                  <br /><br />
                  InnovateX is also a learning journey for me. Every feature, bug, challenge, and
                  improvement teaches me something new about software development."
                </blockquote>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                  Continuous Learning & Vision
                </div>
                <p className="text-sm text-[#AAB4C8] leading-relaxed">
                  "InnovateX started with a simple thought: students deserve a platform where their ideas, skills, and ambitions can come together. As a student, I understand the importance of opportunities, collaboration, and practical learning. Building InnovateX has taught me that software development is a continuous process of learning, debugging, testing, and improving. I know the platform still has areas that need improvement, and I welcome honest feedback from students and developers. My vision is to make InnovateX a meaningful community where students support each other and turn ideas into reality."
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenFeedback}
                    className="text-xs font-semibold text-[#A78BFA] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Have suggestions? Share your feedback directly</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Connect Modal */}
      {connectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-3xl glass-panel-elevated p-6 space-y-5 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold text-white">Connect With InnovateX</h3>
              <button
                onClick={() => setConnectModalOpen(false)}
                className="text-xs text-[#AAB4C8] hover:text-white px-2 py-1 rounded bg-white/5"
              >
                Close
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
              We welcome collaborations, student project showcases, college partnerships, and feedback from students and developers.
            </p>

            <div className="p-4 rounded-xl bg-[#080B18] border border-white/10 space-y-2">
              <div className="text-[11px] text-[#AAB4C8]">Founder Direct Contact:</div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-white select-all">{founderEmail}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors flex items-center gap-1"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => {
                  setConnectModalOpen(false);
                  onOpenFeedback();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] rounded-xl shadow-md"
              >
                Submit Platform Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
