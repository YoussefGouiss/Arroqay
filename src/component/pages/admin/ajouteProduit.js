import React, { useState } from 'react';
import { Plus, RefreshCcw } from 'lucide-react';

const AjouteProduit = () => {
  const [productData, setProductData] = useState({
    nom: '',
    categorie: '',
    marque: '',
    prix: '',
    prixOffer: '',
    pourcentageOffer: ''
  });

  const [productImages, setProductImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setProductImages(prev => [...prev, ...newImages].slice(0, 3));
  };

  const handleReset = () => {
    setProductData({
      nom: '',
      categorie: '',
      marque: '',
      prix: '',
      prixOffer: '',
      pourcentageOffer: ''
    });
    setProductImages([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', productData);
    console.log('Product Images:', productImages);
    // Add your submission logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (similar to previous components) */}
      <div className="fixed top-0 left-0 h-full w-64 bg-green-600 text-white">
        {/* Sidebar content */}
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <div className="flex space-x-2 mb-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <Plus className="mr-2" size={20} />
            Ajoute Produit
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            List Produit
          </button>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <h2 className="text-2xl font-bold col-span-full mb-4">Ajoute Produit</h2>
          
          {/* Form Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Nom</label>
              <input 
                type="text"
                name="nom"
                value={productData.nom}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg bg-green-50"
                placeholder="Nom du produit"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Catégorie</label>
              <input 
                type="text"
                name="categorie"
                value={productData.categorie}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg bg-green-50"
                placeholder="Catégorie du produit"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Marque</label>
              <input 
                type="text"
                name="marque"
                value={productData.marque}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg bg-green-50"
                placeholder="Marque du produit"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Prix</label>
              <input 
                type="number"
                name="prix"
                value={productData.prix}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg bg-green-50"
                placeholder="Prix du produit"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Prix Offer</label>
              <input 
                type="number"
                name="prixOffer"
                value={productData.prixOffer}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg bg-green-50"
                placeholder="Prix de l'offre"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Pourcentage Offer</label>
              <input 
                type="number"
                name="pourcentageOffer"
                value={productData.pourcentageOffer}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg bg-green-50"
                placeholder="Pourcentage de réduction"
                max="100"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="col-span-full">
            <label className="block text-gray-700 mb-2">Images du Produit</label>
            <input 
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border rounded-lg bg-green-50"
            />
            <div className="flex space-x-4 mt-4">
              {productImages.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Product ${index + 1}`} 
                  className="w-24 h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="col-span-full flex space-x-4">
            <button 
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center"
            >
              <Plus className="mr-2" size={20} />
              Ajouter
            </button>
            <button 
              type="button"
              onClick={handleReset}
              className="bg-red-500 text-white px-6 py-2 rounded-lg flex items-center"
            >
              <RefreshCcw className="mr-2" size={20} />
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AjouteProduit;