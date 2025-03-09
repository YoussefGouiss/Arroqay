import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Emerald top border */}
        <div className="h-2 bg-emerald-500 w-full absolute top-0"></div>
        
        <div className="p-8 text-center">
          <h1 className="text-6xl font-bold text-emerald-500">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-6">
            Prescription Not Found
          </h2>
          
          {/* Pill bottle illustration */}
          <div className="relative h-64 w-64 mx-auto my-6">
            {/* Pill bottle */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-44 bg-emerald-500 rounded-md shadow-lg"></div>
            
            {/* Pill cap */}
            <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-10 bg-emerald-600 rounded-md"></div>
            
            {/* Label */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-16 bg-white rounded-sm flex items-center justify-center">
              <span className="text-4xl font-bold text-emerald-500">404</span>
            </div>
            
            {/* Pills */}
            <div className="absolute bottom-16 left-12 w-14 h-6 bg-white rounded-full transform rotate-12 animate-bounce" 
                style={{ animationDuration: '3s', animationDelay: '0.2s' }}></div>
            <div className="absolute bottom-16 right-10 w-14 h-6 bg-white rounded-full transform -rotate-12 animate-bounce" 
                style={{ animationDuration: '3s', animationDelay: '0.7s' }}></div>
            
            {/* Question mark */}
            <div className="absolute top-8 right-14 text-5xl text-emerald-600 opacity-70 animate-bounce"
                style={{ animationDuration: '3s', animationDelay: '0.5s' }}>?</div>
          </div>
          
          <p className="text-gray-600 text-lg mb-8">
            Oops! It seems this product has been moved or is out of stock in our wellness collection.
          </p>
          
          <div className="flex justify-center">
            <Link to="/" className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;