
import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { ProductCatalog } from '@/components/ProductCatalog';
import { Navigation } from '@/components/Navigation';
import { Cart } from '@/components/Cart';
import { ContactForm } from '@/components/ContactForm';
import { AuthModal } from '@/components/AuthModal';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { cartItems } = useCart();
  const { user } = useAuth();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onShopNow={() => setCurrentPage('catalog')} />;
      case 'catalog':
        return <ProductCatalog />;
      case 'contact':
        return <ContactForm />;
      default:
        return <Hero onShopNow={() => setCurrentPage('catalog')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartItemCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        user={user}
      />
      
      <main>
        {renderCurrentPage()}
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default Index;
