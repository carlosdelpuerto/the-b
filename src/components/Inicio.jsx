import React from 'react'


const Inicio = () => {
  return (
    <div
   
      className="h-screen w-full">
        <div className='max-w-screen-lg mx-auto flex flex-col place-items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <p className="text-7xl sm:text-2xl  text-gray-800">       
            Somos una agrupación de estudiantes y profesionales egresados de la <span className='text-red-900'>FCV-UNA</span>. Encargados de brindarte informaciones, noticias, cursos teórico/práctico, oportunidades laborales, quiz para estudiantes, promociones y servicios. 
             Nos especificamos fuertemente en el área de la <span className='text-emerald-500'>Biotecnologia Reproductiva</span>
        </p>
        <h2 className='text-gray-500'>
            7 años juntos
        </h2>

            </div>
        </div>
    </div>
  )
}

export default Inicio