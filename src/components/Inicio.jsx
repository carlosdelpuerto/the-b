import React from "react";

const Inicio = () => {
  return (
    <div 
    name='inicio'
    className="h-screen w-full md:flex-row text-white bg-gradient-to-r from-gray-500 to-gray-800">
      <p className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-4xl ">
        Somos una agrupación de estudiantes y profesionales egresados de la
        FCV-UNA.Encargados de brindarte informaciones, noticias, cursos
        teórico/práctico, oportunidades laborales, quiz para estudiantes,
        promociones y servicios. Nos especificamos fuertemente en el área de la
        <span className="text-emerald-400">Biotecnologia Reproductiva</span>
      </p>
    </div>
  );
};

export default Inicio;
