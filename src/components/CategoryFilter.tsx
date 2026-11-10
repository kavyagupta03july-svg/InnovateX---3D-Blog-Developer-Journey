import React from 'react';
import { Search, X } from 'lucide-react';
import { BlogCategory } from '../types/blog';

interface CategoryFilterProps {
  categories: BlogCategory[];
  activeCategory: BlogCategory;
  onSelectCategory: (category: BlogCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
}) => {
  return (
    <div className="space-y-4">
      {/* Search Input Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAB4C8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles by title, tag, or topic..."
            className="w-full pl-10 pr-9 py-2.5 bg-[#10172A] border border-white/10 focus:border-[#635BFF] focus:outline-none rounded-xl text-sm text-white placeholder-[#AAB4C8]/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAB4C8] hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Count indicator */}
        <div className="text-xs text-[#AAB4C8] flex items-center gap-1.5 self-center sm:self-auto">
          <span>Showing</span>
          <span className="font-semibold text-white tabular-nums">{totalCount}</span>
          <span>publications</span>
        </div>
      </div>

      {/* Segmented Category Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#635BFF] to-[#7B73FF] text-white shadow-md shadow-[#635BFF]/30'
                  : 'bg-[#10172A] hover:bg-[#162038] text-[#AAB4C8] hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
