import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Heart, ChevronDown, PenTool as Tool, Home, Sparkles, Lightbulb, PackageOpen } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const { cart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const categories = [
    { name: 'Kitchen', icon: <Home size={18} /> },
    { name: 'Cleaning', icon: <Sparkles size={18} /> },
    { name: 'Tools', icon: <Tool size={18} /> },
    { name: 'Storage', icon: <PackageOpen size={18} /> },
    { name: 'Lighting', icon: <Lightbulb size={18} /> }
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Tool size={28} className="text-primary-600" />
            <span className="text-xl font-bold text-secondary-900">Neno Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-secondary-800 hover:text-primary-600 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button 
                onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                className="flex items-center text-secondary-800 hover:text-primary-600 font-medium"
              >
                Categories <ChevronDown size={16} className="ml-1" />
              </button>
              
              {/* Categories dropdown */}
              <div className={`absolute top-full left-0 w-56 bg-white rounded-md shadow-lg p-2 mt-1 transition-all ${
                categoryMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={`/category/${category.name.toLowerCase()}`}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-secondary-50 w-full text-left"
                    onClick={() => setCategoryMenuOpen(false)}
                  >
                    <span className="text-secondary-500">{category.icon}</span>
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/shop" className="text-secondary-800 hover:text-primary-600 font-medium">
              Shop
            </Link>
            <Link to="/about" className="text-secondary-800 hover:text-primary-600 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-secondary-800 hover:text-primary-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={onSearchClick}
              className="p-2 rounded-full hover:bg-secondary-100 text-secondary-700"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link 
              to="/cart" 
              className="p-2 rounded-full hover:bg-secondary-100 text-secondary-700 relative"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount > 9 ? '9+' : cartItemsCount}
                </span>
              )}
            </Link>
            
            <Link 
              to={isAuthenticated ? "/dashboard/wishlist" : "/login"} 
              className="p-2 rounded-full hover:bg-secondary-100 text-secondary-700 hidden sm:flex"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </Link>
            
            {isAuthenticated ? (
              <Link 
                to="/dashboard" 
                className="p-2 rounded-full hover:bg-secondary-100 text-secondary-700"
                aria-label="User Dashboard"
              >
                <User size={20} />
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="hidden sm:flex btn btn-primary"
              >
                Login
              </Link>
            )}
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-secondary-100 text-secondary-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-secondary-950/50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-secondary-100">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Tool size={24} className="text-primary-600" />
                <span className="text-lg font-bold text-secondary-900">Neno Store</span>
              </Link>
              <button
                className="p-2 rounded-full hover:bg-secondary-100 text-secondary-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-4 flex flex-col space-y-3">
            <Link
              to="/"
              className="px-3 py-2 rounded-md hover:bg-secondary-50 text-secondary-900"
            >
              Home
            </Link>
            <div className="space-y-1">
              <p className="px-3 font-medium text-secondary-900">Categories</p>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/category/${category.name.toLowerCase()}`}
                  className="flex items-center space-x-2 px-6 py-2 rounded-md hover:bg-secondary-50"
                >
                  <span className="text-secondary-500">{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
            <Link
              to="/shop"
              className="px-3 py-2 rounded-md hover:bg-secondary-50 text-secondary-900"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md hover:bg-secondary-50 text-secondary-900"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md hover:bg-secondary-50 text-secondary-900"
            >
              Contact
            </Link>
            
            {!isAuthenticated && (
              <div className="pt-4 mt-4 border-t border-secondary-100">
                <Link to="/login" className="btn btn-primary w-full mb-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-outline w-full">
                  Register
                </Link>
              </div>
            )}
            
            {isAuthenticated && (
              <div className="pt-4 mt-4 border-t border-secondary-100 space-y-3">
                <Link
                  to="/dashboard"
                  className="px-3 py-2 rounded-md hover:bg-secondary-50 flex items-center space-x-2"
                >
                  <User size={18} className="text-secondary-500" />
                  <span>My Account</span>
                </Link>
                <Link
                  to="/dashboard/wishlist"
                  className="px-3 py-2 rounded-md hover:bg-secondary-50 flex items-center space-x-2"
                >
                  <Heart size={18} className="text-secondary-500" />
                  <span>Wishlist</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;