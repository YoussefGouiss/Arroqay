import React, { useState } from 'react';
import ProductCard from './product';

const SectionMain = () => {
  const products = Array(8).fill(null);
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Products Section */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Produits Populaires</h2>
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md text-gray-700"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Masquer filtres" : "Afficher filtres"}
            </button>
            <a href="#" className="text-green-500 hover:text-green-700">Voir tout</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filtering Options - Mobile first approach */}
          <div className={`w-full md:w-64 bg-white p-4 rounded-lg shadow h-fit shrink-0 transition-all duration-300 ${showFilters ? 'max-h-screen opacity-100 mb-6' : 'max-h-0 md:max-h-screen opacity-0 md:opacity-100 overflow-hidden md:overflow-visible'}`}>
            <h3 className="text-lg font-semibold mb-4">Filtrer</h3>
            
            {/* Filter by name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rechercher par nom
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Nom du produit" 
              />
            </div>
            
            {/* Filter by price */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prix
              </label>
              <div className="flex flex-col space-y-2">
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Prix minimum" 
                />
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Prix maximum" 
                />
              </div>
            </div>
            
            {/* Apply filters button */}
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300">
              Appliquer les filtres
            </button>
          </div>
          
          {/* Products Grid - Responsive sizing */}
          <div className="md:flex-1 w-full">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* New Arrivals Section */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Nouveautés</h2>
          <a href="#" className="text-green-500 hover:text-green-700">Voir tout</a>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      
      {/* Promotional Banner */}
      <div className="bg-emerald-50 rounded-lg p-4 sm:p-6 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-emerald-800 mb-2">Offre Exclusive</h3>
            <p className="text-emerald-700 mb-4">Profitez de 20% de réduction sur tous les produits Eucerin</p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full">
              Voir l'offre
            </button>
          </div>
          <img
            src="/product/product.jpg"
            alt="Promotion Eucerin"
            className="rounded-lg w-full max-w-xs md:max-w-sm"
          />
        </div>
      </div>
      
      {/* Best Sellers Section */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Meilleures Ventes</h2>
          <a href="#" className="text-green-500 hover:text-green-700">Voir tout</a>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMain;