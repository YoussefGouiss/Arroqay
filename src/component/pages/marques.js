import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BrandLogoMarquee = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Brand logos - replace with your actual logos
  const brands = [
    { name: "Bioderma", logo: "/marquees/Bioderma.jpeg" },
    { name: "Avène", logo: "/marquees/Avène.jpeg" },
    { name: "Cetaphil", logo: "/marquees/Cetaphil.png" },
    { name: "Ducray", logo: "/marquees/Ducray.png" },
    { name: "Eucerin", logo: "/marquees/Eucerin.png" },
    { name: "Filorga", logo: "/marquees/Filorga.jpeg" },
    { name: "Vichy", logo: "/marquees/Vichy.png" },
    { name: "CeraVe", logo: "/marquees/CeraVe.png" },
    { name: "Neutrogena", logo: "/marquees/Neutrogena.png" }
  ];

  // Number of visible brands
  const visibleBrands = 6;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= brands.length - visibleBrands ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? brands.length - visibleBrands : prevIndex - 1
    );
  };

  // Create the visible brands array
  const displayedBrands = [];
  for (let i = 0; i < visibleBrands; i++) {
    const index = (currentIndex + i) % brands.length;
    displayedBrands.push(brands[index]);
  }

  return (
    
    <div className="w-full py-10 bg-white">
        <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
          Nos Marques Partenaires
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></div>
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
          Découvrez notre sélection des meilleures marques pour votre santé et bien-être
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Brand Logos */}
          <div className="flex-1 mx-4 overflow-hidden">
            <div className="flex items-center justify-between transition-all duration-500 space-x-8">
              {displayedBrands.map((brand, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-80"
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-12 h-auto w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {brands.slice(0, brands.length - visibleBrands + 1).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-green-600 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoMarquee;