import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products as allProducts, Product, searchProducts } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('default');
  
  // Get unique categories and brands for filters
  const categories = [...new Set(allProducts.map(p => p.category))];
  const brands = [...new Set(allProducts.map(p => p.brand))];
  
  // Initialize products based on search query
  useEffect(() => {
    if (searchQuery) {
      setProducts(searchProducts(searchQuery));
    } else {
      setProducts(allProducts);
    }
  }, [searchQuery]);
  
  // Apply filters whenever products or filter criteria change
  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Apply brand filter
    if (selectedBrand) {
      filtered = filtered.filter(p => p.brand === selectedBrand);
    }
    
    // Apply price range filter
    filtered = filtered.filter(p => {
      const price = p.salePrice || p.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Apply rating filter
    if (minRating > 0) {
      filtered = filtered.filter(p => p.rating >= minRating);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high-low':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Default sorting (featured)
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
    
    setFilteredProducts(filtered);
  }, [products, selectedCategory, selectedBrand, priceRange, minRating, sortBy]);
  
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setPriceRange([0, 300]);
    setMinRating(0);
    setSortBy('default');
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = newValue;
    
    // Ensure min <= max
    if (index === 0 && newValue > newRange[1]) {
      newRange[1] = newValue;
    } else if (index === 1 && newValue < newRange[0]) {
      newRange[0] = newValue;
    }
    
    setPriceRange(newRange);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {searchQuery ? `Search results for "${searchQuery}"` : 'Shop All Products'}
          </h1>
          <p className="text-secondary-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>
        
        {/* Mobile filter button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="w-full btn btn-secondary flex items-center justify-center"
          >
            <Filter size={18} className="mr-2" />
            {filtersOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop sidebar and mobile expandable */}
          <div className={`
            md:w-64 bg-white rounded-lg border border-secondary-100 shadow-sm overflow-hidden
            ${filtersOpen ? 'block' : 'hidden md:block'}
          `}>
            <div className="p-4 border-b border-secondary-100 flex justify-between items-center">
              <div className="flex items-center text-lg font-medium">
                <SlidersHorizontal size={18} className="mr-2" />
                Filters
              </div>
              
              {/* Reset filters button */}
              <button
                onClick={resetFilters}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Reset
              </button>
            </div>
            
            {/* Filter sections */}
            <div className="p-4 space-y-6">
              {/* Category filter */}
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="category-all"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="mr-2"
                    />
                    <label htmlFor="category-all">All Categories</label>
                  </div>
                  
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category}`}
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category}`} className="capitalize">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Brand filter */}
              <div>
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="brand-all"
                      name="brand"
                      checked={selectedBrand === ''}
                      onChange={() => setSelectedBrand('')}
                      className="mr-2"
                    />
                    <label htmlFor="brand-all">All Brands</label>
                  </div>
                  
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <input
                        type="radio"
                        id={`brand-${brand}`}
                        name="brand"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                        className="mr-2"
                      />
                      <label htmlFor={`brand-${brand}`}>
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price range filter */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary-600">${priceRange[0]}</span>
                    <span className="text-sm text-secondary-600">${priceRange[1]}</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label htmlFor="price-min" className="text-sm text-secondary-600 mb-1 block">Min</label>
                      <input
                        type="number"
                        id="price-min"
                        min={0}
                        max={1000}
                        value={priceRange[0]}
                        onChange={e => handlePriceChange(e, 0)}
                        className="input"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="price-max" className="text-sm text-secondary-600 mb-1 block">Max</label>
                      <input
                        type="number"
                        id="price-max"
                        min={0}
                        max={1000}
                        value={priceRange[1]}
                        onChange={e => handlePriceChange(e, 1)}
                        className="input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Rating filter */}
              <div>
                <h3 className="font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[0, 4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="radio"
                        id={`rating-${rating}`}
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="mr-2"
                      />
                      <label htmlFor={`rating-${rating}`}>
                        {rating === 0 ? 'Any Rating' : `${rating}+ Stars`}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="flex-1">
            {/* Sort dropdown and mobile filter reset */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input pr-10 appearance-none"
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 pointer-events-none" />
              </div>
              
              {/* Mobile only - reset filters button */}
              {filtersOpen && (
                <button
                  onClick={resetFilters}
                  className="md:hidden btn btn-outline flex items-center text-sm"
                >
                  <X size={16} className="mr-1" />
                  Reset Filters
                </button>
              )}
            </div>
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-secondary-600 mb-4">
                  We couldn't find any products matching your criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;