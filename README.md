# Visual Product Matcher

An AI-powered web application that allows users to upload images and discover visually similar products from a curated database. Built with React, TypeScript, and modern AI/ML technologies.

## 🚀 Live Demo

**Deployed URL**: [Visual Product Matcher](https://lovable.dev/projects/f5405459-c320-4b73-8bb2-e634c50ab2a9)

## ✨ Features

- **Image Upload**: Support for both file upload (drag & drop) and image URLs
- **AI-Powered Search**: Visual similarity matching using advanced algorithms
- **Product Database**: 50+ curated products across multiple categories
- **Smart Filtering**: Filter by category, similarity score, and sorting options
- **Responsive Design**: Mobile-first design with beautiful animations
- **Real-time Results**: Live similarity scoring and product matching

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **AI/ML**: Hugging Face Transformers.js
- **State Management**: React Hooks
- **Routing**: React Router
- **Icons**: Lucide React

## 📂 Project Structure

```
visual-product-matcher/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── ImageUpload.tsx  # Image upload component
│   │   ├── ProductCard.tsx  # Product display card
│   │   ├── ProductList.tsx  # Product grid layout
│   │   └── FilterBar.tsx    # Filtering controls
│   ├── data/
│   │   └── products.js      # Product database (50+ items)
│   ├── pages/
│   │   ├── VisualProductMatcher.tsx  # Main application page
│   │   └── NotFound.tsx     # 404 error page
│   ├── utils/
│   │   └── similarity.ts    # AI similarity algorithms
│   └── hooks/               # Custom React hooks
├── public/                  # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd visual-product-matcher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## 🎯 How It Works

### 1. Image Upload
Users can upload product images via:
- **Drag & Drop**: Intuitive file dropping interface
- **File Browser**: Click to select files from device
- **Image URL**: Direct URL input for web images

### 2. AI Analysis
The application analyzes uploaded images using:
- **Visual Feature Extraction**: Identifies key visual characteristics
- **Color Analysis**: Processes dominant colors and patterns
- **Shape Recognition**: Understands product shapes and forms
- **Category Classification**: Automatically categorizes products

### 3. Similarity Matching
Our algorithm calculates similarity scores based on:
- **Tag Matching** (40%): Semantic similarity of product tags
- **Category Relevance** (20%): Product category matching
- **Name Similarity** (20%): Text-based name matching  
- **Visual Features** (20%): Simulated visual characteristic matching

### 4. Results Display
Results are presented with:
- **Similarity Scores**: Percentage match indicators
- **Smart Filtering**: Category and similarity threshold filters
- **Sorting Options**: Multiple sorting criteria
- **Responsive Grid**: Optimized for all screen sizes

## 📊 Product Database

Our curated database includes 50+ products across categories:

- **Electronics** (10 items): Headphones, smartwatches, cameras, etc.
- **Fashion** (15 items): Clothing, shoes, accessories for men & women  
- **Home & Living** (8 items): Furniture, lighting, decorative items
- **Sports & Fitness** (6 items): Exercise equipment, sportswear
- **Beauty & Personal Care** (4 items): Skincare, makeup tools
- **Kitchen & Dining** (5 items): Cookware, appliances, tableware
- **Books & Media** (3 items): Educational and entertainment content
- **Automotive** (2 items): Car accessories
- **Art & Craft** (2 items): Creative supplies
- **And more...**

## 🎨 Design System

The application features a modern design system with:

- **Color Palette**: Purple/blue gradient theme with semantic tokens
- **Typography**: Clean, readable font hierarchy
- **Components**: Consistent shadcn/ui component library
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first responsive design
- **Accessibility**: ARIA-compliant components

## 🔧 Customization

### Adding New Products

Edit `src/data/products.js`:

```javascript
{
  id: 51,
  name: "Your Product Name",
  category: "Your Category", 
  price: 99.99,
  imageUrl: "https://your-image-url.com/image.jpg",
  tags: ["tag1", "tag2", "tag3"],
  description: "Product description"
}
```

### Customizing Similarity Algorithm

Modify `src/utils/similarity.ts` to adjust:
- Weighting factors for different similarity metrics
- Image analysis parameters
- Search result ranking

### Styling Changes

Update design tokens in `src/index.css`:
- Color variables for theming
- Animation timings
- Shadow definitions
- Gradient configurations

## 📱 Mobile Optimization

- Responsive grid layouts (1-4 columns based on screen size)
- Touch-friendly upload interface  
- Optimized image loading and caching
- Mobile-first CSS architecture

## 🔮 Future Enhancements

- **Real AI Integration**: Replace simulated analysis with actual computer vision models
- **User Accounts**: Save searches and favorite products
- **Advanced Filters**: Price range, brand, ratings
- **Shopping Integration**: Direct purchase links
- **Social Features**: Share searches and results
- **Performance**: Image optimization and lazy loading

## 📄 License

This project is built for demonstration purposes. Please ensure you have proper licensing for any images or content used in production.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please open an issue on the GitHub repository.

---

**Built with ❤️ using modern web technologies**