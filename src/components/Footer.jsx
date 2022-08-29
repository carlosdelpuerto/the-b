import React from "react";
import instagram from "../assets/instagram.ico";

const Footer = () => {
  return (
    <div
      name="contacto"
      className="bg-black text-center flex flex-col content-center font-bold absolute w-[100%] h-[150px]"
    >
      {/* El tema del width 100% del instagram solucioné apartandole en un div y centrando en justify, ya que el content tiene el padre */}
      <div className="flex justify-center">
        <label for="">
          <a
            className=""
            href="https://www.instagram.com/thebcursos/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src={instagram}
              alt="icon"
              className="h-[50px] w-[50px] mt-6 ml-2"
            />
          </a>
        </label>
      </div>

      <p className="text-gray-500">
        EMAIL :{" "}
        <span className="text-white font-light"> thebcursos@gmail.com </span>
      </p>

      <div className="text-gray-700 text-ms  font-light mt-5">
        <p>Tembiapo ojejapova mborayhupe ®2022 The-B</p>
      </div>
    </div>
  );
};

export default Footer;
