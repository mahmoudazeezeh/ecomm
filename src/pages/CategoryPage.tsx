import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';

const CategoryPage = () => {
  const { category } = useParams();
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {category?.replace('-', ' ')}
      </h1>
      
      {categoryProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No products found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;