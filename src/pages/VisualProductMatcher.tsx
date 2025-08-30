import React, { useState, useEffect } from 'react';
import { Search, Eye, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ImageUpload from '@/components/ImageUpload';
import ProductList from '@/components/ProductList';
import FilterBar from '@/components/FilterBar';
import { products } from '@/data/products';
import { findSimilarProducts, analyzeImage } from '@/utils/similarity';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  tags: string[];
  description: string;
  similarity?: number;
}

const VisualProductMatcher: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products.slice(0, 12));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [similarityThreshold, setSimilarityThreshold] = useState(0);
  const [sortBy, setSortBy] = useState('relevance');
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  // Filter and sort products
  useEffect(() => {
    let filtered = hasSearched ? searchResults : products;

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply similarity filter
    if (similarityThreshold > 0 && hasSearched) {
      filtered = filtered.filter(product => 
        product.similarity && product.similarity >= similarityThreshold
      );
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'relevance':
          if (hasSearched && a.similarity && b.similarity) {
            return b.similarity - a.similarity;
          }
          return 0;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    setDisplayedProducts(sorted);
  }, [searchResults, selectedCategory, similarityThreshold, sortBy, hasSearched]);

  const handleImageUpload = async (image: File | string) => {
    setIsAnalyzing(true);
    setUploadedImage(typeof image === 'string' ? image : URL.createObjectURL(image));
    
    try {
      // Analyze the image to extract search terms
      const searchTerms = await analyzeImage(image);
      
      // Find similar products
      const results = await findSimilarProducts(searchTerms);
      
      setSearchResults(results);
      setHasSearched(true);
      setSortBy('relevance');
      
      toast({
        title: "Image analyzed successfully!",
        description: `Found ${results.length} similar products based on visual analysis.`,
      });
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetSearch = () => {
    setUploadedImage(null);
    setSearchResults([]);
    setHasSearched(false);
    setSelectedCategory(null);
    setSimilarityThreshold(0);
    setSortBy('relevance');
    setDisplayedProducts(products.slice(0, 12));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-glow">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Visual Product Matcher
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload an image or enter an image URL to discover visually similar products from our curated collection of over 50 items.
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Image Upload Section */}
          <section>
            <ImageUpload 
              onImageUpload={handleImageUpload}
              isLoading={isAnalyzing}
            />
          </section>

          {/* Results Header with Stats */}
          {(hasSearched || displayedProducts.length > 0) && (
            <section>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold">
                    {hasSearched ? 'Similar Products' : 'All Products'}
                  </h2>
                  {hasSearched && (
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Matched
                    </Badge>
                  )}
                </div>
                
                {hasSearched && (
                  <button
                    onClick={resetSearch}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                  >
                    ← Back to all products
                  </button>
                )}
              </div>

              {/* Filters */}
              <FilterBar
                onCategoryFilter={setSelectedCategory}
                onSimilarityFilter={setSimilarityThreshold}
                onSortChange={setSortBy}
                selectedCategory={selectedCategory}
                similarityThreshold={similarityThreshold}
                sortBy={sortBy}
                totalProducts={displayedProducts.length}
                showSimilarityFilter={hasSearched}
              />
            </section>
          )}

          {/* Products Display */}
          <section>
            <ProductList
              products={displayedProducts}
              isLoading={isAnalyzing}
              searchQuery={hasSearched ? 'visual search' : undefined}
              showSimilarity={hasSearched}
              title={hasSearched ? 'Visual Matches' : 'Featured Products'}
            />
          </section>

          {/* How It Works */}
          {!hasSearched && (
            <section className="mt-16">
              <Card className="p-8 bg-gradient-card shadow-large">
                <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto shadow-medium">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-semibold">Upload Image</h4>
                    <p className="text-muted-foreground">
                      Upload any product image or provide an image URL to start the visual search process.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto shadow-medium">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-semibold">AI Analysis</h4>
                    <p className="text-muted-foreground">
                      Our AI analyzes visual features, colors, shapes, and characteristics to understand your image.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto shadow-medium">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h4 className="text-lg font-semibold">Find Matches</h4>
                    <p className="text-muted-foreground">
                      Discover visually similar products ranked by relevance with detailed similarity scores.
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualProductMatcher;