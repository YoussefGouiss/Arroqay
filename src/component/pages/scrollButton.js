import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="animate-bounce">
            <button
              onClick={scrollToTop}
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none hover:scale-110 animate-pulse"
              style={{ transformOrigin: 'center center' }}
              aria-label="Scroll to top"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6"
                viewBox="0 0 24 24" 
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;