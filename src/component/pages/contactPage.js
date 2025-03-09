import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle, Home, Loader2 } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animateWelcome, setAnimateWelcome] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  useEffect(() => {
    // Trigger welcome animation after component mounts
    setTimeout(() => setAnimateWelcome(true), 300);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
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
      
      {/* Left Side - Contact Information with enhanced styling */}
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
            Contactez-nous
          </h2>
          <p className="mb-8 text-lg text-green-50 transition-all duration-500 delay-200">
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous aider dans vos démarches.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-white p-2 rounded-lg mr-4 shadow-md">
                <Mail className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-green-50">contact@aroqay.com</p>
              </div>
            </div>
            
            <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-white p-2 rounded-lg mr-4 shadow-md">
                <Phone className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Téléphone</h3>
                <p className="text-green-50">+33 1 23 45 67 89</p>
              </div>
            </div>
            
            <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-white p-2 rounded-lg mr-4 shadow-md">
                <MapPin className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Adresse</h3>
                <p className="text-green-50">123 Rue de Paris<br />75001 Paris, France</p>
              </div>
            </div>
          </div>
          
          <a href="/" className="inline-block mt-8">
            <button 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium flex items-center hover:bg-green-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </button>
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form with enhanced styling */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white">
        <div className={`w-full max-w-md transition-all duration-1000 delay-300 transform ${animateWelcome ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Envoyez-nous un message</h2>
                <div className="w-16 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input with animation */}
                <div className={`relative transition-all duration-300 ${nameFocus ? 'transform scale-[1.02]' : ''}`}>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)}
                    placeholder="Votre nom"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                      nameFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                    }`}
                    required
                  />
                </div>

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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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

                {/* Phone Input with animation */}
                <div className={`relative transition-all duration-300 ${phoneFocus ? 'transform scale-[1.02]' : ''}`}>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                    Téléphone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className={`h-5 w-5 transition-colors duration-300 ${phoneFocus ? 'text-green-500' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setPhoneFocus(true)}
                      onBlur={() => setPhoneFocus(false)}
                      placeholder="Votre numéro de téléphone"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                        phoneFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject Input with animation */}
                <div className={`relative transition-all duration-300 ${subjectFocus ? 'transform scale-[1.02]' : ''}`}>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setSubjectFocus(true)}
                    onBlur={() => setSubjectFocus(false)}
                    placeholder="Sujet de votre message"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
                      subjectFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                    }`}
                    required
                  />
                </div>

                {/* Message Input with animation */}
                <div className={`relative transition-all duration-300 ${messageFocus ? 'transform scale-[1.02]' : ''}`}>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setMessageFocus(true)}
                    onBlur={() => setMessageFocus(false)}
                    placeholder="Votre message"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 min-h-32 transition-all duration-300 ${
                      messageFocus ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-300 bg-gray-50'
                    }`}
                    required
                    rows={5}
                  ></textarea>
                </div>

                {/* Submit Button with loading state */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 active:translate-y-0 font-medium text-base disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center mt-6"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ENVOI EN COURS...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      ENVOYER LE MESSAGE
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8 animate-fadeIn">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-green-100 animate-ping opacity-25"></div>
                  <CheckCircle size={80} className="text-green-500 relative" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Message envoyé !</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600 mb-8">
                Merci de nous avoir contacté. Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
              </p>
              <a href="/">
                <button 
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1"
                >
                  Retour à l'accueil
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;