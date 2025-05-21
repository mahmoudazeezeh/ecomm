import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(product.id);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image
    });
  };
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.salePrice || product.price,
        image: product.image
      });
    }
  };
  
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="relative overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:shadow-md h-full flex flex-col">
          {/* Image container */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Sale Badge */}
            {product.discount && (
              <div className="absolute top-2 left-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount}% OFF
              </div>
            )}
            
            {/* New Badge */}
            {product.isNew && !product.discount && (
              <div className="absolute top-2 left-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </div>
            )}
            
            {/* Action buttons */}
            <div className="absolute right-2 top-2 flex flex-col space-y-2">
              <button
                onClick={handleWishlistToggle}
                className={`p-2 rounded-full shadow-sm transition-colors ${
                  inWishlist 
                    ? 'bg-error-50 text-error-500' 
                    : 'bg-white/90 hover:bg-error-50 hover:text-error-500 text-secondary-500'
                }`}
                aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={18} className={inWishlist ? 'fill-error-500' : ''} />
              </button>
              
              <button
                onClick={handleAddToCart}
                className="p-2 rounded-full bg-white/90 text-secondary-500 shadow-sm hover:bg-primary-50 hover:text-primary-500 transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
          
          {/* Product details */}
          <div className="flex flex-col flex-grow p-4">
            <div className="flex items-center mb-1.5">
              {/* Rating stars */}
              <div className="flex items-center">
                <Star size={14} className="text-warning-400 fill-warning-400" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
              
              <span className="mx-1.5 text-secondary-300">•</span>
              
              {/* Reviews count */}
              <span className="text-sm text-secondary-500">{product.reviewCount} reviews</span>
            </div>
            
            {/* Category */}
            <span className="text-xs text-secondary-500 uppercase mb-1">
              {product.category}
            </span>
            
            {/* Product name */}
            <h3 className="font-medium text-secondary-900 mb-2 flex-grow">
              {product.name}
            </h3>
            
            {/* Price section */}
            <div className="flex items-center mt-1">
              {product.salePrice ? (
                <>
                  <span className="font-semibold text-lg">${product.salePrice.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-secondary-500 line-through">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;