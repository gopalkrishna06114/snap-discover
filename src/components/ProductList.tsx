import React from 'react';
import ProductCard from './ProductCard';
import { Card } from '@/components/ui/card';
import { Search, Sparkles } from 'lucide-react';

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

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
  searchQuery?: string;
  showSimilarity?: boolean;
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  isLoading = false,
  searchQuery,
  showSimilarity = false,
  title = "Products"
}) => {
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="text-lg text-muted-foreground">Finding similar products...</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="animate-pulse">
              <div className="aspect-square bg-muted"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-muted rounded w-20"></div>
                <div className="h-5 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
                <div className="flex justify-between items-center pt-2">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-6 bg-muted rounded w-20"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full">
        <Card className="p-12 text-center space-y-4 shadow-medium">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold">No products found</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {searchQuery 
              ? `We couldn't find any products matching your search. Try uploading a different image or using different keywords.`
              : "Upload an image to discover visually similar products from our collection."
            }
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {showSimilarity && <Sparkles className="w-5 h-5 text-primary" />}
          <h2 className="text-2xl font-bold">
            {title}
          </h2>
          <span className="text-muted-foreground">({products.length})</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showSimilarity={showSimilarity}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;