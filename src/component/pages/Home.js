import React from 'react';
import Footer from './footer';
import SectionMain from './sectionMain';
import Navbar from './navBar';
import ScrollToTopButton from './scrollButton';
import BrandLogoMarquee from './marques';

const ArrogayWebsite = () => {
  return (
   <div>
      <ScrollToTopButton/>
      <Navbar/>
      <SectionMain/>
      <BrandLogoMarquee/>
      <Footer/>
    </div>
  );
};

export default ArrogayWebsite;