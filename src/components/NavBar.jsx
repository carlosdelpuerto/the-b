/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Bagre from '../assets/bagre-icon.png'


const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between  items-center  w-full h-20 px-6 bg-emerald-500 fixed">
        <label for=''>
          <a href="inicio"> <img src={Bagre} alt="icon" className="h-[80px] w-[100%] rounded-[50px] p-0" /></a>
        </label>
      
        <ul className="hidden space-x-10 text-white md:flex flex-wrap justify-center items-center">
          
          <li className="bg-[#ffffff] border flex justify-center hover:bg-transparent hover:border-[#ffffff] text-black hover:text-white duration-300 ease-in-out rounded-[25px] px-[45px] py-[10px] w-[60px]">
            <a href='inicio' className="text-center">Inicio</a>
          </li>
          <li className="bg-[#ffffff] border flex justify-center hover:bg-transparent hover:border-[#ffffff] text-black hover:text-white duration-300 ease-in-out rounded-[25px] px-[65px] py-[10px] w-[60px]">
            <a href="nosotros" className="whitespace-nowrap">Sobre nosotros</a>
          </li>
          <li className="bg-[#ffffff] border flex justify-center hover:bg-transparent hover:border-[#ffffff] text-black hover:text-white duration-300 ease-in-out rounded-[25px] px-[45px] py-[10px] w-[60px]">
            <a href="servicios">Servicios</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
