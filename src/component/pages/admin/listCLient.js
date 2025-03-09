import React, { useState } from 'react';
import { Search, Info, User } from 'lucide-react';

const ListClients = () => {
  const [clients, setClients] = useState([
    { 
      id: 'ID71288197', 
      name: 'Youssef gouiss', 
      avatar: '/api/placeholder/50/50',
      email: 'youssefgouss298@gmail.com',
      telephone: '0708016338',
      password: '******',
      orders: [
        { id: 'ld210', date: '01-09-2019', status: 'payé', total: 1980 },
        { id: 'ld210', date: '01-09-2019', status: 'payé', total: 1980 }
      ]
    }
  ]);

  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientSelect = (client) => {
    setSelectedClient(client);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-green-600 text-white">
        {/* Sidebar content */}
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 w-full flex">
        {/* Client List */}
        <div className="w-full md:w-1/3 pr-4">
          <div className="relative mb-4">
            <input 
              type="text" 
              placeholder="Rechercher" 
              className="w-full pl-8 pr-4 py-2 rounded border"
            />
            <Search 
              className="absolute left-2 top-3 text-gray-400" 
              size={20} 
            />
          </div>

          <div className="bg-white shadow-md rounded-lg">
            {clients.map((client, index) => (
              <div 
                key={index}
                onClick={() => handleClientSelect(client)}
                className={`
                  flex items-center p-4 cursor-pointer hover:bg-green-50
                  ${selectedClient?.id === client.id ? 'bg-green-100' : ''}
                `}
              >
                <img 
                  src={client.avatar} 
                  alt={client.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-bold">{client.name}</h3>
                </div>
                <button className="text-green-500">
                  <Info size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Client Details */}
        {selectedClient && (
          <div className="hidden md:block w-2/3 pl-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-6">
                <img 
                  src={selectedClient.avatar} 
                  alt={selectedClient.name} 
                  className="w-24 h-24 rounded-full mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                  <p className="text-gray-600">{selectedClient.id}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Informations Personnelles</h3>
                  <p><strong>Email:</strong> {selectedClient.email}</p>
                  <p><strong>Téléphone:</strong> {selectedClient.telephone}</p>
                  <p><strong>Mot de passe:</strong> {selectedClient.password}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Historique des Commandes</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Date</th>
                        <th className="p-2 text-left">Statut</th>
                        <th className="p-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedClient.orders.map((order, index) => (
                        <tr key={index}>
                          <td className="p-2">{order.id}</td>
                          <td className="p-2">{order.date}</td>
                          <td className="p-2">{order.status}</td>
                          <td className="p-2 text-right">{order.total} DH</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Client Details Modal */}
        {selectedClient && (
          <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="p-6">
              <button 
                onClick={() => setSelectedClient(null)}
                className="mb-4 text-green-500"
              >
                ← Retour à la liste
              </button>

              <div className="flex items-center mb-6">
                <img 
                  src={selectedClient.avatar} 
                  alt={selectedClient.name} 
                  className="w-24 h-24 rounded-full mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                  <p className="text-gray-600">{selectedClient.id}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Informations Personnelles</h3>
                  <p><strong>Email:</strong> {selectedClient.email}</p>
                  <p><strong>Téléphone:</strong> {selectedClient.telephone}</p>
                  <p><strong>Mot de passe:</strong> {selectedClient.password}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Historique des Commandes</h3>
                  {selectedClient.orders.map((order, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
                      <div className="flex justify-between">
                        <span>ID: {order.id}</span>
                        <span>{order.date}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="font-semibold">{order.status}</span>
                        <span className="font-bold">{order.total} DH</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListClients;