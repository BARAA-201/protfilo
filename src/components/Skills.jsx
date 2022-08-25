import React from 'react'
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import JS from '../assets/javascript.png';
import GIT from '../assets/git.png';
import NODE from '../assets/node.png';
import REACT from '../assets/react.png';
import MySql from '../assets/mysql.png';
import Expressjs from '../assets/Expressjs.png';

const Skills = () => {
    return (
        <div name="skills" className='w-full h-screen bg-[#7D9D9C] text-lg text-[#F0EBE3]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  '>
                <div>
                    <p className=' text-5xl font-bold inline border-b-4 border-[#737373] text-slate-800'>Skills</p>
                    <p className='py-4'>Tecnologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <div className='shadow-lg shadow-[#003034] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-2'>HTML</p>
                    </div>

                    <div className='shadow-lg shadow-[#003034] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-2'>CSS</p>
                    </div>

                    <div className='shadow-lg shadow-[#003034] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={JS} alt="JS icon" />
                        <p className='my-2'>JavaScript</p>
                    </div>

                    <div className='shadow-lg shadow-[#003034] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={REACT} alt="REACT icon" />
                        <p className='my-2'>React</p>
                    </div>

                    <div className='shadow-lg shadow-[#003034] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={GIT} alt="GIT icon" />
                        <p className='my-2'>Git</p>
                    </div>

                    <div className='shadow-lg shadow-[#003034] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={NODE} alt="NODE icon" />
                        <p className='my-2'>NodeJs</p>
                    </div>

                    <div className='shadow-lg shadow-[#003034] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={Expressjs} alt="Expressjs icon" />
                        <p className='my-2'>Express js</p>
                    </div>

                    <div className='shadow-lg shadow-[#003034] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={MySql} alt="MySql icon" />
                        <p className='my-2'>MySql</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills