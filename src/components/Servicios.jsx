import courses from '../assets/serviciosImg/courses.png'
import ecografo from '../assets/serviciosImg/ecografo.png'
import inseminacion from '../assets/serviciosImg/inseminacion.png'
import vacuna from '../assets/serviciosImg/vacuna.ico'
import fertilizacion from '../assets/serviciosImg/fertilizacion.png'
import nutri from '../assets/serviciosImg/nutri.png'

const Servicios = () => {

    const techs = [
        {
            id:1,
            src: courses,
            title: 'Diversos cursos',
            style: 'shadow-gray-500'
           
        },
        {
            id:2,
            src: ecografo,
            title: 'Ginecología',
            style: 'shadow-gray-500'
        },
        {
            id:3,
            src: inseminacion,
            title: 'Andrologia',
            style: 'shadow-gray-500'
         
        },
        {
            id:4,
            src: vacuna,
            title: 'Sanitación Animal',
            style: 'shadow-gray-500'
        },
        {
            id:5,
            src: fertilizacion,
            title: 'F.I.V',
            style: 'shadow-gray-500'
        },
        {
            id:6,
            src: nutri,
            title: 'Nutrición Animal',
            style: 'shadow-gray-500'
        },
    ]



  return (
    <div name='servicios' className='text-white bg-slate-200  w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black '>
            <div>
                <p className='text-4xl text-gray-800 flex justify-center font-bold p-0'>
                Nuestros Servicios </p>
                <p className='py-4 text-gray-500 flex justify-center text-lg'>Estas son algunas de las tecnologias y servicios que ofrecemos! </p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {techs.map(({id, src, title, style,})=>(
                    <div key={id}
                     className={` bg-white shadow-md hover:scale-110 duration-300 py-2 rounded-lg ${style}`}
                    >
                    
                    <img src={src} alt='' className='w-20 mx-auto' />
                    <p >{title}</p>
                    
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Servicios