import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, CreditCard, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ')[1] || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    sameAsBilling: true,
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZipCode: '',
    shippingCountry: 'United States',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    saveInfo: false
  });
  
  const [activeStep, setActiveStep] = useState(1);
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const proceedToStep = (step: number) => {
    if (step === 2) {
      // Validation for shipping info
      if (!formData.firstName || !formData.lastName || !formData.email || 
          !formData.phone || !formData.address || !formData.city || 
          !formData.state || !formData.zipCode) {
        alert('Please fill in all required shipping fields.');
        return;
      }
    }
    
    setActiveStep(step);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Payment validation
    if (!formData.cardName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCVC) {
      alert('Please fill in all payment details.');
      return;
    }
    
    // Process order
    alert('Thank you for your order! Your order has been processed successfully.');
    clearCart();
    navigate('/');
  };
  
  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="flex items-center mb-8">
          <Link
            to="/cart"
            className="flex items-center text-primary-600 hover:text-primary-700"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back to Cart
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        {/* Checkout steps */}
        <div className="flex justify-between mb-8">
          <div className={`flex-1 px-4 py-2 rounded-l-lg text-center ${activeStep >= 1 ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-600'}`}>
            1. Shipping
          </div>
          <div className={`flex-1 px-4 py-2 text-center ${activeStep >= 2 ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-600'}`}>
            2. Payment
          </div>
          <div className={`flex-1 px-4 py-2 rounded-r-lg text-center ${activeStep >= 3 ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-600'}`}>
            3. Review
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main checkout form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Step 1: Shipping Information */}
              {activeStep === 1 && (
                <form>
                  <div className="p-6 border-b border-secondary-100">
                    <h2 className="text-lg font-medium">Shipping Information</h2>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {!isAuthenticated && (
                      <div className="bg-secondary-50 p-4 rounded mb-4">
                        <p>Already have an account? <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">Login</Link></p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name <span className="text-error-600">*</span></label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name <span className="text-error-600">*</span></label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email <span className="text-error-600">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone <span className="text-error-600">*</span></label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-1">Address <span className="text-error-600">*</span></label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium mb-1">City <span className="text-error-600">*</span></label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-1">State <span className="text-error-600">*</span></label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium mb-1">Zip Code <span className="text-error-600">*</span></label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-1">Country <span className="text-error-600">*</span></label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleSelectChange}
                        className="input"
                        required
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="sameAsBilling"
                        name="sameAsBilling"
                        checked={formData.sameAsBilling}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="sameAsBilling">Shipping address same as billing</label>
                    </div>
                    
                    {!formData.sameAsBilling && (
                      <div className="mt-6 space-y-4 border-t border-secondary-100 pt-6">
                        <h3 className="font-medium">Shipping Address</h3>
                        
                        <div>
                          <label htmlFor="shippingAddress" className="block text-sm font-medium mb-1">Address <span className="text-error-600">*</span></label>
                          <input
                            type="text"
                            id="shippingAddress"
                            name="shippingAddress"
                            value={formData.shippingAddress}
                            onChange={handleChange}
                            className="input"
                            required={!formData.sameAsBilling}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="col-span-2">
                            <label htmlFor="shippingCity" className="block text-sm font-medium mb-1">City <span className="text-error-600">*</span></label>
                            <input
                              type="text"
                              id="shippingCity"
                              name="shippingCity"
                              value={formData.shippingCity}
                              onChange={handleChange}
                              className="input"
                              required={!formData.sameAsBilling}
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="shippingState" className="block text-sm font-medium mb-1">State <span className="text-error-600">*</span></label>
                            <input
                              type="text"
                              id="shippingState"
                              name="shippingState"
                              value={formData.shippingState}
                              onChange={handleChange}
                              className="input"
                              required={!formData.sameAsBilling}
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="shippingZipCode" className="block text-sm font-medium mb-1">Zip Code <span className="text-error-600">*</span></label>
                            <input
                              type="text"
                              id="shippingZipCode"
                              name="shippingZipCode"
                              value={formData.shippingZipCode}
                              onChange={handleChange}
                              className="input"
                              required={!formData.sameAsBilling}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="shippingCountry" className="block text-sm font-medium mb-1">Country <span className="text-error-600">*</span></label>
                          <select
                            id="shippingCountry"
                            name="shippingCountry"
                            value={formData.shippingCountry}
                            onChange={handleSelectChange}
                            className="input"
                            required={!formData.sameAsBilling}
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-end mt-8">
                      <button
                        type="button"
                        onClick={() => proceedToStep(2)}
                        className="btn btn-primary px-8"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                </form>
              )}
              
              {/* Step 2: Payment Information */}
              {activeStep === 2 && (
                <form>
                  <div className="p-6 border-b border-secondary-100">
                    <h2 className="text-lg font-medium">Payment Information</h2>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="p-4 bg-secondary-50 rounded flex items-center">
                      <Shield size={20} className="text-success-600 mr-2" />
                      <p className="text-sm">All transactions are secure and encrypted. Your personal information is never shared.</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center mb-4">
                        <CreditCard size={24} className="text-secondary-700 mr-2" />
                        <h3 className="font-medium">Credit Card</h3>
                      </div>
                      
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium mb-1">Name on Card <span className="text-error-600">*</span></label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className="input"
                          placeholder="e.g. John Smith"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number <span className="text-error-600">*</span></label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="input"
                          placeholder="•••• •••• •••• ••••"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium mb-1">Expiration Date <span className="text-error-600">*</span></label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            className="input"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardCVC" className="block text-sm font-medium mb-1">CVC <span className="text-error-600">*</span></label>
                          <input
                            type="text"
                            id="cardCVC"
                            name="cardCVC"
                            value={formData.cardCVC}
                            onChange={handleChange}
                            className="input"
                            placeholder="•••"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="saveInfo"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="saveInfo">Save this information for next time</label>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="btn btn-outline"
                      >
                        Back to Shipping
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => proceedToStep(3)}
                        className="btn btn-primary px-8"
                      >
                        Review Order
                      </button>
                    </div>
                  </div>
                </form>
              )}
              
              {/* Step 3: Review */}
              {activeStep === 3 && (
                <form onSubmit={handleSubmit}>
                  <div className="p-6 border-b border-secondary-100">
                    <h2 className="text-lg font-medium">Review Your Order</h2>
                  </div>
                  
                  <div className="p-6 space-y-8">
                    {/* Contact Info */}
                    <div>
                      <h3 className="font-medium mb-2">Contact Information</h3>
                      <div className="bg-gray-50 p-4 rounded">
                        <p>{formData.firstName} {formData.lastName}</p>
                        <p>{formData.email}</p>
                        <p>{formData.phone}</p>
                      </div>
                    </div>
                    
                    {/* Shipping Address */}
                    <div>
                      <h3 className="font-medium mb-2">Shipping Address</h3>
                      <div className="bg-gray-50 p-4 rounded">
                        <p>{formData.firstName} {formData.lastName}</p>
                        <p>{formData.address}</p>
                        <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                        <p>{formData.country}</p>
                      </div>
                    </div>
                    
                    {/* Payment */}
                    <div>
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <div className="bg-gray-50 p-4 rounded flex items-start">
                        <CreditCard size={20} className="text-secondary-700 mt-0.5 mr-3" />
                        <div>
                          <p>Credit Card ending in {formData.cardNumber.slice(-4)}</p>
                          <p className="text-secondary-600">Expires {formData.cardExpiry}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Items */}
                    <div>
                      <h3 className="font-medium mb-2">Order Items</h3>
                      <div className="border rounded-lg divide-y divide-secondary-100 overflow-hidden">
                        {cart.map((item) => (
                          <div key={item.id} className="p-4 flex items-start">
                            <div className="w-16 h-16 rounded-md border border-secondary-100 overflow-hidden flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div className="ml-4 flex-grow">
                              <div className="flex justify-between">
                                <span className="font-medium">{item.name}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                              <p className="text-sm text-secondary-600">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="btn btn-outline"
                      >
                        Back to Payment
                      </button>
                      
                      <button
                        type="submit"
                        className="btn bg-accent-600 hover:bg-accent-700 text-white px-8"
                      >
                        Place Order <ArrowRight size={18} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 border-b border-secondary-100">
                <h2 className="text-lg font-medium">Order Summary</h2>
              </div>
              
              <div className="p-6">
                <div className="max-h-48 overflow-y-auto mb-4 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-start">
                      <div className="w-12 h-12 rounded-md border border-secondary-100 overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-3 flex-grow">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium truncate max-w-[140px]">{item.name}</p>
                          <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-xs text-secondary-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 border-t border-secondary-100 pt-4">
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
                  
                  <div className="border-t border-secondary-100 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;