
import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { products, Product } from '@/data/products';
import { Button } from '@/components/ui/button';

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Plants' },
    { id: 'indoor', label: 'Indoor Plants' },
    { id: 'outdoor', label: 'Outdoor Plants' },
    { id: 'tools', label: 'Garden Tools' },
    { id: 'pots', label: 'Pots & Planters' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Our Plant Collection</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of plants, tools, and accessories to create your perfect green space.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={`${
              selectedCategory === category.id
                ? 'bg-green-600 hover:bg-green-700'
                : 'border-green-600 text-green-600 hover:bg-green-50'
            }`}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
