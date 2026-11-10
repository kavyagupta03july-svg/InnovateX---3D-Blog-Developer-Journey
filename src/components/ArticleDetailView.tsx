import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  BookmarkCheck, 
  Clock, 
  Calendar, 
  Check, 
  BookOpen, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { BlogArticle } from '../types/blog';
import { formatDate, getRelatedArticles } from '../utils/blogUtils';

interface ArticleDetailViewProps {
  article: BlogArticle;
  allArticles: BlogArticle[];
  onBackToBlogs: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  allArticles,
  onBackToBlogs,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    // Scroll to top when opening an article
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#article=${article.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const relatedArticles = getRelatedArticles(article, allArticles, 3);

  return (
    <div className="min-h-screen pt-20 pb-24 relative bg-[#080B18]">
      {/* Reading Progress Indicator at top */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-white/5 z-40">
        <div
          className="h-full bg-gradient-to-r from-[#635BFF] via-[#7B73FF] to-[#00D4FF] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Bar / Back button */}
        <div className="flex items-center justify-between pt-4">
          <button
            onClick={onBackToBlogs}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#AAB4C8] hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blogs</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(article.id)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-[#00D4FF]" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={handleShare}
              className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/90 hover:text-white transition-colors flex items-center gap-1.5"
              title="Share article URL"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#AAB4C8]">
            <span className="text-[#00D4FF] font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(article.publicationDate)}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#AAB4C8] leading-relaxed">
            {article.shortDescription}
          </p>

          {/* Author Block */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#00D4FF] p-[2px]">
              <div className="w-full h-full bg-[#10172A] rounded-full flex items-center justify-center font-bold text-white text-sm">
                KG
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white">{article.author.name}</div>
              <div className="text-xs text-[#AAB4C8]">
                {article.author.role} · {article.author.education}
              </div>
            </div>
          </div>
        </header>

        {/* Cover Media */}
        <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-[#10172A] border border-white/10 shadow-2xl">
          <img
            src={article.coverImage}
            alt={article.coverAlt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Table of Contents for Long Articles */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <nav aria-label="Table of contents" className="p-6 rounded-2xl bg-[#10172A]/70 border border-white/10 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
              Table of Contents
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {article.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="text-[#AAB4C8] hover:text-[#00D4FF] transition-colors flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>{toc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Full Article Content */}
        <article className="prose prose-invert max-w-none space-y-6 text-[#F8FAFC]/90 text-base sm:text-lg leading-relaxed font-normal">
          <div className="whitespace-pre-line leading-relaxed space-y-4">
            {article.fullContent}
          </div>
        </article>

        {/* Tags */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#AAB4C8]">Tags:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#A78BFA] bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="pt-12 border-t border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Related Publications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="p-4 rounded-xl glass-card-interactive border border-white/5 hover:border-[#635BFF]/40 cursor-pointer flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-[#00D4FF]">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#AAB4C8] pt-2 border-t border-white/5">
                    <span>{rel.readingTime}</span>
                    <span className="text-[#A78BFA] flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={onBackToBlogs}
            className="px-6 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Blogs & Journey</span>
          </button>
        </div>

      </div>
    </div>
  );
};
