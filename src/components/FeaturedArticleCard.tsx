import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { BlogArticle } from '../types/blog';
import { formatDate } from '../utils/blogUtils';

interface FeaturedArticleCardProps {
  article: BlogArticle;
  onReadArticle: (article: BlogArticle) => void;
}

export const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({
  article,
  onReadArticle,
}) => {
  return (
    <section className="py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
            <h2 className="text-xs font-bold tracking-widest text-[#A78BFA] uppercase">
              Featured Publication
            </h2>
          </div>
          <span className="text-xs text-[#AAB4C8]">Founder Story Spotlight</span>
        </div>

        {/* 3D Glassmorphic Featured Container */}
        <div className="group relative rounded-3xl glass-panel border border-white/10 hover:border-[#635BFF]/50 transition-all duration-300 overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#635BFF]/15 blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden bg-[#10172A]">
              <img
                src={article.coverImage}
                alt={article.coverAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to elegant gradient if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B18] via-[#080B18]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#10172A]/90" />
              
              {/* Overlay Unboxed Tag */}
              <div className="absolute top-4 left-4 text-xs font-semibold text-white/90 bg-[#080B18]/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                {article.category}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-[#10172A]/40 backdrop-blur-sm">
              <div className="space-y-4">
                {/* Clean Unboxed Metadata with Typographic Separator */}
                <div className="flex items-center gap-2 text-xs text-[#AAB4C8]">
                  <span className="text-[#00D4FF] font-medium">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#AAB4C8]" />
                    {formatDate(article.publicationDate)}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#AAB4C8]" />
                    {article.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-[#00D4FF] transition-colors">
                  {article.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-[#AAB4C8] leading-relaxed line-clamp-4">
                  {article.shortDescription}
                </p>
              </div>

              {/* Author & Read Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#00D4FF] p-[2px] shrink-0">
                    <div className="w-full h-full bg-[#10172A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      KG
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{article.author.name}</div>
                    <div className="text-[11px] text-[#AAB4C8]">{article.author.education}</div>
                  </div>
                </div>

                <button
                  onClick={() => onReadArticle(article)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] hover:from-[#5249EC] hover:to-[#635BFF] rounded-xl shadow-md shadow-[#635BFF]/30 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
