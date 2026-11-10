import React, { useState } from 'react';
import { 
  Code2, 
  FileCode2, 
  Database, 
  KeyRound, 
  HardDrive, 
  Globe, 
  GitBranch, 
  Layers, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';
import { techStackData } from '../data/techStackData';

const getTechIcon = (name: string) => {
  switch (name) {
    case 'React.js':
      return <Cpu className="w-5 h-5 text-[#00D4FF]" />;
    case 'TypeScript':
      return <Code2 className="w-5 h-5 text-[#635BFF]" />;
    case 'JavaScript (ESNext)':
      return <FileCode2 className="w-5 h-5 text-amber-400" />;
    case 'Tailwind CSS':
      return <Layers className="w-5 h-5 text-[#00D4FF]" />;
    case 'Firebase Authentication':
      return <KeyRound className="w-5 h-5 text-orange-400" />;
    case 'Firebase Firestore':
      return <Database className="w-5 h-5 text-amber-500" />;
    case 'Firebase Storage':
      return <HardDrive className="w-5 h-5 text-sky-400" />;
    case 'Vercel':
      return <Globe className="w-5 h-5 text-emerald-400" />;
    case 'Git':
      return <GitBranch className="w-5 h-5 text-rose-400" />;
    case 'GitHub':
      return <Code2 className="w-5 h-5 text-indigo-400" />;
    default:
      return <Code2 className="w-5 h-5 text-[#635BFF]" />;
  }
};

export const TechStack3D: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & Cloud', 'DevOps & Tooling'];

  const filteredTech = selectedCategory === 'All'
    ? techStackData
    : techStackData.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00D4FF] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              Architectural Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technology Stack Behind InnovateX
            </h2>
            <p className="text-base text-[#AAB4C8] leading-relaxed">
              Every layer in InnovateX is chosen with deliberate restraint for speed, scalability,
              and seamless developer collaboration. Only verified production technologies are showcased.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#10172A] border border-white/10 rounded-xl overflow-x-auto self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#635BFF] text-white shadow-sm'
                    : 'text-[#AAB4C8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Verified Technologies 3D Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-2xl glass-card-interactive p-5 flex flex-col justify-between border border-white/5 hover:border-[#635BFF]/40 transition-all duration-300 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getTechIcon(tech.name)}
                  </div>
                  <span className="text-[10px] font-mono text-[#00D4FF] uppercase bg-[#00D4FF]/10 px-1.5 py-0.5 rounded">
                    {tech.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                    {tech.name}
                  </h3>
                  <div className="text-[11px] text-[#A78BFA] font-medium mt-0.5">
                    {tech.tagline}
                  </div>
                </div>

                <p className="text-xs text-[#AAB4C8] leading-relaxed">
                  {tech.roleInInnovateX}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in Codebase</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
