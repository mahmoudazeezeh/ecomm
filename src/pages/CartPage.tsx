import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart, ChevronLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;
  
  const handleGoToShop = () => {
    navigate('/shop');
  };
  
  const handleGoToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <button
            onClick={handleGoToShop}
            className="flex items-center text-primary-600 hover:text-primary-700"
          >
            <ChevronLeft size={18} className="mr-1" />
            Continue Shopping
          </button>
        </div>
        
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-secondary-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">
                      Cart Items ({cart.reduce((total, item) => total + item.quantity, 0)})
                    </h2>
                    
                    <button
                      onClick={clearCart}
                      className="text-sm text-secondary-600 hover:text-error-600 flex items-center"
                    >
                      <Trash2 size={16} className="mr-1" />
                      Clear Cart
                    </button>
                  </div>
                </div>
                
                <div className="divide-y divide-secondary-100">
                  {cart.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start">
                      {/* Product image */}
                      <div className="w-20 h-20 rounded-md border border-secondary-100 overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Product details */}
                      <div className="sm:ml-4 flex-grow">
                        <Link 
                          to={`/product/${item.id}`}
                          className="text-secondary-900 font-medium hover:text-primary-600"
                        >
                          {item.name}
                        </Link>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border border-secondary-200 rounded-l-md bg-secondary-50 text-secondary-600 hover:bg-secondary-100"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              className="w-12 h-8 border-y border-secondary-200 text-center"
                            />
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-secondary-200 rounded-r-md bg-secondary-50 text-secondary-600 hover:bg-secondary-100"
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                            
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-secondary-500 hover:text-error-600"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                <div className="p-6 border-b border-secondary-100">
                  <h2 className="text-lg font-medium">Order Summary</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Shipping</span>
                    {shipping === 0 ? (
                      <span className="text-success-600 font-medium">Free</span>
                    ) : (
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Tax (7%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="text-sm text-secondary-600 bg-secondary-50 p-3 rounded">
                      Add <span className="font-medium">${(50 - subtotal).toFixed(2)}</span> more to qualify for free shipping!
                    </div>
                  )}
                  
                  <div className="border-t border-secondary-100 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleGoToCheckout}
                    className="w-full btn bg-accent-600 hover:bg-accent-700 text-white py-3 mt-4"
                  >
                    Proceed to Checkout <ArrowRight size={18} className="ml-2" />
                  </button>
                  
                  <div className="text-center mt-4">
                    <p className="text-xs text-secondary-500">
                      We accept Visa, Mastercard, and PayPal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mb-4 flex justify-center">
              <ShoppingCart size={64} className="text-secondary-300" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-secondary-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <button
              onClick={handleGoToShop}
              className="btn btn-primary px-8"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;