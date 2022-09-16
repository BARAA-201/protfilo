import React from 'react'
// // import CSS from '../assets/css.png';
// import HTML from '../assets/html.png';
// import JS from '../assets/javascript.png';
// import GIT from '../assets/git.png';
// import NODE from '../assets/node.png';
// import REACT from '../assets/react.png';
// import MySql from '../assets/mysql.png';
// import Expressjs from '../assets/express01.png';

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
                        <img className='w-20 mx-auto pt-4' src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/html.png?alt=media&token=8fc1cf61-a0d7-4f8f-af49-9c04e92ea0fb' alt="HTML icon" />
                        <p className='my-2'>HTML</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/css.png?alt=media&token=70d2e5ed-714b-40ec-92bb-6a63c0852f1b' alt="CSS icon" />
                        <p className='my-2'>CSS</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/javascript.png?alt=media&token=629e868a-b4b3-4733-9387-a6cf3e93eaaf' alt="JS icon" />
                        <p className='my-2'>JavaScript</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/react.png?alt=media&token=b80ba102-20f8-44a3-b120-7b0069ed1feb' alt="REACT icon" />
                        <p className='my-2'>React</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/git.png?alt=media&token=588776c9-4ffc-4c02-a66e-d29519cd7400' alt="GIT icon" />
                        <p className='my-2'>Git</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/node.png?alt=media&token=74fbe7cc-e4d8-4564-b9da-1dcf25589a83' alt="NODE icon" />
                        <p className='my-2'>NodeJs</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/express01.png?alt=media&token=4c22c014-b2b7-4721-974d-d4350863943a' alt="Expressjs icon" />
                        <p className='my-2'>Express js</p>
                    </div>

                    <div className='shadow-lg shadow-[#d1cdc2] hover:scale-110 duration-500 hover:bg-[#FCFFE7]'>
                        <img className='w-20 mx-auto pt-4' src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/mysql.png?alt=media&token=b429267b-fede-4be5-b5f9-4d978d96f96b' alt="MySql icon" />
                        <p className='my-2'>MySql</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills