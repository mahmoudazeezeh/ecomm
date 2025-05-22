import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { getFeaturedProducts, getTrendingProducts, getNewProducts } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import CategoryCard from '../components/category/CategoryCard';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const trendingProducts = getTrendingProducts().slice(0, 8);
  const newProducts = getNewProducts().slice(0, 4);
  
  const categories = [
    { 
      name: 'Kitchen', 
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elledecor.com%2Fdesign-decorate%2Froom-ideas%2Fg38%2Fkitchen-island-inspiration%2F&psig=AOvVaw1NDKlnxi1akycAH14RbCwb&ust=1748022196115000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiEv6LQt40DFQAAAAAdAAAAABAE',
      description: 'Premium cookware, cutlery and kitchen gadgets',
      count: 24
    },
    { 
      name: 'Cleaning', 
      image: 'https://images.pexels.com/photos/5824906/pexels-photo-5824906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Effective cleaning solutions and equipment',
      count: 18
    },
    { 
      name: 'Tools', 
      image: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'High-quality tools for every project',
      count: 32
    },
    { 
      name: 'Storage', 
      image: 'https://images.pexels.com/photos/6186520/pexels-photo-6186520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Smart storage solutions for home organization',
      count: 15
    },
    { 
      name: 'Lighting', 
      image: 'https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Modern lighting fixtures and smart solutions',
      count: 12
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Home Renovator',
      quote: 'The quality of tools I purchased from Neno Store exceeded my expectations. Their customer service is exceptional, and delivery was faster than promised!',
      avatar: 'https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'DIY Enthusiast',
      quote: 'I\'ve been shopping for home tools for years, and Neno Store has the best selection at competitive prices. The detailed product descriptions helped me make informed decisions.',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4
    },
    {
      id: 3,
      name: 'Emily Chen',
      position: 'Professional Chef',
      quote: 'As a chef, I need reliable kitchen tools. The knife set I bought from Neno Store is professional-grade and has made my prep work much more efficient. Highly recommend!',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Home Tools"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-500 text-white text-sm font-medium mb-4">
              Summer Sale - Up to 25% Off
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Your Ultimate Home Tools Destination
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Quality tools, kitchen essentials, and smart home solutions for every project and task.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md text-base">
                Shop Now
              </Link>
              <Link to="/category/tools" className="btn bg-white hover:bg-gray-100 text-primary-900 px-8 py-3 rounded-md text-base">
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
            <Link to="/shop" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
              View All <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link to="/shop" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
              View All <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending Products */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <TrendingUp size={24} className="text-accent-500 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold">Trending Now</h2>
            </div>
            <Link to="/shop" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
              View All <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
              {trendingProducts.map((product) => (
                <div key={product.id} className="flex-none w-64 sm:w-72">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Offer Banner */}
      <section className="py-8 md:py-10 bg-accent-500 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Summer Sale - Limited Time Offer</h3>
              <p className="text-accent-50">Get up to 25% off on selected kitchen and outdoor tools</p>
            </div>
            <Link to="/shop" className="btn bg-white text-accent-600 hover:bg-accent-50">
              Shop the Sale
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Sparkles size={24} className="text-primary-500 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold">New Arrivals</h2>
            </div>
            <Link to="/shop" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
              View All <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Don't just take our word for it – see what our satisfied customers have to say about our products and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg border border-secondary-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-warning-500 fill-warning-500" : "text-secondary-300"}
                    />
                  ))}
                </div>
                <blockquote className="text-secondary-800 mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-secondary-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Trust */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-secondary-900">Trusted by Professionals & Homeowners</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['PowerMaster', 'CleanTech', 'ChefsElite', 'OrganizeIt', 'BrightHome', 'SafeGuard'].map(brand => (
              <div key={brand} className="text-xl font-bold text-secondary-400">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Home Tools?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Join thousands of satisfied customers who have transformed their homes with our quality products.
            </p>
            <Link 
              to="/shop" 
              className="btn bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md inline-flex items-center"
            >
              Shop Now <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;