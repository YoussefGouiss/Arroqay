import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Minus, Plus, X } from 'lucide-react';

const ProductDetailModal = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(2);
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  // Use placeholder images that will work
  const productImages = [
    "/product/product.jpg",
    "/product/product.jpg",
    "/product/product.jpg"
   
  ];

  useEffect(() => {
    if (isOpen) {
      // Slight delay to trigger entrance animation
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (quantity > 1 && type === 'decrease') {
      setQuantity(quantity - 1);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    // Delay actual closing to allow animation to complete
    setTimeout(onClose, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
        isVisible ? 'bg-opacity-60' : 'bg-opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto relative transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 z-10 transition-transform duration-200 hover:rotate-90"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {/* Product Header */}
          <div className="text-sm text-gray-600 mb-4 animate-fadeIn">
            EUCERIN DERMO PURYFIER GOMMAGE 100ML
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="mb-4 relative overflow-hidden rounded-lg group">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded z-10 transition-all duration-300 hover:bg-green-600 hover:scale-105">
                  50%
                </div>
                <img 
                  src={productImages[activeImage]} 
                  alt="Product" 
                  className="w-full h-96 object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {productImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                      activeImage === index ? 'ring-2 ring-green-500 ring-offset-2' : 'hover:translate-y-[-5px]'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Product thumbnail ${index + 1}`}
                      className="w-20 h-20 object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
                      onClick={() => setActiveImage(index)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold mb-4 transition-all duration-300 hover:text-green-600">
                Eucerin Dermo Puryfier Gommage
              </h1>

              {/* Description */}
              <p className="text-gray-600 mb-6 transition-all duration-300 hover:text-gray-800">
                Découvrez le SOMEBYMI Lacto Soy Mild Peeling Bubble Cleanser, un nettoyant innovant qui transforme votre routine de soin en une expérience revitalisante. Ce gel se métamorphose en une mousse onctueuse, offrant un nettoyage en profondeur tout en respectant l'équilibre naturel de votre peau.
              </p>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-600 transition-all duration-300 hover:text-green-700 hover:scale-105 transform">225 Dhs</span>
                <span className="line-through text-gray-400 transition-all duration-300 hover:text-gray-600">450 Dhs</span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <button 
                    onClick={() => handleQuantityChange('decrease')} 
                    className="p-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus size={20} className="transition-transform duration-200 hover:scale-110" />
                  </button>
                  <span className="px-6 py-2 font-medium transition-all duration-200">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange('increase')} 
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus size={20} className="transition-transform duration-200 hover:scale-110" />
                  </button>
                </div>

                {/* Favorite Button */}
                <button 
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isHeartFilled ? 'bg-pink-100 hover:bg-pink-200' : 'bg-gray-100 hover:bg-gray-200'
                  } hover:scale-110`}
                  onClick={() => setIsHeartFilled(!isHeartFilled)}
                >
                  <Heart 
                    className={`transition-all duration-300 ${
                      isHeartFilled ? 'text-pink-500 fill-pink-500' : 'text-green-500'
                    }`} 
                  />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-grow bg-green-500 text-white py-3 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-green-600 hover:shadow-lg transform hover:-translate-y-1">
                  <ShoppingCart className="mr-2" /> Add to bag
                </button>
                <button className="flex-grow border border-green-500 text-green-500 py-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:shadow-lg transform hover:-translate-y-1">
                  Buy now
                </button>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <h3 className="font-semibold mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Hydratation', 'Peau Sensible', 'Points Noirs', 'Sébum', 'Démaquillant', 'SOMEBYMI', 'Lacto Soy', 'Huile Nettoyante', 'Anti-Sebum'].map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-xs transition-all duration-200 hover:bg-green-100 hover:text-green-700 hover:scale-105 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Categories:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Accessoires santé', 'Diabète', 'Promotions'].map((category, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 px-3 py-1 rounded-full text-xs text-blue-700 transition-all duration-200 hover:bg-blue-200 hover:text-blue-800 hover:scale-105 cursor-pointer"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;