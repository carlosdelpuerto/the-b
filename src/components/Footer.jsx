import React from "react";
import instagram from "../assets/instagram.ico";
const Footer = () => {
  return (
    <div className="bg-emerald-500 text-center font-bold absolute w-[100%] h-[100px]">

      <div className=""> 
      <label for="">
        <a className="h-[50px] w-[50px]"  href="https://www.instagram.com/thebcursos/" target="_blank" rel="noreferrer" >
          {" "}
          <img
            src={instagram}
            alt="icon"
            className="h-[50px] w-[50px] mx-auto mt-6 "
          />
        </a>
      </label>
      </div>

      <p>Tembiapo ojejapova mborayhupe ®2022 The-B</p>

    </div>
  );
};

export default Footer;
