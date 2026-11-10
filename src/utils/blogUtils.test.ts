import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterArticles,
  calculateReadingTime,
  formatDate,
  getRelatedArticles,
  validateFeedbackForm,
} from './blogUtils';
import { BlogArticle } from '../types/blog';

const mockArticles: BlogArticle[] = [
  {
    id: 'art-1',
    slug: 'building-innovatex',
    title: 'Building InnovateX: From an Idea to a Student Collaboration Platform',
    category: 'Founder Stories',
    shortDescription: 'Every meaningful product begins with a problem worth solving.',
    coverImage: '/src/assets/images/article_building_innovatex_1794321529136.jpg',
    coverAlt: 'Building InnovateX',
    fullContent: 'Content of article 1 with enough words to verify reading time.',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder & Developer',
      education: 'B.Tech CSE',
    },
    publicationDate: '2026-03-01',
    readingTime: '5 min read',
    tags: ['founder', 'react', 'collaboration'],
    publicationStatus: 'published',
    isFeatured: true,
  },
  {
    id: 'art-2',
    slug: 'firebase-collaboration',
    title: 'Real-Time Collaboration with Firebase and React',
    category: 'Technology',
    shortDescription: 'Architecting live student collaboration without state desync.',
    coverImage: '/src/assets/images/article_student_collaboration_1794321528469.jpg',
    coverAlt: 'Firebase Collaboration',
    fullContent: 'Firebase integration and rules management for student projects.',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder & Developer',
      education: 'B.Tech CSE',
    },
    publicationDate: '2026-03-05',
    readingTime: '4 min read',
    tags: ['firebase', 'react', 'architecture'],
    publicationStatus: 'published',
    isFeatured: false,
  },
  {
    id: 'art-3',
    slug: 'hackathons-2026',
    title: 'Top Hackathons for Engineering Students in 2026',
    category: 'Hackathons',
    shortDescription: 'Discover upcoming hackathons, innovation challenges and team building.',
    coverImage: '/src/assets/images/article_future_roadmap_1794321529253.jpg',
    coverAlt: 'Hackathons 2026',
    fullContent: 'Guide to preparing for technical hackathons.',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder & Developer',
      education: 'B.Tech CSE',
    },
    publicationDate: '2026-03-08',
    readingTime: '3 min read',
    tags: ['hackathon', 'students', 'collaboration'],
    publicationStatus: 'published',
    isFeatured: false,
  },
];

test('filterArticles filters by category correctly', () => {
  const result = filterArticles(mockArticles, 'Technology', '');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'art-2');
});

test('filterArticles returns all when category is All Articles', () => {
  const result = filterArticles(mockArticles, 'All Articles', '');
  assert.equal(result.length, 3);
});

test('filterArticles filters by search query matching title or tags', () => {
  const titleSearch = filterArticles(mockArticles, 'All Articles', 'hackathons');
  assert.equal(titleSearch.length, 1);
  assert.equal(titleSearch[0].id, 'art-3');

  const tagSearch = filterArticles(mockArticles, 'All Articles', 'react');
  assert.equal(tagSearch.length, 2);
});

test('calculateReadingTime calculates correct estimate', () => {
  assert.equal(calculateReadingTime(''), '1 min read');
  const hundredWords = new Array(100).fill('word').join(' ');
  assert.equal(calculateReadingTime(hundredWords), '1 min read');
  const threeHundredWords = new Array(350).fill('word').join(' ');
  assert.equal(calculateReadingTime(threeHundredWords), '2 min read');
});

test('formatDate outputs localized readable string', () => {
  const formatted = formatDate('2026-03-01T00:00:00Z');
  assert.ok(formatted.includes('2026'));
  assert.ok(formatted.includes('Mar'));
});

test('getRelatedArticles prioritizes category and tag overlap', () => {
  const related = getRelatedArticles(mockArticles[0], mockArticles, 2);
  assert.equal(related.length, 2);
  // art-2 shares 'react' and 'collaboration' tags
  assert.equal(related[0].id, 'art-2');
});

test('validateFeedbackForm catches invalid and valid inputs', () => {
  const invalidResult = validateFeedbackForm({
    category: undefined,
    name: '',
    email: 'not-an-email',
    message: 'short',
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.category);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.message);

  const validResult = validateFeedbackForm({
    category: 'Website loading and performance',
    name: 'Student Contributor',
    email: 'student@example.edu',
    message: 'The 3D cards load quickly and the timeline is very helpful!',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});
