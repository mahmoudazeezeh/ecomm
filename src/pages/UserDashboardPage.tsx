import React from 'react';
import { Routes, Route } from 'react-router-dom';

const UserDashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <p className="text-gray-600">No recent orders found.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Saved Items</h2>
            <p className="text-gray-600">Your wishlist is empty.</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Profile</h3>
                <p className="text-gray-600">Manage your personal information</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Addresses</h3>
                <p className="text-gray-600">Manage your shipping addresses</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Payment Methods</h3>
                <p className="text-gray-600">Manage your payment options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;