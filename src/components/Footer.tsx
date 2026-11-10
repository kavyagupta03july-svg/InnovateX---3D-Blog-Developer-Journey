import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare, 
  Heart, 
  Compass, 
  ExternalLink 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenFeedback: () => void;
  onOpenPlatformPreview?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenFeedback,
}) => {
  return (
    <footer className="bg-[#050711] border-t border-white/10 pt-16 pb-12 text-[#AAB4C8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/assets/aistudio/image_8c40476c.png"
                  alt="InnovateX Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">InnovateX</span>
            </div>

            <p className="text-sm font-medium text-white/90">
              Where Student Ideas Become Reality
            </p>

            <p className="text-xs text-[#AAB4C8] max-w-sm leading-relaxed">
              A student-focused platform for engineering and technical students to discover opportunities,
              showcase real projects, collaborate with peers, and build meaningful careers.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/kavyagupta03july-svg"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/kavya-gupta-465058386?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcATmSUZwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp4vBQP3Gw2LJ3gzY-MSKOucf4znj73lQc6-iPtf7nRkZj-867Ar2-WTfnopG_aem_v1Zuog6oOSXDV1uglPnMw"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Platform
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#top"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('top');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#founder"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('founder');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    About & Founder
                  </a>
                </li>
                <li>
                  <a
                    href="#articles"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('articles');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Blogs & Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#journey"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('journey');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Development Journey
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Ecosystem
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#different"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('different');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Student Ideas & Ecosystem
                  </a>
                </li>
                <li>
                  <a
                    href="#journey"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('journey');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Project Milestones
                  </a>
                </li>
                <li>
                  <a
                    href="#opportunities"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('opportunities');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Internships 2026
                  </a>
                </li>
                <li>
                  <a
                    href="#opportunities"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('opportunities');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Hackathons 2026
                  </a>
                </li>
                <li>
                  <a
                    href="#opportunities"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('opportunities');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Jobs 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Connect
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#founder"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('founder');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Contact Founder
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenFeedback}
                    className="hover:text-white transition-colors text-left"
                  >
                    Help Us Improve
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:kavyagupta03july@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    kavyagupta03july@gmail.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB4C8]/80">
          <div>
            © 2026 InnovateX. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built by students, for students.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
