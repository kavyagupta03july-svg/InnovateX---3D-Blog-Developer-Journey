import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Lightbulb, 
  FolderKanban, 
  GraduationCap, 
  Trophy, 
  Code2, 
  Database, 
  Cpu, 
  Globe 
} from 'lucide-react';

interface Hero3DProps {
  onExploreBlogs: () => void;
  onExploreJourney: () => void;
  onExploreInnovateX: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({
  onExploreBlogs,
  onExploreJourney,
  onExploreInnovateX,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(-5);
  const [rotateY, setRotateY] = useState(8);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt within -15 to +15 deg
    const newRotateY = ((x - centerX) / centerX) * 12;
    const newRotateX = -((y - centerY) / centerY) * 12;

    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(-5);
    setRotateY(8);
  };

  return (
    <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 tech-grid-bg overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#635BFF]/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-[#00D4FF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Badge */}
            <div className="flex items-center justify-center gap-2 px-3 py-1 w-fit mx-auto rounded-full bg-[#10172A] border border-[#635BFF]/30 text-xs font-semibold text-[#A78BFA] tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
              INNOVATEX DEVELOPMENT JOURNEY
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Behind the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] via-[#A78BFA] to-[#00D4FF]">
                  Innovation
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#F8FAFC]/90">
                Discover the ideas, challenges, technology, and journey behind InnovateX.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#AAB4C8] max-w-2xl leading-relaxed">
              Explore how InnovateX is evolving into a platform where students discover opportunities,
              share innovative ideas, showcase projects, and connect with other talented students.
            </p>

            {/* 3 CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreBlogs}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] hover:from-[#5249EC] hover:to-[#635BFF] rounded-xl shadow-lg shadow-[#635BFF]/30 hover:shadow-[#635BFF]/45 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Blogs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreJourney}
                className="px-6 py-3 text-sm font-semibold text-[#F8FAFC] bg-[#10172A] hover:bg-[#162038] border border-white/10 hover:border-[#635BFF]/40 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#A78BFA]" />
                <span>Development Journey</span>
              </button>

              <button
                onClick={onExploreInnovateX}
                className="px-6 py-3 text-sm font-semibold text-[#00D4FF] hover:text-white bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 border border-[#00D4FF]/30 hover:border-[#00D4FF]/60 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>Explore InnovateX</span>
              </button>
            </div>

            {/* Platform Indicators (Descriptive labels without fabricated numbers) */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Ecosystem</span>
                </div>
                <div className="text-sm font-medium text-white">Student Community</div>
                <div className="text-xs text-[#AAB4C8]">B.Tech, CSE, IT & Engg</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A78BFA]">
                  <Lightbulb className="w-4 h-4" />
                  <span>Ideation</span>
                </div>
                <div className="text-sm font-medium text-white">Shared Ideas</div>
                <div className="text-xs text-[#AAB4C8]">Peer Collaboration</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#635BFF]">
                  <FolderKanban className="w-4 h-4" />
                  <span>Execution</span>
                </div>
                <div className="text-sm font-medium text-white">Live Projects</div>
                <div className="text-xs text-[#AAB4C8]">Showcase & Demos</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <Trophy className="w-4 h-4" />
                  <span>Growth</span>
                </div>
                <div className="text-sm font-medium text-white">Opportunities</div>
                <div className="text-xs text-[#AAB4C8]">Internships & Hacks</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Visual Panel */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative perspective-1200 py-6 select-none"
          >
            <div
              className="relative w-full aspect-[4/4] max-w-md mx-auto preserve-3d transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
            >
              {/* Main Futuristic Glass Card */}
              <div className="absolute inset-0 rounded-3xl glass-panel-elevated p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                {/* Tech scanline line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-75" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-md shrink-0">
                      <img
                        src="/assets/aistudio/image_8c40476c.png"
                        alt="InnovateX Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white tracking-wide">InnovateX Hub</div>
                      <div className="text-[11px] text-[#AAB4C8]">Student Collaboration Architecture</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[#00D4FF] uppercase bg-[#00D4FF]/10 px-2 py-0.5 rounded border border-[#00D4FF]/20">
                    Day 20 Active
                  </span>
                </div>

                {/* Central Futuristic Graphic */}
                <div className="relative py-4 flex items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full border border-[#635BFF]/30 flex items-center justify-center">
                    <div className="absolute inset-2 rounded-full border border-dashed border-[#00D4FF]/40 animate-[spin_30s_linear_infinite]" />
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#635BFF]/20 to-[#00D4FF]/20 backdrop-blur-md flex flex-col items-center justify-center border border-white/20 shadow-inner gap-1.5">
                      <img
                        src="/assets/aistudio/image_8c40476c.png"
                        alt="InnovateX Logo"
                        className="w-11 h-11 rounded-xl object-cover shadow-md"
                      />
                      <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                        InnovateX
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/10 text-center">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                    <Code2 className="w-4 h-4 text-[#00D4FF] mb-1" />
                    <span className="text-[10px] font-medium text-[#AAB4C8]">React 19</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                    <Database className="w-4 h-4 text-[#A78BFA] mb-1" />
                    <span className="text-[10px] font-medium text-[#AAB4C8]">Firebase</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                    <Layers className="w-4 h-4 text-[#635BFF] mb-1" />
                    <span className="text-[10px] font-medium text-[#AAB4C8]">TypeScript</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                    <Globe className="w-4 h-4 text-emerald-400 mb-1" />
                    <span className="text-[10px] font-medium text-[#AAB4C8]">Vercel</span>
                  </div>
                </div>
              </div>

              {/* Floating 3D Satellite Card 1: Ideas (Top Left) */}
              <div 
                className="absolute -top-6 -left-6 w-48 p-3 rounded-2xl glass-panel border border-[#A78BFA]/40 shadow-xl translate-z-12 hover:border-[#A78BFA] transition-all select-none pointer-events-none"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA]">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Student Ideas</div>
                    <div className="text-[10px] text-[#AAB4C8]">Find Teammates</div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Satellite Card 2: Projects (Bottom Right) */}
              <div 
                className="absolute -bottom-6 -right-6 w-52 p-3 rounded-2xl glass-panel border border-[#00D4FF]/40 shadow-xl translate-z-16 hover:border-[#00D4FF] transition-all select-none pointer-events-none"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF]">
                    <FolderKanban className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Live Projects</div>
                    <div className="text-[10px] text-[#AAB4C8]">Showcase & Demos</div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Satellite Card 3: Hackathons (Bottom Left) */}
              <div 
                className="absolute -bottom-4 -left-4 w-44 p-2.5 rounded-xl glass-panel border border-emerald-400/40 shadow-xl translate-z-10 hover:border-emerald-400 transition-all select-none pointer-events-none"
              >
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-white">Hackathons 2026</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
