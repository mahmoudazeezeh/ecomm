import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, Heart, Star, Check, Truck, ArrowLeft, Share2,
  ShieldCheck, RotateCcw, ChevronRight, ChevronLeft, StarHalf
} from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/product/ProductCard';
import NotFoundPage from './NotFoundPage';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  const product = id ? getProductById(parseInt(id)) : undefined;
  const relatedProducts = id ? getRelatedProducts(parseInt(id)) : [];
  
  const inWishlist = product ? isInWishlist(product.id) : false;
  
  // Reset quantity and active image when product changes
  useEffect(() => {
    setQuantity(1);
    setActiveImageIndex(0);
    setActiveTab('description');
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return <NotFoundPage />;
  }
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image
    });
  };
  
  const handleWishlistToggle = () => {
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
  
  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={18} className="text-warning-400 fill-warning-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={18} className="text-warning-400 fill-warning-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={18} className="text-secondary-300" />);
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm text-secondary-600">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/shop" className="hover:text-primary-600">Shop</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to={`/category/${product.category}`} className="capitalize hover:text-primary-600">
            {product.category}
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-secondary-900 truncate max-w-[200px]">{product.name}</span>
        </div>
        
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-secondary-700 hover:text-primary-600 mb-6"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to {product.category === 'kitchen' ? 'Kitchen' : 'Shop'}
        </button>
        
        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-6">
            {/* Product Images - Larger view + thumbnails */}
            <div className="lg:col-span-2">
              <div className="mb-4 overflow-hidden rounded-lg border border-secondary-100">
                <img
                  src={product.images?.[activeImageIndex] || product.image}
                  alt={product.name}
                  className="w-full h-full object-contain aspect-square"
                />
              </div>
              
              {/* Image thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto py-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`flex-none w-16 h-16 border rounded-md overflow-hidden ${
                        index === activeImageIndex
                          ? 'border-primary-500 ring-2 ring-primary-200'
                          : 'border-secondary-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="lg:col-span-3">
              {/* Product header - name, rating, etc. */}
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                    <span className="ml-1 font-medium">{product.rating}</span>
                  </div>
                  
                  <span className="text-secondary-300">|</span>
                  
                  <span className="text-secondary-600">
                    {product.reviewCount} {product.reviewCount === 1 ? 'review' : 'reviews'}
                  </span>
                  
                  <span className="text-secondary-300">|</span>
                  
                  <span className={`${product.stock > 0 ? 'text-success-600' : 'text-error-600'}`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center">
                  {product.salePrice ? (
                    <>
                      <span className="text-2xl font-bold">${product.salePrice.toFixed(2)}</span>
                      <span className="ml-2 text-lg text-secondary-500 line-through">${product.price.toFixed(2)}</span>
                      <span className="ml-2 text-sm bg-accent-100 text-accent-700 px-2 py-0.5 rounded-full">
                        {product.discount}% OFF
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                  )}
                </div>
              </div>
              
              {/* Quick description */}
              <div className="mb-6">
                <p className="text-secondary-700">{product.description}</p>
              </div>
              
              {/* Key features list */}
              {product.features && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Key Features:</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-success-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Quantity selector and add to cart */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                  Quantity:
                </label>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="px-3 py-2 border border-secondary-200 rounded-l-md bg-secondary-50 text-secondary-600 hover:bg-secondary-100 disabled:opacity-50"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border-y border-secondary-200 py-2"
                  />
                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    className="px-3 py-2 border border-secondary-200 rounded-r-md bg-secondary-50 text-secondary-600 hover:bg-secondary-100 disabled:opacity-50"
                  >
                    +
                  </button>
                  
                  <span className="ml-3 text-sm text-secondary-600">
                    {product.stock} {product.stock === 1 ? 'unit' : 'units'} available
                  </span>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn bg-primary-600 hover:bg-primary-700 text-white py-3"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                
                <button
                  onClick={handleBuyNow}
                  className="flex-1 btn bg-accent-600 hover:bg-accent-700 text-white py-3"
                >
                  Buy Now
                </button>
                
                <button
                  onClick={handleWishlistToggle}
                  className={`btn p-3 ${
                    inWishlist 
                      ? 'bg-error-50 text-error-600 border-error-200' 
                      : 'bg-white border-secondary-200 text-secondary-600 hover:bg-secondary-50'
                  }`}
                  aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart size={20} className={inWishlist ? 'fill-error-500' : ''} />
                </button>
                
                <button
                  className="btn p-3 bg-white border-secondary-200 text-secondary-600 hover:bg-secondary-50"
                  aria-label="Share"
                >
                  <Share2 size={20} />
                </button>
              </div>
              
              {/* Shipping & Returns */}
              <div className="border-t border-secondary-100 pt-6 space-y-4">
                <div className="flex items-start">
                  <Truck size={18} className="text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Free Shipping</h4>
                    <p className="text-sm text-secondary-600">On orders over $50</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RotateCcw size={18} className="text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Easy Returns</h4>
                    <p className="text-sm text-secondary-600">30-day money back guarantee</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ShieldCheck size={18} className="text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Warranty</h4>
                    <p className="text-sm text-secondary-600">1 year manufacturer warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs for Description, Specs, Reviews */}
          <div className="border-t border-secondary-100">
            <div className="flex border-b border-secondary-100">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'description'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                Description
              </button>
              
              <button
                onClick={() => setActiveTab('specifications')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'specifications'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                Specifications
              </button>
              
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                Reviews ({product.reviewCount})
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Product Description</h3>
                  <p className="text-secondary-700 mb-4">{product.description}</p>
                  
                  {product.features && (
                    <>
                      <h4 className="font-medium mb-2 mt-6">Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-secondary-700">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Technical Specifications</h3>
                  
                  {product.specifications ? (
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <tbody>
                          {Object.entries(product.specifications).map(([key, value], index) => (
                            <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-4 py-3 font-medium border-r border-secondary-100 w-1/3">{key}</td>
                              <td className="px-4 py-3 text-secondary-700">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-secondary-600">No specifications available for this product.</p>
                  )}
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium">Customer Reviews</h3>
                    <button className="btn btn-outline">Write a Review</button>
                  </div>
                  
                  <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span className="font-bold">{product.rating} out of 5</span>
                    </div>
                    <p className="text-secondary-600">Based on {product.reviewCount} reviews</p>
                  </div>
                  
                  {/* Mock reviews */}
                  <div className="space-y-6">
                    {[
                      {
                        name: 'Jane D.',
                        date: '2 months ago',
                        rating: 5,
                        comment: `This ${product.name} exceeded my expectations! The quality is outstanding and it works perfectly for what I need.`
                      },
                      {
                        name: 'Robert S.',
                        date: '3 months ago',
                        rating: 4,
                        comment: `Great product overall. The ${product.name} is well made and functions as described. Took off one star because the shipping was a bit slow.`
                      },
                      {
                        name: 'Michael T.',
                        date: '4 months ago',
                        rating: 5,
                        comment: `I've purchased many similar products before, but this ${product.name} is by far the best. Highly recommend it to anyone considering it.`
                      }
                    ].map((review, index) => (
                      <div key={index} className="border-b border-secondary-100 pb-6 last:border-none">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-secondary-500">{review.date}</div>
                        </div>
                        
                        <div className="flex mb-2">
                          {renderStars(review.rating)}
                        </div>
                        
                        <p className="text-secondary-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  
                  {product.reviewCount > 3 && (
                    <div className="mt-6 text-center">
                      <button className="btn btn-outline">Load More Reviews</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
        
        {/* Recently Viewed - Placeholder */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-secondary-600">Products you view will appear here.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;