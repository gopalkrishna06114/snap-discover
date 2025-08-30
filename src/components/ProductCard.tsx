import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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

interface ProductCardProps {
  product: Product;
  className?: string;
  showSimilarity?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className,
  showSimilarity = false 
}) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden bg-card hover:shadow-large transition-all duration-300 cursor-pointer hover:-translate-y-1",
      className
    )}>
      {/* Similarity Badge */}
      {showSimilarity && product.similarity && (
        <Badge 
          variant="secondary" 
          className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground shadow-medium"
        >
          {Math.round(product.similarity * 100)}% match
        </Badge>
      )}
      
      {/* Product Image */}
      <div className="aspect-square bg-muted overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category Badge */}
        <Badge variant="outline" className="text-xs">
          {product.category}
        </Badge>
        
        {/* Product Name */}
        <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-lg font-bold text-primary">
            ${product.price}
          </span>
          
          {/* Quick View Button */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-xs text-accent-foreground bg-accent hover:bg-accent/80 px-3 py-1 rounded-full transition-colors">
              View Details
            </div>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-accent-soft text-accent-foreground px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          {product.tags.length > 3 && (
            <span className="text-xs text-muted-foreground px-2 py-0.5">
              +{product.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;