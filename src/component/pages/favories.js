import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, Heart, PlusCircle } from 'lucide-react';

const favoritesData = [
  {
    id: 1,
    image: "/product/product.jpg",
    name: "Eucerin Dermo Puryfier Gommage",
    price: 225,
    offerPrice: 112.50,
    discount: 50
  },
  {
    id: 2,
    image: "/product/product.jpg",
    name: "Bioderma Sensibio Gel Moussant",
    price: 180,
    offerPrice: 90,
    discount: 50
  },
  {
    id: 3,
    image: "/product/product.jpg",
    name: "La Roche-Posay Effaclar Sérum",
    price: 250,
    offerPrice: 125,
    discount: 50
  },
  {
    id: 4,
    image: "/product/product.jpg",
    name: "Vichy Normaderm Phytaction",
    price: 200,
    offerPrice: 100,
    discount: 50
  }
];

const FavoritesPage = () => {
  // Initialize with the favoritesData instead of empty array
  const [favorites, setFavorites] = useState(favoritesData);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [animation, setAnimation] = useState({});

  const handleDeleteFavorite = (id, e) => {
    e && e.stopPropagation();
    setAnimation({ id, type: 'delete' });
    setTimeout(() => {
      setFavorites(favorites.filter(item => item.id !== id));
      setAnimation({});
    }, 300);
  };

  const handleAddToCart = (item, e) => {
    e && e.stopPropagation();
    setAnimation({ id: item.id, type: 'cart' });
    // Add to cart logic
    console.log('Added to cart:', item);
    setTimeout(() => setAnimation({}), 500);
  };

  // Function to clear all favorites
  const clearAllFavorites = () => {
    setFavorites([]);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header with icon */}
        <div className="flex items-center justify-center mb-8">
          <Heart className="text-emerald-500 mr-3" size={28} />
          <h1 className="text-3xl font-bold text-gray-800">
            Mes <span className="text-emerald-600">Favoris</span>
          </h1>
        </div>
        
        {favorites.length === 0 ? (
          <div className="relative overflow-hidden rounded-xl max-w-lg mx-auto shadow-lg">
            {/* Enhanced background styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-90"></div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0">
              {/* Top wave */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-white opacity-10 transform -skew-y-6"></div>
              
              {/* Bottom wave */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-10 transform skew-y-6"></div>
              
              {/* Decorative circles */}
              <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-white opacity-10"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full bg-white opacity-10"></div>
              
              {/* Decorative dots pattern */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-3 h-3 rounded-full bg-white"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="relative py-8 px-6 text-center">
              {/* Heart icon with pulsing animation */}
              <div className="bg-white bg-opacity-20 p-4 backdrop-blur-sm rounded-xl inline-block mb-4 shadow-md animate-pulse">
                <Heart className="mx-auto text-white" size={42} />
              </div>
              
              {/* Text content */}
              <h2 className="text-white text-xl font-bold mb-2 drop-shadow-md">
                Votre liste de favoris est vide
              </h2>
              <p className="text-white text-opacity-90 mb-6 text-sm max-w-md mx-auto">
                Explorez notre catalogue et ajoutez des produits à vos favoris.
              </p>
              
              {/* Action button - now a Link to home */}
              <Link 
                to="/"
                className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Découvrir nos produits
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Summary bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
              <p className="text-gray-600 font-medium">
                <span className="text-emerald-600 font-bold">{favorites.length}</span> produits dans vos favoris
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={clearAllFavorites}
                  className="text-red-500 hover:text-red-600 transition font-medium flex items-center"
                >
                  <Trash2 size={18} className="mr-2" />
                  Tout supprimer
                </button>
                <button className="text-emerald-600 hover:text-emerald-700 transition font-medium flex items-center">
                  <PlusCircle size={18} className="mr-2" />
                  Ajouter tout au panier
                </button>
              </div>
            </div>
            
            {/* Products grid - responsive but not too small */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ${
                    animation.id === item.id && animation.type === 'delete' ? 'opacity-0 transform scale-95' : 'opacity-100'
                  }`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Discount Tag */}
                  <div className="absolute z-10 bg-emerald-500 text-white px-3 py-1 font-bold rounded-br-lg">
                    -{item.discount}%
                  </div>
                  
                  {/* Product Image with hover effect */}
                  <div className="relative pt-[110%] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`absolute inset-0 w-full h-full object-cover transition duration-300 ${
                        hoveredItem === item.id ? 'scale-110 brightness-95' : 'scale-100'
                      }`}
                    />
                    
                    {/* Quick add overlay */}
                    <div 
                      className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-200 ${
                        hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <button
                        onClick={(e) => handleAddToCart(item, e)}
                        className={`bg-white text-emerald-600 px-4 py-2 rounded-full font-medium hover:bg-emerald-50 transform transition duration-200 ${
                          hoveredItem === item.id ? 'scale-100' : 'scale-90'
                        } ${animation.id === item.id && animation.type === 'cart' ? 'animate-pulse bg-emerald-100' : ''}`}
                      >
                        <ShoppingCart size={18} className="inline mr-1" />
                        Ajouter
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2 h-12">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-emerald-600 font-bold text-xl mr-2">
                          {item.offerPrice.toFixed(2)} Dhs
                        </span>
                        <span className="line-through text-gray-400 text-sm">
                          {item.price.toFixed(2)} Dhs
                        </span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => handleDeleteFavorite(item.id, e)}
                        className="flex-1 border border-red-200 text-red-500 py-2 rounded-lg hover:bg-red-50 transition flex items-center justify-center group"
                      >
                        <Trash2 size={18} className="mr-2 group-hover:animate-bounce" />
                        Supprimer
                      </button>
                      <button
                        onClick={(e) => handleAddToCart(item, e)}
                        className={`flex-1 bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center ${
                          animation.id === item.id && animation.type === 'cart' ? 'animate-pulse bg-emerald-600' : ''
                        }`}
                      >
                        <ShoppingCart size={18} className="mr-2" />
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;