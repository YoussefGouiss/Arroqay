import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mail, CheckCircle, Loader2 ,Home } from 'lucide-react';


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [animateWelcome, setAnimateWelcome] = useState(false);

  useEffect(() => {
    // Trigger welcome animation after component mounts
    setTimeout(() => setAnimateWelcome(true), 300);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Password reset request for:', email);
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
        <a href="/" className="absolute top-4 left-4 z-20 bg-white text-green-600 px-4 py-2 rounded-full shadow-md flex items-center hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
        <Home className="mr-2 h-5 w-5" />
        <span className="font-medium">Accueil</span>
      </a>
      {/* Left Side - Welcome Section with enhanced styling */}
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
            Mot de passe oublié ?
          </h2>
          <p className="mb-8 text-lg text-green-50 transition-all duration-500 delay-200">
            Ne vous inquiétez pas ! Cela arrive à tout le monde. Entrez simplement l'adresse e-mail associée à votre compte.
          </p>
          <a href="/login">
            <button 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium flex items-center hover:bg-green-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Retour à la connexion
            </button>
          </a>
        </div>
      </div>

      {/* Right Side - Forgot Password Form with enhanced styling */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white">
        <div className={`w-full max-w-md transition-all duration-1000 delay-300 transform ${animateWelcome ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Réinitialisation</h2>
                <div className="w-16 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600">Nous vous enverrons un lien pour réinitialiser votre mot de passe</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input with animation */}
                <div className={`relative transition-all duration-300 ${emailFocus ? 'transform scale-[1.02]' : ''}`}>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className={`h-5 w-5 transition-colors duration-300 ${emailFocus ? 'text-green-500' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      placeholder="Votre email"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                        emailFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                      }`}
                      required
                    />
                  </div>
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
                      TRAITEMENT EN COURS...
                    </>
                  ) : (
                    'ENVOYER LE LIEN'
                  )}
                </button>
              </form>

              {/* Login Link */}
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Vous vous souvenez de votre mot de passe ? 
                  <a 
                    href="/login" 
                    className="text-green-500 font-medium ml-2 hover:text-green-600 hover:underline transition-colors"
                  >
                    Connectez-vous
                  </a>
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-8 transition-all duration-500 transform scale-100">
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">E-mail envoyé !</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600 mb-6">
                Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>. 
                Veuillez vérifier votre boîte de réception et suivre les instructions.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                N'avez-vous pas reçu l'e-mail ? Vérifiez votre dossier spam ou
                <button 
                  onClick={handleSubmit}
                  className="text-green-500 hover:text-green-600 underline ml-1 transition-colors"
                >
                  essayez à nouveau
                </button>
              </p>
              <a href="/login">
                <button 
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 font-medium"
                >
                  Retour à la connexion
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;