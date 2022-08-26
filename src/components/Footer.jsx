import React from "react";
import instagram from "../assets/instagram.ico";


const Footer = () => {
  return (
    <div 
    name='contacto'
    className="bg-black text-center flex content-around font-bold absolute w-[100%] h-[150px]">

      <div className="flex justify-start"> 
      <label for="">
        <a className="h-[50px] w-[50px]"  href="https://www.instagram.com/thebcursos/" target="_blank" rel="noreferrer" >
          {" "}
          <img
            src={instagram}
            alt="icon"
            className="h-[50px] w-[50px] mt-6 ml-2"
          />
        </a>
        
        <div className="text-white flex flexjustify-start mt-3 ml-1">
        <p className="text-gray-500">EMAIL : <span className="text-white font-light"> thebcursos@gmail.com </span></p>
        </div>

        <div className="text-gray-700 text-ms flex justify-end font-light ml-1 mt-3">
        <p>Tembiapo ojejapova mborayhupe ®2022 The-B</p>
        </div>

      </label>
      </div>


    </div>
  );
};



export default Footer;
