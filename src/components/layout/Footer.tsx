import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool as Tool, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight, CreditCard, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-950 text-white">
      <div className="container py-10">
        {/* Services section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-secondary-800">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-secondary-800 rounded-lg">
              <Truck size={20} className="text-primary-400" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-secondary-300">On orders over $50</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-secondary-800 rounded-lg">
              <RotateCcw size={20} className="text-primary-400" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Easy Returns</h3>
              <p className="text-sm text-secondary-300">30-day return policy</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-secondary-800 rounded-lg">
              <ShieldCheck size={20} className="text-primary-400" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Secure Shopping</h3>
              <p className="text-sm text-secondary-300">Your data is protected</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-secondary-800 rounded-lg">
              <CreditCard size={20} className="text-primary-400" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Flexible Payment</h3>
              <p className="text-sm text-secondary-300">Multiple payment options</p>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Tool size={28} className="text-primary-400" />
              <span className="text-xl font-bold">Neno Store</span>
            </Link>
            <p className="text-secondary-300 mb-6">
              Your one-stop destination for all home tools and equipment. Quality products that make your home tasks easier.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-secondary-300">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3 text-secondary-300">
              <li><Link to="/category/kitchen" className="hover:text-primary-400 transition-colors">Kitchen</Link></li>
              <li><Link to="/category/cleaning" className="hover:text-primary-400 transition-colors">Cleaning</Link></li>
              <li><Link to="/category/tools" className="hover:text-primary-400 transition-colors">Tools</Link></li>
              <li><Link to="/category/storage" className="hover:text-primary-400 transition-colors">Storage</Link></li>
              <li><Link to="/category/lighting" className="hover:text-primary-400 transition-colors">Lighting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-secondary-300">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-0.5" />
                <span>1234 Store Street, City, State 56789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400" />
                <a href="mailto:info@nenostore.com" className="hover:text-primary-400 transition-colors">info@nenostore.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:+1234567890" className="hover:text-primary-400 transition-colors">(123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-t border-secondary-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-secondary-300">Get the latest updates, offers and exclusive deals</p>
            </div>
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="input bg-secondary-800 border-secondary-700 text-white placeholder-secondary-400 flex-grow"
                required
              />
              <button type="submit" className="btn btn-accent">
                Subscribe <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-secondary-800 text-center sm:text-left sm:flex sm:justify-between sm:items-center text-secondary-400 text-sm">
          <p>© {currentYear} Neno Store. All rights reserved.</p>
          <div className="mt-3 sm:mt-0 space-x-4">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-primary-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;