import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { FeaturedArticleCard } from './components/FeaturedArticleCard';
import { CategoryFilter } from './components/CategoryFilter';
import { ArticleCard } from './components/ArticleCard';
import { DevelopmentJourneyTimeline } from './components/DevelopmentJourneyTimeline';
import { ChallengesSection } from './components/ChallengesSection';
import { WhatMakesDifferent } from './components/WhatMakesDifferent';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { TechStack3D } from './components/TechStack3D';
import { FounderSection } from './components/FounderSection';
import { FeedbackSection } from './components/FeedbackSection';
import { FeedbackModal } from './components/FeedbackModal';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ArticleDetailView } from './components/ArticleDetailView';
import { blogArticles } from './data/blogData';
import { BlogArticle, BlogCategory } from './types/blog';
import { filterArticles } from './utils/blogUtils';

const allCategories: BlogCategory[] = [
  'All Articles',
  'Development Journey',
  'Technology',
  'Internships',
  'Hackathons',
  'Job Opportunities',
  'Student Projects',
  'Founder Stories',
  'Product Updates',
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('innovatex_bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  // By default, always start webpage from the top Hero Section (Image 1)
  useEffect(() => {
    // Prevent browser auto-scroll restoration to ensure it always lands at the top
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Clear any stale article hash on initial startup so it starts at the Hero section
    if (window.location.hash && window.location.hash.startsWith('#article=')) {
      history.replaceState(null, '', window.location.pathname);
    }
    setActiveArticle(null);
  }, []);

  const handleReadArticle = (article: BlogArticle) => {
    setActiveArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlogs = () => {
    setActiveArticle(null);
    if (window.location.hash) {
      history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (articleId: string) => {
    setBookmarks((prev) => {
      const updated = prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId];
      try {
        localStorage.setItem('innovatex_bookmarks', JSON.stringify(updated));
      } catch {
        // LocalStorage fallback
      }
      return updated;
    });
  };

  const scrollToSection = (id: string) => {
    if (activeArticle) {
      handleBackToBlogs();
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const elem = document.getElementById(id);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openInnovateXSite = () => {
    const link = document.createElement('a');
    link.href = 'https://innovatex.cc.cd';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered publications
  const filteredArticles = useMemo(() => {
    return filterArticles(blogArticles, activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  const featuredArticle = blogArticles.find((a) => a.isFeatured) || blogArticles[0];

  return (
    <div className="min-h-screen bg-[#080B18] text-[#F8FAFC] selection:bg-[#635BFF] selection:text-white">
      {/* 3-Zone Top Bar Contract */}
      <Navbar
        onOpenFeedback={() => setFeedbackOpen(true)}
        onOpenPlatformPreview={openInnovateXSite}
        activeArticleId={activeArticle?.id}
        onBackToBlogs={handleBackToBlogs}
      />

      {/* Main View Router */}
      {activeArticle ? (
        <ArticleDetailView
          article={activeArticle}
          allArticles={blogArticles}
          onBackToBlogs={handleBackToBlogs}
          onSelectArticle={handleReadArticle}
          isBookmarked={bookmarks.includes(activeArticle.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      ) : (
        <main>
          {/* Section A: 3D Hero Section */}
          <Hero3D
            onExploreBlogs={() => scrollToSection('articles')}
            onExploreJourney={() => scrollToSection('journey')}
            onExploreInnovateX={openInnovateXSite}
          />

          {/* Section B: Featured Blog (Building InnovateX) */}
          <FeaturedArticleCard
            article={featuredArticle}
            onReadArticle={handleReadArticle}
          />

          {/* Section C: Blog Categories & Publications Feed */}
          <section id="articles" className="py-16 sm:py-24 border-b border-white/5 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#635BFF] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
                  Knowledge & Insights
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  InnovateX Publications & Guides
                </h2>
                <p className="text-base text-[#AAB4C8] leading-relaxed">
                  Browse through engineering milestones, tech guides, hackathon strategies,
                  and student opportunities. Filter by category or search topics below.
                </p>
              </div>

              {/* Category Segmented Buttons & Search */}
              <CategoryFilter
                categories={allCategories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                totalCount={filteredArticles.length}
              />

              {/* Publications 3D Cards Grid */}
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onReadArticle={handleReadArticle}
                      isBookmarked={bookmarks.includes(article.id)}
                      onToggleBookmark={handleToggleBookmark}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center rounded-2xl glass-panel p-8 space-y-3">
                  <p className="text-sm text-[#AAB4C8]">
                    No articles found matching "{searchQuery}" in "{activeCategory}".
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('All Articles');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-[#00D4FF] hover:underline"
                  >
                    Clear search and view all articles
                  </button>
                </div>
              )}

            </div>
          </section>

          {/* Section D: Development Journey — Day 1 to Day 20 */}
          <DevelopmentJourneyTimeline />

          {/* Section E: Development Challenges (Challenges Behind the Code) */}
          <ChallengesSection />

          {/* Section F: What Makes InnovateX Different? (6 3D Cards) */}
          <WhatMakesDifferent />

          {/* Section G: Opportunity Updates (Internships, Hackathons, Jobs 2026) */}
          <OpportunitiesSection
            onFilterBlogCategory={(cat) => {
              setActiveCategory(cat);
              scrollToSection('articles');
            }}
          />

          {/* Section H: Technology Stack (10 Verified Technologies) */}
          <TechStack3D />

          {/* Section I & Section 3: Founder Message (Kavya Gupta, B.Tech CSE) */}
          <FounderSection
            onOpenFeedback={() => setFeedbackOpen(true)}
          />

          {/* Section J: Feedback and Community */}
          <FeedbackSection
            onOpenFeedback={() => setFeedbackOpen(true)}
          />

          {/* Section K: Final CTA */}
          <FinalCTA
            onExploreInnovateX={openInnovateXSite}
          />
        </main>
      )}

      {/* Section L: Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenFeedback={() => setFeedbackOpen(true)}
      />

      {/* Interactive Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </div>
  );
}
