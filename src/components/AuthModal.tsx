
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { user, login, register, logout } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      if (login(formData.email, formData.password)) {
        toast.success('Logged in successfully!');
        onClose();
      } else {
        toast.error('Invalid credentials');
      }
    } else {
      if (register(formData.name, formData.email, formData.password)) {
        toast.success('Account created successfully!');
        onClose();
      } else {
        toast.error('Email already exists');
      }
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {user ? 'Account' : isLogin ? 'Login' : 'Sign Up'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          {user ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Welcome back!</p>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <Button onClick={handleLogout} variant="outline" className="w-full">
                Logout
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
              
              <Button 
                type="button"
                variant="ghost" 
                onClick={() => setIsLogin(!isLogin)}
                className="w-full"
              >
                {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
