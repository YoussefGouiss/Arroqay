import React, { useState } from 'react';
import { Search, Edit } from 'lucide-react';

const ListCommandes = () => {
  const [commandes, setCommandes] = useState([
    {
      id: 'Id44888995',
      statut: 'payé',
      prixTotal: 205,
      clientId: 'ID71288197',
      clientNom: 'zaffou'
    },
    {
      id: 'Id44888995',
      statut: 'payé',
      prixTotal: 205,
      clientId: 'ID71288197',
      clientNom: 'zaffou'
    },
    {
      id: 'Id44888995',
      statut: 'payé',
      prixTotal: 205,
      clientId: 'ID71288197',
      clientNom: 'zaffou'
    },
    {
      id: 'Id44888995',
      statut: 'payé',
      prixTotal: 205,
      clientId: 'ID71288197',
      clientNom: 'zaffou'
    },
    {
      id: 'Id44888995',
      statut: 'payé',
      prixTotal: 205,
      clientId: 'ID71288197',
      clientNom: 'zaffou'
    },
    {
      id: 'Id44888995',
      statut: 'payé',
      prixTotal: 205,
      clientId: 'ID71288197',
      clientNom: 'zaffou'
    },
    {
      id: 'Id44888995',
      statut: 'payé',
      prixTotal: 205,
      clientId: 'ID71288197',
      clientNom: 'zaffou'
    },
    {
      id: 'Id44888995',
      statut: 'payé',
      prixTotal: 205,
      clientId: 'ID71288197',
      clientNom: 'zaffou'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusModify = (index) => {
    // Implement status modification logic
    console.log(`Modifying status for command at index ${index}`);
  };

  const filteredCommandes = commandes.filter(commande => 
    commande.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    commande.clientNom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-green-600 text-white">
        {/* Sidebar content from previous components */}
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Rechercher" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-4 py-2 rounded border"
          />
          <Search 
            className="absolute left-2 top-3 text-gray-400" 
            size={20} 
          />
        </div>

        {/* Responsive Table */}
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead className="bg-green-50">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Statut</th>
                <th className="p-3 text-left">Prix Total</th>
                <th className="p-3 text-left">Client ID</th>
                <th className="p-3 text-left">Client Nom</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCommandes.map((commande, index) => (
                <tr key={index} className="border-b hover:bg-green-50">
                  <td className="p-3">{commande.id}</td>
                  <td className="p-3">{commande.statut}</td>
                  <td className="p-3">{commande.prixTotal} DH</td>
                  <td className="p-3">{commande.clientId}</td>
                  <td className="p-3">{commande.clientNom}</td>
                  <td className="p-3 text-center">
                    <button 
                      onClick={() => handleStatusModify(index)}
                      className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center w-full"
                    >
                      <Edit className="mr-2" size={16} />
                      Modifier statut
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View for Small Screens */}
          <div className="md:hidden">
            {filteredCommandes.map((commande, index) => (
              <div 
                key={index} 
                className="p-4 border-b bg-white hover:bg-green-50"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold">{commande.id}</span>
                  <span className="text-green-600">{commande.statut}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Prix Total:</span>
                  <span>{commande.prixTotal} DH</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Client:</span>
                  <span>{commande.clientNom} ({commande.clientId})</span>
                </div>
                <button 
                  onClick={() => handleStatusModify(index)}
                  className="w-full bg-green-500 text-white py-2 rounded mt-2 flex items-center justify-center"
                >
                  <Edit className="mr-2" size={16} />
                  Modifier statut
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCommandes;