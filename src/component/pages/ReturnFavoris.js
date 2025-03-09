import React, { useState } from 'react';
import Footer from './footer';
import SectionMain from './sectionMain';
import Navbar from './navBar';
import FavoritesPage from './favories';
import ScrollToTopButton from './scrollButton';
import BrandLogoMarquee from './marques';

const categories = [
  'Soins Visage',
  'Soins Corps',
  'Cheveux',
  'Hygiène & Santé',
  'Solaire & Après soleil',
  'Bébé & Maman',
  'Naturel & Bio',
  'Dentaire',
  'Accessoires santé',
  'Homme',
  'Beauté & Parfum',
  'Complements alimentaires'
];

// Product Card Component

const ReturnFavories = () => {
  return (
   <div>
      <ScrollToTopButton/>
      <Navbar/>
      <FavoritesPage/>
      <BrandLogoMarquee/>
      <Footer/>
    </div>
  );
};

export default ReturnFavories;