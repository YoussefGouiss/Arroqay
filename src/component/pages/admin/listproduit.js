import React, { useState } from 'react';
import { Menu, Search, Plus, Edit, Trash2, Eye } from 'lucide-react';

const ListProduit = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'ISDIN Fotoprotetor',
      brand: 'ISDIN',
      description: 'Crème solaire avec filtre UV haute protection SPF 50+',
      price: 199.99,
      image: '/api/placeholder/100/150'
    },
    {
      id: 2,
      name: 'ISOL Monorose',
      brand: 'ISOL',
      description: 'Crème hydratante avec protection UV SPF 30',
      price: 149.99,
      image: '/api/placeholder/100/150'
    },
    // Duplicate products to match the screenshot
    {
      id: 3,
      name: 'ISDIN Fotoprotetor',
      brand: 'ISDIN',
      description: 'Crème solaire avec filtre UV haute protection SPF 50+',
      price: 199.99,
      image: '/api/placeholder/100/150'
    },
    {
      id: 4,
      name: 'ISOL Monorose',
      brand: 'ISOL',
      description: 'Crème hydratante avec protection UV SPF 30',
      price: 149.99,
      image: '/api/placeholder/100/150'
    },
    {
      id: 5,
      name: 'ISDIN Fotoprotetor',
      brand: 'ISDIN',
      description: 'Crème solaire avec filtre UV haute protection SPF 50+',
      price: 199.99,
      image: '/api/placeholder/100/150'
    },
    {
      id: 6,
      name: 'ISOL Monorose',
      brand: 'ISOL',
      description: 'Crème hydratante avec protection UV SPF 30',
      price: 149.99,
      image: '/api/placeholder/100/150'
    },
    {
      id: 7,
      name: 'ISDIN Fotoprotetor',
      brand: 'ISDIN',
      description: 'Crème solaire avec filtre UV haute protection SPF 50+',
      price: 199.99,
      image: '/api/placeholder/100/150'
    },
    {
      id: 8,
      name: 'ISOL Monorose',
      brand: 'ISOL',
      description: 'Crème hydratante avec protection UV SPF 30',
      price: 149.99,
      image: '/api/placeholder/100/150'
    }
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (from previous component) */}
      <div className="fixed top-0 left-0 h-full w-64 bg-green-600 text-white">
        {/* Sidebar content */}
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <Plus className="mr-2" size={20} />
              Ajoute Produit
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              List Produit
            </button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Rechercher" 
              className="pl-8 pr-4 py-2 rounded border"
            />
            <Search 
              className="absolute left-2 top-3 text-gray-400" 
              size={20} 
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="bg-green-500 text-white p-2 rounded-full">
                    <Edit size={16} />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-full">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-600">
                    {product.price.toFixed(2)} DH
                  </span>
                  <button className="text-blue-500 hover:bg-blue-100 p-2 rounded">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduit;