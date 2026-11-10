import { BlogArticle, BlogCategory, FeedbackSubmission } from '../types/blog';

/**
 * Filter blog articles by category and case-insensitive search term
 */
export function filterArticles(
  articles: BlogArticle[],
  selectedCategory: BlogCategory,
  searchQuery: string
): BlogArticle[] {
  const query = searchQuery.trim().toLowerCase();

  return articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All Articles' || article.category === selectedCategory;

    if (!matchesCategory) return false;

    if (!query) return true;

    const matchesTitle = article.title.toLowerCase().includes(query);
    const matchesDesc = article.shortDescription.toLowerCase().includes(query);
    const matchesTags = article.tags.some((tag) => tag.toLowerCase().includes(query));
    const matchesAuthor = article.author.name.toLowerCase().includes(query);

    return matchesTitle || matchesDesc || matchesTags || matchesAuthor;
  });
}

/**
 * Calculate estimated reading time based on 200 words per minute
 */
export function calculateReadingTime(text: string): string {
  if (!text || text.trim().length === 0) return '1 min read';
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

/**
 * Format ISO date string into readable English date
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Find related articles sharing category or tags, excluding current article
 */
export function getRelatedArticles(
  currentArticle: BlogArticle,
  allArticles: BlogArticle[],
  limit = 3
): BlogArticle[] {
  const others = allArticles.filter((a) => a.id !== currentArticle.id);

  const scored = others.map((art) => {
    let score = 0;
    if (art.category === currentArticle.category) score += 3;
    const commonTags = art.tags.filter((t) => currentArticle.tags.includes(t));
    score += commonTags.length;
    return { article: art, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.article);
}

/**
 * Validate feedback submission
 */
export function validateFeedbackForm(form: Partial<FeedbackSubmission>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!form.category) {
    errors.category = 'Please select a feedback category.';
  }

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Please provide your name (at least 2 characters).';
  }

  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Please share your feedback in detail (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
