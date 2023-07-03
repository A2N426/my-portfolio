import tech1 from '../assets/html.png'
import tech2 from '../assets/css-3.png'
import tech3 from '../assets/bootstrap.png'
import tech4 from '../assets/tailwindcss.png'
import tech5 from '../assets/js.png'
import tech6 from '../assets/react.png'
import tech7 from '../assets/nodejs.png'
import tech8 from '../assets/icons8-express-js-500.png'
import tech9 from '../assets/icons8-mongodb-480.png'
import tech11 from '../assets/icons8-firebase-480.png'
import tech12 from '../assets/icons8-figma-480.png'
import tech13 from '../assets/icons8-github-512.png'

const Skills = () => {
    return (
        <div id='skills' className="bg-[#171717] lg:px-24 px-6 lg:pt-10">
            <h1 className="text-[#f3004b] text-center text-4xl font-semibold underline decoration-wavy pt-5">Skills</h1>
            <p className="text-white text-lg mt-1 font-semibold text-center">This are the technologies I have worked with</p>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-10 mt-10'>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500 flex flex-col items-center'>
                    <img className='w-24' src={tech1} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>HTML</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-blue-500 flex flex-col items-center'>
                    <img className='w-24' src={tech2} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>CSS</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-purple-500 flex flex-col items-center'>
                    <img className='w-24' src={tech3} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>Bootstrap</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-sky-500 flex flex-col items-center'>
                    <img className='w-24' src={tech4} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>Tailwind</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-yellow-500 flex flex-col items-center'>
                    <img className='w-24' src={tech5} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>Javascript</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-blue-500 flex flex-col items-center'>
                    <img className='w-24' src={tech6} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>ReactJs</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-lime-500 flex flex-col items-center'>
                    <img className='w-24' src={tech7} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>NodeJs</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-gray-500 flex flex-col items-center'>
                    <img className='w-24' src={tech8} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>ExpressJs</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-green-500 flex flex-col items-center'>
                    <img className='w-24' src={tech9} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>MongoDB</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-yellow-500 flex flex-col items-center'>
                    <img className='w-24' src={tech11} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>Firebase</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500 flex flex-col items-center'>
                    <img className='w-24' src={tech12} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>Figma</h2>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-gray-500 flex flex-col items-center'>
                    <img className='w-28' src={tech13} alt="" />
                    <h2 className='text-white text-center mt-2 font-semibold text-xl'>GitHub</h2>
                </div>
            </div>
        </div>
    );
};

export default Skills;