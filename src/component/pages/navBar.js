import React, { useState, useEffect } from 'react';
import {
  Mail,
  ShoppingCart as ShoppingCartIcon,
  Heart,
  User,
  ChevronDown,
  Search,
  Home,
  Menu,
  X,
  Truck,
  Tag,
  Star,
  Award,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ShoppingCart from './panier';

const categories = [
  'Soins Visage',
  'Soins Corps',
  'Cheveux',
  'Hygiène & Santé',
  'Solaire & Après soleil',
  'Bébé & Maman',
  'Naturel & Bio',
  'Dentaire',
  'Accessoires santé',
  'Homme',
  'Beauté & Parfum',
  'Complements alimentaires'
];

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Eucerin Dermo Purifyer Gommage',
      volume: '150ml',
      price: 129.99,
      quantity: 1,
      image: '/product/product.jpg'
    },
    {
      id: 2,
      name: 'Eucerin Dermo Purifyer Gommage',
      volume: '150ml',
      price: 129.99,
      quantity: 1,
      image: '/product/product.jpg'
    },
    {
      id: 3,
      name: 'Eucerin Dermo Purifyer Gommage',
      volume: '150ml',
      price: 129.99,
      quantity: 1,
      image: '/product/product.jpg'
    },
    {
      id: 4,
      name: 'Eucerin Dermo Purifyer Gommage',
      volume: '150ml',
      price: 129.99,
      quantity: 1,
      image: '/product/product.jpg'
    }
  ]);

  // Detect scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close categories dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCategoriesOpen && !event.target.closest('.categories-dropdown')) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCategoriesOpen]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (!isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Custom tooltip component with enhanced effects
  const IconWithTooltip = ({ icon, text, onClick, badge = null, customClass = "" }) => {
    const Icon = icon;
    return (
      <div className={`relative group ${customClass}`}>
        <button 
          onClick={onClick} 
          className="relative transition-all duration-300 hover:scale-110 hover:rotate-3 focus:outline-none"
        >
          <Icon className="text-green-500" size={24} />
          {badge && (
            <span className="absolute -top-1 -right-1 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse shadow-lg">
              {badge}
            </span>
          )}
        </button>
        <div className="absolute mt-1 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md py-1 px-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10 shadow-xl">
          {text}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </div>
    );
  };

  // Rotating promo messages
  const promoMessages = [
    { icon: Truck, text: "Livraison gratuite sur Errachildiya à partir de 299dh" },
    { icon: Star, text: "Produits authentiques garantis" },
    { icon: RefreshCw, text: "Retours faciles sous 14 jours" },
    { icon: Award, text: "Meilleure sélection de produits de parapharmacie" }
  ];

  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promoMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentPromo = promoMessages[currentPromoIndex];

  return (
    <>
      {/* Top Promo Banner with rotating messages */}
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white text-center py-2 text-xs md:text-sm flex items-center justify-center overflow-hidden">
        <div className="flex items-center animate-fadeIn">
          <currentPromo.icon size={16} className="mr-2 animate-bounce" style={{ animationDuration: '3s' }} />
          <span className="font-medium tracking-wide">{currentPromo.text}</span>
        </div>
      </div>

      <div className="relative font-sans">
        {/* Header - with sticky effect on scroll */}
        <header className={`flex flex-col md:flex-row justify-between items-center px-4 py-3 ${isScrolled ? 'sticky top-0 z-50 bg-white shadow-lg transition-all duration-300 backdrop-blur-md bg-white/95' : ''}`}>
          {/* Mobile Header Row */}
          <div className="w-full flex justify-between items-center md:hidden">
            <img
              src="/images/logo_aroqay-removebg-preview.png"
              alt="Arrogay Logo"
              className="h-10 transition-transform duration-300 hover:scale-105"
            />
            <div className="flex items-center space-x-4">
              <button onClick={toggleCart} className="relative">
                <ShoppingCartIcon className="text-green-500 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse shadow-md">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="transition-all duration-300 hover:bg-green-50 p-1 rounded-full hover:rotate-12"
              >
                {isMobileMenuOpen ? 
                  <X className="text-green-500 transform rotate-90 transition-transform duration-300" /> : 
                  <Menu className="text-green-500 hover:rotate-12 transition-transform duration-300" />
                }
              </button>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex w-full items-center">
            {/* Logo with hover effect */}
            <div className="flex items-center mr-4">
              <Link to="/" className="transition-all duration-300 hover:scale-105 hover:rotate-1"> 
                <img
                  src="/images/logo_aroqay-removebg-preview.png"
                  alt="Arrogay Logo"
                  className="h-14"
                />
              </Link>
            </div>

            {/* Search Bar with focus effects */}
            <div className={`flex-grow flex items-center border ${searchFocused ? 'border-green-500' : 'border-gray-200'} rounded-full px-4 py-3 mx-4 transition-all duration-300 
              ${searchFocused ? 'shadow-lg border-green-500 scale-105' : 'hover:shadow-md'}`}>
              <input
                type="text"
                placeholder="Rechercher un produit, une marque..."
                className="w-full outline-none text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className={`text-green-500 cursor-pointer transition-all duration-300 ${searchFocused ? 'scale-125' : 'hover:scale-110'}`} size={20} />
            </div>

            {/* Icons with enhanced tooltips */}
            <div className="flex items-center space-x-8">
              <Link to="/contact" className="no-underline">
                <IconWithTooltip icon={Mail} text="Contact" />
              </Link>
              
              <IconWithTooltip 
                icon={ShoppingCartIcon} 
                text="Panier" 
                onClick={toggleCart} 
                badge={cartItems.length > 0 ? cartItems.length : null}
              />
              
              <Link to="/Favorites" className="no-underline">
                <IconWithTooltip icon={Heart} text="Favoris" />
              </Link>
              
              <Link to='/login' className="no-underline">
                <div className="flex items-center space-x-2 group transition-all duration-300 hover:bg-green-50 p-2 rounded-lg transform hover:-translate-y-1 hover:shadow-md"> 
                  <User className="text-green-500 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="text-green-500 font-medium group-hover:font-semibold transition-all duration-300">Login</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Search with animation */}
          <div className="w-full mt-3 md:hidden">
            <div className={`flex items-center border ${searchFocused ? 'border-green-500' : 'border-gray-200'} rounded-full px-4 py-2 transition-all duration-300 
              ${searchFocused ? 'shadow-md border-green-500' : ''}`}>
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full outline-none text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className={`text-green-500 transition-transform duration-300 ${searchFocused ? 'scale-110' : ''}`} size={20} />
            </div>
          </div>
        </header>

        {/* Mobile Menu with slide animation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slideDown bg-white shadow-lg rounded-b-lg z-40">
            {/* Mobile Icons */}
            <div className="flex justify-around py-4 border-b border-gray-100">
              <Link to="/contact">
                <IconWithTooltip icon={Mail} text="Contact" />
              </Link>
              
              <Link to="/Favorites">
                <IconWithTooltip icon={Heart} text="Favoris" />
              </Link>
              
              <Link to=''>
                <div className="flex items-center space-x-1 group transition-all duration-300 hover:bg-green-50 p-1 rounded-lg"> 
                  <User className="text-green-500 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="text-green-500 group-hover:font-semibold">Login</span>
                </div>
              </Link>
            </div>

            {/* Mobile Categories with hover effect */}
            <div className="max-h-96 overflow-y-auto">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="px-4 py-3 border-b border-gray-100 hover:bg-green-50 hover:pl-6 flex justify-between items-center transition-all duration-300"
                >
                  <span className="font-medium text-gray-700">{category}</span>
                  <ChevronDown className="text-green-500 transform transition-transform duration-300 group-hover:rotate-180" size={16} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories and Promo Section */}
        <div className={`hidden md:flex items-center px-6 py-3 bg-gray-50 ${isScrolled ? 'border-t border-gray-100' : ''}`}>
          {/* Categories Dropdown with enhanced animation */}
          <div className="relative categories-dropdown">
            <button
              className="flex items-center bg-gradient-to-r from-emerald-900 to-emerald-700 text-white px-5 py-2 rounded-lg hover:from-emerald-800 hover:to-emerald-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md font-medium"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              Nos Categories
              <ChevronDown className={`ml-2 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} size={20} />
            </button>

            {isCategoriesOpen && (
              <div className="absolute z-10 bg-white shadow-xl border border-gray-100 rounded-lg mt-2 w-64 animate-scaleUp overflow-hidden">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`px-4 py-3 hover:bg-green-50 hover:pl-6 flex justify-between items-center transition-all duration-300 cursor-pointer group ${activeCategory === index ? 'bg-green-50' : ''}`}
                    onMouseEnter={() => setActiveCategory(index)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <span className="font-medium text-gray-700">{category}</span>
                    <ChevronDown className={`text-green-500 transition-transform duration-300 ${activeCategory === index ? 'rotate-180' : ''}`} size={16} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Promo and Links */}
          <div className="ml-6 flex space-x-8">
            <Link to="/" className="no-underline">
              <div className="flex items-center transition-all duration-300 hover:text-green-500 group transform hover:-translate-y-1">
                <Home className="text-green-500 mr-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" size={24} />
                <span className="group-hover:text-green-500 transition-colors duration-300 font-medium">Home</span>
              </div>
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/promotions" className="no-underline">
                <div className="flex items-center transition-all duration-300 hover:text-green-500 group transform hover:-translate-y-1">
                  <Tag className="text-green-500 mr-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" size={20} />
                  <span className="text-green-500 font-medium group-hover:font-semibold transition-all duration-300">Promotions</span>
                </div>
              </Link>
              <span className="cursor-pointer hover:text-green-500 transition-colors duration-300 transform hover:-translate-y-1 hover:font-semibold font-medium">Marques</span>
            </div>
          </div>
        </div>

        {/* Shopping Cart Drawer with glass morphism effect */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fadeIn backdrop-blur-sm">
            <ShoppingCart 
              items={cartItems} 
              onClose={toggleCart} 
              onUpdateQuantity={updateQuantity} 
              onRemoveItem={removeItem} 
            />
          </div>
        )}
      </div>

      {/* Add a style tag for animations */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
        
        .animate-slideRight {
          animation: slideRight 15s linear infinite;
        }
        
        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out forwards;
        }
        
        /* Add subtle hover effects to elements */
        .hover-lift {
          transition: transform 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-3px);
        }
        
        /* Custom scrollbar for the categories */
        .max-h-96::-webkit-scrollbar {
          width: 6px;
        }
        
        .max-h-96::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .max-h-96::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        
        .max-h-96::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
    </>
  );
};

export default Navbar;