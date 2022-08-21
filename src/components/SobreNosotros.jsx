import React from 'react'
import Grupo from '../assets/Grupo.png'


const SobreNosotros = () => {
  return (
    <div name='nosotros'>
        <h1 className='mx-auto flex justify-center text-start w-full h-full text-4xl font-bold p-0 '>
       ¡Nos complace tenerte!
        </h1>
        <p className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>
        Bienvenidos a la página web de la asociación de profesionales y futuros aspirantes enfocados en la Reproducción Animal. The Bagres actualmente está constituida como una asociación del área de la medicina veterinaria, de ámbito nacional, que acoge a estudiantes y profesionales. Nuestro propósito de proveer y compartir informaciones valiosas para el estudiantado y docentes, está centrada en el estudio de la Reproducción y Genética Animal.
        </p>
        <h2 className='mx-auto text-center w-full h-full text-4xl font-bold p-0 '>
           Nuestra Historia
        </h2>
        <img 
                src={Grupo}
                alt='Ronda de tereré'
                className='h-[300px] w-[450px] mx-auto '
             />
             <p className='mx-auto text-sm text-center text-gray-500'>Ronda de tereré a la salida de un exámen 01/10/18</p>
             <p className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>
             "The Bagres", al principio surgió sólo como el nombre de un grupo de estudiantes de la Facultad de Ciencias Veterinarias donde, aparte de ser un grupo de estudio a su vez tambien fué convirtiendose en un lugar donde buscábamos apoyo constantemente y haciamos de la carrera algo menos frustrante y más llevadera. Con el pasar del tiempo el grupo fué consolidandose y cada uno está en busca de su especialización, lo que nos convierte en una familia con muchas variables abarcando muchos sectores de la producción animal en distintas especies.
             </p>
            <h2 className='mx-auto flex justify-center text-start w-full h-full text-4xl font-bold p-0 '>
                Actualidad
            </h2>
            <p className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>
                A inicios de Febrero del 2022 nace The-B-Courses, cuyo propósito es la realización de cursos del más alto nivel con profesionales altamente capacitados donde los participantes pondrán a prueba lo aprendido en la teoría realizando exámenes prácticos guíados por el encargado y staff.<br/>
                Tambien ofrecemos servicios de Sanitación Animal, Dieta Estratégica, Inseminación Artificial, Ecografia, Buenas Prácticas Pecuaria, Apicultura y Ovinocultura.   


            </p>




    </div>

  )
}

export default SobreNosotros