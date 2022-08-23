import courses from '../assets/courses.png'
import ecografo from '../assets/ecografo.png'
import inseminacion from '../assets/inseminacion.png'
import vacuna from '../assets/vacuna.ico'
import fertilizacion from '../assets/fertilizacion.png'
import apicultura from '../assets/apicultura.ico'

const Servicios = () => {

    const techs = [
        {
            id:1,
            src: courses,
            title: 'The-B Courses',
            style: 'shadow-green-500'
           
        },
        {
            id:2,
            src: ecografo,
            title: 'Ginecología',
            style: 'shadow-green-500'
        },
        {
            id:3,
            src: inseminacion,
            title: 'Andrologia/I.A.T.F',
            style: 'shadow-green-500'
         
        },
        {
            id:4,
            src: vacuna,
            title: 'Sanitación Animal',
            style: 'shadow-green-500'
        },
        {
            id:5,
            src: fertilizacion,
            title: 'F.I.V',
            style: 'shadow-green-500'
        },
        {
            id:6,
            src: apicultura,
            title: 'Apicultura',
            style: 'shadow-green-500'
        },
    ]



  return (
    <div name='servicios' className='text-white bg-gradient-to-r from-gray-500 to-gray-800  w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black '>
            <div>
                <p className='text-4xl text-green-400 flex justify-center font-bold p-0'>
                Nuestros Servicios </p>
                <p className='py-4 text-white flex justify-center text-lg'>Estas son algunas de las tecnologias y servicios que ofrecemos! </p>
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