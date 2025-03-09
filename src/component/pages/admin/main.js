import React, { useState } from 'react';
import { Menu, ChevronRight } from 'lucide-react';

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    'Gestion des Marques',
    'Gestion des Produits',
    'Gestion des Clients',
    'Liste des commandes',
    'Gestion des offres',
    'Gestion des Commanderies',
    'Gestion des avis',
    'Gestion des notes'
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className={`
      fixed top-0 left-0 h-full bg-green-600 text-white 
      transition-all duration-300 ease-in-out
      ${isSidebarOpen ? 'w-64' : 'w-20'}
      overflow-hidden z-50
    `}>
      <div className="flex items-center justify-between p-4">
        {isSidebarOpen && <div className="text-xl font-bold">Arrogay</div>}
        <button onClick={toggleSidebar} className="focus:outline-none">
          <Menu size={24} />
        </button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleMenuClick(index)}
            className={`
              flex items-center cursor-pointer 
              px-4 py-3 hover:bg-green-700
              ${activeMenu === index ? 'bg-green-700' : ''}
            `}
          >
            <ChevronRight 
              size={20} 
              className={`mr-2 transition-transform duration-200 
                ${activeMenu === index ? 'rotate-90' : ''}`} 
            />
            <span className={`${!isSidebarOpen ? 'hidden' : ''}`}>
              {item}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;