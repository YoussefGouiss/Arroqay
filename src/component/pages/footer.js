import React from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram,
  Twitter,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-12 shadow-lg">
      {/* Top Section - Contact Info with enhanced visual design */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-emerald-800/50 rounded-xl p-6 backdrop-blur-sm shadow-md grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center group">
            <div className="bg-emerald-700 p-3 rounded-full mr-4 group-hover:bg-emerald-600 transition-all duration-300 transform group-hover:scale-110">
              <Phone className="text-white" size={20} />
            </div>
            <div>
              <p className="text-emerald-300 text-sm font-semibold">SERVICE CLIENT</p>
              <p className="font-bold">+212 632 478 888</p>
            </div>
          </div>
          
          <div className="flex items-center group">
            <div className="bg-emerald-700 p-3 rounded-full mr-4 group-hover:bg-emerald-600 transition-all duration-300 transform group-hover:scale-110">
              <Mail className="text-white" size={20} />
            </div>
            <div>
              <p className="text-emerald-300 text-sm font-semibold">EMAIL</p>
              <p className="font-bold">info@parapharma.ma</p>
            </div>
          </div>
          
          <div className="flex items-center group">
            <div className="bg-emerald-700 p-3 rounded-full mr-4 group-hover:bg-emerald-600 transition-all duration-300 transform group-hover:scale-110">
              <Clock className="text-white" size={20} />
            </div>
            <div>
              <p className="text-emerald-300 text-sm font-semibold">HORAIRES</p>
              <p className="font-bold">Lun-Ven: 9h00 - 18h30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content with improved layout */}
      <div className="container mx-auto px-4">
        <div className="border-t border-emerald-700/50 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Nos Produits */}
            <div className="transform transition-all duration-300 hover:translate-y-1">
              <h4 className="font-bold mb-6 text-emerald-300 text-lg relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-emerald-500 after:-bottom-2 after:left-0">
                NOS PRODUITS
              </h4>
              <ul className="space-y-3">
                {['Promotions', 'Nouveaux produits', 'Meilleures ventes'].map((item, index) => (
                  <li key={index} className="group flex items-center hover:text-emerald-300 transition-all duration-200">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <a href="#" className="hover:translate-x-1 inline-block transition-transform duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infos Pratiques */}
            <div className="transform transition-all duration-300 hover:translate-y-1">
              <h4 className="font-bold mb-6 text-emerald-300 text-lg relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-emerald-500 after:-bottom-2 after:left-0">
                INFOS PRATIQUES
              </h4>
              <ul className="space-y-3">
                {['Livraison', 'Mentions légales', 'Conditions d\'utilisation', 'Qui sommes nous ?', 'Paiement sécurisé', 'شروط الاستخدام'].map((item, index) => (
                  <li key={index} className="group flex items-center hover:text-emerald-300 transition-all duration-200">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <a href="#" className="hover:translate-x-1 inline-block transition-transform duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nous Connaitre */}
            <div className="transform transition-all duration-300 hover:translate-y-1">
              <h4 className="font-bold mb-6 text-emerald-300 text-lg relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-emerald-500 after:-bottom-2 after:left-0">
                NOUS CONNAITRE
              </h4>
              <ul className="space-y-3">
                {['Contactez-nous', 'Notre mission', 'Notre équipe'].map((item, index) => (
                  <li key={index} className="group flex items-center hover:text-emerald-300 transition-all duration-200">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <a href="#" className="hover:translate-x-1 inline-block transition-transform duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Votre Compte */}
            <div className="transform transition-all duration-300 hover:translate-y-1">
              <h4 className="font-bold mb-6 text-emerald-300 text-lg relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-emerald-500 after:-bottom-2 after:left-0">
                VOTRE COMPTE
              </h4>
              <ul className="space-y-3">
                {['Informations personnelles', 'Commandes', 'Avoirs', 'Adresses', 'Bons de réduction'].map((item, index) => (
                  <li key={index} className="group flex items-center hover:text-emerald-300 transition-all duration-200">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <a href="#" className="hover:translate-x-1 inline-block transition-transform duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section with enhanced design */}
        <div className="mt-12 bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-xl p-8 shadow-lg overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-emerald-600/10 backdrop-blur-sm"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
              <div className="bg-white p-3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6 transform transition hover:rotate-3 hover:scale-105 duration-300">
                <img 
                  src="/images/logo_aroqay-removebg-preview.png" 
                  alt="Parapharma Logo" 
                  className="h-10"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-center md:text-left">RESTEZ CONNECTÉ</h3>
                <p className="text-emerald-200 text-sm mt-1">Suivez-nous sur les réseaux sociaux</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white text-emerald-700 p-3 rounded-full hover:bg-emerald-100 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-md"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a 
                href="#" 
                className="bg-white text-emerald-700 p-3 rounded-full hover:bg-emerald-100 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-md"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="#" 
                className="bg-white text-emerald-700 p-3 rounded-full hover:bg-emerald-100 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-md"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-emerald-700/30 text-center text-emerald-300/80 text-sm">
          <p>© {new Date().getFullYear()} Parapharma.ma - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;