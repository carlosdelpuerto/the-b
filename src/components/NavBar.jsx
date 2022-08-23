/* eslint-disable jsx-a11y/anchor-is-valid */

import Bagre from '../assets/bagre-icon.png'

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "nosotros",
    },
    {
      id: 3,
      link: "servicios",
    }
  ];
//el <Link to={link} smooth duration={500} es para redirigir a las secciones del nav!
  return (
    <div className="flex justify-end text-center items-center w-full h-[80px] px-4 bg-black fixed">

          <label for='' className='w-[100%] h-[80px] ml-[5px]'>
          <a href="inicio"> <img src={Bagre} alt="icon" className="w-[75px] h-[75px]"/></a>
          </label>

      <ul className="hidden md:flex">


         


        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link> 
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-lime-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-600 to-blue-500 text-lime-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
             <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;


   























{/* <label for=''>
          <a href="inicio"> <img src={Bagre} alt="icon" className="h-[80px] w-[100%] rounded-[50px] p-0" /></a>
        </label>
       */}
   


