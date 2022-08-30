import React from 'react'
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import JS from '../assets/javascript.png';
import GIT from '../assets/git.png';
import NODE from '../assets/node.png';
import REACT from '../assets/react.png';
import MySql from '../assets/mysql.png';
import Expressjs from '../assets/express01.png';

const Skills = () => {
    return (
        <div name="skills" className='w-full h-screen bg-gradient-to-b from-[#FEFBF3] via-[#F8F0DF] to-[#F1F1F1]  text-lg text-slate-800'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  '>
                <div>
                    <p className=' text-5xl font-bold inline border-b-4 border-[#4d4d4d] text-[#678983]'>Skills</p>
                    <p className='py-4 text-xl'>Tecnologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center p-8 '>

                    <div className='shadow-lg opacity-100 shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src={HTML} alt="HTML icon" />
                        <p className='my-2'>HTML</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src={CSS} alt="CSS icon" />
                        <p className='my-2'>CSS</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src={JS} alt="JS icon" />
                        <p className='my-2'>JavaScript</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src={REACT} alt="REACT icon" />
                        <p className='my-2'>React</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src={GIT} alt="GIT icon" />
                        <p className='my-2'>Git</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src={NODE} alt="NODE icon" />
                        <p className='my-2'>NodeJs</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src={Expressjs} alt="Expressjs icon" />
                        <p className='my-2'>Express js</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src={MySql} alt="MySql icon" />
                        <p className='my-2'>MySql</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills