import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageSquareHeart, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenFeedback: () => void;
  onOpenPlatformPreview: () => void;
  activeArticleId?: string | null;
  onBackToBlogs?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFeedback,
  onOpenPlatformPreview,
  activeArticleId,
  onBackToBlogs,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (activeArticleId && onBackToBlogs) {
      e.preventDefault();
      onBackToBlogs();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B18]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shrink-0 shadow-sm shadow-[#635BFF]/30">
            <img
              src="/assets/aistudio/image_8c40476c.png"
              alt="InnovateX Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#00D4FF] transition-colors">
            InnovateX
          </span>
        </a>

        {/* Zone 2: 4–5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#AAB4C8]">
          <a
            href="#journey"
            onClick={(e) => handleNavClick(e, '#journey')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Development Journey
          </a>
          <a
            href="#articles"
            onClick={(e) => handleNavClick(e, '#articles')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Articles
          </a>
          <a
            href="#challenges"
            onClick={(e) => handleNavClick(e, '#challenges')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Challenges
          </a>
          <a
            href="#opportunities"
            onClick={(e) => handleNavClick(e, '#opportunities')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Opportunities
          </a>
          <a
            href="#founder"
            onClick={(e) => handleNavClick(e, '#founder')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Founder
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPlatformPreview}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] hover:from-[#5249EC] hover:to-[#635BFF] rounded-lg transition-all shadow-md shadow-[#635BFF]/25 hover:shadow-[#635BFF]/40 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            title="Explore InnovateX Platform"
          >
            <Compass className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span>Explore Platform</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#AAB4C8] hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080B18]/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#AAB4C8]">
            <a
              href="#journey"
              onClick={(e) => handleNavClick(e, '#journey')}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Development Journey
            </a>
            <a
              href="#articles"
              onClick={(e) => handleNavClick(e, '#articles')}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Articles
            </a>
            <a
              href="#challenges"
              onClick={(e) => handleNavClick(e, '#challenges')}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Challenges
            </a>
            <a
              href="#opportunities"
              onClick={(e) => handleNavClick(e, '#opportunities')}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Opportunities
            </a>
            <a
              href="#founder"
              onClick={(e) => handleNavClick(e, '#founder')}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Founder
            </a>
          </nav>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlatformPreview();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] rounded-lg flex items-center justify-center gap-2 shadow-md shadow-[#635BFF]/25"
            >
              <Compass className="w-4 h-4 text-[#00D4FF]" />
              <span>Explore Platform</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
