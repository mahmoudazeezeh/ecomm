import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Search, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
      setShowSearch(false);
    }
  };
  
  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearchClick={() => setShowSearch(true)} />
      
      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-secondary-950/80 z-50 flex items-start justify-center pt-20 animate-fade-in">
          <div className="w-full max-w-3xl px-4">
            <div className="bg-white rounded-lg shadow-xl p-6 animate-slide-down">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Search Products</h2>
                <button 
                  onClick={() => setShowSearch(false)}
                  className="p-1 rounded-full hover:bg-secondary-100"
                >
                  <X size={24} className="text-secondary-500" />
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for tools, equipment, and more..."
                  className="input pr-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    onClick={clearSearch}
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
                  >
                    <X size={18} />
                  </button>
                )}
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-md bg-primary-500 text-white hover:bg-primary-600"
                >
                  <Search size={18} />
                </button>
              </form>
              
              {searchQuery && (
                <div className="mt-4 max-h-60 overflow-y-auto divide-y divide-secondary-100">
                  <p className="text-sm text-secondary-500 py-2">Press Enter to search for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;