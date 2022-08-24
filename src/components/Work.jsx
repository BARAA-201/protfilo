import React from 'react'
import Eazy from '../assets/EazyReach.jpg'
import Tic from '../assets/tic-tac.jpg'

function Work() {
    return (
        <div name='work' className='bg-[#226469] w-full md:h-screen text-violet-50'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
                <div className='pb-8'>
                    <p className='text-5xl font-bold inline border-b-4 border-[#737373]'>Work</p>
                    <p className='py-4'>Check out some of my work</p>
                </div>

                {/* countainer */}
                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Card */}
                    <div style={{ backgroundImage: `url(${Eazy})` }} className='shadow-lg shadow-[#003034] group container rounded-md flex justify-center items-center mx-auto content-div '>

                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-[ArsenicaExtrabold] text-[#042D30] tracking-wider flex text-center'>
                                React and Node Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://easy-reach.herokuapp.com/home">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Visit Website</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Tic})` }} className='shadow-lg shadow-[#003034] group container rounded-md flex justify-center items-center mx-auto content-div '>

                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-[ArsenicaExtrabold] text-[#042D30] tracking-wider flex justify-center text-center'>
                                Tic-Tac game
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://baraa-201.github.io/tic-tac/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Visit Website</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* <div style={{ backgroundImage: `url(${Eazy})` }} className='shadow-lg shadow-[#003034] group container rounded-md flex justify-center items-center mx-auto content-div '>

                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-[ArsenicaExtrabold] text-[#042D30] tracking-wider flex text-center'>
                                React and Node Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Visit Website</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div> */}

                    {/* <div style={{ backgroundImage: `url(${Tic})` }} className='shadow-lg shadow-[#003034] group container rounded-md flex justify-center items-center mx-auto content-div '>

                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-[ArsenicaExtrabold] text-[#042D30] tracking-wider flex justify-center text-center'>
                                Tic-Tac game
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Visit Website</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-zinc-200 text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div> */}


                </div>

            </div>
        </div>
    )
}

export default Work