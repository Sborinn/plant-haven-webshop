
import { Button } from '@/components/ui/button';
import { Leaf, Heart, Star } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export const Hero = ({ onShopNow }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="h-12 w-12 text-green-400 mr-3" />
          <h1 className="text-5xl md:text-7xl font-bold">PlantLover Shop</h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Transform your space with beautiful plants and premium gardening essentials
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Heart className="h-5 w-5 text-green-400 mr-2" />
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Star className="h-5 w-5 text-green-400 mr-2" />
            <span>Expert Care Tips</span>
          </div>
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Leaf className="h-5 w-5 text-green-400 mr-2" />
            <span>Eco-Friendly</span>
          </div>
        </div>

        <Button 
          onClick={onShopNow}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Shop Plants Now
        </Button>
      </div>
    </div>
  );
};
