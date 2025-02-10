import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBasketShopping, faCaretDown, faCaretRight, faEnvelope, faHeart, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Inscrire from './inscrire';
export default function Home() {

  function showMenu() { // for hide and show the menu 
    const catégorieMenu = document.getElementById('catégorieMenu');

    if (catégorieMenu) {

      const isHidden = catégorieMenu.classList.contains('hidden');


      if (isHidden) {
        catégorieMenu.classList.remove('hidden');
        catégorieMenu.classList.add('block');
      } else {
        catégorieMenu.classList.add('hidden');
        catégorieMenu.classList.remove('block');
      } 
    }
  }

  return (
    <>
      <div className='bg-emerald-500 h-10 rounded-b-3xl relative' >
        <p className='text-white ml-10 pt-2'> lavrision gratuite sur Errachidiya à partir de 199dh </p>
      </div>
      <div className='fixed right-0 bottom-0  '>
        <div className='bg-emerald-500 w-12 h-12 rounded-full border-4 border-white text-center'><FontAwesomeIcon icon={faInstagram} className='text-white w-4/5 h-4/5 mt-1' /></div>
        <div className='bg-emerald-500 w-12 h-12 rounded-full border-4 border-white '><FontAwesomeIcon icon={faFacebookF} className='text-white w-4/5 h-4/5 mt-1 ml-1' /></div>
        <div className='bg-emerald-500 w-12 h-12 rounded-full border-4 border-white ' > <FontAwesomeIcon icon={faWhatsapp} className='text-white w-4/5 h-4/5 mt-1 ml-1' /></div>
      </div>
      
      <ul className=' grid grid-cols-6 text-xl  relative'>
        <li className='col-span-2'><img className='ml-24' src='/images/logo_aroqay-removebg-preview.png' /></li>
        <li className=' col-span-3'><input className='w-1/2 border-2 border-emerald-500 rounded-lg mt-5 h-10 
        focus:outline-none focus:ring-1 focus:ring-emerald-500 text-lg text-emerald-500 bg-slate-50
        ' /><FontAwesomeIcon icon={faMagnifyingGlass} className='text-emerald-500 ml-3 text-2xl' /></li>
        <div className='flex justify-end mr-10 text-3xl mt-5 '>
          <li className='px-16'><FontAwesomeIcon icon={faEnvelope} className='text-emerald-500 after:' /></li>
          <li className='px-10 before:absolute  before:h-11 before:w-0.5 before:ml-14 before:bg-gray-300'><FontAwesomeIcon icon={faBasketShopping} className='text-emerald-500' /></li>
          <li className="pr-28 "><FontAwesomeIcon icon={faHeart} className='text-emerald-500' /></li>
          <li className=" afaer:content-['login'] after:text-emerald-500 after:absolute after:ml-12 after:text-3xl ">< FontAwesomeIcon icon={faUser} className='text-emerald-500 ' /></li>
        </div>
      </ul>
      <hr />
      <ul className=' flex justify-between bg-emerald-100 py-3' >
        <li><button onClick={showMenu} className='border rounded-tr-full rounded-br-full bg-emerald-500 text-white p-4  focus:outline-none focus:ring-1 focus:ring-emerald-500 '><FontAwesomeIcon icon={faBars} /> Nos catégories <FontAwesomeIcon icon={faCaretDown} /></button></li>
        <ul className='grid grid-cols-5 mt-1'>
          <li className=' size-12 border rounded-full bg-emerald-500  text-center'><FontAwesomeIcon icon={faHouse} className='text-white size-8 mt-1' /></li>
          <li> <button className='p-2 px-6 mt-1 bg-emerald-500 text-white border rounded-xl  focus:outline-none focus:ring-1 focus:ring-emerald-500'>Promotion</button></li>
          <li> <button className='p-2 px-8 mt-1 bg-emerald-500 text-white border rounded-xl  focus:outline-none focus:ring-1 focus:ring-emerald-500'>Marques</button></li>
        </ul>
      </ul>
      <div>
        <ul id="catégorieMenu" className='h-max w-44 bg-emerald-50 text-center text-cyan-600 border rounded-br-2xl hidden' >
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
          <li>pomada <FontAwesomeIcon icon={faCaretRight} className='ml-4' /></li>
        </ul>
      </div>
     
    </>
  )
}