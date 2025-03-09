import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const ShoppingCart = ({ items, onClose, onUpdateQuantity, onRemoveItem }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-end backdrop-blur-sm transition-all duration-300">
      <div className="w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl transform transition-transform duration-500 ease-in-out">
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b bg-gradient-to-r from-emerald-800 to-teal-600">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <ShoppingBag className="mr-2" size={24} />
            Votre Panier
          </h2>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200 bg-white bg-opacity-20 rounded-full p-1 transition-all hover:bg-opacity-30"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-5">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Votre panier est vide</p>
              <p className="text-gray-400 mt-2">Ajoutez des articles pour commencer vos achats</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4 hover:bg-gray-50 rounded-lg p-3 transition-all">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover mr-4 rounded-lg shadow-md"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.volume}</p>
                    <p className="font-bold text-emerald-700 mt-1">{item.price.toFixed(2)} DH</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="mb-2 text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                    <div className="flex items-center border rounded-full overflow-hidden shadow-sm">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 py-1 font-medium text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Subtotal */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sous-total:</span>
                  <span className="text-lg font-medium">{calculateTotal()} DH</span>
                </div>
                
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-dashed border-gray-200">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-emerald-700">{calculateTotal()} DH</span>
                </div>
              </div>
            </>
          )}

          {/* Checkout buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full bg-gradient-to-r from-emerald-800 to-teal-600 text-white py-3 rounded-lg hover:from-emerald-900 hover:to-teal-700 transition-all font-medium shadow-md">
              Contactez sur WhatsApp
            </button>
            <button onClick={onClose} className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium">
              Continuer vos achats
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-5 mt-auto border-t">
          <p className="text-center text-gray-500 mb-3 text-sm">Suivez-nous sur les réseaux sociaux</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <img src="/api/placeholder/24/24" alt="Facebook" className="w-6 h-6" />
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <img src="/api/placeholder/24/24" alt="WhatsApp" className="w-6 h-6" />
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <img src="/api/placeholder/24/24" alt="Instagram" className="w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;