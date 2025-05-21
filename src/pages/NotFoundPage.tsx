import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-200">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary-900">Page not found</h2>
        <p className="mt-4 text-lg text-secondary-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link 
            to="/"
            className="btn btn-primary inline-flex items-center"
          >
            <Home size={18} className="mr-2" />
            Go to Homepage
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn btn-outline inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;