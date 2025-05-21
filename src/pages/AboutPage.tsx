import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Welcome to our store! We are passionate about delivering high-quality products
            and exceptional customer service. Our journey began with a simple idea: to create
            a shopping experience that puts our customers first.
          </p>
          <p className="text-gray-700 mb-4">
            Since our founding, we have grown to become a trusted destination for shoppers
            looking for quality, value, and reliability. Our commitment to excellence drives
            everything we do.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-primary-100 rounded-lg p-4 flex-1">
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="text-gray-700">We never compromise on the quality of our products.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-primary-100 rounded-lg p-4 flex-1">
                <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-700">Your satisfaction is our top priority.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-primary-100 rounded-lg p-4 flex-1">
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-700">We are committed to environmentally responsible practices.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;