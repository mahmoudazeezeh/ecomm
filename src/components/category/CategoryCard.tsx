import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: {
    name: string;
    image: string;
    description: string;
    count: number;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.name.toLowerCase()}`} className="block group">
      <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:shadow-md h-full">
        <div className="relative aspect-square overflow-hidden bg-secondary-100">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
            <span className="text-sm opacity-90">{category.count} products</span>
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-secondary-600 mb-3">{category.description}</p>
          <div className="flex items-center text-primary-600 font-medium text-sm transition-colors group-hover:text-primary-700">
            Shop Now <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;