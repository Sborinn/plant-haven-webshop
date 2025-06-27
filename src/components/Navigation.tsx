
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Leaf } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
  onAuthClick: () => void;
  user: any;
}

export const Navigation = ({ 
  currentPage, 
  onNavigate, 
  cartItemCount, 
  onCartClick, 
  onAuthClick,
  user 
}: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'Plants' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">PlantLover</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-lg font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Cart and Auth */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={onAuthClick}
              className="flex items-center space-x-2"
            >
              <User className="h-6 w-6" />
              <span className="hidden md:inline">
                {user ? user.name : 'Login'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
