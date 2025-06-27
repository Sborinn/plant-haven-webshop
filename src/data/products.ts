
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'indoor' | 'outdoor' | 'tools' | 'pots';
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Beautiful split-leaf philodendron, perfect for bright indoor spaces.',
    category: 'indoor',
    inStock: true,
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Low-maintenance plant that thrives in low light conditions.',
    category: 'indoor',
    inStock: true,
  },
  {
    id: '3',
    name: 'Garden Rose Bush',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Fragrant roses perfect for your outdoor garden.',
    category: 'outdoor',
    inStock: true,
  },
  {
    id: '4',
    name: 'Ceramic Plant Pot',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Stylish ceramic pot with drainage holes.',
    category: 'pots',
    inStock: true,
  },
  {
    id: '5',
    name: 'Garden Tool Set',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Complete set of essential gardening tools.',
    category: 'tools',
    inStock: true,
  },
  {
    id: '6',
    name: 'Peace Lily',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Elegant flowering plant that purifies the air.',
    category: 'indoor',
    inStock: true,
  },
];
