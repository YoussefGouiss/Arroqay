import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Mail, Phone, ArrowRight, Loader2, Home } from 'lucide-react';

const AccountCreationForm = () => {
  const [formData, setFormData] = useState({
    civility: '',
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [offersChecked, setOffersChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animateWelcome, setAnimateWelcome] = useState(false);
  
  // Input focus states
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [telephoneFocus, setTelephoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  useEffect(() => {
    // Trigger welcome animation after component mounts
    setTimeout(() => setAnimateWelcome(true), 300);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Form submission logic
    if (termsChecked) {
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted', formData);
        setIsLoading(false);
      }, 1500);
    } else {
      alert('Veuillez accepter les conditions générales');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      <a href="/" className="absolute top-4 left-4 z-20 bg-white text-green-600 px-4 py-2 rounded-full shadow-md flex items-center hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
        <Home className="mr-2 h-5 w-5" />
        <span className="font-medium">Accueil</span>
      </a>
      
      {/* Left Side - Welcome Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-green-600 to-green-400 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-white bottom-10 right-10 transform scale-150"></div>
        </div>
        
        <div className={`max-w-md mx-auto relative z-10 transition-all duration-1000 transform ${animateWelcome ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8 transition-all duration-500 transform hover:scale-105">
            <img 
              src="/images/logo_aroqay-removebg-preview.png" 
              alt="Arroqay Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto object-contain filter drop-shadow-lg"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 transform hover:translate-x-2">
            Rejoignez-nous!
          </h2>
          <p className="mb-8 text-lg text-green-50 transition-all duration-500 delay-200">
            Créez votre compte pour profiter de tous nos services et offres
          </p>
          <button 
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium flex items-center hover:bg-green-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Se connecter
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white overflow-y-auto">
        <div className={`w-full max-w-md transition-all duration-1000 delay-300 transform ${animateWelcome ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Créez votre compte</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600">
              Vous avez déjà un compte ? 
              <a href="/login" className="text-green-500 ml-2 hover:underline">
                Connectez-vous
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Civility Selection */}
            <div className="mb-1">
              <label className="block text-gray-700 mb-2 font-medium">Civilité</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="civility"
                    value="M"
                    checked={formData.civility === 'M'}
                    onChange={handleInputChange}
                    className="form-radio h-4 w-4 text-green-500 transition duration-300 group-hover:ring-2 group-hover:ring-green-200"
                  />
                  <span className="ml-2 text-gray-600 group-hover:text-gray-900">M</span>
                </label>
                <label className="inline-flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="civility"
                    value="Mme"
                    checked={formData.civility === 'Mme'}
                    onChange={handleInputChange}
                    className="form-radio h-4 w-4 text-green-500 transition duration-300 group-hover:ring-2 group-hover:ring-green-200"
                  />
                  <span className="ml-2 text-gray-600 group-hover:text-gray-900">Mme</span>
                </label>
              </div>
            </div>

            {/* First Name */}
            <div className={`relative transition-all duration-300 ${firstNameFocus ? 'transform scale-[1.02]' : ''}`}>
              <label className="block text-gray-700 mb-2 font-medium">
                Prénom <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className={`h-5 w-5 transition-colors duration-300 ${firstNameFocus ? 'text-green-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onFocus={() => setFirstNameFocus(true)}
                  onBlur={() => setFirstNameFocus(false)}
                  placeholder="Votre prénom"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                    firstNameFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Last Name */}
            <div className={`relative transition-all duration-300 ${lastNameFocus ? 'transform scale-[1.02]' : ''}`}>
              <label className="block text-gray-700 mb-2 font-medium">
                Nom <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className={`h-5 w-5 transition-colors duration-300 ${lastNameFocus ? 'text-green-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onFocus={() => setLastNameFocus(true)}
                  onBlur={() => setLastNameFocus(false)}
                  placeholder="Votre nom"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                    lastNameFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className={`relative transition-all duration-300 ${emailFocus ? 'transform scale-[1.02]' : ''}`}>
              <label className="block text-gray-700 mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`h-5 w-5 transition-colors duration-300 ${emailFocus ? 'text-green-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="Votre adresse email"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                    emailFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Telephone */}
            <div className={`relative transition-all duration-300 ${telephoneFocus ? 'transform scale-[1.02]' : ''}`}>
              <label className="block text-gray-700 mb-2 font-medium">
                Telephone <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className={`h-5 w-5 transition-colors duration-300 ${telephoneFocus ? 'text-green-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  onFocus={() => setTelephoneFocus(true)}
                  onBlur={() => setTelephoneFocus(false)}
                  placeholder="Votre numéro de téléphone"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                    telephoneFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className={`relative transition-all duration-300 ${passwordFocus ? 'transform scale-[1.02]' : ''}`}>
              <label className="block text-gray-700 mb-2 font-medium">
                Mot de passe <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  placeholder="Votre mot de passe"
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                    passwordFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                  }`}
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Eye className={`h-5 w-5 transition-colors duration-300 ${passwordFocus ? 'text-green-500' : 'text-gray-400'}`} />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="my-4">
              <label className="inline-flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                  className="form-checkbox h-4 w-4 text-green-500 rounded transition duration-300 group-hover:ring-2 group-hover:ring-green-200"
                  required
                />
                <span className="ml-2 text-gray-700 group-hover:text-gray-900">
                  J'accepte les conditions générales et la politique de confidentialité
                </span>
              </label>
            </div>

            {/* Offers Checkbox */}
            <div className="mb-6">
              <label className="inline-flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={offersChecked}
                  onChange={() => setOffersChecked(!offersChecked)}
                  className="form-checkbox h-4 w-4 text-green-500 rounded transition duration-300 group-hover:ring-2 group-hover:ring-green-200"
                />
                <span className="ml-2 text-gray-700 group-hover:text-gray-900">
                  Recevoir les offres de nos partenaires
                </span>
              </label>
            </div>

            {/* Submit Button with loading state */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 active:translate-y-0 font-medium text-base disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  CRÉATION EN COURS...
                </>
              ) : (
                'CRÉER MON COMPTE'
              )}
            </button>
          </form>

          {/* Social Signup Options */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Ou inscrivez-vous avec</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
              </button>
              <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.451,14.117C22.451,9.184,18.613,5.15,13.953,5.15c-4.659,0-8.498,4.034-8.498,8.967 c0,1.569,0.391,3.037,1.073,4.318c-3.021,1.328-4.994,3.816-5.477,6.693h3.505c0.512-2.174,2.078-3.989,4.203-4.987 c1.395,1.226,3.214,1.956,5.193,1.956c1.979,0,3.798-0.73,5.193-1.956c2.126,0.998,3.691,2.813,4.203,4.987h3.506 c-0.482-2.878-2.455-5.365-5.477-6.693C22.059,17.154,22.451,15.687,22.451,14.117z M13.953,18.903 c-2.715,0-4.917-2.142-4.917-4.786s2.202-4.786,4.917-4.786s4.917,2.142,4.917,4.786S16.668,18.903,13.953,18.903z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreationForm;