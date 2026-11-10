import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Bookmark, BookmarkCheck } from 'lucide-react';
import { BlogArticle } from '../types/blog';
import { formatDate } from '../utils/blogUtils';

interface ArticleCardProps {
  article: BlogArticle;
  onReadArticle: (article: BlogArticle) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadArticle,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onReadArticle(article)}
      className="group relative rounded-2xl glass-card-interactive p-5 flex flex-col justify-between cursor-pointer border border-white/5 hover:border-[#635BFF]/40 transition-all duration-300"
    >
      <div className="space-y-4">
        {/* Cover Media */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#10172A]">
          {!imageError ? (
            <img
              src={article.coverImage}
              alt={article.coverAlt}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#10172A] via-[#162038] to-[#635BFF]/20 text-[#AAB4C8] text-xs font-mono p-4 text-center">
              <span>{article.title}</span>
            </div>
          )}

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(article.id);
            }}
            className="absolute top-2.5 right-2.5 p-2 rounded-lg bg-[#080B18]/70 hover:bg-[#080B18] backdrop-blur-md border border-white/10 text-white/80 hover:text-white transition-colors"
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-[#00D4FF]" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Unboxed Metadata Line */}
        <div className="flex items-center gap-2 text-xs text-[#AAB4C8]">
          <span className="font-semibold text-[#00D4FF]">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#AAB4C8]/80" />
            {formatDate(article.publicationDate)}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#AAB4C8]/80" />
            {article.readingTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors line-clamp-2 leading-snug">
          {article.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#AAB4C8] line-clamp-3 leading-relaxed">
          {article.shortDescription}
        </p>
      </div>

      {/* Card Footer: Author & Action */}
      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#00D4FF] flex items-center justify-center text-[10px] font-bold text-white">
            KG
          </div>
          <span className="text-xs text-[#AAB4C8] font-medium">{article.author.name}</span>
        </div>

        <span className="text-xs font-semibold text-[#A78BFA] group-hover:text-white flex items-center gap-1 transition-colors">
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </article>
  );
};
