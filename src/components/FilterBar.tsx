import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Filter, X, Sliders } from 'lucide-react';
import { getCategories } from '@/data/products';

interface FilterBarProps {
  onCategoryFilter: (category: string | null) => void;
  onSimilarityFilter: (similarity: number) => void;
  onSortChange: (sort: string) => void;
  selectedCategory: string | null;
  similarityThreshold: number;
  sortBy: string;
  totalProducts: number;
  showSimilarityFilter?: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onCategoryFilter,
  onSimilarityFilter,
  onSortChange,
  selectedCategory,
  similarityThreshold,
  sortBy,
  totalProducts,
  showSimilarityFilter = false
}) => {
  const categories = getCategories();

  const clearFilters = () => {
    onCategoryFilter(null);
    onSimilarityFilter(0);
    onSortChange('relevance');
  };

  const hasActiveFilters = selectedCategory || similarityThreshold > 0;

  return (
    <Card className="p-4 space-y-4 shadow-medium">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sliders className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Filters</h3>
          <Badge variant="secondary" className="text-xs">
            {totalProducts} results
          </Badge>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Category</label>
          <Select
            value={selectedCategory || "all"}
            onValueChange={(value) => onCategoryFilter(value === "all" ? null : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Similarity Filter */}
        {showSimilarityFilter && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Minimum Similarity: {Math.round(similarityThreshold * 100)}%
            </label>
            <div className="px-2">
              <Slider
                value={[similarityThreshold]}
                onValueChange={(value) => onSimilarityFilter(value[0])}
                max={1}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* Sort By */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Sort by</label>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {showSimilarityFilter && (
                <SelectItem value="relevance">Relevance</SelectItem>
              )}
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="category">Category</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick Category Buttons (on smaller screens, this moves to a new row) */}
        <div className="space-y-2 md:col-span-2 lg:col-span-1">
          <label className="text-sm font-medium text-foreground">Quick filters</label>
          <div className="flex flex-wrap gap-2">
            {['Electronics', 'Fashion', 'Home', 'Sports'].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryFilter(selectedCategory === category ? null : category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedCategory && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => onCategoryFilter(null)}>
              {selectedCategory}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          )}
          {similarityThreshold > 0 && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => onSimilarityFilter(0)}>
              Similarity ≥ {Math.round(similarityThreshold * 100)}%
              <X className="w-3 h-3 ml-1" />
            </Badge>
          )}
        </div>
      )}
    </Card>
  );
};

export default FilterBar;