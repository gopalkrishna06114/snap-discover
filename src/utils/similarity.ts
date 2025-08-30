import { products } from '@/data/products';

// Simple similarity scoring based on tags, category, and image analysis
export const calculateSimilarity = (searchTags: string[], product: any): number => {
  let score = 0;
  const totalFactors = 4;

  // Tag matching (40% weight)
  const tagMatches = searchTags.filter(tag => 
    product.tags.some((productTag: string) => 
      productTag.toLowerCase().includes(tag.toLowerCase()) ||
      tag.toLowerCase().includes(productTag.toLowerCase())
    )
  ).length;
  
  const tagScore = searchTags.length > 0 ? tagMatches / searchTags.length : 0;
  score += tagScore * 0.4;

  // Category bonus (20% weight)
  const categoryBonus = searchTags.some(tag => 
    product.category.toLowerCase().includes(tag.toLowerCase())
  ) ? 0.2 : 0;
  score += categoryBonus;

  // Name similarity (20% weight)
  const nameMatches = searchTags.filter(tag =>
    product.name.toLowerCase().includes(tag.toLowerCase())
  ).length;
  const nameScore = searchTags.length > 0 ? nameMatches / searchTags.length : 0;
  score += nameScore * 0.2;

  // Random visual similarity simulation (20% weight)
  // In a real app, this would use actual image analysis
  const visualSimilarity = Math.random() * 0.2;
  score += visualSimilarity;

  return Math.min(score, 1); // Cap at 1.0
};

// Enhanced similarity using color and visual features
export const findSimilarProducts = async (
  searchTerms: string[],
  imageAnalysis?: any
): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const similarProducts = products
        .map(product => ({
          ...product,
          similarity: calculateSimilarity(searchTerms, product)
        }))
        .filter(product => product.similarity > 0.1)
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 20); // Return top 20 matches

      resolve(similarProducts);
    }, 1500); // Simulate processing time
  });
};

// Extract search terms from image (simulated)
export const analyzeImage = async (imageFile: File | string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate image analysis - in reality this would use AI/ML
      const commonTerms = [
        ['electronics', 'technology', 'gadget', 'device'],
        ['fashion', 'clothing', 'apparel', 'style'],
        ['home', 'furniture', 'decor', 'interior'],
        ['sports', 'fitness', 'exercise', 'athletic'],
        ['book', 'reading', 'literature', 'education'],
        ['beauty', 'cosmetics', 'skincare', 'makeup'],
        ['kitchen', 'cooking', 'appliance', 'food'],
        ['toy', 'game', 'entertainment', 'fun'],
        ['garden', 'plant', 'outdoor', 'nature'],
        ['automotive', 'car', 'vehicle', 'transport']
      ];

      // Randomly select a category to simulate analysis
      const randomCategory = commonTerms[Math.floor(Math.random() * commonTerms.length)];
      const additionalTerms = ['modern', 'premium', 'quality', 'comfortable', 'durable'];
      
      // Add some random additional descriptors
      const selectedTerms = [
        ...randomCategory,
        ...additionalTerms.filter(() => Math.random() > 0.7)
      ];

      resolve(selectedTerms);
    }, 1000);
  });
};