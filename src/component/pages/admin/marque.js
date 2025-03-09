import React, { useState } from 'react';
import { Menu, Search, Plus, Edit, Trash2, Save, X } from 'lucide-react';

// Sidebar Component (from previous artifact)
const AdminSidebar = () => {
  // ... (previous sidebar implementation)
};

// Ajoute des Marques Component
const AjouteMarques = () => {
  const [brandName, setBrandName] = useState('');
  const [brandLogo, setBrandLogo] = useState(null);
  const [suggestedBrands, setSuggestedBrands] = useState([
    'Pingo', 'Avène', 'Axcx', 'Other Brands'
  ]);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setBrandLogo(file);
  };

  const handleSave = () => {
    // Logic to save brand
    console.log('Saving brand:', { name: brandName, logo: brandLogo });
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-20 md:ml-64 p-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <Plus className="mr-2" size={20} />
              Ajoute Marques
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              List Marques
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Ajoute des Marques</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nom marque</label>
            <input 
              type="text" 
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Entrez le nom de la marque"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Logo</label>
            <div className="flex items-center">
              <input 
                type="file" 
                onChange={handleLogoUpload}
                className="hidden"
                id="logo-upload"
                accept="image/*"
              />
              <label 
                htmlFor="logo-upload" 
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Télécharger Logo
              </label>
              {brandLogo && (
                <span className="ml-4 text-green-600">
                  {brandLogo.name}
                </span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Marques suggérées</h3>
            <div className="flex flex-wrap gap-2">
              {suggestedBrands.map((brand, index) => (
                <span 
                  key={index} 
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-2">
            <button 
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
            >
              <Save className="mr-2" size={20} />
              Enregistrer
            </button>
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
            >
              <X className="mr-2" size={20} />
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// List Marques Component
const ListMarques = () => {
  const [brands, setBrands] = useState([
    { id: 1, name: 'Pingo', logo: 'image', dateAdded: '07-01-2024' },
    { id: 2, name: 'Avène', logo: 'Avène', dateAdded: '19-01-2024' },
    { id: 3, name: 'Pingo', logo: 'image', dateAdded: '07-01-2024' },
    { id: 4, name: 'Pingo', logo: 'image', dateAdded: '07-01-2024' },
    { id: 5, name: 'Pingo', logo: 'image', dateAdded: '07-01-2024' }
  ]);

  const handleDelete = (id) => {
    setBrands(brands.filter(brand => brand.id !== id));
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-20 md:ml-64 p-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <Plus className="mr-2" size={20} />
              Ajoute Marques
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              List Marques
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

        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Id</th>
                <th className="p-3 text-left">Nom</th>
                <th className="p-3 text-left">Logo</th>
                <th className="p-3 text-left">Date Ajoutée</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <tr key={brand.id} className="border-b">
                  <td className="p-3">{brand.id}</td>
                  <td className="p-3">{brand.name}</td>
                  <td className="p-3">{brand.logo}</td>
                  <td className="p-3">{brand.dateAdded}</td>
                  <td className="p-3 flex justify-center space-x-2">
                    <button className="text-blue-500 hover:bg-blue-100 p-2 rounded">
                      <Edit size={20} />
                    </button>
                    <button 
                      onClick={() => handleDelete(brand.id)}
                      className="text-red-500 hover:bg-red-100 p-2 rounded"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { AjouteMarques, ListMarques };