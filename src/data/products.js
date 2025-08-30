// Visual Product Matcher - Product Database
// 50+ products with metadata for similarity matching

export const products = [
  // Electronics
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    tags: ["wireless", "headphones", "audio", "black", "premium"],
    description: "Premium wireless headphones with active noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch Series 9",
    category: "Electronics",
    price: 399.99,
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    tags: ["smartwatch", "wearable", "fitness", "technology", "sleek"],
    description: "Advanced smartwatch with health monitoring features"
  },
  {
    id: 3,
    name: "Professional DSLR Camera",
    category: "Electronics",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    tags: ["camera", "photography", "professional", "black", "lens"],
    description: "High-end DSLR camera for professional photography"
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    category: "Electronics",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    tags: ["keyboard", "gaming", "mechanical", "rgb", "backlit"],
    description: "RGB mechanical keyboard designed for gaming"
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    category: "Electronics",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    tags: ["mouse", "gaming", "wireless", "precision", "ergonomic"],
    description: "High-precision wireless gaming mouse"
  },

  // Fashion - Men's
  {
    id: 6,
    name: "Classic Leather Jacket",
    category: "Fashion",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    tags: ["jacket", "leather", "men", "black", "classic"],
    description: "Timeless black leather jacket for men"
  },
  {
    id: 7,
    name: "Premium Cotton T-Shirt",
    category: "Fashion",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    tags: ["tshirt", "cotton", "casual", "white", "basic"],
    description: "High-quality cotton t-shirt in classic white"
  },
  {
    id: 8,
    name: "Slim Fit Jeans",
    category: "Fashion",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    tags: ["jeans", "denim", "slim", "blue", "casual"],
    description: "Comfortable slim-fit blue jeans"
  },
  {
    id: 9,
    name: "Canvas Sneakers",
    category: "Fashion",
    price: 65.99,
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    tags: ["sneakers", "canvas", "white", "casual", "comfortable"],
    description: "Classic white canvas sneakers"
  },
  {
    id: 10,
    name: "Wool Blend Sweater",
    category: "Fashion",
    price: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    tags: ["sweater", "wool", "warm", "cozy", "winter"],
    description: "Comfortable wool blend sweater for cold weather"
  },

  // Fashion - Women's
  {
    id: 11,
    name: "Elegant Evening Dress",
    category: "Fashion",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1566479179817-c7a4857e9908?w=400&h=400&fit=crop",
    tags: ["dress", "elegant", "evening", "black", "formal"],
    description: "Sophisticated black evening dress"
  },
  {
    id: 12,
    name: "Designer Handbag",
    category: "Fashion",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    tags: ["handbag", "designer", "leather", "luxury", "accessories"],
    description: "Luxury leather designer handbag"
  },
  {
    id: 13,
    name: "High Heel Pumps",
    category: "Fashion",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
    tags: ["heels", "pumps", "elegant", "black", "formal"],
    description: "Classic black high heel pumps"
  },
  {
    id: 14,
    name: "Floral Summer Blouse",
    category: "Fashion",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?w=400&h=400&fit=crop",
    tags: ["blouse", "floral", "summer", "colorful", "feminine"],
    description: "Lightweight floral blouse perfect for summer"
  },
  {
    id: 15,
    name: "Denim Jacket",
    category: "Fashion",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop",
    tags: ["jacket", "denim", "casual", "blue", "versatile"],
    description: "Classic blue denim jacket for casual wear"
  },

  // Home & Living
  {
    id: 16,
    name: "Modern Accent Chair",
    category: "Home",
    price: 349.99,
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    tags: ["chair", "modern", "furniture", "accent", "comfortable"],
    description: "Stylish modern accent chair for living room"
  },
  {
    id: 17,
    name: "Ceramic Table Lamp",
    category: "Home",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    tags: ["lamp", "ceramic", "lighting", "table", "decorative"],
    description: "Elegant ceramic table lamp with fabric shade"
  },
  {
    id: 18,
    name: "Throw Pillow Set",
    category: "Home",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    tags: ["pillows", "throw", "decorative", "soft", "colorful"],
    description: "Set of decorative throw pillows for sofa"
  },
  {
    id: 19,
    name: "Wooden Coffee Table",
    category: "Home",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop",
    tags: ["table", "wood", "coffee", "furniture", "rustic"],
    description: "Rustic wooden coffee table for living room"
  },
  {
    id: 20,
    name: "Wall Art Canvas Print",
    category: "Home",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    tags: ["art", "canvas", "wall", "decorative", "abstract"],
    description: "Modern abstract canvas wall art"
  },

  // Sports & Fitness
  {
    id: 21,
    name: "Yoga Mat Premium",
    category: "Sports",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    tags: ["yoga", "mat", "fitness", "exercise", "non-slip"],
    description: "High-quality non-slip yoga mat"
  },
  {
    id: 22,
    name: "Adjustable Dumbbells",
    category: "Sports",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop",
    tags: ["dumbbells", "weights", "fitness", "adjustable", "gym"],
    description: "Space-saving adjustable dumbbells set"
  },
  {
    id: 23,
    name: "Running Shoes",
    category: "Sports",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    tags: ["shoes", "running", "athletic", "comfortable", "sport"],
    description: "Lightweight running shoes with cushioned sole"
  },
  {
    id: 24,
    name: "Resistance Bands Set",
    category: "Sports",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    tags: ["resistance", "bands", "exercise", "portable", "strength"],
    description: "Complete resistance bands set for home workouts"
  },
  {
    id: 25,
    name: "Sports Water Bottle",
    category: "Sports",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    tags: ["bottle", "water", "sports", "hydration", "stainless"],
    description: "Insulated stainless steel sports water bottle"
  },

  // Books & Media
  {
    id: 26,
    name: "Personal Development Book",
    category: "Books",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    tags: ["book", "self-help", "development", "reading", "motivation"],
    description: "Inspiring personal development book"
  },
  {
    id: 27,
    name: "Cookbook Collection",
    category: "Books",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8185d8?w=400&h=400&fit=crop",
    tags: ["cookbook", "recipes", "cooking", "food", "kitchen"],
    description: "Comprehensive cookbook with international recipes"
  },
  {
    id: 28,
    name: "Fiction Novel Bestseller",
    category: "Books",
    price: 16.99,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    tags: ["novel", "fiction", "bestseller", "reading", "literature"],
    description: "Award-winning fiction novel"
  },

  // Beauty & Personal Care
  {
    id: 29,
    name: "Skincare Serum Set",
    category: "Beauty",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1556228149-d75a8b83ce37?w=400&h=400&fit=crop",
    tags: ["skincare", "serum", "beauty", "anti-aging", "luxury"],
    description: "Premium anti-aging skincare serum set"
  },
  {
    id: 30,
    name: "Professional Makeup Brush Set",
    category: "Beauty",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
    tags: ["makeup", "brushes", "professional", "beauty", "cosmetics"],
    description: "Complete professional makeup brush set"
  },

  // Kitchen & Dining
  {
    id: 31,
    name: "Stainless Steel Cookware Set",
    category: "Kitchen",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    tags: ["cookware", "stainless", "kitchen", "pots", "professional"],
    description: "Professional stainless steel cookware set"
  },
  {
    id: 32,
    name: "Coffee Maker Deluxe",
    category: "Kitchen",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    tags: ["coffee", "maker", "appliance", "brewing", "automatic"],
    description: "Automatic drip coffee maker with programmable features"
  },
  {
    id: 33,
    name: "Ceramic Dinner Plates Set",
    category: "Kitchen",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    tags: ["plates", "ceramic", "dinner", "tableware", "elegant"],
    description: "Elegant ceramic dinner plates set for 6"
  },

  // Toys & Games
  {
    id: 34,
    name: "Educational Building Blocks",
    category: "Toys",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1558877385-69a51ce7d1e5?w=400&h=400&fit=crop",
    tags: ["toys", "blocks", "educational", "children", "building"],
    description: "Colorful educational building blocks for kids"
  },
  {
    id: 35,
    name: "Board Game Classic",
    category: "Toys",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop",
    tags: ["board", "game", "family", "entertainment", "classic"],
    description: "Classic family board game for all ages"
  },

  // Garden & Outdoor
  {
    id: 36,
    name: "Succulent Plant Collection",
    category: "Garden",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop",
    tags: ["plants", "succulent", "garden", "indoor", "green"],
    description: "Collection of easy-care succulent plants"
  },
  {
    id: 37,
    name: "Garden Tool Set",
    category: "Garden",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    tags: ["tools", "garden", "gardening", "equipment", "outdoor"],
    description: "Essential garden tool set for outdoor gardening"
  },

  // Tech Accessories
  {
    id: 38,
    name: "Wireless Phone Charger",
    category: "Electronics",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1609552430057-e2d10cd6e53d?w=400&h=400&fit=crop",
    tags: ["charger", "wireless", "phone", "technology", "convenient"],
    description: "Fast wireless charging pad for smartphones"
  },
  {
    id: 39,
    name: "Bluetooth Speaker Portable",
    category: "Electronics",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    tags: ["speaker", "bluetooth", "portable", "audio", "wireless"],
    description: "Compact portable Bluetooth speaker with rich sound"
  },
  {
    id: 40,
    name: "USB-C Hub Multi-Port",
    category: "Electronics",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
    tags: ["hub", "usbc", "ports", "connectivity", "adapter"],
    description: "Multi-port USB-C hub with HDMI and card readers"
  },

  // Jewelry & Accessories
  {
    id: 41,
    name: "Minimalist Watch",
    category: "Accessories",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    tags: ["watch", "minimalist", "elegant", "timepiece", "classic"],
    description: "Sleek minimalist watch with leather strap"
  },
  {
    id: 42,
    name: "Sterling Silver Necklace",
    category: "Accessories",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    tags: ["necklace", "silver", "jewelry", "elegant", "pendant"],
    description: "Elegant sterling silver pendant necklace"
  },

  // Pet Supplies
  {
    id: 43,
    name: "Dog Bed Orthopedic",
    category: "Pets",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
    tags: ["dog", "bed", "pet", "orthopedic", "comfortable"],
    description: "Orthopedic dog bed for joint support and comfort"
  },
  {
    id: 44,
    name: "Cat Scratching Post",
    category: "Pets",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=400&fit=crop",
    tags: ["cat", "scratching", "post", "pet", "furniture"],
    description: "Tall scratching post with multiple levels for cats"
  },

  // Musical Instruments
  {
    id: 45,
    name: "Acoustic Guitar Beginner",
    category: "Music",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    tags: ["guitar", "acoustic", "music", "instrument", "beginner"],
    description: "Quality acoustic guitar perfect for beginners"
  },
  {
    id: 46,
    name: "Digital Piano Keyboard",
    category: "Music",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=400&fit=crop",
    tags: ["piano", "keyboard", "digital", "music", "instrument"],
    description: "88-key digital piano with weighted keys"
  },

  // Art & Craft
  {
    id: 47,
    name: "Watercolor Paint Set",
    category: "Art",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    tags: ["paint", "watercolor", "art", "creative", "supplies"],
    description: "Professional watercolor paint set with brushes"
  },
  {
    id: 48,
    name: "Sketchbook Premium",
    category: "Art",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop",
    tags: ["sketchbook", "drawing", "art", "paper", "premium"],
    description: "High-quality sketchbook with thick drawing paper"
  },

  // Automotive
  {
    id: 49,
    name: "Car Phone Mount",
    category: "Automotive",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop",
    tags: ["car", "mount", "phone", "automotive", "accessories"],
    description: "Secure magnetic car phone mount for dashboard"
  },
  {
    id: 50,
    name: "Car Air Freshener Set",
    category: "Automotive",
    price: 14.99,
    imageUrl: "https://images.unsplash.com/photo-1517654133267-d7b8e7a03a6c?w=400&h=400&fit=crop",
    tags: ["air", "freshener", "car", "automotive", "scent"],
    description: "Long-lasting car air freshener set in various scents"
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Helper function to search products by tags or name
export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
};

// Helper function to get unique categories
export const getCategories = () => {
  return [...new Set(products.map(product => product.category))];
};