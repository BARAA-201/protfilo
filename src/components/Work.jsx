import React from 'react'
// import Eazy from '../assets/EazyReach.jpg'
// import Tic from '../assets/tic-tac1.jpg'

function Work() {
    return (
        <div name='work' className='bg-gradient-to-t from-[#FEFBF3] via-[#F8F0DF] to-[#F1F1F1] w-full h-screen text-slate-800 z-0 '>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
                <div className='pb-8'>
                    <p className='text-5xl font-bold inline border-b-4 border-[#737373] py-2 text-[#678983]'>Work</p>
                    <p className='py-6 text-2xl'>Check out some of my work</p>
                </div>

                {/* countainer */}
                <div
                    className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4  '>

                    {/* Card */}
                    <div style={{ backgroundImage: `url(${"https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/EazyReach.jpg?alt=media&token=d6d8eaa3-ba73-444d-9deb-930d2dd0ad3f"})` }} className='shadow-lg shadow-[#003034] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 duration-500 '>
                            <span className='text-2xl font-[ArsenicaExtrabold] text-[#042D30] tracking-wider flex text-center '>
                                React and Node Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://easy-reach.herokuapp.com/home" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Visit Website</button>
                                </a>
                                <a href="/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/tic-tac1.jpg?alt=media&token=bd0e9e0b-867b-46e6-80ed-b19c0f806630'})` }} className='shadow-lg shadow-[#003034] group container rounded-md flex justify-center items-center mx-auto content-div '>

                        <div className='opacity-0 group-hover:opacity-100  duration-500'>
                            <span className='text-2xl font-[ArsenicaExtrabold] text-[#042D30] tracking-wider flex justify-center text-center'>
                                Tic-Tac game
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://baraa-201.github.io/tic-tac/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Visit Website</button>
                                </a>
                                <a href="https://github.com/BARAA-201/tic-tac" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Work