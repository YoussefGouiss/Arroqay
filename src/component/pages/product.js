import React, { useState } from 'react';
import { Heart, Eye, ShoppingCart, Check } from 'lucide-react';
import ProductDetailModal from './productView';



const ProductCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <>
      <div 
        className="w-full border rounded-lg shadow-lg p-3 sm:p-4 relative flex flex-col h-full transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Discount Badge with Pulse Effect */}
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm z-10 animate-pulse">
          <span className="animate-pulse">50%</span>
        </div>
        
        {/* Product Image with Zoom Effect */}
        <div className="flex justify-center mb-3 sm:mb-4 flex-grow overflow-hidden relative group">
          <img
            src="product/product.jpg"
            alt="Eucerin Dermo Purifier Gommage"
            className={`h-32 sm:h-40 md:h-48 object-contain transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Image Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full`} style={{ animationDuration: '1.5s' }}></div>
        </div>
        
        {/* Product Details with improved styling */}
        <div className="text-center">
          <div className="bg-green-50 py-1 px-2 rounded-md mb-2">
            <h2 className="font-bold text-xs sm:text-sm line-clamp-2 h-10 transition-colors duration-300 hover:text-green-600">
              EUCERIN DERMO PURIFIER GOMMAGE 100mL
            </h2>
          </div>
          
          {/* Pricing with enhanced effect */}
          <div className="flex justify-center items-center space-x-2 mb-3 sm:mb-4 relative">
            <span className="text-green-600 font-bold text-base sm:text-lg transition-all duration-300 ease-in-out hover:text-green-700 hover:scale-110">225 DHS</span>
            <span className="text-gray-400 line-through text-xs sm:text-sm relative">
              450 DHS
              <span className="absolute border-b border-red-500 w-full top-1/2 -left-1 transform -rotate-6"></span>
            </span>
          </div>
          
          {/* Action Buttons with enhanced effects */}
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 hover:rotate-12"
            >
              <Eye size={16} className="sm:w-5 sm:h-5" />
            </button>
            
            <button 
              onClick={handleAddToCart}
              className="bg-green-100 text-green-600 p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 relative overflow-hidden group"
            >
              {isAdded ? 
                <Check size={16} className="sm:w-5 sm:h-5 animate-bounce" /> : 
                <ShoppingCart size={16} className="sm:w-5 sm:h-5 group-hover:animate-wiggle" />
              }
              {/* Ripple effect */}
              <span className="absolute w-0 h-0 rounded-full bg-white opacity-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:w-16 group-hover:h-16 transition-all duration-500"></span>
            </button>
            
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 ${
                isFavorite
                  ? 'bg-red-100 text-red-500 hover:bg-red-200'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <Heart
                size={16}
                className={`sm:w-5 sm:h-5 transition-transform duration-300 ${isFavorite ? 'scale-110' : ''} ${isFavorite ? 'animate-heartbeat' : ''}`}
                fill={isFavorite ? 'currentColor' : 'none'}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProductCard;